import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { ClerkProvider, SignIn, SignUp, SignInButton, SignUpButton, Show, UserButton, UserAvatar } from "@clerk/nextjs";
import { useCartStore } from "@/src/store";

export default function Navbar() {
    // const useStore = useCartStore();

    // useStore.toggleCart();
    return (
        <header className="w-full  uppercase p-3 flex justify-center bg-[#fdf9ef]">
            <div className="container flex justify-between bg-[#064d4f] py-4 px-8 rounded-lg shadow-lg">
                <nav className="flex flex-col w-full justify-between items-center md:flex-row">
                    <div className="mb-4 items-center gap-2 md:mb-0 flex text-center">
                        <Link href='/' className="text-xl font-bold">Fake Store</Link>
                    </div>

                    <ul className="flex gap-5 items-center justify-center">
                        <div className="flex items-center gap-1 cursor-pointer relative">
                            <ShoppingCart size={20} />
                            <span className="bg-orange-700 text-[0.7rem] font-extralight rounded-full h-4 w-4 text-center text-white
                            flex items-center justify-center
                            absolute left-3 bottom-3">
                                2
                            </span>
                        </div>
                        <Show when="signed-in">
                            <UserButton />
                        </Show>
                        <Show when="signed-out">
                            <SignInButton mode="modal">
                                <button>
                                    Entrar
                                </button>
                            </SignInButton>

                            <SignUpButton>
                                <button className="border-green-50 border-1 text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                                    Cadastrar-se
                                </button>
                            </SignUpButton>
                        </Show>
                    </ul>
                </nav>
            </div>
        </header>
    )
}