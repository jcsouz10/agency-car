import React from 'react';

import { NameAgency } from './styled';

import { Link } from 'react-router-dom';

import Header from '../components/Header/Header';
import Body from '../components/Body/Body';

class Agencies extends React.Component {
  constructor() {
    super();

    this.state = {
      valueToFilter: '',
    }
  }

  handleSearch = (e) => {
    const value = e.target.value;

    this.setState({ valueToFilter: value });
  }

  render() {
    const { infos } = this.props;
    const { valueToFilter } = this.state;
    return (
      <React.Fragment>
        <Header namePage="See all agencies"  />
        <Body>
          <input onChange={this.handleSearch} />
          {infos.filter(i => i.name.includes(valueToFilter)).map(i => <div key={i.id}> <Link className="link" to={`/${i.name}/cars/${i.id}`}> <NameAgency> {i.name} </NameAgency> </Link> </div>)}
        </Body>
      </React.Fragment>
    )
  }
}


export default Agencies;