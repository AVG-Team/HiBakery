import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import SettingSystem from './setting-system';
import SettingSystemDetail from './setting-system-detail';
import SettingSystemUpdate from './setting-system-update';
import SettingSystemDeleteDialog from './setting-system-delete-dialog';

const SettingSystemRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<SettingSystem />} />
    <Route path="new" element={<SettingSystemUpdate />} />
    <Route path=":id">
      <Route index element={<SettingSystemDetail />} />
      <Route path="edit" element={<SettingSystemUpdate />} />
      <Route path="delete" element={<SettingSystemDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default SettingSystemRoutes;
