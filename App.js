/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { NativeModules, Platform } from 'react-native';
import { Provider } from 'react-redux';
import RNBootSplash from "react-native-bootsplash";
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { IntlProvider } from 'react-redux-multilingual'

import configureStore from './store';
import MyStack from './routes';
import translations from './translations';

const { store } = configureStore();

class App extends Component {
  componentDidMount() {
    const init = async () => {
      console.log("Bootsplash has been loaded successfully");
    };

    init().finally(async () => {
      await RNBootSplash.hide({ fade: true });
      console.log("Bootsplash has been hidden successfully");
    });

  }

  render() {
    return (
      <Provider store={store}>
      <IntlProvider translations={translations}>
            <NavigationContainer theme={NavigationContainerTheme}>
              <MyStack />
            </NavigationContainer>
          
            </IntlProvider>
  </Provider>
    );
  }
};

export default App;

const NavigationContainerTheme = {
	...DefaultTheme,
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: 'rgb(242, 242, 242)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};

