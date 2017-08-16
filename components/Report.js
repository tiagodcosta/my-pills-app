import React, { Component } from 'react'
import { Icon, Container, Content, View, Text, Thumbnail } from 'native-base'

import { connect } from 'react-redux'
import _ from 'lodash'
import { loadInitialItems } from '../actions'

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

  componentWillMount() {
    this.props.loadInitialItems();
  }

  render() {
    const dataGraphic = _.toArray(this.props.prescriptionData)
    const imgMessage = require('../images/icon-report.png')
    return (
      <Container style={{justifyContent: 'center', alignItems: 'center'}}>
        <Content padder>
          <Text style={{alignSelf: 'center', marginTop: 20, marginBottom: 20, fontSize: 18, color: '#44ad8e'}}>Your report</Text>                  
          {(dataGraphic != 0) ?
          <View>
            <VictoryPie
              width={350}
              colorScale="green"
              x="name"
              y="quantity"
              data={dataGraphic}
              labelRadius={135}
            /> 
            <Text>How much prescriptions you have consumed. The number is based on the quantity of units consumed</Text>
          </View>
            :
          <View>
            <Thumbnail round large source={imgMessage} style={{alignSelf: 'center', marginTop: 100}} />
            <Text style={{alignSelf: 'center', marginTop: 50, textAlign: 'center', paddingLeft: 20, paddingRight: 20}}>Here a graphic will show you how many prescriptions you have consumed</Text>
          </View>
          }
          
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

export default connect(mapStateToProps, {loadInitialItems})(Report);
