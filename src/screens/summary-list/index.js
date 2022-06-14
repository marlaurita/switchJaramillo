import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

const SummaryList = () => {
    return (<View style={styles.container}>
        <Text style={styles.text}>
            You have to much things on the list, ¡GO to the supermarket!
        </Text> 
    </View>);
}
export default SummaryList;