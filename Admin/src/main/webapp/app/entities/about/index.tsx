import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import About from './about';
import AboutDetail from './about-detail';
import AboutUpdate from './about-update';
import AboutDeleteDialog from './about-delete-dialog';

const AboutRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<About />} />
    <Route path="new" element={<AboutUpdate />} />
    <Route path=":id">
      <Route index element={<AboutDetail />} />
      <Route path="edit" element={<AboutUpdate />} />
      <Route path="delete" element={<AboutDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default AboutRoutes;
