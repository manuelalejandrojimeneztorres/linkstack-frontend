import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { isAxiosError } from "axios";
import { toast } from "sonner";
import type { SigninForm } from "../types";
import ErrorMessage from "../components/ErrorMessage";
import api from "../config/axios";

export default function SigninView() {
  const navigate = useNavigate();

  const initialValues: SigninForm = {
    email: "",
    password: "",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: initialValues });

  const handleSignin = async (formData: SigninForm) => {
    try {
      const { data } = await api.post("/auth/login", formData);
      localStorage.setItem("ACCESS_TOKEN", data);
      navigate("/admin");
    } catch (error) {
      if (isAxiosError(error) && error.response) {
        toast.error(error.response.data.error);
      }
    }
  };

  return (
    <>
      <h1 className="text-4xl text-white font-bold">
        Welcome back! Please sign in to continue.
      </h1>

      <form
        onSubmit={handleSubmit(handleSignin)}
        className="bg-white px-5 py-20 rounded-lg space-y-10 mt-10"
        noValidate
      >
        <div className="grid grid-cols-1 space-y-3">
          <label htmlFor="email" className="text-2xl text-slate-500">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email address (e.g., john.doe@example.com)"
            className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
            {...register("email", {
              required: "Email address is required and cannot be blank.",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Invalid email address.",
              },
            })}
          />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </div>
        <div className="grid grid-cols-1 space-y-3">
          <label htmlFor="password" className="text-2xl text-slate-500">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
            {...register("password", {
              required: "Password is required and cannot be blank.",
            })}
          />
          {errors.password && (
            <ErrorMessage>{errors.password.message}</ErrorMessage>
          )}
        </div>

        <input
          type="submit"
          className="bg-cyan-400 p-3 text-lg w-full uppercase text-slate-600 rounded-lg font-bold cursor-pointer"
          value="Sign in"
        />
      </form>

      <nav className="mt-10">
        <span className="text-center text-white text-lg inline">
          Don&#8217;t have an account?{" "}
          <Link
            className="text-blue-500 text-lg hover:text-blue-700"
            to="/auth/signup"
          >
            Sign up
          </Link>
        </span>
      </nav>
    </>
  );
}
