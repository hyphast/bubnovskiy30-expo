import React from 'react';
import {ApplicationProvider, Avatar, Icon, IconRegistry, Text} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {ThemeContext} from './src/theme-context';
import {NavigatorComponent} from './src/Navigrator/Navigator';
import * as LocalAuthentication from 'expo-local-authentication';
import {
  Alert,
  SafeAreaView,
  View,
  StatusBar as RnStatusBar,
  TouchableHighlight,
  Button,
  StyleSheet
} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import logo from './assets/logo.jpg'
import {handleBiometricAuth} from './src/Auth/BiometricAuth/handleBiometricAuth';
import SignIn from './src/SignIn/SignIn'


export default function App() {
  const [theme, setTheme] = React.useState('light');
  const [isBiometricSupported, setIsBiometricSupported] = React.useState(false);
  const [isAuth, setIsAuth] = React.useState(false);

  React.useEffect(async () => {
    await handleBiometricAuth(setIsAuth)
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
  };

  // <View style={styles.container}>
  //   <Text>Hello world!!</Text>
  //   <Image source={img} style={{ width: 305, height: 159 }} />
  //   {/*<TouchableOpacity*/}
  //   {/*  onPress={() => alert('Hello, world!')}*/}
  //   {/*  style={{ backgroundColor: 'blue' }}>*/}
  //   {/*  <Text style={{ fontSize: 20, color: '#fff' }}>Pick a photo</Text>*/}
  //   {/*</TouchableOpacity>*/}
  //   <Button title='Welcome'/>
  //   <StatusBar style="auto" />
  // </View>
  if (!isAuth) {
    return <ApplicationProvider {...eva} theme={eva[theme]}>
      {/*<SafeAreaView>*/}
      {/*  <View style={styles.container}>*/}
          {/*<Text style={{color: 'white'}}>*/}
          {/*  {isBiometricSupported*/}
          {/*    ? 'Ваше устройство не поддерживает биометрию'*/}
          {/*    : 'Вход по отпечатку пальца поддерживается на этом устройстве'}*/}
          {/*</Text>*/}

          {/*  <TouchableHighlight*/}
          {/*    style={{*/}
          {/*      height: 60*/}
          {/*    }}*/}
          {/*  >*/}
          {/*    <Button*/}
          {/*      title="Войти по отпечатку пальца"*/}
          {/*      accessoryLeft={<Icon name={'log-in'} />}*/}
          {/*      onPress={handleBiometricAuth}*/}
          {/*    />*/}
          {/*  </TouchableHighlight>*/}
          {/*<StatusBar style="auto"/>*/}


          {/*<View style={styles.details}>*/}
          {/*  <Avatar size='giant' source={logo}/>*/}
          {/*  <Text style={styles.title} category='h1'>Личный кабинет</Text>*/}
          {/*</View>*/}

          <SignIn/>
      {/*  </View>*/}
      {/*</SafeAreaView>*/}
    </ApplicationProvider>
  } else {
    return <>
      <IconRegistry icons={EvaIconsPack}/>
      <ThemeContext.Provider value={{theme, toggleTheme}}>
        <ApplicationProvider {...eva} theme={eva[theme]}>
          <NavigatorComponent/>
        </ApplicationProvider>
      </ThemeContext.Provider>
    </>
  }
}

const styles = StyleSheet.create({
  // container: {
  //   paddingTop: RnStatusBar.currentHeight,
  //   // flex: 1,
  //   marginVertical: 150,
  //   paddingLeft: 20,
  //   paddingRight: 20,
  // },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  title: {
    marginVertical: 85,
    marginHorizontal: 8,
    color: '#644394',
  },
  installButton: {
    marginVertical: 4,
  },
});
