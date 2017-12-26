import React, { Component } from 'react';
import { View, Text } from 'react-native';
import SplashScreen from 'react-native-smart-splash-screen';
import styles from './style';

class HomeScreen extends Component {
    static navigationOptions = () => ({
        title: 'Início',
        tabBarLabel: 'Início',
        headerLeft: null
    });
    componentDidMount() {
        SplashScreen.close({
            animationType: SplashScreen.animationType.scale,
            duration: 850,
            delay: 500
        });
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>App2Sales Template</Text>
            </View>
        );
    }
}

export default HomeScreen;
