import React, { Component } from 'react'
import { View } from 'react-native'
import { Spinner } from 'native-base'

const Loader = ({size}) =>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Spinner size={size || 'small'} color='blue'/>
      </View>

export default Loader
