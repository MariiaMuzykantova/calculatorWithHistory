import React from 'react';
import { StyleSheet, Button, Text, View, FlatList } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class History extends React.Component {
    static navigationOptions = { title: 'History', };

    constructor(props) {
        super(props);
        this.state = { data: props.navigation.state.params.history }
    }

    render() {

        return (
            <View style={styles.container}>
                <Text>History: {"\n"}</Text>
                <FlatList data={this.state.data}
                    renderItem={({ item }) =>
                        <Text>{item.key}</Text>}
                />

            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});