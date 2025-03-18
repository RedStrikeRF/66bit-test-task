import { api } from "../axiosInstance";
import { Employee } from "./employee.types";
import { EMPLOYEE_API_BASE, getEmployeeByIdPath } from "./employee.const";

/**
 * Получает список сотрудников
 * @async
 * @function fetchEmployees
 * @returns {Promise<Employee[]>} Промис с массивом сотрудников
 * @throws {Error} Ошибка при загрузке списка сотрудников
 */
export const fetchEmployees = async (): Promise<Employee[]> => {
  try {
    const { data } = await api.get<Employee[]>(EMPLOYEE_API_BASE);
    return data;
  } catch (error) {
    console.error("Ошибка при загрузке сотрудников", error);
    throw new Error("Не удалось загрузить список сотрудников");
  }
};

/**
 * Получает данные конкретного сотрудника по ID
 * @async
 * @function fetchEmployeeById
 * @param {number} id Уникальный идентификатор сотрудника
 * @returns {Promise<Employee | null>} Промис с данными сотрудника или `null`, если сотрудник не найден
 * @throws {Error} Ошибка при загрузке данных сотрудника
 */
export const fetchEmployeeById = async (id: number): Promise<Employee | null> => {
  try {
    const { data } = await api.get<Employee>(getEmployeeByIdPath(id));
    return data;
  } catch (error) {
    console.error(`Ошибка при загрузке сотрудника с ID ${id}`, error);
    return null;
  }
};
