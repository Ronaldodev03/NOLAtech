import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useAuthStore } from "@/stores/authUser";
import { useUserStore } from "@/stores/userStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { z } from "zod";

const formSchema = z.object({
  employee: z.string().min(1, "Employee ID is required"),
  evaluator: z.string().min(1, "Evaluator ID is required"),
  score: z.string().refine((val) => !isNaN(Number(val)) && Number(val) <= 5, {
    message: "Score must be a number between 1 and 5",
  }),
  comments: z.string().min(1, "Required Field"),
});

export default function EvaluationForm() {
  const [searchParams] = useSearchParams();

  const location = useLocation();

  const navigate = useNavigate();

  const { user } = useAuthStore();

  const { isEditing, editEvaluation } = useUserStore();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      employee: location.pathname.split("/")[2],
      evaluator: user?._id,
      score: searchParams.get("score") || "",
      comments: searchParams.get("comment") || "",
    },
  });

  const { control, handleSubmit } = form;

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    const { employee, evaluator, ...dataToDB } = data;

    console.log({
      ...dataToDB,
      score: +data.score,
      evaluationId: location.pathname.split("/")[2],
    });

    await editEvaluation({
      ...dataToDB,
      score: +data.score,
      evaluationId: location.pathname.split("/")[2],
    });

    navigate(`/evaluations/${searchParams.get("employee")}`);
  };

  return (
    <Card className="w-full max-w-xl my-4 mx-auto">
      <CardHeader>
        <CardTitle className="text-center uppercase text-blue-500 text-4xl">
          Edition
        </CardTitle>
        <CardDescription className="text-center">
          Edit an evaluation for an employee
        </CardDescription>
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <FormField
              control={control}
              name="score"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Score</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="Score (1-5)" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="comments"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Comments</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Enter comments" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={form.formState.isSubmitting}>
              {!isEditing ? "Submit Evaluation" : "Submitting..."}
            </Button>
          </form>
        </Form>
      </CardContent>

      <CardFooter className="justify-center">
        <small>Thank you for your evaluation.</small>
      </CardFooter>
    </Card>
  );
}
