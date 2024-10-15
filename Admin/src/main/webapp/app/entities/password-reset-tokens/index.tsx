import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import PasswordResetTokens from './password-reset-tokens';
import PasswordResetTokensDetail from './password-reset-tokens-detail';
import PasswordResetTokensUpdate from './password-reset-tokens-update';
import PasswordResetTokensDeleteDialog from './password-reset-tokens-delete-dialog';

const PasswordResetTokensRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<PasswordResetTokens />} />
    <Route path="new" element={<PasswordResetTokensUpdate />} />
    <Route path=":id">
      <Route index element={<PasswordResetTokensDetail />} />
      <Route path="edit" element={<PasswordResetTokensUpdate />} />
      <Route path="delete" element={<PasswordResetTokensDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default PasswordResetTokensRoutes;
