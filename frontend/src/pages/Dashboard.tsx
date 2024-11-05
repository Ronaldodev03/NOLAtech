import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AllStats from "../components/AllUsers/all-stats";
import { Card, CardContent } from "@/components/ui/card";
import { useAuthStore } from "@/stores/authUser";

export default function DashboardPage() {
  const { user } = useAuthStore();

  if (!user) {
    return <p> loading...</p>;
  }

  return (
    <Tabs defaultValue="all">
      <TabsList className="mb-4">
        <TabsTrigger value="all">All</TabsTrigger>

        {user && (user.role === "Manager" || user.role === "Admin") && (
          <TabsTrigger value="managers">Managers stats</TabsTrigger>
        )}

        {user && (user.role === "Employee" || user.role === "Admin") && (
          <TabsTrigger value="employees">Employees stats</TabsTrigger>
        )}
      </TabsList>

      <TabsContent value="all">
        <AllStats />
      </TabsContent>

      {user && (user.role === "Manager" || user.role === "Admin") && (
        <TabsContent value="managers">
          <Card>
            <CardContent className=" py-6 text-center">
              Not implemented yet!
            </CardContent>
          </Card>
        </TabsContent>
      )}

      {user && (user.role === "Employee" || user.role === "Admin") && (
        <TabsContent value="employees">
          <Card>
            <CardContent className=" py-6 text-center">
              Not implemented yet!
            </CardContent>
          </Card>
        </TabsContent>
      )}
    </Tabs>
  );
}
