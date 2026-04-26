import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
import prisma from '@/src/lib/prisma';
import { Webhook, WebhookRequiredHeaders } from 'svix';
import { IncomingHttpHeaders } from 'http';


const webhookSecret = process.env.CLERK_WEBHOOK_SECRET || '';

type EventType = 'user.created' | 'user.updated' | '*';
type Event = {
    data: EventDataType;
    object: 'event';
    type: EventType;
};

type EventDataType = {
    id: string;
    first_name: string;
    last_name: string;
    email_addresses: EmailAdressType[];
    primary_email_address_id: string;
    attributes: Record<string, string | number>;
};

type EmailAdressType = {
    id: string;
    email_address: string;
};
    

export async function handler(request: Request) {
  // 1. Obter o payload em texto (necessário para verificação)
  const payload = await request.json();
  const headersList = headers();
    const heads = {
        'svix-id': (await headersList).get('svix-id'),
        'svix-timestamp': (await headersList).get('svix-timestamp'),
        'svix-signature': (await headersList).get('svix-signature'),
    }

     const wh = new Webhook(webhookSecret);
     let evt: Event | null = null;

    try {
        evt = wh.verify(
            JSON.stringify(payload),
            heads as IncomingHttpHeaders & WebhookRequiredHeaders
        ) as Event;
    } catch (err) {
        console.error('Erro ao verificar webhook:', err);
        return NextResponse.json({ error: 'Invalid webhook' }, { status: 400 });
    }

    const eventType: EventType = evt.type;

    if (eventType === 'user.created' || evt.type === 'user.updated') {
        const {
            id,
            first_name,
            last_name,
            email_addresses,
            primary_email_address_id,
            ...attributes
        } = evt.data;
        
        await prisma.user.upsert({
            where: { externalId: id as string},
            create: {
                externalId: id as string,
                firstName: first_name,
                lastName: last_name,
                email: email_addresses.find(email => email.id === primary_email_address_id)?.email_address || '',
                attributes
            },
            update: {
                attributes
            }
        });
    }

    return NextResponse.json({}, { status: 200 } );
}
 
export const GET = handler;
export const POST = handler;
export const PUT = handler;
 
