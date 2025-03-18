import { useParams } from "react-router-dom";

export const EmployeeProfilePage = () => {
  const { id } = useParams<{ id: string }>();
  
  return <h1>Профиль сотрудника: {id}</h1>;
};
