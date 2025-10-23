import React from "react";
import HomePage from "../pages/HomePage/HomePage";
import TransitionComponent from "../components/Transition";
import AboutPage from "../pages/AboutPage/AboutPage";
import DevWorkPage from "../pages/DevWorkPage/DevWorkPage";
import DesignWorkPage from "../pages/DesignWorkPage/DesignWorkPage";
import LtifiArchiDesign from "../pages/LtifiArchiDesign/LtifiArchiDesign";
import { Route, Routes } from "react-router";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

const Router = () => {
  return (
    <Routes>
      <Route
        index
        element={
          <TransitionComponent>
            <HomePage />
          </TransitionComponent>
        }
      />
      <Route
        path="LtifiArchi-Design/about"
        element={
          <TransitionComponent>
            <AboutPage />
          </TransitionComponent>
        }
      />
      <Route
        path="LtifiArchi-Design/dev-work"
        element={
          <TransitionComponent>
            <DevWorkPage />
          </TransitionComponent>
        }
      />
      <Route
        path="LtifiArchi-Design/design-work"
        element={
          <TransitionComponent>
            <DesignWorkPage />
          </TransitionComponent>
        }
      />
        <Route
        path="LtifiArchi-Design/ltifiArchiDesign"
        element={
          <TransitionComponent>
            <LtifiArchiDesign/>
          </TransitionComponent>
        }
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Router;


