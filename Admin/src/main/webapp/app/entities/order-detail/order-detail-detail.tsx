import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Col, Row } from 'reactstrap';
import { TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './order-detail.reducer';

export const OrderDetailDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const orderDetailEntity = useAppSelector(state => state.orderDetail.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="orderDetailDetailsHeading">Order Detail</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{orderDetailEntity.id}</dd>
          <dt>
            <span id="price">Price</span>
          </dt>
          <dd>{orderDetailEntity.price}</dd>
          <dt>
            <span id="quantity">Quantity</span>
          </dt>
          <dd>{orderDetailEntity.quantity}</dd>
          <dt>
            <span id="createdAt">Created At</span>
          </dt>
          <dd>
            {orderDetailEntity.createdAt ? <TextFormat value={orderDetailEntity.createdAt} type="date" format={APP_DATE_FORMAT} /> : null}
          </dd>
          <dt>
            <span id="updatedAt">Updated At</span>
          </dt>
          <dd>
            {orderDetailEntity.updatedAt ? <TextFormat value={orderDetailEntity.updatedAt} type="date" format={APP_DATE_FORMAT} /> : null}
          </dd>
          <dt>
            <span id="deletedAt">Deleted At</span>
          </dt>
          <dd>
            {orderDetailEntity.deletedAt ? <TextFormat value={orderDetailEntity.deletedAt} type="date" format={APP_DATE_FORMAT} /> : null}
          </dd>
        </dl>
        <Button tag={Link} to="/order-detail" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/order-detail/${orderDetailEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default OrderDetailDetail;
