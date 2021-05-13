import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles'

function MessageScreen(props) {
    return (
        <View style={styles.container}>

            <Text style = {styles.title}>Pandemic situation is getting worse</Text>
            <Text style = {styles.text}>Travel only when neccessary. Wear a mask, use sanitizers and wash your hands frequently </Text>
            <Text style={styles.LearnMore}>Learn More </Text>
        </View>
    );
}

export default MessageScreen;