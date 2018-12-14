/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Router, Scene, Tabs } from 'react-native-router-flux';

import Home from './pages/Home';
import Me from './pages/Me';

const App = () => (
  <Router>
    <Tabs key="tabs">
      <Scene tabs={true} key="home" component={Home} tabBarLabel="首页" />
      <Scene tabs={true} key="me" component={Me} tabBarLabel="我的" />
    </Tabs>
  </Router>
);

export default App;
