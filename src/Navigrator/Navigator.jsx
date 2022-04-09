import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {BottomNavigation, BottomNavigationTab, Button, Icon, Layout, Text} from '@ui-kitten/components';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ThemeContext} from '../theme-context';

const {Navigator, Screen} = createBottomTabNavigator();

const HomeScreen = () => {
  const themeContext = React.useContext(ThemeContext);

  return <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text category="h1">Главная</Text>
    <Button onPress={themeContext.toggleTheme}>Изменить тему</Button>
  </Layout>
};

const MakeAppointmentScreen = () => (
  <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text category="h1">Запись на занятия</Text>
  </Layout>
);

const RecordsScreen = () => (
  <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text category="h1">Мои записи</Text>
  </Layout>
);

const ProfileScreen = () => (
  <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text category="h1">Профиль</Text>
  </Layout>
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
