import React from 'react';
import axios from 'axios';
import { Conatiner, Box, Header } from './styles';
import logo from './logo-cureety.svg';

class App extends React.Component {
  state = {
    token: localStorage.getItem('token'),
    effects: JSON.parse(localStorage.getItem('effects')),
  };

  login = async () => {
    const {
      data: { id },
    } = await axios.post(
      'https://app.development.staging.cureety.com/api/v1/api/Endusers/login',
      { email: 'ihcene+patient5@aritylabs.com', password: '5eWbgFEG2Az' },
    );
    localStorage.setItem('token', id);
    const { data } = await axios.get(
      `https://app.development.staging.cureety.com/api/v1/api/side_effects?access_token=${id}`,
    );
    this.setState({ effects: data });
    localStorage.setItem('effects', JSON.stringify(data));
  };

  componentDidMount() {
    const { token, effects } = this.state;
    if (!token || !effects) {
      this.login();
    }
  }

  render() {
    return (
      <Conatiner>
        <Header>
          <img src={logo} alt="logo" />
        </Header>
        <Box />
      </Conatiner>
    );
  }
}

export default App;
