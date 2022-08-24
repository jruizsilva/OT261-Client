import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { RequireAuth } from './RequireAuth';
import Backoffice from '../screen/backoffice';

export const BackofficeRoutes = () => {
  return (
    <Routes>
      <Route
        path=''
        element={
          <RequireAuth>
            <Backoffice />
          </RequireAuth>
        }
      />
    </Routes>
  );
};
