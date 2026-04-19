import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import slugify from "react-slugify";
import ErrorMessage from "./ErrorMessage";
import { searchUserByHandle } from "../api/LinkStackApi";
import { Link } from "react-router";

export default function SearchForm() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { handle: "" } });

  const mutation = useMutation({
    mutationFn: searchUserByHandle,
  });

  const handle = watch("handle");

  const handleHandleSearch = () => {
    const slug = slugify(handle);
    mutation.mutate(slug);
  };

  return (
    <form onSubmit={handleSubmit(handleHandleSearch)} className="space-y-5">
      <div className="relative flex items-center  bg-white  px-2">
        <label htmlFor="handle">linkstack.com/</label>
        <input
          id="handle"
          type="text"
          placeholder="Choose your handle (e.g., johndoe)"
          className="border-none bg-transparent p-2 focus:ring-0 flex-1"
          {...register("handle", {
            required: "Handle is required and cannot be blank.",
          })}
        />
      </div>
      {errors.handle && <ErrorMessage>{errors.handle.message}</ErrorMessage>}

      <div className="mt-10">
        {mutation.isPending && <p className="text-center">Loading...</p>}
        {mutation.error && (
          <p className="text-center text-red-600 font-black">
            {mutation.error.message}
          </p>
        )}
        {mutation.data && (
          <p className="text-center text-cyan-500 font-black">
            {mutation.data} —{" "}
            <Link to={"/auth/signup"} state={{ handle: slugify(handle) }}>
              Create your account →
            </Link>
          </p>
        )}
      </div>

      <input
        type="submit"
        className="bg-cyan-400 p-3 text-lg w-full uppercase text-slate-600 rounded-lg font-bold cursor-pointer"
        value="Claim your link"
      />
    </form>
  );
}
