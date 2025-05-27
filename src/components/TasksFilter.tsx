import React from "react";
import IFilter from "../models/IFilter";
import MySelect from "./UI/Select/MySelect";

interface Props {
  filter: IFilter;
  setFilter: (newFilter: IFilter) => void;
}

const TasksFilter = ({ filter, setFilter }: Props) => {
  return (
    <div>
      <MySelect
        value={filter.sortDate}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          setFilter({ ...filter, sortDate: e.target.value })
        }
        defaultValue={"сортировка по дате"}
        options={[
          { value: "ascOrder", name: "По возрастанию" },
          { value: "descOrder", name: "По убыванию" },
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
          { value: "low", name: "низкий" },
          { value: "medium", name: "средний" },
          { value: "high", name: "высокий" },
        ]}
      />
    </div>
  );
};

export default TasksFilter;
