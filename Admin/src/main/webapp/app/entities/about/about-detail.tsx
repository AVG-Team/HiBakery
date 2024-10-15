import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Col, Row } from 'reactstrap';
import { TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './about.reducer';

export const AboutDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const aboutEntity = useAppSelector(state => state.about.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="aboutDetailsHeading">About</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{aboutEntity.id}</dd>
          <dt>
            <span id="name">Name</span>
          </dt>
          <dd>{aboutEntity.name}</dd>
          <dt>
            <span id="content">Content</span>
          </dt>
          <dd>{aboutEntity.content}</dd>
          <dt>
            <span id="createdAt">Created At</span>
          </dt>
          <dd>{aboutEntity.createdAt ? <TextFormat value={aboutEntity.createdAt} type="date" format={APP_DATE_FORMAT} /> : null}</dd>
          <dt>
            <span id="updatedAt">Updated At</span>
          </dt>
          <dd>{aboutEntity.updatedAt ? <TextFormat value={aboutEntity.updatedAt} type="date" format={APP_DATE_FORMAT} /> : null}</dd>
        </dl>
        <Button tag={Link} to="/about" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/about/${aboutEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default AboutDetail;
