/**
 * Базовый путь API для сотрудников
 */
export const EMPLOYEE_API_BASE = "/Employee";

/**
 * Генерация пути для получения сотрудника по ID
 * @param {number} id - Уникальный идентификатор сотрудника
 * @returns {string} - Полный путь API для запроса сотрудника
 */
export const getEmployeeByIdPath = (id: number): string => `${EMPLOYEE_API_BASE}/${id}`;

/**
 * Таймаут запросов (в миллисекундах)
 */
export const API_TIMEOUT = 5000;
