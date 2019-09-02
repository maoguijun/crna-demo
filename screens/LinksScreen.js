import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

export default class LinksScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = async () => {
    const result = await fetch(
      'https://api.github.com/search/repositories?q=GitHub&sort=stars'
    )
      .then(response => response.json())
      .then(responseJson => {
        console.log(14, responseJson);
        return responseJson.movies;
      })
      .catch(error => {
        console.error(error);
      });
    this.setState({
      list: result
    });
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>聊天</Text>
      </ScrollView>
    );
  }
}

LinksScreen.navigationOptions = {
  title: '聊天'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff'
  }
});
