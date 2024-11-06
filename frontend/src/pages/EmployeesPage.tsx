import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DataTable } from "@/components/data-table";
import { columns as baseColumns } from "@/components/Employee/columns";
import { useUserStore } from "@/stores/userStore";
import { useAuthStore } from "@/stores/authUser";

export default function EmployeesPage() {
  const { employees } = useUserStore();

  const { user } = useAuthStore();

  const filteredColumns =
    user?.role === "Employee"
      ? baseColumns.filter((column) => column.header !== "Evaluate")
      : baseColumns;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Employees</CardTitle>
      </CardHeader>
      <CardContent>
        {employees && <DataTable columns={filteredColumns} data={employees} />}
      </CardContent>
    </Card>
  );
}
