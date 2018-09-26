import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from '../../Presentational'
import Icon from 'react-native-vector-icons/Entypo';
import { TabNavigator } from 'react-navigation';
import { DARK_GREY, ORANGE, WHITE, LIGHT_GREY, GREY } from '../../Themes/Colors';
import Profile from '../Profile';
import Notification from '../Notification'
import JobList from '../JobList'
import MyJob from '../MyJob'

// icon info https://oblador.github.io/react-native-vector-icons/
export default TabNavigator({
  JobListScreen: {
    screen: JobList,
    navigationOptions: {
      title: "Job Lists",
      headerLeft: null,
      tabBarLabel: ({ focused }) => (
        <Text style={[styles.text, focused && styles.textActive]}>Job Lists</Text>
      ),
      tabBarIcon: ({ tintColor }) => (
        <Icon name='app-store' size={30} style={{ color: tintColor }} />
      )
    }
  },
  MyJobScreen: {
    screen: MyJob,
    navigationOptions: {
      title: "My Jobs",
      tabBarLabel: ({ focused }) => (
        <Text style={[styles.text, focused && styles.textActive]}>My Jobs</Text>
      ),
      headerLeft: null,
      tabBarIcon: ({ tintColor }) => (
        <Icon name='archive' size={22} style={{ color: tintColor }} />
      )
    }
  },
  NotificationScreen: {
    screen: Notification,
    navigationOptions: {
      title: "Notification",
      tabBarLabel: ({ focused }) => (
        <Text style={[styles.text, focused && styles.textActive]}>Notification</Text>
      ),
      tabBarIcon: ({ tintColor }) => (
        <Icon name='app-store' size={25} style={{ color: tintColor }} />
      )
    }
  },
  ProfileScreen: {
    screen: Profile,
    navigationOptions: {
      title: "Profile",
      tabBarLabel: ({ focused }) => (
        <Text style={[styles.text, focused && styles.textActive]}>Profile</Text>
      ),
      tabBarIcon: ({ tintColor }) => (
        <Icon name='archive' size={25} style={{ color: tintColor }} />
      )
    }
  }
},
  {
    initialRouteName: 'JobListScreen',
    animationEnabled: false,
    swipeEnabled: false,
    backBehavior: 'none',
    tabBarPosition: 'bottom',
    tabBarOptions: {
      showIcon: true,
      showLabel: true,
      upperCaseLabel: false,
      activeTintColor: ORANGE,
      inactiveTintColor: DARK_GREY,
      style: {
        backgroundColor: WHITE,
        borderTopColor: WHITE,
        borderTopWidth: 1,
        elevation: 0,
        height: 55
      },
      renderIndicator: () => null
    },
    iconStyle: {
      width: 30,
      height: 30
    },
  })


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    color: GREY,
    fontSize: 10.5,
    marginBottom: 5,
    alignSelf: 'center'
  },
  textActive: {
    color: ORANGE,
  }
})
