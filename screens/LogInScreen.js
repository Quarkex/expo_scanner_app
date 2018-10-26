import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  AppRegistry,
  View,
} from 'react-native';
import { Text, Button } from 'react-native-elements';

import t from 'tcomb-form-native';

import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

const Form = t.form.Form;
const User = t.struct({
    "Usuario": t.String,
    "Contraseña": t.String,
});

const options = {
    fields: {
        "Usuario": {
            error: 'El usuario es obligatorio',
        },
        "Contraseña": {
            error: 'La contraseña el obligatoria',
            password: true,
            secureTextEntry: true,
        },
    }
};

export default class LogInScreen extends React.Component {

    static navigationOptions = {
        header: null,
    };

    handleSubmit = () => {
        const { navigate } = this.props.navigation;
        const value = this._form.getValue(); // use that ref to get the form value
        console.log('value: ', value);
        navigate('Selector');
    }
    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                <View style={styles.logoContainer}>
                    <Image
                        source={ require('../assets/images/logo.png') }
                        style={styles.logoImage}
                    />
                </View>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>Log In</Text>
                </View>
                <View style={styles.container}>
                    <Form ref={c => this._form = c} type={User} options={options} />
                    <Button
                        title="Entrar"
                        onPress={this.handleSubmit}
                    />
                </View>
            </ScrollView>
            );
            };
            }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  headerContainer: {
    marginTop: 50,
    padding: 20,
  },
  headerText: {
    fontSize: 30,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 80,
    marginBottom: 20,
  },
  logoImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
});
