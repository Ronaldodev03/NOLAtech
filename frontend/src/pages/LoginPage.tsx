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
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/password-input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";
import { useAuthStore } from "@/stores/authUser";

//zod schema
const formSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export default function LoginPage() {
  const { login, isLoggingIn } = useAuthStore();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { control, handleSubmit } = form;

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    await login(data);
  };

  return (
    <>
      <Card className="w-full max-w-xl my-4">
        <CardHeader>
          <CardTitle className=" text-center uppercase text-blue-500 text-4xl">
            Login
          </CardTitle>
          <CardDescription className=" text-center">
            Login to your Nolatech account
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
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="john@doe.com" {...field} />
                    </FormControl>
                    <FormDescription>
                      This is the email address you signed up to Nolatech with
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <PasswordInput placeholder="••••••••" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={form.formState.isSubmitting}>
                {isLoggingIn ? "Loading..." : "Login"}
              </Button>
            </form>
          </Form>
        </CardContent>

        <CardFooter className="justify-between">
          <small>Don&apos;t have an account?</small>
          <Button asChild variant="outline" size="sm">
            <Link to="/signup">Sign up</Link>
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
