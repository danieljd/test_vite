import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { CasesComponent } from "./cases.component";

export const RouterIndex: FC = () => {
  return (
    <Routes>
  
      <Route path="/cases" element={<CasesComponent />} />

    </Routes>
  );
};
