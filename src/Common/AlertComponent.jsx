import {Alert} from 'react-native';

export const alertComponent = (title, mess, btnTxt, btnFunc) => {
  return Alert.alert(title, mess, [
    {
      text: btnTxt,
      onPress: btnFunc,
    },
  ]);
};