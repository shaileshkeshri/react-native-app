import React, { ReactNode } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Platform } from 'react-native';
import { NativeBaseProvider } from 'native-base';

interface Props {
  page_title?: string;
  children?: ReactNode;
  navigation?: any;
}

const ScreenBase = ({ page_title = '', children, navigation }: Props) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    customHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingHorizontal: 10,
      paddingVertical: 2,
      backgroundColor: '#fff',
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    logoIcon: {
      resizeMode: 'contain',
      width: 50,
      height: Platform.OS === 'ios' ? 35 : 50,
      marginBottom: Platform.OS === 'ios' ? 10 : 0,
      alignSelf: 'flex-start'
    },
    pageTitle: {
      fontSize: 16,
      color: '#000000',
      textAlign: 'center',
      fontFamily: 'Montserrat',
      fontWeight: 'bold',
      fontStyle: 'italic',
    },
    logoText: {
      fontSize: 20,
      fontWeight: 'bold',
      fontStyle: 'italic',
      color: "#010230",
      marginLeft: 2,
      marginTop: 5,
    }
  });

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: Platform.OS === 'ios' ? '' : page_title,
    });
  }, [navigation]);

  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <View style={styles.customHeader}>
          <Text style={styles.pageTitle}>{page_title}</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('HomeScreen');
            }}
          >
            <View style={{display: 'flex',flexDirection: 'row', alignItems:'center' }}>
              <Image alt="" source={require('../../assets/img/logo.png')} style={styles.logoIcon} />
              <Text style={styles.logoText}>Mo<Text style={{color:'#0089ff',fontSize:24}}>EV</Text>ing</Text>
            </View>
          </TouchableOpacity>
        </View>
        {children}
      </View>
    </NativeBaseProvider>
  );
};

export default ScreenBase;
