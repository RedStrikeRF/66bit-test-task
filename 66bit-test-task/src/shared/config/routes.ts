export const ROUTES = {
  EMPLOYEES: "/",
  EMPLOYEE_PROFILE: (id: number | string) => `/employee/${id}`,
  NOT_FOUND: "*",
};
