import React, { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Col, Row } from 'reactstrap';
import { ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { createEntity, getEntity, reset, updateEntity } from './users.reducer';

export const UsersUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const usersEntity = useAppSelector(state => state.users.entity);
  const loading = useAppSelector(state => state.users.loading);
  const updating = useAppSelector(state => state.users.updating);
  const updateSuccess = useAppSelector(state => state.users.updateSuccess);

  const handleClose = () => {
    navigate('/users');
  };

  useEffect(() => {
    if (isNew) {
      dispatch(reset());
    } else {
      dispatch(getEntity(id));
    }
  }, []);

  useEffect(() => {
    if (updateSuccess) {
      handleClose();
    }
  }, [updateSuccess]);

  const saveEntity = values => {
    if (values.id !== undefined && typeof values.id !== 'number') {
      values.id = Number(values.id);
    }
    values.emailVerify = convertDateTimeToServer(values.emailVerify);
    values.createdAt = convertDateTimeToServer(values.createdAt);
    values.updatedAt = convertDateTimeToServer(values.updatedAt);
    values.deletedAt = convertDateTimeToServer(values.deletedAt);

    const entity = {
      ...usersEntity,
      ...values,
    };

    if (isNew) {
      dispatch(createEntity(entity));
    } else {
      dispatch(updateEntity(entity));
    }
  };

  const defaultValues = () =>
    isNew
      ? {
          emailVerify: displayDefaultDateTime(),
          createdAt: displayDefaultDateTime(),
          updatedAt: displayDefaultDateTime(),
          deletedAt: displayDefaultDateTime(),
        }
      : {
          ...usersEntity,
          emailVerify: convertDateTimeFromServer(usersEntity.emailVerify),
          createdAt: convertDateTimeFromServer(usersEntity.createdAt),
          updatedAt: convertDateTimeFromServer(usersEntity.updatedAt),
          deletedAt: convertDateTimeFromServer(usersEntity.deletedAt),
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="adminApp.users.home.createOrEditLabel" data-cy="UsersCreateUpdateHeading">
            Create or edit a Users
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ValidatedForm defaultValues={defaultValues()} onSubmit={saveEntity}>
              {!isNew ? <ValidatedField name="id" required readOnly id="users-id" label="ID" validate={{ required: true }} /> : null}
              <ValidatedField
                label="Name"
                id="users-name"
                name="name"
                data-cy="name"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField label="Phone" id="users-phone" name="phone" data-cy="phone" type="text" />
              <ValidatedField label="Account" id="users-account" name="account" data-cy="account" type="text" />
              <ValidatedField label="Birth Day" id="users-birthDay" name="birthDay" data-cy="birthDay" type="date" />
              <ValidatedField label="Address" id="users-address" name="address" data-cy="address" type="text" />
              <ValidatedField label="District" id="users-district" name="district" data-cy="district" type="text" />
              <ValidatedField label="Province" id="users-province" name="province" data-cy="province" type="text" />
              <ValidatedField
                label="Email"
                id="users-email"
                name="email"
                data-cy="email"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Email Verify"
                id="users-emailVerify"
                name="emailVerify"
                data-cy="emailVerify"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
              />
              <ValidatedField label="Password" id="users-password" name="password" data-cy="password" type="text" />
              <ValidatedField
                label="Created At"
                id="users-createdAt"
                name="createdAt"
                data-cy="createdAt"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
              />
              <ValidatedField
                label="Updated At"
                id="users-updatedAt"
                name="updatedAt"
                data-cy="updatedAt"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
              />
              <ValidatedField
                label="Deleted At"
                id="users-deletedAt"
                name="deletedAt"
                data-cy="deletedAt"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/users" replace color="info">
                <FontAwesomeIcon icon="arrow-left" />
                &nbsp;
                <span className="d-none d-md-inline">Back</span>
              </Button>
              &nbsp;
              <Button color="primary" id="save-entity" data-cy="entityCreateSaveButton" type="submit" disabled={updating}>
                <FontAwesomeIcon icon="save" />
                &nbsp; Save
              </Button>
            </ValidatedForm>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default UsersUpdate;
