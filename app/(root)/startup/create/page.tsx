import { auth } from "@/auth";
import StartupForm from "@/components/StartupForm";
import { notFound } from "next/navigation";

export default async function CreateStartupPage() {
  const sesstion = await auth();

  if (!sesstion) {
    return notFound();
  }

  return (
    <>
      <section className="pink_container !min-h-[230px]">
        <h1 className="heading">Submit Your Startup</h1>
      </section>

      <StartupForm />
    </>
  );
}
