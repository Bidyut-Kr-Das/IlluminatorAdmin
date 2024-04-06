import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { setAccessToken } from "../functions/localStorageAccess.ts";
import usePostReq from "../hooks/usePostReq.ts";
import { Input } from "./ui/input.tsx";
import { Button } from "./ui/button.tsx";

type FormType = {
  email: string;
  password: string;
};

const LoginForm = () => {
  //states
  const [form, setForm] = useState<FormType>({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { response, loading, postData } = usePostReq();

  const navigate = useNavigate();

  // as response is a state that is returned from the usePostReq so we can only access the response after the state is updated.
  useEffect(() => {
    if (response.data && "data" in response.data) {
      const responseData = response.data as { data: { accessToken: string } };
      // console.log(responseData.data);
      setAccessToken(responseData.data.accessToken);

      navigate(`/dashboard`);
    }
  }, [response]);

  const loginRequest = async () => {
    await postData<FormType>(`/login`, { ...form });
    setForm({ email: "", password: "" });
  };

  const handleSubmit = () => {
    if (
      form.email.trim().length === 0 ||
      form.password.trim().length === 0 ||
      form.email.indexOf(`@`) === -1
    )
      return;
    toast.promise(loginRequest, {
      loading: `Loggin in...`,
      success: () => {
        // console.log(data);

        return `Logged in successfully`;
      },
      error: (err: any) => {
        // console.log(err.response.data.message);
        console.log(err);
        return err.message;
      }
    });
  };
  return (
    <div className="select-none font-poppins flex flex-col gap-1">
      <h2 className=" w-full text-[#46B1C9]  font-black font-kobe text-3xl drop-shadow-md">
        <span className="">Welcome</span> back
      </h2>
      <h6 className="tracking-wider text-white/70">
        Continue with your journey
      </h6>
      <form
        onSubmit={e => {
          e.preventDefault();
          handleSubmit();
        }}
        className="flex flex-col gap-8 mt-12"
        method="post"
      >
        <Input
          className="bg-transparent border-white/50 placeholder:text-white/50"
          placeholder="Email"
          type="text"
          name="string"
          id="email"
          value={form.email}
          onChange={e => {
            setForm({ ...form, email: e.target.value });
          }}
          autoComplete="off"
          required={true}
        />
        <Input
          className="bg-transparent border-white/50 placeholder:text-white/50"
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          name="string"
          id="password"
          value={form.password}
          onChange={e => {
            setForm({ ...form, password: e.target.value });
          }}
          onClick={() => setShowPassword(!showPassword)}
          autoComplete="off"
          required={true}
        />

        <span className="flex justify-end items-end w-full ">
          <label className="hidden sm:block sm:w-1/2"></label>

          <Button
            type="submit"
            className="w-52 text-md font-semibold"
            disabled={loading ? true : false}
          >
            Log in
          </Button>
        </span>
      </form>
    </div>
  );
};

export default LoginForm;
