/**
 * React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import { Provider } from 'mobx-react';
import React from 'react';
import { Router, Scene, Tabs } from 'react-native-router-flux';

import Home from './pages/Home';
import Me from './pages/Me';

import stores from './stores';

const App = () => {
  class Root extends React.Component {
    render() {
      return (
        <Provider stores={...stores}>
          <Router>
            <Tabs key="tabs">
              <Scene tabs={true} key="home" component={Home} tabBarLabel="首页" />
              <Scene tabs={true} key="me" component={Me} tabBarLabel="我的" />
            </Tabs>
          </Router>
        </Provider>
      );
    }
  }
};

export default App;
