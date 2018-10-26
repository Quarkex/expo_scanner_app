import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native';
import {
    Button,
    Text,
} from 'react-native-elements';


import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class FeedbackScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

                    <View style={styles.callout}>
                        <Text style={styles.status}>
                            El registro se ha realizado correctamente.
                        </Text>
                        <Button title="Continuar" onPress={this._goBack} />
                    </View>

                </ScrollView>

            </View>
            );
    }

    _goBack = () => { this.props.navigation.navigate('Work'); };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    contentContainer: {
        flex: 1,
        paddingTop: 30,
    },
    callout: {
        flex: 1,
        alignItems: 'center',
        marginHorizontal: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    status: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        lineHeight: 24,
        textAlign: 'center',
        marginBottom: 20,
    },
});
