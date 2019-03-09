import React from 'react';
import {Container, Row, Col, Form} from 'react-bootstrap';
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
        <Col>
        <Form>
            <label>Order by start rating</label>
            <Form.Check 
            inline 
            label="Order Asc" 
            type="radio" 
            name="orderBy" 
            id={`inline-radio-1`}
            onClick={() => props.setOrder('asc')} />
            <Form.Check
            inline
            label="Order Desc"
            type="radio" name="orderBy" 
            id={`inline-radio-2`}
            onClick={() => props.setOrder('desc')}
            />
        </Form>
        </Col>
        <Col>{ renderOptions(props.data) }</Col>
    </Row>
    </Container>
    )
}