import { Routes, Route, Navigate } from "react-router-dom";
import { EmployeeListPage } from "@pages/EmployeeListPage";
import { EmployeeProfilePage } from "@pages/EmployeeProfilePage";
import { NotFoundPage } from "@pages/NotFoundPage";
import { ROUTES } from "@shared/config/routes";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={ROUTES.EMPLOYEES} element={<EmployeeListPage />} />
      <Route path={ROUTES.EMPLOYEE_PROFILE(":id")} element={<EmployeeProfilePage />} />
      <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />} />
    </Routes>
  );
};
