import React from 'react'
import { View, Text, TouchableWithoutFeedback } from 'react-native'
import { Icon } from 'native-base'

import { connect } from 'react-redux'
import * as actions from '../actions'

const ListItem = (props) => {

  return (
    <TouchableWithoutFeedback
        onPress={() => props.selectItem(props.prescriptions)}
      >
      <View>
        <Icon name="arrow-dropright-circle" />
        <Text>{props.prescriptions.name}</Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default connect(null, actions)(ListItem)
