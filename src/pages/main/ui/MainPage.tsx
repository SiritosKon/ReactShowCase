import { useNavigate } from "react-router-dom";
import { AppRoutes } from "@/shared/config/route";
import { Button } from "@/shared/ui/Button/Button";
import { Logo } from "./Logo/Logo";

export const MainPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="text-center space-y-8">
        <div className="opacity-0 animate-fade-in-up">
          <Logo size="lg" className="mb-8" />
        </div>
        <h1
          className="opacity-0 text-2xl font-light text-gray-600 dark:text-gray-300 animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          Welcome to the React Showcase
        </h1>
        <p
          className="opacity-0 text-gray-500 dark:text-gray-400 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          Explore some React use cases
        </p>
        <div
          className="opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          <Button size="lg" onClick={() => navigate("/list")}>
            View Examples
          </Button>
        </div>
      </div>
    </div>
  );
};

MainPage.routeName = AppRoutes.MAIN;
