"use client";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import { useForm } from "react-hook-form";
import { UserFormData, userSchema } from "@/schemas/login";
import { zodResolver } from "@hookform/resolvers/zod";
import { Field, FieldGroup } from "../../ui/field";
import FormField from "../../form/FormField";
import { Button } from "../../ui/button";
import { useRouter } from "next/navigation";
import { LayoutDashboard } from "lucide-react";

function Login() {
  const router = useRouter();
  const form = useForm<UserFormData>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleLogin = () => {
    localStorage.setItem("loggedIn", "true");
    router.push("/dashboard");
  };

  const onSubmit = (data: UserFormData) => {
    // create formData here and send to backend
    console.log("user authenticated:", data);
    handleLogin();
  };

  return (
    <div className={cn("flex flex-col gap-6 max-w-md m-auto w-[80%]")}>
      <Card>
        <CardHeader>
          <CardTitle className="text-fluid-2xl text-blue-700 flex gap-2 items-center">
            <LayoutDashboard
              aria-hidden="true"
              className="bg-blue-700 text-white p-0.5 rounded"
            />
            Lead DashBoard
          </CardTitle>
          <CardDescription>Login to your account</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FieldGroup>
              <FormField<UserFormData>
                name="email"
                control={form.control}
                label="email"
                placeholder="myemail@gmail.com"
                type="text"
              />
              <FormField<UserFormData>
                name="password"
                control={form.control}
                label="password"
                placeholder="admin123"
                type="password"
              />
              <Field>
                <Button
                  type="submit"
                  className="bg-blue-700 hover:bg-blue-900 focus:ring-ring cursor-pointer"
                >
                  Sign In
                </Button>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default Login;
