import React from 'react';
import Badge from 'react-bootstrap/Badge';

export default props => {
    const {variant, clickFn, option } = props;
    return (<Badge variant={variant} onClick={() => clickFn(option) } key={option.name}>{option.name}</Badge>)
}