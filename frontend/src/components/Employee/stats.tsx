import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ListChecksIcon } from "lucide-react";
import GraphScore from "./graph-score";

export default function EmployeeStats() {
  return (
    <>
      <Card className="my-4">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <ListChecksIcon />
            <span>Scores | Graph</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="pl-0">
          <GraphScore />
        </CardContent>
      </Card>
    </>
  );
}
