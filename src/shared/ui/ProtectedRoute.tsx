import type { ReactNode } from "react";
import { Navigate } from "react-router";
import { useMyCustomAuthHook } from "../../app/context/auth";

interface ProtectedRouteProps {
  children: ReactNode;
  redirectTo?: string;
}

export const ProtectedRoute = ({
  children,
  redirectTo = "/login",
}: ProtectedRouteProps) => {
  const { user, loading } = useMyCustomAuthHook();
  if (loading) {
    return <div> Loading </div>;
  }
  if (!user) {
    return <Navigate to={redirectTo} replace />;
  }
  return <>{children}</>;
};
