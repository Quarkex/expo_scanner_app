import React from 'react';
import {
    View,
    ScrollView,
    StyleSheet,
} from 'react-native';
import {
    Button,
    Card,
    ListItem,
    Text,
} from 'react-native-elements';

export default class WorkScreen extends React.Component {
    static navigationOptions = {
        title: 'Ruta A',
    };

    select = () => {
        const { navigate } = this.props.navigation;
        navigate('Scanner');
    }

    render() {
        return (
            <ScrollView style={styles.container} contentContainerStyle={styles.scrollContainer}>
                <View style={styles.viewContainer}>
                    <Button
                        icon={{name: 'crop-free'}}
                        backgroundColor='#03A9F4'
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        containerViewStyle={styles.buttonView}
                        onPress={this.select}
                        title='Scan QR code' />
                </View>
                <Button containerViewStyle={styles.buttonView} title="Atrás" onPress={this._goBack} />
            </ScrollView>
        );
    }

    _goBack = () => { this.props.navigation.navigate('Selector'); };

}

const styles = StyleSheet.create({
    scrollContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    viewContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        width: '100%',
        flexDirection: 'column',
    },
    container: {
        backgroundColor: '#fff',
    },
    buttonView: {
        paddingTop: 10,
        paddingBottom: 10,
    },
});
