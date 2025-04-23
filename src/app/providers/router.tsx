import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { routeConfig } from "@/shared/config/route";
import { PageLoader } from "@/shared/ui/PageLoader/PageLoader";
import { PageTransition } from "@/shared/ui/PageTransition/PageTransition";

export const AppRouter = () => {
  return (
    <Suspense fallback={<PageLoader overlayColor={null} />}>
      <PageTransition>
        <Routes>
          {Object.values(routeConfig).map(({ path, element: Element }) => (
            <Route key={path} path={path} element={<Element />} />
          ))}
        </Routes>
      </PageTransition>
    </Suspense>
  );
};
