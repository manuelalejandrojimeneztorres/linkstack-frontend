import { useQuery } from "@tanstack/react-query";
import { Navigate } from "react-router";
import { getUser } from "../api/LinkStackApi";
import LinkStack from "../components/LinkStack";

export default function ApplicationLayout() {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
    refetchOnWindowFocus: false,
    retry: 2,
  });

  if (isLoading) {
    return "Loading...";
  }

  if (isError) {
    return <Navigate to={"/auth/login"} />;
  }

  if (data) return <LinkStack data={data} />;
}
