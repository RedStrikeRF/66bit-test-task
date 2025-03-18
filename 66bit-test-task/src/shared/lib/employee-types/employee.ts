export type Employee = {
  id: number;
  name: string;
  photo: string;
  phone: string;
  gender: "Мужчина" | "Женщина";
  position: string;
  stack: string[];
  birthdate: string;
  dateOfEmployment: string;
};

export type EmployeeList = Employee[];
