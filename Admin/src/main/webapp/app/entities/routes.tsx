import React from 'react';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import About from './about';
import Bills from './bills';
import Discounts from './discounts';
import Images from './images';
import OrderDetail from './order-detail';
import Orders from './orders';
import PasswordResetTokens from './password-reset-tokens';
import ProductCategory from './product-category';
import ProductDetail from './product-detail';
import Products from './products';
import SettingSystem from './setting-system';
import Users from './users';
import { Route } from 'react-router';
/* jhipster-needle-add-route-import - JHipster will add routes here */

export default () => {
  return (
    <div>
      <ErrorBoundaryRoutes>
        {/* prettier-ignore */}
        <Route path="about/*" element={<About />} />
        <Route path="bills/*" element={<Bills />} />
        <Route path="discounts/*" element={<Discounts />} />
        <Route path="images/*" element={<Images />} />
        <Route path="order-detail/*" element={<OrderDetail />} />
        <Route path="orders/*" element={<Orders />} />
        <Route path="password-reset-tokens/*" element={<PasswordResetTokens />} />
        <Route path="product-category/*" element={<ProductCategory />} />
        <Route path="product-detail/*" element={<ProductDetail />} />
        <Route path="products/*" element={<Products />} />
        <Route path="setting-system/*" element={<SettingSystem />} />
        <Route path="users/*" element={<Users />} />
        {/* jhipster-needle-add-route-path - JHipster will add routes here */}
      </ErrorBoundaryRoutes>
    </div>
  );
};
