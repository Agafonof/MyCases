import React from "react";
import { useUnit } from "effector-react";

import { INTL } from "../../const/intl";

import { removeFilter, setFilter } from "../../models/events";

import { $filters } from "../../models/stores";

export const FilterWindow = React.memo((): JSX.Element => {
  const filters = useUnit($filters);
  return (
    <div className="filtersWindow">
      <div className="filtersHeader">
        {Object.values(INTL.COLUMNS).map((title) => (
          <div>{title}</div>
        ))}
      </div>
      <div className="filtersBody">
        {Object.values(INTL.COLUMN_VALUES).map((column) => (
          <div className="filterColumn">
            {Object.values(column).map((title) => (
              <div
                className="columnValue"
                onClick={() =>
                  filters.some((el) => el === title)
                    ? removeFilter(title)
                    : setFilter(title)
                }
                style={{
                  color: filters.some((filter) => filter === title)
                    ? "#fb6542"
                    : "#fff",
                }}
              >
                {title}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
});
