import React, { Component } from 'react';
import { View } from 'react-native';
import Header from './components/header';
import AlbumList from './components/albumList';


class App extends Component<{}> {
  render() {
    return (
      <View>
        <Header headerText={'Albums'} />
        <AlbumList />
      </View>
    );
  }
}

export default App;
