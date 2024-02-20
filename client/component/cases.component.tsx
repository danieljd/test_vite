import React, { FC, useEffect, useState } from "react";

import { get } from "../lib/request";

export const CasesComponent: FC = () => {
  const [cases, setCases] = useState<any>([]);

  useEffect(() => {
    get("/api/list").then((res) => {
      setCases(res);
    });
  }, []);

  return (
    <div>
      {cases?.map((i) => {
        return <p>12233{cases?.id}</p>;
      })}
    </div>
  );
};
