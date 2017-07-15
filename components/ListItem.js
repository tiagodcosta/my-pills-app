import React from 'react'
import { TouchableWithoutFeedback } from 'react-native'
import { Icon, Text, View, Container,Thumbnail } from 'native-base'

import { connect } from 'react-redux'
import * as actions from '../actions'

const ListItem = (props) => {
  const imgList = require('../images/test-small.jpg')
  return (
    <TouchableWithoutFeedback
        onPress={() => props.selectItem(props.prescriptions)}
      >
      <View style={{flexDirection: 'row', alignItems: 'center', backgroundColor: '#44ad8e', marginBottom: 5, padding: 5 }}>
        <Thumbnail round small source={imgList} style={{marginRight: 5}} />
          <View style={{flexDirection: 'column'}}>
            <Text style={{fontSize: 12, color: '#8e44ad'}}>{props.prescriptions.name}</Text>
            <Text style={{color: '#bdc3c7', fontSize: 10}}>{props.prescriptions.quantity} {props.prescriptions.type} {props.prescriptions.frequency}</Text>
          </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default connect(null, actions)(ListItem)
