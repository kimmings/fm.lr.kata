import React, { Component } from 'react';
import './App.css';
import Table from 'react-bootstrap/Table';
import data from './__data';

class App extends Component {
  render() {
    return (
      <>
        <header className="header">LateRooms</header>
        <section>

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
