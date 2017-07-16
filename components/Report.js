import React, { Component } from 'react'
import { Linking, TouchableOpacity, Text } from 'react-native'
import { Icon, Container, Content, View } from 'native-base'

import { connect } from 'react-redux'
import _ from 'lodash'

import { VictoryChart, VictoryBar, VictoryAxis } from 'victory-native'
import Loader from './Loader'

const name = "lexapro"

const iodineAPIKey = '5654b09181b03100010000301177b120e8464ddf6ca318b260d87754'
const iodineAPIUrl = 'https://api.iodine.com/drug/' + name + '.json'

class Report extends Component {
  constructor() {
    super()
    this.state = {
      tips: [],
      loading: false
    }
  }

  static navigationOptions = {
      tabBarLabel: 'Report',
      tabBarIcon: ({ tintColor }) =>
        <Icon style={{color: '#44ad8e' }} name="ios-stats" />
  }
  handleClick = (link) => {
    Linking.canOpenURL(link).then(suppported => {
        if (supported) {
            Linking.openURL(link);
        } else {
            console.log('Don\'t know how to open URI: ' + link)
        }
    })
  }

  componentDidMount() {
    this.setState({
      loading: true
    })
    fetch(iodineAPIUrl, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-api-key': iodineAPIKey
      }
    })
      .then(response => response.json())
      .then(tips => this.setState({
        tips: tips.pharmacistTips,
        loading: false
      }))
      .catch(err => console.error('Some error', err))
  }

  renderLoader() {
    const names = this.state.name

    if(this.state.loading) {
      return <Loader size="large" />
    } else {
      return <View style={{marginTop: 20}}>
                <Text style={{marginBottom: 10}}>Information about {name} </Text>
                <Text style={{marginBottom: 10}}>{this.state.tips}</Text>
                <Text>Medication information by <TouchableOpacity  style={{ width: 50, height: 13}} onPress={() => { this.handleClick(`https://www.iodine.com`)}}><Text style={{color: '#8e44ad'}}>Iodine</Text></TouchableOpacity></Text>
            </View>
    }
  }

  render() {
    return (
      <Container padder>
        <Content style={{paddingLeft: 5, paddingRight: 5}}>
          {this.renderLoader()}
        </Content>
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
