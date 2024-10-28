import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import Discounts from './discounts';
import DiscountsDetail from './discounts-detail';
import DiscountsUpdate from './discounts-update';
import DiscountsDeleteDialog from './discounts-delete-dialog';

const DiscountsRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<Discounts />} />
    <Route path="new" element={<DiscountsUpdate />} />
    <Route path=":id">
      <Route index element={<DiscountsDetail />} />
      <Route path="edit" element={<DiscountsUpdate />} />
      <Route path="delete" element={<DiscountsDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default DiscountsRoutes;
