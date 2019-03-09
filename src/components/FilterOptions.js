import React from 'react';
import {Container, Row, Col, Badge} from 'react-bootstrap';

export default props => {
    const renderOptions =  options => options.map(option => {
        return (<Badge variant="primary" key={option.name}>{option.name}</Badge>)
    });

    return(
    <Container>
    <Row>
        <Col>{ renderOptions(props.data) }</Col>
    </Row>
    </Container>
    )
}