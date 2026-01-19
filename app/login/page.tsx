import Login from "@/components/pages/login/Login";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center  font-sans bg-red dark:bg-black ">
      <main className="flex min-h-screen w-full flex-col items-center justify-between py-32 bg-(image:--gradient-bg)  sm:items-start ">
        <Login />
      </main>
    </div>
  );
}
