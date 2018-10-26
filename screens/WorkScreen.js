import React from 'react';
import {
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
        header: null,
    };

    select = () => {
        const { navigate } = this.props.navigation;
        navigate('Scanner');
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <Card title='Ruta'>
                    <Button
                        icon={{name: 'crop-free'}}
                        backgroundColor='#03A9F4'
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        onPress={this.select}
                        title='Scan QR code' />
                </Card>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
