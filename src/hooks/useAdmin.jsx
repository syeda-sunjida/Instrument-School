// useAdmin.js
import { useEffect, useState } from "react";
import useAuth from "./useAuth";

const useAdmin = () => {
  const { user } = useAuth();
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAdminRole = () => {
      if (user && user.role === "admin") {
        setIsAdmin(true);
      }
      setIsLoading(false);
    };

    checkAdminRole();
  }, [user]);
  console.log(isAdmin)

  return [isAdmin, isLoading];
};

export default useAdmin;
