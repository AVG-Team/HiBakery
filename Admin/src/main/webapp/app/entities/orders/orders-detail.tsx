import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Col, Row } from 'reactstrap';
import { TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './orders.reducer';

export const OrdersDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const ordersEntity = useAppSelector(state => state.orders.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="ordersDetailsHeading">Orders</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{ordersEntity.id}</dd>
          <dt>
            <span id="name">Name</span>
          </dt>
          <dd>{ordersEntity.name}</dd>
          <dt>
            <span id="phone">Phone</span>
          </dt>
          <dd>{ordersEntity.phone}</dd>
          <dt>
            <span id="province">Province</span>
          </dt>
          <dd>{ordersEntity.province}</dd>
          <dt>
            <span id="district">District</span>
          </dt>
          <dd>{ordersEntity.district}</dd>
          <dt>
            <span id="address">Address</span>
          </dt>
          <dd>{ordersEntity.address}</dd>
          <dt>
            <span id="ward">Ward</span>
          </dt>
          <dd>{ordersEntity.ward}</dd>
          <dt>
            <span id="deliveryTime">Delivery Time</span>
          </dt>
          <dd>
            {ordersEntity.deliveryTime ? <TextFormat value={ordersEntity.deliveryTime} type="date" format={APP_DATE_FORMAT} /> : null}
          </dd>
          <dt>
            <span id="note">Note</span>
          </dt>
          <dd>{ordersEntity.note}</dd>
          <dt>
            <span id="content">Content</span>
          </dt>
          <dd>{ordersEntity.content}</dd>
          <dt>
            <span id="total">Total</span>
          </dt>
          <dd>{ordersEntity.total}</dd>
          <dt>
            <span id="code">Code</span>
          </dt>
          <dd>{ordersEntity.code}</dd>
          <dt>
            <span id="status">Status</span>
          </dt>
          <dd>{ordersEntity.status}</dd>
          <dt>
            <span id="createdAt">Created At</span>
          </dt>
          <dd>{ordersEntity.createdAt ? <TextFormat value={ordersEntity.createdAt} type="date" format={APP_DATE_FORMAT} /> : null}</dd>
          <dt>
            <span id="updatedAt">Updated At</span>
          </dt>
          <dd>{ordersEntity.updatedAt ? <TextFormat value={ordersEntity.updatedAt} type="date" format={APP_DATE_FORMAT} /> : null}</dd>
          <dt>
            <span id="deletedAt">Deleted At</span>
          </dt>
          <dd>{ordersEntity.deletedAt ? <TextFormat value={ordersEntity.deletedAt} type="date" format={APP_DATE_FORMAT} /> : null}</dd>
        </dl>
        <Button tag={Link} to="/orders" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/orders/${ordersEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default OrdersDetail;
