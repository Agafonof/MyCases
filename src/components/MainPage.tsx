import React from "react";
import { Card } from "antd";
import { useUnit } from "effector-react";

import { Logo, MenuIcon, TelegramIcon } from "../ui/icons";
import { CardContent } from "../ui/organisms/CardContent";
import { FilterWindow } from "../ui/organisms/FilterWindow";

import { devideArray } from "../utils/devideArray";

import { clearFilter } from "../models/events";

import { getDataFx } from "../models/effects";

import { $data, $filters } from "../models/stores";

export const MainPage = (): JSX.Element => {
  const data = useUnit($data);
  const filters = useUnit($filters);

  const filteredData =
    filters.length > 0
      ? data.filter((unit) =>
          unit.Filters.some((filter) =>
            filters.find((currentFilter) => filter.Name === currentFilter)
          )
        )
      : data;

  const [isFilterOpen, setFilterOpen] = React.useState<boolean>(false);

  const [part1, part2] = devideArray(filteredData);

  React.useEffect(() => {
    getDataFx();
  }, []);

  return (
    <div className="body">
      <div className="navbar">
        <Logo />
        <div className="PagesAndMenu">
          <div className="Pages">
            <div className="pagesButton">Кейсы</div>
            <div className="pagesDisabledButton">компания</div>
            <div className="pagesDisabledButton">услуги</div>
            <div className="pagesDisabledButton">контакты</div>
          </div>
          <MenuIcon />
        </div>
      </div>

      <div className="casesPage">
        <div className={"CasePage_firRect__2fh08"}></div>
        <div className="casesAndFilters">
          <h1 className="casesTitle">Кейсы</h1>
          <div className="FilterContainer">
            {filters.length > 0 && (
              <>
                <div className="clearFilter" onClick={clearFilter}>
                  Очистить
                </div>
                <div className="clearFilterRect"></div>
              </>
            )}
            <div
              className={isFilterOpen ? "brnRect_open" : "brnRect"}
              onClick={() => setFilterOpen(!isFilterOpen)}
            />
            {!isFilterOpen && <div className="CasePage_line__15UnD"></div>}
            <div
              className="CasePage_filtersText__25ayu"
              style={{ color: isFilterOpen ? "#fb6542" : "#fff" }}
              onClick={() => setFilterOpen(!isFilterOpen)}
            >
              Фильтры
            </div>
          </div>
        </div>

        <div className="CasePage_filters">
          <div className="reactContainer">
            <div className="CasePage_secRect__1T1-7" />
          </div>
          {isFilterOpen && <FilterWindow />}
        </div>

        <div className="cardsField">
          <div className="columnLeft">
            {part1?.map((data) => (
              <Card
                key={data.Id}
                className="card"
                hoverable
                style={{
                  border: "none" + data.CaseColor,
                  backgroundColor: "#" + data.CaseColor,
                }}
              >
                <CardContent cardContent={data} />
              </Card>
            ))}
          </div>
          <div className="columnRight">
            {part2?.map((data) => (
              <Card
                key={data.Id}
                className="card"
                style={{
                  border: "none" + data.CaseColor,
                  backgroundColor: "#" + data.CaseColor,
                }}
                hoverable
              >
                <CardContent cardContent={data} />
              </Card>
            ))}
          </div>
        </div>

        <div className="Footer">
          <div className="FooterTitle">Стать клиентом или партнером!</div>
          <div className="FooterDevider" />
          <a className="FooterEmail" href="mailto:hello@it-cron.ru">
            hello@it-cron.ru
          </a>
        </div>

        <div className="ContactUsContainer">
          <div className="AddressContainer">
            <div className="City">Россия, Москва</div>
            <div className="Address">119330, ул. Мосфильмовская, 35</div>
            <div className="Phone">{"+7 (495) 006-13-57"}</div>
          </div>
          <div className="setAppeal">
            <div className="SetAppealContainer">
              <div className="SetAppealText">Оставить заявку</div>
            </div>
          </div>
          <div className="TelegramContainer">
            <div className="TelegramText">Связаться через</div>
            <div className="TelegramIconContainer">
              <a>
                <TelegramIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
