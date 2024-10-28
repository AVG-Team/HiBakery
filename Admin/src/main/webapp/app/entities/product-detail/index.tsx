import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import ProductDetail from './product-detail';
import ProductDetailDetail from './product-detail-detail';
import ProductDetailUpdate from './product-detail-update';
import ProductDetailDeleteDialog from './product-detail-delete-dialog';

const ProductDetailRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<ProductDetail />} />
    <Route path="new" element={<ProductDetailUpdate />} />
    <Route path=":id">
      <Route index element={<ProductDetailDetail />} />
      <Route path="edit" element={<ProductDetailUpdate />} />
      <Route path="delete" element={<ProductDetailDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default ProductDetailRoutes;
