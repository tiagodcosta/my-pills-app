import React, { Component } from 'react'
import { Icon, Container, Text } from 'native-base'

import { connect } from 'react-redux'
import _ from 'lodash'

import { VictoryChart, VictoryBar, VictoryAxis, VictoryPie } from 'victory-native'

class Report extends Component {
  static navigationOptions = {
      tabBarLabel: 'Report',
      tabBarIcon: ({ tintColor }) =>
        <Icon style={{color: '#44ad8e' }} name="ios-stats" />
  }

  render() {
    return (
      <Container>
      <VictoryChart
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
      </VictoryChart>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  const prescriptions = _.map(state.prescriptions, (val, uid) => {
    return { ...val, uid };
  })

  return {
    prescriptions
  };
}

export default connect(mapStateToProps)(Report);
