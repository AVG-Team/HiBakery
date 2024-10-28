import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Col, Row } from 'reactstrap';
import { TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './bills.reducer';

export const BillsDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const billsEntity = useAppSelector(state => state.bills.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="billsDetailsHeading">Bills</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{billsEntity.id}</dd>
          <dt>
            <span id="category">Category</span>
          </dt>
          <dd>{billsEntity.category}</dd>
          <dt>
            <span id="amount">Amount</span>
          </dt>
          <dd>{billsEntity.amount}</dd>
          <dt>
            <span id="createdAt">Created At</span>
          </dt>
          <dd>{billsEntity.createdAt ? <TextFormat value={billsEntity.createdAt} type="date" format={APP_DATE_FORMAT} /> : null}</dd>
          <dt>
            <span id="updatedAt">Updated At</span>
          </dt>
          <dd>{billsEntity.updatedAt ? <TextFormat value={billsEntity.updatedAt} type="date" format={APP_DATE_FORMAT} /> : null}</dd>
          <dt>
            <span id="deletedAt">Deleted At</span>
          </dt>
          <dd>{billsEntity.deletedAt ? <TextFormat value={billsEntity.deletedAt} type="date" format={APP_DATE_FORMAT} /> : null}</dd>
        </dl>
        <Button tag={Link} to="/bills" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/bills/${billsEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default BillsDetail;
