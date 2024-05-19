import { createStore } from "effector";

import { getDataFx } from "../effects";

import { clearFilter, removeFilter, setFilter } from "../events";

import { TDataUnit } from "../../types";

export const $data = createStore<TDataUnit[]>([]).on(
  getDataFx.doneData,
  (_, { data }) => data.Data
);

export const $filters = createStore<string[]>([])
  .on(setFilter, (filters, payload) => [...filters, payload])
  .on(removeFilter, (filters, payload) => [
    ...filters.filter((unit) => unit !== payload),
  ])
  .reset(clearFilter);
