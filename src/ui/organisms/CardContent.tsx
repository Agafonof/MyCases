import React from "react";

import { TDataUnit } from "../../types";

type TCardContentProps = {
  cardContent: TDataUnit;
};

export const CardContent = React.memo(
  ({ cardContent }: TCardContentProps): JSX.Element => {
    const { Id, Title, Filters, Image, FriendlyURL } = cardContent;

    const [isLoaded, setIsLoader] = React.useState<boolean>(false);
    const [height, setHeight] = React.useState<string>("auto");

    const getHeigh = React.useCallback(() => {
      const img = document.getElementById(Id + "img");
      const imgH = img?.offsetHeight;
      const desc = document.getElementById(Id + "desc");
      const descH = desc?.offsetHeight;
      console.log(imgH, descH);
      return imgH && descH
        ? ((imgH || 0) > (descH || 0) + 48 ? imgH : descH + 48) + "px"
        : "auto";
    }, [Id]);

    React.useEffect(() => {
      isLoaded && setHeight(getHeigh());
    }, [isLoaded, getHeigh]);

    return (
      <div
        className="CasePage_description"
        style={{ height: height }}
        onClick={() => window.location.replace(":" + FriendlyURL)}
      >
        <img
          id={Id + "img"}
          className="image"
          alt="example"
          src={Image}
          onLoad={() => setIsLoader(true)}
        />

        <div id={Id + "desc"} className="description">
          <div className="CasePage_title">{Title}</div>
          <div className="CasePage_caseFilters">
            <span>{Filters.map((filter) => filter.Name).join(", ")}</span>
          </div>
        </div>
      </div>
    );
  }
);
