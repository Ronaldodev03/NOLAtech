import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DataTable } from "@/components/data-table";
import { columns } from "@/components/Employee/columns";
import { useUserStore } from "@/stores/userStore";

export default function EmployeesPage() {
  const { employees } = useUserStore();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Employees</CardTitle>
      </CardHeader>
      <CardContent>
        {employees && <DataTable columns={columns} data={employees} />}
      </CardContent>
    </Card>
  );
}
