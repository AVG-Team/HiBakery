import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Col, Row } from 'reactstrap';
import { TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './password-reset-tokens.reducer';

export const PasswordResetTokensDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const passwordResetTokensEntity = useAppSelector(state => state.passwordResetTokens.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="passwordResetTokensDetailsHeading">Password Reset Tokens</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{passwordResetTokensEntity.id}</dd>
          <dt>
            <span id="email">Email</span>
          </dt>
          <dd>{passwordResetTokensEntity.email}</dd>
          <dt>
            <span id="token">Token</span>
          </dt>
          <dd>{passwordResetTokensEntity.token}</dd>
          <dt>
            <span id="createdAt">Created At</span>
          </dt>
          <dd>
            {passwordResetTokensEntity.createdAt ? (
              <TextFormat value={passwordResetTokensEntity.createdAt} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
        </dl>
        <Button tag={Link} to="/password-reset-tokens" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/password-reset-tokens/${passwordResetTokensEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default PasswordResetTokensDetail;
