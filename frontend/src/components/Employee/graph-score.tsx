import { useUserStore } from "@/stores/userStore";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function SupportTicketsResolved() {
  const { evaluations } = useUserStore();

  console.log(evaluations);

  const data = evaluations?.evaluations.map((ev) => {
    return {
      name: ev.evaluator.username,
      score: ev.score,
    };
  });

  return (
    <ResponsiveContainer height={350} width="100%">
      <LineChart data={data}>
        <Tooltip
          labelClassName="font-bold"
          wrapperClassName="!text-sm dark:!bg-black rounded-md dark:!border-border"
        />
        <XAxis fontSize={12} dataKey="name" stroke="#888888" />
        <YAxis fontSize={12} stroke="#888888" />
        <CartesianGrid strokeDasharray="3" />
        <Line type="monotone" dataKey="score" stroke="#3b82f6" />
        <Legend
          formatter={(value) => <span className="capitalize">{value}</span>}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
