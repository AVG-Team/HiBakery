import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import Products from './products';
import ProductsDetail from './products-detail';
import ProductsUpdate from './products-update';
import ProductsDeleteDialog from './products-delete-dialog';

const ProductsRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<Products />} />
    <Route path="new" element={<ProductsUpdate />} />
    <Route path=":id">
      <Route index element={<ProductsDetail />} />
      <Route path="edit" element={<ProductsUpdate />} />
      <Route path="delete" element={<ProductsDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default ProductsRoutes;
