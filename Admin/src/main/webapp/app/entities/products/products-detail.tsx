import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Col, Row } from 'reactstrap';
import { TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './products.reducer';

export const ProductsDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const productsEntity = useAppSelector(state => state.products.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="productsDetailsHeading">Products</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{productsEntity.id}</dd>
          <dt>
            <span id="title">Title</span>
          </dt>
          <dd>{productsEntity.title}</dd>
          <dt>
            <span id="description">Description</span>
          </dt>
          <dd>{productsEntity.description}</dd>
          <dt>
            <span id="code">Code</span>
          </dt>
          <dd>{productsEntity.code}</dd>
          <dt>
            <span id="createdAt">Created At</span>
          </dt>
          <dd>{productsEntity.createdAt ? <TextFormat value={productsEntity.createdAt} type="date" format={APP_DATE_FORMAT} /> : null}</dd>
          <dt>
            <span id="updatedAt">Updated At</span>
          </dt>
          <dd>{productsEntity.updatedAt ? <TextFormat value={productsEntity.updatedAt} type="date" format={APP_DATE_FORMAT} /> : null}</dd>
          <dt>
            <span id="deletedAt">Deleted At</span>
          </dt>
          <dd>{productsEntity.deletedAt ? <TextFormat value={productsEntity.deletedAt} type="date" format={APP_DATE_FORMAT} /> : null}</dd>
        </dl>
        <Button tag={Link} to="/products" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/products/${productsEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default ProductsDetail;
