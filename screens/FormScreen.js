import React from 'react';
import {
    ScrollView,
    StyleSheet,
    View,
} from 'react-native';
import {
    Button,
    Text,
} from 'react-native-elements';

import t from 'tcomb-form-native';

const Form = t.form.Form;
const Message = t.struct({
    "Text": t.String,
});

const options = {
    auto: 'placeholders',
    fields: {},
};

export default class FormScreen extends React.Component {
    static navigationOptions = {
        title: "Form",
    };

    handleSubmit = () => {
        const { navigate } = this.props.navigation;
        const value = this._form.getValue(); // use that ref to get the form value
        console.log('value: ', value);
        navigate('Feedback');
    };

    render() {
        return (
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                <View style={styles.container} contentContainerStyle={styles.contentContainer}>
                    <Form style={styles.form} ref={c => this._form = c} type={Message} options={options} />
                </View>
                <View style={styles.buttons} contentContainerStyle={styles.buttonsContainer}>
                    <Button containerViewStyle={styles.buttonView} buttonStyle={styles.button} title="Cancelar" onPress={this._goBack}      />
                    <Button containerViewStyle={styles.buttonView} buttonStyle={styles.button} title="Enviar"   onPress={this.handleSubmit} />
                </View>
            </ScrollView>
        );
    };

    _goBack = () => { this.props.navigation.navigate('Work'); };

}

const styles = StyleSheet.create({
    contentContainer: {
        paddingTop: 30,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#fff',
    },
    buttons: {
        flexDirection: 'row',
    },
    button: {
        flex: 1,
    },
    buttonView: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
    },
});
