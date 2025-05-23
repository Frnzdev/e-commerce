import clsx from "clsx";

const Skeleton = ({ isLoading }: { isLoading?: boolean }) => {
  return (
    <div
      className={clsx(
        "flex flex-col shadow-lg h-96 bg-slate-800 p-5 text-gray-300",
        {
          "relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animete-[shimer_1.5s_infinite] before:bg-gradient-to-r ":
            isLoading,
        }
      )}
    >
      <div className="relative max-h-72 flex-1 bg-zinc-700" />
      <div className="flex justify-between font-bold my-3 bg-zinc-700" />
      <div className="h-3 w-8/12 rounded-lg bg-zinc-700" />
    </div>
  );
};

export default Skeleton;
