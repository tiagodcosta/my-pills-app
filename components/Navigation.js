import React, { Component } from 'react'
import { StackNavigator, TabNavigator } from 'react-navigation'
import ListContainer from './ListContainer'
import Report from './Report'
import AddItem from './AddItem'


const Navigation = TabNavigator({
  Prescriptions: { screen: ListContainer },
  Add: { screen: AddItem },
  Report: { screen: Report }
}, {
  tabBarOptions: {
    activeTintColor: 'white',
    inactiveTintColor: 'green',
    swipeEnabled: true,
    showLabel: true,
    style: {
      backgroundColor: 'red',
    }
  }
})

export default Navigation
