import React from 'react';

import axios from 'axios';

import Error from './Error';

import Body from '../components/Body/Body';

import { ContainerDashboard } from './styled.js';

class pageOwnerAgency extends React.Component {
    constructor() {
        super()

        this.state = {
            error: ''
        }
    }

    componentDidMount() {
        console.log(localStorage.getItem('jwt'))
        const config = {
            headers: {
                'authorization': `Bearer ${localStorage.getItem('jwt')}`,
            }
        }

        axios.get('/secret', config)
            .then(res => console.log(res))
            .catch(err => this.setState({ error: err.response.data }))
    }
    render() {
        return (
            <Body>
                <ContainerDashboard>
                    {this.state.error
                        ? <Error />
                        : <div> AlgumaCoisa </div>}
                </ContainerDashboard>
            </Body>
        )
    }
}

export default pageOwnerAgency;