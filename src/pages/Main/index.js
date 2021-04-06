import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Tabs from '../../components/Tabs';
import {
  Container,
  Content,
  Card,
  CardHeader,
  CardButton,
  CardContent,
  Title,
  Description,
  DescriptionOff,
  CardFooter,
  Anotation
} from './styles';

export default Main = () => {
  const [visible, setVisible] = useState(true);
  let offSet = 0;
  const translateY = new Animated.Value(0);
  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        }
      }
    ],
    { useNativeDriver: true },
  );

  function onVisibleMoney() {
    setVisible(!visible)
  }

  function onHandlerStateChanged(event) {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let opened = false;
      const { translationY } = event.nativeEvent;

      offSet += translationY;

      if (translationY >= 100) {
        opened = true;
      } else {
        translateY.setValue(offSet);
        translateY.setOffset(0);
        offSet = 0;
      }

      Animated.timing(translateY, {
        toValue: opened ? 380 : 0,
        duration: 280,
        useNativeDriver: true,
      }).start(() => {
        offSet = opened ? 380 : 0;
        translateY.setOffset(offSet);
        translateY.setValue(0);
      });

    }
  }
  return (
    <Container>
      <Header />
      <Content>
        <Menu translateY={translateY} />
        <PanGestureHandler
          onGestureEvent={animatedEvent}
          onHandlerStateChange={onHandlerStateChanged}
        >
          <Card style={{
            transform: [{
              translateY: translateY.interpolate({
                inputRange: [-350, 0, 380],
                outputRange: [-50, 0, 380],
                extrapolate: 'clamp',
              }),
            }]
          }}>
            <CardHeader>
              <CardButton>
                <Icon name="attach-money" size={28} color="#666" />
              </CardButton>
              <CardButton onPress={() => onVisibleMoney()}>
                {visible ? (
                  <Icon name={"visibility"} size={28} color="#666" />
                ) : (
                  <Icon name={"visibility-off"} size={28} color="#666" />
                )}
              </CardButton>
            </CardHeader>
            <CardContent>
              <Title>Saldo disponível</Title>
              {visible ? (
                <Description>R$ 10.895.960,00</Description>
              ) : (
                <DescriptionOff />
              )}
            </CardContent>
            <CardFooter>
              <Anotation>
                Transferência de R$ 545,00 recebida de Prosperidade hoje às 10:00 h
            </Anotation>
            </CardFooter>
          </Card>
        </PanGestureHandler>
      </Content>
      <Tabs translateY={translateY} />
    </Container>
  );
}