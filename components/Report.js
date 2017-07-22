import React, { Component } from 'react'
import { Icon, Container, Content, View, Text } from 'native-base'

import { connect } from 'react-redux'
import _ from 'lodash'

import { VictoryPie } from 'victory-pie-native'

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

  render() {
    const dataGraphic = _.toArray(this.props.prescriptionData)
    return (
      <Container style={{justifyContent: 'center', alignItems: 'center'}}>
        <Content padder>
          <VictoryPie
            width={350}
            colorScale="green"
            x="name"
            y="quantity"
            data={dataGraphic}
            labelRadius={135}
          />
          <Text>How much prescriptions you have consumed. The number is based on the quantity of units consumed</Text>
      </Content>
      </Container>
    )
  }
}


const mapStateToProps = state => {
  const prescriptionData = _.map(state.prescriptions, i => _.pick(i, 'name', 'quantity'))

  return {
    prescriptionData,
  }

}

export default connect(mapStateToProps)(Report);
