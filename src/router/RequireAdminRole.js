import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

export const RequireAdminRole = ({ children }) => {
  const { user, isAdmin } = useSelector((state) => state.user);
  const location = useLocation();

  if (!user) return <Navigate to='/' state={{ from: location }} />;
  if (!isAdmin) return <Navigate to='/' replace />;

  return children;
};
