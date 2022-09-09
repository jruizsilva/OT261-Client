import React from "react";
import { Route, Routes } from "react-router-dom";
import Backoffice from "../screen/backoffice";
import { RequireAuth } from "./RequireAuth";
import { RequireAdminRole } from "./RequireAdminRole";
import { BackofficeActivities } from "../screen/backoffice-activities";
import { BackofficeTestimonials } from "../screen/backoffice-testimonials/index,";

export const BackofficeRoutes = () => {
  return (
    <Routes>
      <Route
        path=""
        element={
          <RequireAuth>
            <Backoffice />
          </RequireAuth>
        }
      />
      <Route
        path="activities"
        element={
          <RequireAdminRole>
            <BackofficeActivities />
          </RequireAdminRole>
        }
      />
      <Route
        path="testimonials"
        element={
          <RequireAdminRole>
            <BackofficeTestimonials />
          </RequireAdminRole>
        }
      />
    </Routes>
  );
};
