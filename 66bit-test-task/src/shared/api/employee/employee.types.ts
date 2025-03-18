/**
 * Интерфейс, описывающий данные сотрудника
 */
export interface Employee {
  id: number;                // Уникальный идентификатор сотрудника
  name: string;              // Полное имя сотрудника
  photo: string;             // Ссылка на фото сотрудника
  phone: string;             // Номер телефона
  gender: "Мужчина" | "Женщина"; // Пол сотрудника
  position: string;          // Должность
  stack: string[];           // Технологический стек
  birthdate: string;         // Дата рождения (в формате "DD месяц YYYY")
  dateOfEmployment: string;  // Дата трудоустройства (в формате "DD месяц YYYY")
}
