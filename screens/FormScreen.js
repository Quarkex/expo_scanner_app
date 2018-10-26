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
                <View style={styles.container}>
                    <Form ref={c => this._form = c} type={Message} options={options} />
                    <Button
                        title="Enviar"
                        onPress={this.handleSubmit}
                    />
                </View>
                <Button title="Cancelar" onPress={this._goBack} />
            </ScrollView>
        );
    };

    _goBack = () => { this.props.navigation.navigate('Work'); };

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    contentContainer: {
        paddingTop: 30,
    },
});
