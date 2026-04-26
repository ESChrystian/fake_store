import SkeletonCard from "./components/SkeletonCard";
export default function Loading() {
    return (
         <div className="container mx-auto text-black pt-4 px-3">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 xl:gap-6">
                <SkeletonCard isLoading={true} />
                <SkeletonCard isLoading={true} />
                <SkeletonCard isLoading={true} />
                <SkeletonCard isLoading={true} />
                <SkeletonCard isLoading={true} />
                <SkeletonCard isLoading={true} />
                <SkeletonCard isLoading={true} />
                <SkeletonCard isLoading={true} />
              </div>
            </div>
    );
}