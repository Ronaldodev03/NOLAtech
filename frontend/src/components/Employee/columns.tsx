import { Badge } from "@/components/ui/badge";
import { ColumnDef } from "@tanstack/react-table";

import { UserType } from "@/types/types";
import { Link } from "react-router-dom";
import { FileSymlink, SquareArrowOutUpRight } from "lucide-react";

export const columns: ColumnDef<Omit<UserType, "password">>[] = [
  {
    accessorKey: "username",
    header: "Username",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "_id",
    header: "Evaluate",
    cell: ({ row }) => {
      const id: string = row.getValue("_id");
      return (
        <Link to={`/evaluate/${id}`}>
          <FileSymlink className="w-full md:w-auto text-blue-500 hover:scale-105 transition-all" />
        </Link>
      );
    },
  },
  {
    accessorKey: "_id",
    header: "Evaluations",
    cell: ({ row }) => {
      const id: string = row.getValue("_id");
      return (
        <Link to={`/evaluations/${id}`}>
          <SquareArrowOutUpRight className="w-full md:w-auto  text-blue-500 hover:scale-105 transition-all" />
        </Link>
      );
    },
  },

  {
    accessorKey: "role",
    header: "Role",
    cell: ({ row }) => {
      const role: string = row.getValue("role");
      return (
        <Badge
          className={
            role === "Admin"
              ? "bg-blue-500"
              : role === "Manager"
              ? "bg-green-500"
              : "bg-gray-500"
          }
        >
          {role}
        </Badge>
      );
    },
  },
];
