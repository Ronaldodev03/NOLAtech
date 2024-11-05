import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LaptopIcon, UserIcon, UserRoundCog, UsersRound } from "lucide-react";
import { Link } from "react-router-dom";
import AllUsersGraph from "./allUsersGraph";
import { useUserStore } from "@/stores/userStore";
import PieGraph from "./pieGraph";

export default function AllStats() {
  const { managerCount, employeeCount, adminCount } = useUserStore();
  return (
    <>
      <div className="grid lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">All users</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-between items-center">
            <div className="flex gap-2">
              <UsersRound className=" text-blue-500" />
              <div className="text-5xl font-bold">
                {adminCount + managerCount + employeeCount}
              </div>
            </div>
            <div>
              <Button size="sm" asChild>
                <Link to="/all-users">View all</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Total managers</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-between items-center">
            <div className="flex gap-2">
              <UserRoundCog className=" text-blue-500" />
              <div className="text-5xl font-bold">{managerCount}</div>
            </div>
            <div>
              <Button size="sm" asChild>
                <Link to="/managers">View all</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Total employees</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-between items-center">
            <div className="flex gap-2">
              <UserIcon className=" text-blue-500" />
              <div className="text-5xl font-bold">{employeeCount}</div>
            </div>
            <div>
              <Button size="sm" asChild>
                <Link to="/employees">View all</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col sm:flex-row items-start gap-4 my-4">
        <Card className="flex-1 w-full">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <LaptopIcon />
              <span>Total Users</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="pl-0">
            <AllUsersGraph />
          </CardContent>
        </Card>

        <Card className=" flex-1 w-full ">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <LaptopIcon />
              <span>Organization Distribution</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="pl-0">
            <PieGraph />
          </CardContent>
        </Card>
      </div>
    </>
  );
}
