import React from 'react';
import axios from 'axios';
import EffectItem from './EffectItem';
import { Conatiner, Box, Header, LogoIcon } from './styles';
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
    data.sort(this.compare);
    this.setState({ effects: data });
    localStorage.setItem('effects', JSON.stringify(data));
  };

  onUpdateFunction = (effect, index) => {
    const newEffects = this.state.effects;
    newEffects[index].label = effect;
    this.setState({ effects: newEffects.sort(this.compare) });
    localStorage.setItem('effects', JSON.stringify(this.state.effects));
  };

  compare(a, b) {
    if (a.label.toLowerCase() < b.label.toLowerCase()) {
      return -1;
    }
    if (a.label.toLowerCase() > b.label.toLowerCase()) {
      return 1;
    }
    return 0;
  }

  componentDidMount() {
    const { token, effects } = this.state;
    if (!token || !effects) {
      this.login();
    }
  }

  render() {
    const { effects } = this.state;
    if (effects === null) {
      return (
        <Conatiner
          style={{
            backgroundColor: 'rgb(96, 187, 160)',
            justifyContent: 'center',
          }}
        >
          <LogoIcon src={logo} alt="logo" />
          Loading...
        </Conatiner>
      );
    } else {
      const list = effects.map(x => x.label.toLowerCase());
      let Letter = list[0][0].toLowerCase();
      return (
        <Conatiner>
          <Header>
            <img src={logo} alt="logo" />
          </Header>
          <Box>
            {effects.map((effect, index) => {
              return (
                <div>
                  {Letter !== effect.label[0].toUpperCase()
                    ? (Letter = effect.label[0].toUpperCase())
                    : null}
                  <EffectItem
                    item={effect}
                    index={index}
                    onUpdateFunction={this.onUpdateFunction}
                    list={list}
                  />
                </div>
              );
            })}
          </Box>
        </Conatiner>
      );
    }
  }
}

export default App;
