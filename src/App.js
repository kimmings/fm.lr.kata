import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from './components/Header';
import Table from 'react-bootstrap/Table';
import FilterOptions from './components/FilterOptions';
import { addFilter, orderBy } from './actions/actions';

class App extends Component {
  renderHotel( hotel ) {
    const { name, starRating, facilities } =  hotel;
    return (
        <tr key={name}>
        <td>{name}</td>
        <td>{starRating}</td>
        <td>{facilities.join(', ')}</td>
        </tr>
    );
  }

  render() {
    const { filterData, filteredHotels } = this.props;

    return (
      <>
        <Header />
        <section>
            <FilterOptions 
            data={filterData} 
            setOrder={ this.props.orderBy }
            setFilters={ this.props.addFilter } />

            <Table striped bordered hover responsive>
            <thead>
            <tr>
            <th>Name</th>
            <th>Star Rating</th>
            <th>Facilities</th>
            </tr>
            </thead>
            <tbody>
            { filteredHotels.map(this.renderHotel) }
            </tbody>
            </Table>
          </section>
      </>
    );
  }
}

const mapDispatchToProps = {
  addFilter: addFilter,
  orderBy: orderBy
}

const mapStateToProps = state => {
  return {
      filterData: state.filters,
      filteredHotels: state.filteredHotels
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
