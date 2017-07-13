import React, { Component } from 'react'
import { View, TouchableOpacity, Linking } from 'react-native'
import { Container, Content, Text, Icon, Thumbnail, Button } from 'native-base'

import { connect } from 'react-redux'
import * as actions from '../actions'

import UpdateItem from './UpdateItem'
import ItemDetailView from './ItemDetailView'

class ItemDetail extends Component {
  renderDetails() {
    if(this.props.toUpdate) {
      return <UpdateItem />
    } else {
      return <ItemDetailView />
    }
  }

  render() {
    return(
        <View showsVerticalScrollIndicator={false}>
            {this.renderDetails()}
        </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    toUpdate: state.toUpdate
  }
}

export default connect(mapStateToProps, actions)(ItemDetail);
