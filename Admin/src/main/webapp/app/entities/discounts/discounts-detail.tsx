import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Col, Row } from 'reactstrap';
import { TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './discounts.reducer';

export const DiscountsDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const discountsEntity = useAppSelector(state => state.discounts.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="discountsDetailsHeading">Discounts</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{discountsEntity.id}</dd>
          <dt>
            <span id="name">Name</span>
          </dt>
          <dd>{discountsEntity.name}</dd>
          <dt>
            <span id="code">Code</span>
          </dt>
          <dd>{discountsEntity.code}</dd>
          <dt>
            <span id="percent">Percent</span>
          </dt>
          <dd>{discountsEntity.percent}</dd>
          <dt>
            <span id="start">Start</span>
          </dt>
          <dd>{discountsEntity.start ? <TextFormat value={discountsEntity.start} type="date" format={APP_DATE_FORMAT} /> : null}</dd>
          <dt>
            <span id="end">End</span>
          </dt>
          <dd>{discountsEntity.end ? <TextFormat value={discountsEntity.end} type="date" format={APP_DATE_FORMAT} /> : null}</dd>
          <dt>
            <span id="active">Active</span>
          </dt>
          <dd>{discountsEntity.active ? 'true' : 'false'}</dd>
          <dt>
            <span id="createdAt">Created At</span>
          </dt>
          <dd>
            {discountsEntity.createdAt ? <TextFormat value={discountsEntity.createdAt} type="date" format={APP_DATE_FORMAT} /> : null}
          </dd>
          <dt>
            <span id="updatedAt">Updated At</span>
          </dt>
          <dd>
            {discountsEntity.updatedAt ? <TextFormat value={discountsEntity.updatedAt} type="date" format={APP_DATE_FORMAT} /> : null}
          </dd>
          <dt>
            <span id="deletedAt">Deleted At</span>
          </dt>
          <dd>
            {discountsEntity.deletedAt ? <TextFormat value={discountsEntity.deletedAt} type="date" format={APP_DATE_FORMAT} /> : null}
          </dd>
        </dl>
        <Button tag={Link} to="/discounts" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/discounts/${discountsEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default DiscountsDetail;
