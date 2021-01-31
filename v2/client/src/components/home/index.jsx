import React, { Fragment } from "react";
import Breadcrumb from "../../layout/breadcrumb";
import { Container, Row, Col, Card, CardHeader, CardBody } from "reactstrap";

const Sample = (props) => {
  return (
    <Fragment>
      <Breadcrumb title="Home" />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader>
                <h5>Welcome to GoList!</h5>
                <span>
                  Here, you can quickly edit and browse a list of links and
                  files with one simple URL
                </span>
              </CardHeader>
              <CardBody>
                <p>
                  Currently, you have 0 lists configured. Start by visiting "My
                  Links" tab on the right.
                </p>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Sample;
