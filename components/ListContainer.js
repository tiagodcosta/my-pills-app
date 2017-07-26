import React, { Component } from 'react'
import { View, StyleSheet, ListView } from 'react-native'
import { Container, Content, Icon, Text } from 'native-base'

import { connect } from 'react-redux'
import _ from 'lodash'

import ListItem from './ListItem'
import ItemDetail from './ItemDetail'
import { loadInitialItems } from '../actions'

class ListContainer extends Component {
  static navigationOptions = {
      tabBarLabel: 'Prescriptions',
      tabBarIcon: ({ tintColor }) =>
        <Icon style={{color: '#44ad8e' }} name="ios-medkit" />
  }

  componentWillMount() {
    this.props.loadInitialItems();
  }

  renderInitialView() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
      });

      this.dataSource = ds.cloneWithRows(this.props.prescriptions)

      if(this.props.detailView === true) {
          return  <ItemDetail />
      } else {
          return(
              <View>
                  <Text style={{alignSelf: 'center', marginTop: 20, marginBottom: 20, color: '#44ad8e'}}>Your list of medications</Text>                  
                  {(this.dataSource == null) ?
                  <ListView
                      enableEmptySections={true}
                      dataSource={this.dataSource}
                      renderRow={(rowData) => 
                        <ListItem prescriptions={rowData} />
                      }
                    /> :
                    <Text>The list is empty</Text>
                  }
             </View>
          )
       }
    }

  render() {
    return(
      <Content padder>
          {this.renderInitialView()}
      </Content>
    )
  }
}

const mapStateToProps = state => {
  const prescriptions = _.map(state.prescriptions, (val, uid) => {
    return { ...val, uid };
  })

  return {
    prescriptions,
    detailView: state.detailView
  };
}

export default connect(mapStateToProps, {loadInitialItems})(ListContainer);
