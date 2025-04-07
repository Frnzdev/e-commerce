import Skeleton from "./components/SkeletonCard";

const Loading = () => {
  return (
    <div className="max-w-7xl mx-auto pt-8 px-8 xl:px-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 xl:gap-6">
        <Skeleton isLoading />
        <Skeleton isLoading />
        <Skeleton isLoading />
        <Skeleton isLoading />
        <Skeleton isLoading />
        <Skeleton isLoading />
        <Skeleton isLoading />
        <Skeleton isLoading />
      </div>
    </div>
  );
};

export default Loading;
