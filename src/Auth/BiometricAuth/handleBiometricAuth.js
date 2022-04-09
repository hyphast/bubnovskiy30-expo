import * as LocalAuthentication from 'expo-local-authentication';
import {alertComponent} from '../../Common/AlertComponent';

const fallBackToDefaultAuth = () => {
  console.log('Войдите с помощью логина и пароля');
};

export const handleBiometricAuth = async (setIsAuth) => {
  // Check if hardware supports biometrics
  const isBiometricAvailable = await LocalAuthentication.hasHardwareAsync();
  // setIsBiometricSupported(isBiometricAvailable)

  // Fallback to default authentication method (password) if Fingerprint is not available
  if (!isBiometricAvailable)
    return alertComponent(
      'Введите ваш пароль',
      'Биометрия не поддерживается на этом устройстве',
      'OK',
      () => fallBackToDefaultAuth()
    );

  // Check Biometrics types available (Fingerprint, Facial recognition, Iris recognition)
  let supportedBiometrics;
  if (isBiometricAvailable)
    supportedBiometrics = await LocalAuthentication.supportedAuthenticationTypesAsync();

  // Check Biometrics are saved locally in user's device
  const savedBiometrics = await LocalAuthentication.isEnrolledAsync();
  if (!savedBiometrics)
    return alertComponent(
      'На этом устройстве не найдено отпечатков',
      'Пожалуйста, войдите с помощью логина и пароля',
      'OK',
      () => fallBackToDefaultAuth()
    );

  // Authenticate use with Biometrics (Fingerprint, Facial recognition, Iris recognition)

  const biometricAuth = await LocalAuthentication.authenticateAsync({
    promptMessage: 'Вход',
    cancelLabel: 'Отмена',
    disableDeviceFallback: true,
  });
  // Log the user in on success
  if (biometricAuth.success) {
    console.log('success');
    setIsAuth(true)
  }

  console.log({isBiometricAvailable});
  console.log({supportedBiometrics});
  console.log({savedBiometrics});
  console.log({biometricAuth});
};