import clsx from "clsx";
import PRListTable from "./PRListTable";

export default function PRListContainer() {
  return (
    <div
      className={clsx(
        "h-135 w-full",
        "flex items-center justify-center",
        "rounded-[1.8rem]",
        "bg-white",
      )}
    >
      <div
        className={clsx(
          "h-[97%] w-[99%]",
          "rounded-4xl",
          "p-15",
          "bg-daylily-linear-200/20",
        )}
      >
        <PRListTable />
      </div>
    </div>
  );
}
