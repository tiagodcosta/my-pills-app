import React from 'react'
import { TouchableWithoutFeedback } from 'react-native'
import { Icon, Text, View, Container,Thumbnail } from 'native-base'

import { connect } from 'react-redux'
import * as actions from '../actions'

const ListItem = (props) => {
  const imgList = require('../images/icon-pills.png')
  return (
    <TouchableWithoutFeedback
        onPress={() => props.selectItem(props.prescriptions)}
      >
      <View style={{flexDirection: 'row', alignItems: 'center', backgroundColor: '#44ad8e', marginBottom: 5, padding: 5 }}>
        <Thumbnail round small source={imgList} style={{marginRight: 5}} />
          <View style={{flexDirection: 'column'}}>
            <Text style={{fontSize: 18, color: '#8e44ad'}}>{props.prescriptions.name}</Text>
            <Text style={{fontSize: 16, color: '#fff'}}>{props.prescriptions.frequency}</Text>
          </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default connect(null, actions)(ListItem)
