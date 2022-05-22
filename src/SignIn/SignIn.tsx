import React, {ReactElement} from 'react';
import {StyleSheet, View, TouchableWithoutFeedback} from 'react-native';
import {Button, Input, Text, Icon, Avatar} from '@ui-kitten/components';
import {ImageOverlay} from './extra/image-overlay.component';
import {PersonIcon} from './extra/icons';
import {KeyboardAvoidingView} from './extra/3rd-party';

export default ({navigation}): React.ReactElement => {

    const [email, setEmail] = React.useState<string>();
    const [password, setPassword] = React.useState<string>();
    const [passwordVisible, setPasswordVisible] = React.useState<boolean>(false);

    const onSignInButtonPress = (): void => {
        navigation && navigation.goBack();
    };

    const onSignUpButtonPress = (): void => {
        navigation && navigation.navigate('SignUp3');
    };

    const onForgotPasswordButtonPress = (): void => {
        navigation && navigation.navigate('ForgotPassword');
    };

    const onPasswordIconPress = (): void => {
        setPasswordVisible(!passwordVisible);
    };

    const renderPasswordIcon = (props): ReactElement => (
        <TouchableWithoutFeedback onPress={onPasswordIconPress}>
            <Icon {...props} name={passwordVisible ? 'eye-off' : 'eye'}/>
        </TouchableWithoutFeedback>
    );

    return (
        <KeyboardAvoidingView>
            <ImageOverlay
                style={styles.container}
                source={require('./assets/background.jpeg')}>
                <View
                    style={styles.headerContainer}
                >
                    {/*<Avatar style={{width: '100', height: '100'}} size='giant' source={require('./assets/bubnovsk.png')}/>*/}
                    <Text
                        category='h1'
                        status='control'
                    >
                        Личный кабинет
                    </Text>
                    <Text
                        style={styles.signInLabel}
                        category='s1'
                        status='control'
                    >
                        Войти в аккаунт
                    </Text>
                </View>
                <View
                    style={styles.formContainer}
                >
                    <Input
                        status='control'
                        placeholder='Email'
                        // accessoryLeft={() => <Icon name="home"/>}
                        value={email}
                        onChangeText={setEmail}
                    />
                    <Input
                        style={styles.passwordInput}
                        status='control'
                        placeholder='Пароль'
                        // accessoryRight={<renderPasswordIcon />}
                        value={password}
                        secureTextEntry={!passwordVisible}
                        onChangeText={setPassword}
                    />
                    <View
                        style={styles.forgotPasswordContainer}
                    >
                        <Button
                            style={styles.forgotPasswordButton}
                            appearance='ghost'
                            status='control'
                            onPress={onForgotPasswordButtonPress}>
                            Забыли пароль?
                        </Button>
                    </View>
                </View>
                <Button
                    style={styles.signInButton}
                    status='control'
                    size='giant'
                    onPress={onSignInButtonPress}>
                    Войти
                </Button>
                <Button
                    style={styles.signUpButton}
                    appearance='ghost'
                    status='control'
                    onPress={onSignUpButtonPress}>
                    или Зарегистрироваться
                </Button>
                {/*</>*/}
            </ImageOverlay>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 216,
    },
    formContainer: {
        flex: 1,
        marginTop: 32,
        paddingHorizontal: 16,
    },
    signInLabel: {
        marginTop: 16,
    },
    signInButton: {
        marginHorizontal: 16,
    },
    signUpButton: {
        marginVertical: 12,
        marginHorizontal: 16,
    },
    forgotPasswordContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    passwordInput: {
        marginTop: 16,
    },
    forgotPasswordButton: {
        paddingHorizontal: 0,
    },
});

