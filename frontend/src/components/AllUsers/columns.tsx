import { Badge } from "@/components/ui/badge";
import { ColumnDef } from "@tanstack/react-table";

import { UserType } from "@/types/types";

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
