import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DataTable } from "@/components/data-table";
import { columns } from "@/components/AllUsers/columns";
import { useUserStore } from "@/stores/userStore";

export default function EmployeesPage() {
  const { managers } = useUserStore();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Managers</CardTitle>
      </CardHeader>
      <CardContent>
        {managers && <DataTable columns={columns} data={managers} />}
      </CardContent>
    </Card>
  );
}
