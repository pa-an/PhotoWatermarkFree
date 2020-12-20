import React from 'react'
import { createAppContainer } from 'react-navigation'
import {
  createStackNavigator,
  CardStyleInterpolators,
} from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import Loading from '../screens/loading-screen'
import AuthHome from '../screens/auth-home-screen'
import Login from '../screens/login-screen'
import Register from '../screens/register-screen'
import ForgotPassword from '../screens/login-screen/forgot-password-screen'

import AddChild from '../screens/child-screen/add-child-screen'

import Setting from '../screens/setting-screen'
import ChangePassword from '../screens/setting-screen/change-password-screen'

import Watermark from '../screens/watermark-screen'

import { Colors } from '../theme'
import TabIcon from './tab-icon'

const tabOptions = {
  headerMode: 'none',
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ tintColor }) => {
      const { routeName } = navigation.state
      return <TabIcon routeName={routeName} color={tintColor} />
    },
  }),
  tabBarOptions: {
    activeTintColor: Colors.primary,
    inactiveTintColor: Colors.gray,
    showLabel: false,
  },
}

const Home = createBottomTabNavigator(
  {
    Print: Watermark,
    Camera: Setting,
    Setting,
  },
  tabOptions,
)

const StackNavigator = createStackNavigator(
  {
    Loading,
    AuthHome,
    Register,
    Login,
    ForgotPassword,

    AddChild,

    Home,

    ChangePassword,
  },
  {
    initialRouteName: 'Loading',
    headerMode: 'none',
    defaultNavigationOptions: {
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    },
  },
)

export const PrimaryNavigator = createAppContainer(StackNavigator)