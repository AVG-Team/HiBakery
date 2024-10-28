import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import Bills from './bills';
import BillsDetail from './bills-detail';
import BillsUpdate from './bills-update';
import BillsDeleteDialog from './bills-delete-dialog';

const BillsRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<Bills />} />
    <Route path="new" element={<BillsUpdate />} />
    <Route path=":id">
      <Route index element={<BillsDetail />} />
      <Route path="edit" element={<BillsUpdate />} />
      <Route path="delete" element={<BillsDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default BillsRoutes;
