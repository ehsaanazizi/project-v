import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../services/authService";

export default function useUsers() {
  const { data, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: getUser,
    
  });

  const { users } = data || {};

  return { isLoading, users };
}
