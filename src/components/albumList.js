import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import AlbumDetail from './albumDetail';

class AlbumList extends Component {

  state = {
    albums: []
  };

  componentWillMount() {
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => response.json())
    .then(response => {
      this.setState({ albums: response });
    }).catch(error => {
      console.log(error);
    });
  }

  renderAlbums() {
    return this.state.albums.map(album => <AlbumDetail album={album} key={album.title} />);
  }

  render() {
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;
