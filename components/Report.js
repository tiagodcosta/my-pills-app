import React, { Component } from 'react'
import { Linking, TouchableOpacity, Text, ListItem } from 'react-native'
import { Icon, Container, Content, View } from 'native-base'

import { connect } from 'react-redux'
import _ from 'lodash'
import * as actions from '../actions'

import { VictoryChart, VictoryBar, VictoryAxis } from 'victory-native'
import Loader from './Loader'


class Report extends Component {
  static navigationOptions = {
      tabBarLabel: 'Report',
      tabBarIcon: ({ tintColor }) =>
        <Icon style={{color: '#44ad8e' }} name="ios-stats" />
  }


  componentWillMount() {
    this.props.loadInitialItems();

  }

  render() {
    return (
      <Container padder>
        <Content style={{paddingLeft: 5, paddingRight: 5}}>
          <Text>Hello Report</Text>
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  const prescriptions = _.map(state.prescriptions, (val, uid) => {
    return { ...val, uid };
  })

  const names =
  _.chain(prescriptions)
  .filter('name')
  .map(function(o) {
   return o.name;
  })
  .sample()
  .value();

  return {
    names,
  };
}

export default connect(mapStateToProps, actions)(Report);
