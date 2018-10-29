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

import API from '../constants/API';

const Form = t.form.Form;
const User = t.struct({
    "Usuario": t.String,
    "Contraseña": t.String,
});

const options = {
    auto: 'placeholders',
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

    handleSubmit = async () => {
        const { navigate } = this.props.navigation;
        const value = this._form.getValue() == null ? {"Usuario": "", "Contraseña": ""} : this._form.getValue(); // use that ref to get the form value

        console.log(API.server + '/login');
        fetch(API.server + '/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "user": value["Usuario"],
                "password": value["Contraseña"]
            })
        })
            .then(response => response.json())
            .then(response => {
                console.log(response);
                if ( response["status"] == "success"){
                    navigate('Selector');
                } else {
                    navigate('LogIn');
                }
            })
            .catch((error) => {
                console.error(error);
            });

    }

    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            <ScrollView style={styles.scroll} contentContainerStyle={styles.mainContainer}>
                <View style={styles.mainContainer}>
                    <View style={styles.logoContainer}>
                        <Image
                            source={ require('../assets/images/logo.png') }
                            style={styles.logoImage}
                        />
                    </View>
                    <View style={styles.headerContainer}>
                        <Text style={styles.headerText}>Log In</Text>
                    </View>
                    <View style={styles.contentContainer}>
                        <Form ref={c => this._form = c} type={User} options={options} />
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button
                            title="Entrar"
                            onPress={this.handleSubmit}
                        />
                    </View>
                </View>
            </ScrollView>
            );
            };
            }

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: '#fbfbfb',
  },
  container: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
  },
  logoContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContainer: {
    paddingLeft: '33%',
    paddingRight: '33%',
  },
  contentContainer: {
    paddingTop: 40,
    paddingLeft: '20%',
    paddingRight: '20%',
    flex: 1,
  },
  buttonContainer: {
    marginTop: 10,
    marginBottom: 10,
  },
  headerText: {
    fontSize: 30,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  logoImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
});
