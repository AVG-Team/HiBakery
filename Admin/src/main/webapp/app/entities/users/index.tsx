import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import Users from './users';
import UsersDetail from './users-detail';
import UsersUpdate from './users-update';
import UsersDeleteDialog from './users-delete-dialog';

const UsersRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<Users />} />
    <Route path="new" element={<UsersUpdate />} />
    <Route path=":id">
      <Route index element={<UsersDetail />} />
      <Route path="edit" element={<UsersUpdate />} />
      <Route path="delete" element={<UsersDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default UsersRoutes;
