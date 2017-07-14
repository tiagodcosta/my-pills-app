import React, { Component } from 'react'
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base'
import styled from 'styled-components/native'

export default class HeaderMain extends Component {

  render(){
    return(
      <Header>
       <Left>
       </Left>
       <Body>
         <Title>My Pills</Title>
       </Body>
       <Right>
         <Button transparent>
           <Icon name='menu' />
         </Button>
       </Right>
     </Header>
    )
  }
}
