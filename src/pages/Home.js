/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import { inject, observable, observer } from 'mobx-react';
import React, { Component } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

@inject('searchStore')
@observer
export default class Home extends Component {
  @observable query = '';

  render() {
    return (
      <View style={styles.container}>
        <TextInput placeholder="输入歌名搜索" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
