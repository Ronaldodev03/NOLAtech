import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AllStats from "../components/AllUsers/all-stats";
import { Card, CardContent } from "@/components/ui/card";

export default function DashboardPage() {
  return (
    <Tabs defaultValue="all">
      <TabsList className="mb-4">
        <TabsTrigger value="all">All</TabsTrigger>
        <TabsTrigger value="managers">Managers stats</TabsTrigger>
        <TabsTrigger value="employees">Employees stats</TabsTrigger>
      </TabsList>
      <TabsContent value="all">
        <AllStats />
      </TabsContent>
      <TabsContent value="employees">
        <Card>
          <CardContent className=" py-6 text-center">
            Not implemented yet!
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="managers">
        <Card>
          <CardContent className=" py-6 text-center">
            Not implemented yet!
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
