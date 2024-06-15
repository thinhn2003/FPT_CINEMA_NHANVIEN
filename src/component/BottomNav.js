import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

import { Icon } from 'react-native-elements'
const BottomNav = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View>
                <TouchableOpacity style={styles.inputout} onPress={() => navigation.navigate('HomeScreen')}>
                    <Icon
                        style={styles.icon}
                        size={25}
                        type='material-community'
                        name='home'
                    />
                    <Text style={styles.text}>Trang chủ</Text>
                </TouchableOpacity>
            </View>


        </View>
    )
}

export default BottomNav

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        borderTopWidth: 0.5,
    },
    text: {
        marginBottom: 5
    }
})