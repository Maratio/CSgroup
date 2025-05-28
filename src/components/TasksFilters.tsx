import React from "react";
import IFilter from "../models/IFilter";
import MySelect from "./UI/Select/MySelect";

interface Props {
  filter: IFilter;
  setFilter: (newFilter: IFilter) => void;
}

const TasksFilters = ({ filter, setFilter }: Props) => {
  return (
    <div>
      <MySelect
        value={filter.sortDate}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          setFilter({ ...filter, sortDate: e.target.value })
        }
        defaultValue={"сортировка по дате"}
        options={[
          { value: "ascOrder", name: "Дата: по возрастанию" },
          { value: "descOrder", name: "Дата: по убыванию" },
        ]}
      />
      <MySelect
        value={filter.searchPriority}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          setFilter({ ...filter, searchPriority: e.target.value })
        }
        defaultValue={"выбор приоритета"}
        options={[
          { value: "notPriority", name: "нет приоритета" },
          { value: "низкий", name: "низкий приоритет" },
          { value: "средний", name: "средний приоритет" },
          { value: "высокий", name: "высокий приоритет" },
        ]}
      />
    </div>
  );
};

export default TasksFilters;
