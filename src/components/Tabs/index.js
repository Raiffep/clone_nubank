import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, TabsContainer, TabButton, TabItem, TabText } from './styles';

export default Tabs = ({ translateY }) => {
  return (
    <Container style={{
      transform: [{
        translateY: translateY.interpolate({
          inputRange: [0, 380],
          outputRange: [0, 30],
          extrapolate: 'clamp',
        })
      }],
      opacity: translateY.interpolate({
        inputRange: [0, 380],
        outputRange: [1, 0.3],
        extrapolate: 'clamp',
      })
    }}>
      <TabsContainer>
        <TabButton onPress={() => { }}>
          <TabItem>
            <Icon name="person-add" size={24} color='#FFF' />
            <TabText>Indicar amigos</TabText>
          </TabItem>
        </TabButton>
        <TabButton onPress={() => { }}>
          <TabItem>
            <Icon name="chat-bubble-outline" size={24} color='#FFF' />
            <TabText>Cobrar</TabText>
          </TabItem>
        </TabButton>
        <TabButton onPress={() => { }}>
          <TabItem>
            <Icon name="arrow-downward" size={24} color='#FFF' />
            <TabText>Depositar</TabText>
          </TabItem>
        </TabButton>
        <TabButton onPress={() => { }}>
          <TabItem>
            <Icon name="arrow-upward" size={24} color='#FFF' />
            <TabText>Transferir</TabText>
          </TabItem>
        </TabButton>
        <TabButton onPress={() => { }}>
          <TabItem>
            <Icon name="lock" size={24} color='#FFF' />
            <TabText>Bloquear cartão</TabText>
          </TabItem>
        </TabButton>
      </TabsContainer>
    </Container>
  )
}