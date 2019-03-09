import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import FilterOption from './FilterOption';
import './FilterOptions.css';

export default props => {
    const renderOptions =  options => options.map(option => {
        const variant = option.active? 'primary':'secondary';
        return (<FilterOption variant={variant} clickFn={props.setFilters} key={option.name} option={option}/>)
    });

    return(
    <Container>
    <Row>
        <Col>{ renderOptions(props.data) }</Col>
    </Row>
    </Container>
    )
}