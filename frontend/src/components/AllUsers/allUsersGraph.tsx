import { useUserStore } from "@/stores/userStore";
import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function WorkLocationTrends() {
  const { adminCount, employeeCount, managerCount } = useUserStore();

  const data = [
    {
      name: "Admins",
      wfh: adminCount,
    },
    {
      name: "Managers",
      wfh: managerCount,
    },
    {
      name: "Employees",
      wfh: employeeCount,
    },
  ];
  return (
    <ResponsiveContainer height={350} width="100%">
      <BarChart
        data={data}
        className="[&_.recharts-tooltip-cursor]:fill-zinc-200 dark:[&_.recharts-tooltip-cursor]:fill-zinc-800"
      >
        <XAxis dataKey="name" stroke="#888888" fontSize={12} />
        <YAxis stroke="#888888" fontSize={12} />
        <Tooltip
          separator=": "
          formatter={(value: string) => {
            return [value, "Total Number"];
          }}
          labelClassName="font-bold"
          wrapperClassName="!text-sm dark:!bg-black rounded-md dark:!border-border"
        />
        <Legend
          iconType="circle"
          formatter={() => {
            return <div className="text-sm">Users</div>;
          }}
        />
        <Bar dataKey="wfh" stackId={1} fill="#3b82f6" />
      </BarChart>
    </ResponsiveContainer>
  );
}
