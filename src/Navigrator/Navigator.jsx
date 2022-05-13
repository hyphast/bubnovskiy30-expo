import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  Avatar,
  BottomNavigation,
  BottomNavigationTab,
  Button,
  Divider,
  Icon,
  Layout,
  Text
} from '@ui-kitten/components';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ThemeContext} from '../theme-context';
import {View, StyleSheet, Image} from 'react-native';
import user from '../../assets/user.jpg'
import Profile from '../Profile/Profile';
import Main from '../Main/Main'
import NewAppointment from '../NewAppointment/NewAppointment'

const {Navigator, Screen} = createBottomTabNavigator();

const HomeScreen = () => {
  // const themeContext = React.useContext(ThemeContext);

  // return <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    {/*<Text category="h1">Главная</Text>*/}
    {/*<Button onPress={themeContext.toggleTheme}>Изменить тему</Button>*/}
  {/*</Layout>*/}

  return <Main/>
};

const MakeAppointmentScreen = () => (
  // <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
  //   <Text category="h1">Запись на занятия</Text>
  // </Layout>
  <NewAppointment/>
);

const RecordsScreen = () => (
  <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text category="h1">Мои записи</Text>
  </Layout>
);

const ProfileScreen = () => (
  <Profile/>
  // <Layout>
  //   <View style={styles.info}>
  //     <Image source={user} style={{width: 130, height: 95}}/>
  //     <View style={styles.details}>
  //       <Text style={styles.title} category="h5">Иванов Иван Иванович</Text>
  //       <Text category="h5">Мужчина</Text>
  //       <Text category="h5">15.12.1993</Text>
  //     </View>
  //   </View>
  //   <Divider/>
  //   <View style={styles.edit}>
  //     <Button style={styles.EditButton} appearance="outline" status="info">Редактировать</Button>
  //   </View>
  // </Layout>
);

const BottomTabBar = ({navigation, state}) => {
  return <BottomNavigation
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab icon={<Icon name="home"/>} title="Главная"/>
    <BottomNavigationTab icon={<Icon name="plus-circle"/>} title="Запись"/>
    <BottomNavigationTab icon={<Icon name="briefcase"/>} title="Мои записи"/>
    <BottomNavigationTab icon={<Icon name="person"/>} title="Профиль"/>
  </BottomNavigation>
};

const TabNavigator = () => {
  return <Navigator tabBar={props => <BottomTabBar {...props} />}>
    <Screen name="Главная" component={HomeScreen}/>
    <Screen name="Запись" component={MakeAppointmentScreen}/>
    <Screen name="Мои записи" component={RecordsScreen}/>
    <Screen name="Профиль" component={ProfileScreen}/>
  </Navigator>
}

export const NavigatorComponent = () => {
  return (
    <NavigationContainer>
      <TabNavigator/>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  details: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginVertical: 4,
  },
  info: {
    flexDirection: 'row',
  },
  title: {
    marginHorizontal: 0,
  },
  edit: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  EditButton: {
    marginVertical: 4,
    paddingLeft: 50,
    paddingRight: 50,
  },
});
