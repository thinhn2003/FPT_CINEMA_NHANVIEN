import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Menu = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', top: 5, left: 10 }}>
        <Image source={require('../icon/left-arrow.png')} style={{ width: 20, height: 20, marginRight: 5 }} />
        <Text style={{ color: 'black' }}>Menu</Text>
      </View>
      <View style={{ alignContent: 'center', justifyContent: 'center', alignItems: 'center' }}>
        <Image source={require('../img/panda.png')} style={{ width: 80, height: 80 }} />
        <Text>Ho va ten nhan vien</Text>
      </View>
      <View>
        <TouchableOpacity style={{ backgroundColor: 'rgba(221, 57, 57, 1)', margin: 10, flexDirection: 'row', borderRadius: 10 }}>
          <Image source={require('../icon/invoice.png')} style={{ width: 40, height: 40, marginLeft: 40, marginTop: 10, marginBottom: 10}} />
          <Text style={{ marginLeft: 40, color: 'white', top: 10, fontSize: 20 }}>Quản lý hóa đơn</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Menu

const styles = StyleSheet.create({

})