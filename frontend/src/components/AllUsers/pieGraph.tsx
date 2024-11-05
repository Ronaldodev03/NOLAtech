import { useUserStore } from "@/stores/userStore";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

export default function PieGraph() {
  const { adminCount, employeeCount, managerCount } = useUserStore();
  const data = [
    {
      name: "Admins",
      value: adminCount,
      color: "#84cc16",
    },
    {
      name: "Managers",
      value: managerCount,
      color: "#3b82f6",
    },
    {
      name: "Emplyees",
      value: employeeCount,
      color: "#f97316",
    },
  ];
  return (
    <ResponsiveContainer width="100%" height={150}>
      <PieChart>
        <Tooltip
          labelClassName="font-bold"
          wrapperClassName="dark:[&_.recharts-tooltip-item]:!text-white [&_.recharts-tooltip-item]:!text-black !text-sm dark:!bg-black rounded-md dark:!border-border"
        />
        <Pie data={data} dataKey="value" nameKey="name">
          {data.map((dataItem, i) => (
            <Cell key={i} fill={dataItem.color} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}
