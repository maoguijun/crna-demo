import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground
} from 'react-native';
import { Carousel } from '@ant-design/react-native';

const imgs = [
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567420886848&di=650a05d17dab43e059c214f1fa263856&imgtype=0&src=http%3A%2F%2Fg.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F8b82b9014a90f6030dded4fd3312b31bb051ed1a.jpg',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567420886848&di=b4289446b5b6c7321967a25706716f0b&imgtype=0&src=http%3A%2F%2Fe.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Fb812c8fcc3cec3fdb850efcfdc88d43f87942719.jpg',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567420886848&di=126585d610556bc0d4e766cc9a66a145&imgtype=0&src=http%3A%2F%2Ff.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Ff2deb48f8c5494eefd4b47a327f5e0fe99257e1a.jpg'
];

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <Carousel
        style={styles.wrapper}
        selectedIndex={2}
        autoplay
        infinite
        afterChange={this.onHorizontalSelectedIndexChange}
      >
        {imgs.map((src, index) => (
          <View style={[styles.containerHorizontal]} key={index}>
            <Image source={{ uri: src }} style={styles.image}></Image>
          </View>
        ))}
      </Carousel>
    </ScrollView>
  );
}

HomeScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  wrapper: {
    backgroundColor: '#fff'
  },
  containerHorizontal: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 200
  },
  image: {
    height: 200,
    width: '100%'
  }
});
