// shared/ui/GuestRoute.tsx
import type { ReactNode } from "react";
import { Navigate } from "react-router";
import { useMyCustomAuthHook } from "../../app/context/auth";

interface GuestRouteProps {
  children: ReactNode;
  redirectTo?: string;
}

export const GuestRoute = ({ children, redirectTo = "/" }: GuestRouteProps) => {
  const { user, loading } = useMyCustomAuthHook();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (user) {
    return <Navigate to={redirectTo} replace />;
  }

  return <>{children}</>;
};
