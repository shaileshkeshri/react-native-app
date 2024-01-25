import React, { useEffect } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ScreenBase from '../base/baseScreen';

const WelcomeScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('HomeScreen');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <ScreenBase page_title="" navigation={navigation}>
      <View style={styles.container}>
        <Image source={require('../../assets/img/logo.png')} style={styles.logo} />
        <Text style={{color: '#00ff03', fontSize: 16, textAlign:'center'}}>Welcome To MoEVing</Text>
      </View>
    </ScreenBase>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});

export default WelcomeScreen;
