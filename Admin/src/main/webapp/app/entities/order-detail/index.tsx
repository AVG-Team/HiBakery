import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import OrderDetail from './order-detail';
import OrderDetailDetail from './order-detail-detail';
import OrderDetailUpdate from './order-detail-update';
import OrderDetailDeleteDialog from './order-detail-delete-dialog';

const OrderDetailRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<OrderDetail />} />
    <Route path="new" element={<OrderDetailUpdate />} />
    <Route path=":id">
      <Route index element={<OrderDetailDetail />} />
      <Route path="edit" element={<OrderDetailUpdate />} />
      <Route path="delete" element={<OrderDetailDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default OrderDetailRoutes;
