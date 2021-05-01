import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import { AppTabNavigator } from './components/AppTabNavigator'
import HomeScreen from './screens/HomeScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import MyBartersScreen from './screens/MyBartersScreen';
import ExchangeScreen from './screens/ExchangeScreen';
import {createDrawerNavigator} from 'react-navigation-drawer'
import SettingsScreen from './screens/SettingsScreen'
import {AppDrawerNavigator} from './components/AppDrawerNavigator'


export default class App extends React.Component{
    render(){
      return(
        <AppContainer>
          
        </AppContainer>
      )
    }
  }

  const TabNavigator = createBottomTabNavigator({
       HomeScreen:{screen:HomeScreen},
       WelcomeScreen:{screen:WelcomeScreen},
       ExchangeScreen:{screen:ExchangeScreen},
       MyBartersScreen:{screen:MyBartersScreen}
  })

  const AppContainer = createAppContainer(TabNavigator)

  const switchNavigator = createSwitchNavigator({
    WelcomeScreen:{screen: WelcomeScreen},
    Drawer:{screen: AppDrawerNavigator},
    BottomTab: {screen: AppTabNavigator},
  })
  

  const DrawerNavigator = createDrawerNavigator({
    TabNavigator,
    SettingsScreen,
    NotificationsScreen
  })
  