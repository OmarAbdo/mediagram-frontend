import { useContext, createContext } from "react";
import type { User } from "firebase/auth";

// then i need to create an interface for the concrete context I'm about to create
interface AuthContextType {
  user: User | null;
  loading: boolean;
}

// now that I have imported CreateContext() and created a type for it, I can instantiate it
// when you use the context api, you're explicitly creating a provider (of a context)
export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

// the concert auth context instance is created via the CreateContext,
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
