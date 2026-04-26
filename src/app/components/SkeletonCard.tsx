import clsx from "clsx";

export default function SkeletonCard({ isLoading }: { isLoading?: boolean }) {
    return (
        <div className={clsx("bg-white flex flex-col justify-start px-4 py-4 rounded-2xl shadow-lg animate-pulse opacity-70",
            {
                "relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animete-[shimmer_1.5s_infinite] before:bg-gradient-to-r ": isLoading,
            })}>
            <div className="w-full h-48 bg-gray-300 rounded-lg mb-4"></div>
            <div className="w-3/4 h-6 bg-gray-300 rounded mb-2"></div>
            <div className="w-1/2 h-6 bg-gray-300 rounded mb-4"></div>
            <div className="w-full h-10 bg-gray-300 rounded-lg"></div>
        </div>

    )
}