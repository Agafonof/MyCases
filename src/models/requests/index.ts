import axios from "axios";

import { TResponse } from "../../types";

export const getData = async (): Promise<TResponse> =>
  await axios.get("https://services.it-cron.ru/api/cases", {
    headers: { Accept: "text/plain", acceptLanguage: "ru" },
  });
