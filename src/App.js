import React, { Component } from 'react';
import './App.css';
import Table from 'react-bootstrap/Table';
import FilterOptions from './components/FilterOptions';
import { getUniqueFilters } from './utils/getFilterOptions';
import data from './__data';

const filterOpts = getUniqueFilters(data);

class App extends Component {
  setFilters(what) { 
    filterOpts.map(f => {
      if(f.name === what.name){ 
        f.active = !f.active;
        console.log(f);
      }
    });
   }

  render() {
    return (
      <>
        <header className="header">LateRooms</header>
        <section>
            <FilterOptions data={filterOpts} setFilters={ this.setFilters.bind(this)} />
            <Table striped bordered hover responsive>
            <thead>
            <tr>
            <th>Name</th>
            <th>Star Rating</th>
            <th>Facilities</th>
            </tr>
            </thead>
            <tbody>
            { data.map(hotel => {
                const { name, starRating, facilities } =  hotel;
                return (
                    <tr key={name}>
                    <td>{name}</td>
                    <td>{starRating}</td>
                    <td>{facilities.join(', ')}</td>
                    </tr>
                );

            }) }
            </tbody>
            </Table>
          </section>
      </>
    );
  }
}

export default App;
