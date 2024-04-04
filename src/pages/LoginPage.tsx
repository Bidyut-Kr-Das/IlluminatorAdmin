import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  return (
    <main className="bg-customPrimary h-screen flex justify-center items-center px-4">
      <section className="border border-white/50 px-8 py-10 rounded-lg">
        <LoginForm />
      </section>
    </main>
  );
};

export default LoginPage;
