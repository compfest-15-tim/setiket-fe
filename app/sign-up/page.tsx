import { type Metadata } from "next";
import SignUpForm from "./sign-up-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Sign Up | SeTiket",
};

const SignUp = () => {
  return (
    <main className="flex flex-auto items-center justify-center bg-muted p-5 sm:p-10">
      <Card className="w-full max-w-sm">
        <CardHeader>
          {/* Title */}
          <CardTitle className="text-center text-3xl font-bold text-primary xl:text-4xl">
            Sign Up
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* Sign up form and sign in options */}
          <SignUpForm />
        </CardContent>
      </Card>
    </main>
  );
};

export default SignUp;
