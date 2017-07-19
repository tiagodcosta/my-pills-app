import React, { Component } from 'react'
import { Linking, TouchableOpacity, Text, ListItem } from 'react-native'
import { Icon, Container, Content, View } from 'native-base'

import { connect } from 'react-redux'
import _ from 'lodash'
import * as actions from '../actions'

import { VictoryPie } from 'victory-pie-native'
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
      <Container padder style={{justifyContent: 'center', alignItems: 'center'}}>
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
        <VictoryPie
          width={300}
          colorScale="warm"
          data={this.props.prescriptions}
        />
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
  .sortBy(prescriptions, ['name', 'quantity'])
  .value();

  return {
    names,
  };
}

export default connect(mapStateToProps, actions)(Report);
