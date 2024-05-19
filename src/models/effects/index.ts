import { createEffect } from "effector";

import { getData } from "../requests";

export const getDataFx = createEffect({
  handler: getData,
});
