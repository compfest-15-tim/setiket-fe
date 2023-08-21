import { type Metadata } from "next";
import SignInForm from "./sign-in-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Sign In | SeTiket",
};

const SignIn = () => {
  return (
    <main className="flex flex-auto items-center justify-center bg-muted p-5 sm:p-10">
      <Card className="w-full max-w-sm">
        <CardHeader>
          {/* Title */}
          <CardTitle className="text-center text-3xl font-bold text-primary xl:text-4xl">
            Sign In
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* Sign in form & sign up options */}
          <SignInForm />
        </CardContent>
      </Card>
    </main>
  );
};

export default SignIn;
