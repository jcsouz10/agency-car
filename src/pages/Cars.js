import React from 'react';

import axios from 'axios';

import { CotainerCar, ColorCar, InfoCar } from './styled';

import Header from '../components/Header/Header';
import Body from '../components/Body/Body';

class Cars extends React.Component {
  constructor() {
    super();

    this.state = {
      cars: [],
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id;

    axios.get(`http://localhost:8000/api/agencies/${id}`)
      .then(res => this.setState({ cars: res.data.cars }))
      .catch(err => console.log(err))
  }

  render() {
    const name = this.props.match.params.agency;
    return (
      <React.Fragment>
        <Header namePage={`See all cars of the ${name}`} />
        <Body>
          {this.state.cars.map(car =>
            <CotainerCar>
              <InfoCar>{car.name}</InfoCar>
              <InfoCar>Cor</InfoCar>
              <ColorCar color={car.color} />
              Ano
            <InfoCar>{car.year}</InfoCar>
              <InfoCar>{car.state}</InfoCar>
            </CotainerCar>

          )}
        </Body>
      </React.Fragment>
    )
  }
}

export default Cars;