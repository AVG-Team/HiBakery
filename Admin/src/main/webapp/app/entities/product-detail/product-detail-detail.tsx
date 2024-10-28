import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Col, Row } from 'reactstrap';
import { TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './product-detail.reducer';

export const ProductDetailDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const productDetailEntity = useAppSelector(state => state.productDetail.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="productDetailDetailsHeading">Product Detail</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{productDetailEntity.id}</dd>
          <dt>
            <span id="price">Price</span>
          </dt>
          <dd>{productDetailEntity.price}</dd>
          <dt>
            <span id="size">Size</span>
          </dt>
          <dd>{productDetailEntity.size}</dd>
          <dt>
            <span id="createdAt">Created At</span>
          </dt>
          <dd>
            {productDetailEntity.createdAt ? (
              <TextFormat value={productDetailEntity.createdAt} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="updatedAt">Updated At</span>
          </dt>
          <dd>
            {productDetailEntity.updatedAt ? (
              <TextFormat value={productDetailEntity.updatedAt} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
        </dl>
        <Button tag={Link} to="/product-detail" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/product-detail/${productDetailEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default ProductDetailDetail;
