import React from 'react';
import { View, Text } from 'react-native';
import { ExpoConfigView } from '@expo/samples';

export default function SettingsScreen() {
  return (
    <View>
      <Text>设置</Text>
    </View>
  );
}

SettingsScreen.navigationOptions = {
  title: 'app.json'
};
