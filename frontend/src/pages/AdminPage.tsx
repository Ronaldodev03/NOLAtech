import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DataTable } from "@/components/data-table";
import { columns } from "@/components/AllUsers/columns";
import { useUserStore } from "@/stores/userStore";

export default function AdminPage() {
  const { admins } = useUserStore();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Admins</CardTitle>
      </CardHeader>
      <CardContent>
        {admins && <DataTable columns={columns} data={admins} />}
      </CardContent>
    </Card>
  );
}
