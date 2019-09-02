import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { InputItem, List, Button, Toast } from '@ant-design/react-native';
import { withNavigation } from 'react-navigation';

@withNavigation
class Login extends React.Component {
  state = {
    userName: '',
    passWord: ''
  };

  onSubmit = e => {
    console.log(this.props);
    const { navigation } = this.props;
    const { userName, passWord } = this.state;
    console.log(17, navigation)
    Toast.success(`userName: ${userName}, passWord: ${passWord}`, 1, () => {
      Toast.info('马上跳转...', 2, () => {
        navigation.push('Home');
      });
    });
  };
  render() {
    return (
      <List style={styles.loginWrap}>
        <InputItem
          clear
          error
          value={this.state.userName}
          onChange={userName => {
            this.setState({
              userName
            });
          }}
          // extra='元'
          placeholder='有标签'
        >
          账号
        </InputItem>
        <InputItem
          clear
          error
          value={this.state.passWord}
          onChange={passWord => {
            this.setState({
              passWord
            });
          }}
          // extra='元'
          placeholder='有标签'
        >
          密码
        </InputItem>
        <Button type='primary' onPress={this.onSubmit}>
          登录
        </Button>
      </List>
    );
  }
}

Login.navigationOptions = {
  title: '登录'
};

const styles = StyleSheet.create({
  loginWrap: {
    width: '80%',
    marginLeft: '10%'
  }
});

export default Login;
