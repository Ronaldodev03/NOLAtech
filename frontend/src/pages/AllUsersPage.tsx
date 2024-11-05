import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DataTable } from "@/components/data-table";
import { columns } from "@/components/AllUsers/columns";
import { useUserStore } from "@/stores/userStore";

export default function EmployeesPage() {
  const { users } = useUserStore();

  return (
    <Card>
      <CardHeader>
        <CardTitle>All Users</CardTitle>
      </CardHeader>
      <CardContent>
        {users && <DataTable columns={columns} data={users} />}
      </CardContent>
    </Card>
  );
}
