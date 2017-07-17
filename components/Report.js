import React, { Component } from 'react'
import { Linking, TouchableOpacity, Text, ListItem } from 'react-native'
import { Icon, Container, Content, View } from 'native-base'

import { connect } from 'react-redux'
import _ from 'lodash'
import * as actions from '../actions'

import { VictoryChart, VictoryBar, VictoryAxis, VictoryPie, VictoryContainerComponent } from 'victory-native'
import Loader from './Loader'


class Report extends Component {
  constructor() {
    super()
    this.state = {
      message: 'Hello New World'
    }
  }
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
        {/* <VictoryChart
          domainPadding={{x: 40}}
          >
              <VictoryBar
                  data={[
                    { name: "Joan", age: 56},
                    { name: "Beth", age: 30},
                    { name: "Bob", age: 45}
                  ]}
                  x="name"
                  y="age"
              />
              <VictoryAxis
                  label="name"
                  style={{
                    axisLabel: { padding: 30 }
                  }}
                />
              <VictoryAxis dependentAxis
                  label="Age"
                  style={{
                    axisLabel: { padding: 40 }
                  }}
              />
        </VictoryChart> */}
        <View>
        <VictoryPie
          data={[
            { x: "Cats", y: 35 },
            { x: "Dogs", y: 40 },
            { x: "Birds", y: 55 }
          ]}
        />
      </View>
        <Text>{this.state.message} </Text>
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
