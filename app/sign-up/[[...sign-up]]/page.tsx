import { SignUp } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

export default function Page() {
  return (
    <div className="flex justify-center py-16">
      <SignUp
        appearance={{
          baseTheme: dark,
        }}
      />
    </div>
  );
}
