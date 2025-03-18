import { FC } from "react";
// import { EmployeeCardList } from "@entities/employee";
// import { Filters } from "@features/filters";
// import { SearchInput } from "@features/search";
// import { SelectedFilters } from "@features/selectedFilters";

import "./EmployeeList.scss";

export const EmployeeList: FC = () => {
  return (
    <section className="employeeList">
      <h1 className="employeeList__title">Список сотрудников</h1>
      {/* <Filters /> */}
      {/* <SearchInput /> */}
      {/* <SelectedFilters /> */}
      {/* <EmployeeCardList /> */}
    </section>
  );
};
