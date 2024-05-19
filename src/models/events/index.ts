import { createEvent } from "effector";

export const setFilter = createEvent<string>();
export const removeFilter = createEvent<string>();
export const clearFilter = createEvent<unknown>();
