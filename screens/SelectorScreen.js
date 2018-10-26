import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements';

const routes = [
    { name: 'Ruta A', id: '1' },
    { name: 'Ruta B', id: '2' }
]

export default class SelectorScreen extends React.Component {
    static navigationOptions = {
        title: 'Route Selector',
    };

    select = () => {
        const { navigate } = this.props.navigation;
        navigate('Work');
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <Card containerStyle={{padding: 0}} >
                {
                    routes.map((r, i) => {
                        return (
                            <ListItem
                            key={i}
                            title={r.name}
                            onPress={this.select}
                                />
                        );
                    })
                }
                </Card>
                <Button title="Atrás" onPress={this._goBack} />
                </ScrollView>
        );
    }

    _goBack = () => { this.props.navigation.navigate('LogIn'); };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
    },
});
