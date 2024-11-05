import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useUserStore } from "@/stores/userStore";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Frown, Smile } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import EmployeeStats from "@/components/Employee/stats";
import { useAuthStore } from "@/stores/authUser";
export default function EmployeesPage() {
  const { evaluations, isFetchingEvaluations, fetchEvaluationsEmployee } =
    useUserStore();

  const { user } = useAuthStore();

  const location = useLocation();

  useEffect(() => {
    fetchEvaluationsEmployee(location.pathname.split("/")[2]);
  }, [fetchEvaluationsEmployee, location.pathname]);

  return (
    <>
      {!isFetchingEvaluations &&
      evaluations?.evaluations &&
      evaluations?.evaluations?.length > 0 ? (
        <Card>
          <CardHeader>
            <CardTitle>Evaluations</CardTitle>
            <p>
              <span className=" font-bold">Avg. Score: </span>
              <span>{evaluations.averageScore.toFixed(2)}</span>
            </p>
          </CardHeader>

          <CardContent className=" flex flex-col gap-4">
            <EmployeeStats />

            {evaluations?.evaluations.map((ev) => {
              return (
                <div
                  className=" p-4 flex items-center gap-4 border border-input rounded-md bg-background hover:bg-accent hover:text-accent-foreground
            
            "
                >
                  {ev.score >= 3 ? (
                    <Smile className=" text-green-500 " size={48} />
                  ) : (
                    <Frown className=" text-red-500 " size={48} />
                  )}

                  <div>
                    <p>
                      {" "}
                      <span className=" font-bold">Role Evaluator: </span>
                      {ev.evaluator.role}
                    </p>
                    <p>
                      {" "}
                      <span className=" font-bold">Evaluator: </span>
                      {ev.evaluator.username}
                    </p>
                    <p>
                      {" "}
                      <span className=" font-bold">Comment: </span>
                      {ev.comments}
                    </p>
                    <p>
                      {" "}
                      <span className=" font-bold">Score: </span>
                      {ev.score}
                    </p>
                  </div>

                  {user && user.role === "Admin" && (
                    <Link
                      to={`/edit/${ev._id}?comment=${ev.comments}&score=${
                        ev.score
                      }&employee=${location.pathname.split("/")[2]}`}
                      className={`${buttonVariants({
                        variant: "default",
                      })} ml-auto`}
                    >
                      Edit
                    </Link>
                  )}
                  {user && user.role === "Employee" && (
                    <Link
                      to={`/evaluation/${ev._id}/feedback`}
                      className={`${buttonVariants({
                        variant: "default",
                      })} ml-auto`}
                    >
                      Feedback
                    </Link>
                  )}
                </div>
              );
            })}
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardContent className=" py-6 text-center">
            {!isFetchingEvaluations ? "No evaluations yet!" : "Loading..."}
          </CardContent>
        </Card>
      )}
    </>
  );
}
