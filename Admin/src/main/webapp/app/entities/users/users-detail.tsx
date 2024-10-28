import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Col, Row } from 'reactstrap';
import { TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './users.reducer';

export const UsersDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const usersEntity = useAppSelector(state => state.users.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="usersDetailsHeading">Users</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{usersEntity.id}</dd>
          <dt>
            <span id="name">Name</span>
          </dt>
          <dd>{usersEntity.name}</dd>
          <dt>
            <span id="phone">Phone</span>
          </dt>
          <dd>{usersEntity.phone}</dd>
          <dt>
            <span id="account">Account</span>
          </dt>
          <dd>{usersEntity.account}</dd>
          <dt>
            <span id="birthDay">Birth Day</span>
          </dt>
          <dd>{usersEntity.birthDay ? <TextFormat value={usersEntity.birthDay} type="date" format={APP_LOCAL_DATE_FORMAT} /> : null}</dd>
          <dt>
            <span id="address">Address</span>
          </dt>
          <dd>{usersEntity.address}</dd>
          <dt>
            <span id="district">District</span>
          </dt>
          <dd>{usersEntity.district}</dd>
          <dt>
            <span id="province">Province</span>
          </dt>
          <dd>{usersEntity.province}</dd>
          <dt>
            <span id="email">Email</span>
          </dt>
          <dd>{usersEntity.email}</dd>
          <dt>
            <span id="emailVerify">Email Verify</span>
          </dt>
          <dd>{usersEntity.emailVerify ? <TextFormat value={usersEntity.emailVerify} type="date" format={APP_DATE_FORMAT} /> : null}</dd>
          <dt>
            <span id="password">Password</span>
          </dt>
          <dd>{usersEntity.password}</dd>
          <dt>
            <span id="createdAt">Created At</span>
          </dt>
          <dd>{usersEntity.createdAt ? <TextFormat value={usersEntity.createdAt} type="date" format={APP_DATE_FORMAT} /> : null}</dd>
          <dt>
            <span id="updatedAt">Updated At</span>
          </dt>
          <dd>{usersEntity.updatedAt ? <TextFormat value={usersEntity.updatedAt} type="date" format={APP_DATE_FORMAT} /> : null}</dd>
          <dt>
            <span id="deletedAt">Deleted At</span>
          </dt>
          <dd>{usersEntity.deletedAt ? <TextFormat value={usersEntity.deletedAt} type="date" format={APP_DATE_FORMAT} /> : null}</dd>
        </dl>
        <Button tag={Link} to="/users" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/users/${usersEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default UsersDetail;
