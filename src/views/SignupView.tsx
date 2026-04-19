import { Link, useLocation, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { isAxiosError } from "axios";
import { toast } from "sonner";
import type { SignupForm } from "../types";
import ErrorMessage from "../components/ErrorMessage";
import api from "../config/axios";

export default function SignupView() {
  const location = useLocation();

  const navigate = useNavigate();

  const initialValues: SignupForm = {
    name: "",
    email: "",
    handle: location?.state?.handle || "",
    password: "",
    password_confirmation: "",
  };

  const {
    register,
    watch,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: initialValues });

  const password = watch("password");

  const handleSignup = async (formData: SignupForm) => {
    try {
      const { data } = await api.post("/auth/signup", formData);

      toast.success(data);

      reset();

      navigate("/auth/login");
    } catch (error) {
      if (isAxiosError(error) && error.response) {
        toast.error(error.response.data.error);
      }
    }
  };

  return (
    <>
      <h1 className="text-4xl text-white font-bold">Create your account</h1>

      <form
        onSubmit={handleSubmit(handleSignup)}
        className="bg-white px-5 py-20 rounded-lg space-y-10 mt-10"
      >
        <div className="grid grid-cols-1 space-y-3">
          <label htmlFor="name" className="text-2xl text-slate-500">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Enter your full name (e.g., John Doe)"
            className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
            {...register("name", {
              required: "Full name is required and cannot be blank.",
            })}
          />
          {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
        </div>
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
          <label htmlFor="handle" className="text-2xl text-slate-500">
            Handle
          </label>
          <input
            id="handle"
            type="text"
            placeholder="Choose your handle (e.g., johndoe)"
            className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
            {...register("handle", {
              required: "Handle is required and cannot be blank.",
            })}
          />
          {errors.handle && (
            <ErrorMessage>{errors.handle.message}</ErrorMessage>
          )}
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
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters long.",
              },
            })}
          />
          {errors.password && (
            <ErrorMessage>{errors.password.message}</ErrorMessage>
          )}
        </div>

        <div className="grid grid-cols-1 space-y-3">
          <label
            htmlFor="password_confirmation"
            className="text-2xl text-slate-500"
          >
            Confirm Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Confirm your password"
            className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
            {...register("password_confirmation", {
              required:
                "Password confirmation is required and cannot be blank.",
              validate: (value) =>
                value === password || "Passwords entered do not match.",
            })}
          />
          {errors.password_confirmation && (
            <ErrorMessage>{errors.password_confirmation.message}</ErrorMessage>
          )}
        </div>

        <input
          type="submit"
          className="bg-cyan-400 p-3 text-lg w-full uppercase text-slate-600 rounded-lg font-bold cursor-pointer"
          value="Sign up"
        />
      </form>

      <nav className="mt-10">
        <span className="text-center text-white text-lg inline">
          Already have an account?{" "}
          <Link
            className="text-blue-500 text-lg hover:text-blue-700"
            to="/auth/login"
          >
            Sign in
          </Link>
        </span>
      </nav>
    </>
  );
}
