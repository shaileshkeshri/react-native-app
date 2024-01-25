import { Box, Button, HStack, Spacer, VStack } from 'native-base';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Touchable } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import ScreenBase from '../base/baseScreen';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
interface Language {
  label: string;
  value: string;
}
interface Props {
  navigation: NativeStackNavigationProp<any>;
}
const HomeScreen: React.FC<Props> = ({navigation}: Props) => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>('');

  const languages: Language[] = [
    { label: 'English', value: 'en' },
    { label: 'हिन्दी', value: 'hi' },
  ];

  const handleContinue = () => {
    console.log("clicked", selectedLanguage)
  };
  const handleLanguagePress = (value: string) => {
    setSelectedLanguage(value);
  };


  return (
    <ScreenBase navigation={navigation}>
      <View style={styles.container}>
        <Image source={require('../../assets/icons/language.png')} style={styles.screenIcon} />
        <Box style={styles.titleBox}>
          <Text style={styles.title}>Choose Your Preferred Language</Text>
          <Text style={styles.subText}> Please select your language</Text>
        </Box>
        <Box mt={6} style={styles.languageContainer}>
        {languages.map((language) => (
          <TouchableOpacity
            key={language.value}
            style={[
              styles.languageBtn,
              selectedLanguage === language.value && styles.selectedButton,
            ]}
            onPress={() => handleLanguagePress(language.value)}
          >
            <View style={styles.iconContainer}>
              <Text style={{fontSize: 18,fontWeight:'bold',color:selectedLanguage === language.value ? 'green' : '#010101'}}>{language.value === 'en' ?'A':'अ'}</Text>
              {/* <Icon
                name={language.value === 'en' ? '' : ''}
                size={40}
                color={selectedLanguage === language.value ? 'green' : '#010101'}
              /> */}
            </View>
            <Text style={[styles.btnText, selectedLanguage === language.value && styles.selectedText]}>
              {language.label}
            </Text>
          </TouchableOpacity>
        ))}
      </Box>
        <Button
          onPress={handleContinue}
          color="#007BFF"
        >Continue</Button>
        <Text style={{color:"#444444"}}>By continuing you accept our Privacy Policy and</Text>
        <Text style={{color: "#232343"}}>Terms Of Service</Text>
      </View>
    </ScreenBase>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CCFFD2',
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  titleBox: {
    position: 'relative',
    width: '70%',
    padding: 10,
  },
  screenIcon: {
    width: 70,
    height: 70,
    alignSelf: 'flex-start',
    marginTop: 10,
    marginLeft: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'left',
    marginLeft: 10,
    marginBottom: 5,
    color: '#010101',
  },
  subText: {
    color: '#343444',
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 10,
    marginBottom: 10,
  },
  languageBtn:{
    width: 80,
    height: 80,
    borderRadius: 10,
    backgroundColor: "#F1EADA",
    borderColor: '#222222',
    borderWidth: 1,
  },
  languageContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },
  selectedButton: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  btnText: {
    color: '#010101',
    fontSize: 14,
    fontWeight: '600',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  selectedText: {
    color: 'green',
  },
iconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
