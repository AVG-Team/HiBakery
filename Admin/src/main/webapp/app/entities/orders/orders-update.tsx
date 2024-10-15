import React, { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Col, Row } from 'reactstrap';
import { ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { createEntity, getEntity, reset, updateEntity } from './orders.reducer';

export const OrdersUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const ordersEntity = useAppSelector(state => state.orders.entity);
  const loading = useAppSelector(state => state.orders.loading);
  const updating = useAppSelector(state => state.orders.updating);
  const updateSuccess = useAppSelector(state => state.orders.updateSuccess);

  const handleClose = () => {
    navigate('/orders');
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
    values.deliveryTime = convertDateTimeToServer(values.deliveryTime);
    if (values.total !== undefined && typeof values.total !== 'number') {
      values.total = Number(values.total);
    }
    if (values.status !== undefined && typeof values.status !== 'number') {
      values.status = Number(values.status);
    }
    values.createdAt = convertDateTimeToServer(values.createdAt);
    values.updatedAt = convertDateTimeToServer(values.updatedAt);
    values.deletedAt = convertDateTimeToServer(values.deletedAt);

    const entity = {
      ...ordersEntity,
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
          deliveryTime: displayDefaultDateTime(),
          createdAt: displayDefaultDateTime(),
          updatedAt: displayDefaultDateTime(),
          deletedAt: displayDefaultDateTime(),
        }
      : {
          ...ordersEntity,
          deliveryTime: convertDateTimeFromServer(ordersEntity.deliveryTime),
          createdAt: convertDateTimeFromServer(ordersEntity.createdAt),
          updatedAt: convertDateTimeFromServer(ordersEntity.updatedAt),
          deletedAt: convertDateTimeFromServer(ordersEntity.deletedAt),
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="adminApp.orders.home.createOrEditLabel" data-cy="OrdersCreateUpdateHeading">
            Create or edit a Orders
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ValidatedForm defaultValues={defaultValues()} onSubmit={saveEntity}>
              {!isNew ? <ValidatedField name="id" required readOnly id="orders-id" label="ID" validate={{ required: true }} /> : null}
              <ValidatedField
                label="Name"
                id="orders-name"
                name="name"
                data-cy="name"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField label="Phone" id="orders-phone" name="phone" data-cy="phone" type="text" />
              <ValidatedField label="Province" id="orders-province" name="province" data-cy="province" type="text" />
              <ValidatedField label="District" id="orders-district" name="district" data-cy="district" type="text" />
              <ValidatedField label="Address" id="orders-address" name="address" data-cy="address" type="text" />
              <ValidatedField label="Ward" id="orders-ward" name="ward" data-cy="ward" type="text" />
              <ValidatedField
                label="Delivery Time"
                id="orders-deliveryTime"
                name="deliveryTime"
                data-cy="deliveryTime"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
              />
              <ValidatedField label="Note" id="orders-note" name="note" data-cy="note" type="textarea" />
              <ValidatedField label="Content" id="orders-content" name="content" data-cy="content" type="textarea" />
              <ValidatedField label="Total" id="orders-total" name="total" data-cy="total" type="text" />
              <ValidatedField label="Code" id="orders-code" name="code" data-cy="code" type="text" />
              <ValidatedField label="Status" id="orders-status" name="status" data-cy="status" type="text" />
              <ValidatedField
                label="Created At"
                id="orders-createdAt"
                name="createdAt"
                data-cy="createdAt"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
              />
              <ValidatedField
                label="Updated At"
                id="orders-updatedAt"
                name="updatedAt"
                data-cy="updatedAt"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
              />
              <ValidatedField
                label="Deleted At"
                id="orders-deletedAt"
                name="deletedAt"
                data-cy="deletedAt"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/orders" replace color="info">
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

export default OrdersUpdate;
