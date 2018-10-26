import React from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements';

const routes = [
    { name: 'Ruta A', id: '1' },
    { name: 'Ruta B', id: '2' },
    { name: 'Ruta C', id: '3' },
    { name: 'Ruta D', id: '4' },
    { name: 'Ruta E', id: '5' },
    { name: 'Ruta F', id: '6' },
    { name: 'Ruta G', id: '7' },
    { name: 'Ruta H', id: '8' },
    { name: 'Ruta I', id: '9' },
    { name: 'Ruta J', id: '10' },
    { name: 'Ruta K', id: '11' },
    { name: 'Ruta L', id: '12' },
    { name: 'Ruta M', id: '13' },
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
            <View style={styles.container}>
                <ScrollView>
                    <Card>
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
                </ScrollView>
                <View>
                    <Button containerViewStyle={styles.buttonView} title="Atrás" onPress={this._goBack} />
                </View>
            </View>
        );
    }

    _goBack = () => { this.props.navigation.navigate('LogIn'); };
}

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
    },
    container: {
        flex: 1,
        padding: 0,
        backgroundColor: '#fbfbfb',
    },
    buttonView: {
        paddingTop: 10,
        paddingBottom: 10,
    },
});
