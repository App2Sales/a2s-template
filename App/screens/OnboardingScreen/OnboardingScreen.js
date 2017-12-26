// import liraries
import React, { Component } from 'react';
import { View, Text, AsyncStorage, TouchableOpacity } from 'react-native';
import styles from './styles';

// create a component
class OnboardingScreen extends Component {
    static navigationOptions = () => ({
        header: null
    });
    componentWillMount = () => {
        AsyncStorage.getItem('@firstOpen', (error, result) => {
            if (result) {
                this.props.navigation.navigate('TABS');
            }
        });
    }

    jumpStep = () => {
        AsyncStorage.setItem('@firstOpen', 'true');
        this.props.navigation.navigate('TABS');
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>OnboardingScreen</Text>
                <TouchableOpacity style={styles.button} onPress={this.jumpStep}>
                    <Text style={styles.buttonText}>Pular</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

// make this component available to the app
export default OnboardingScreen;
