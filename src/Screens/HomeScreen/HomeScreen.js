import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BottomNav from '../../component/BottomNav'

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
   
     
      <View style={styles.bottomnav}>
        <BottomNav navigation={navigation} />
      </View>




    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  bottomnav: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    zIndex: 4
  }
})