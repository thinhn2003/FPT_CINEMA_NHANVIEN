import { Image, StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native'
import React from 'react'

const Menu = () => {
  return (
    <View style={styles.bill_project}>
      <View style={styles.menu}>
        <TouchableOpacity>
          <Image source={require('../icon/left-arrow.png')} style={styles.img_menu} />
        </TouchableOpacity>
        <Text style={styles.text}>Menu</Text>
      </View>
      <View style={styles.menu_nhanvien}>
        <Image source={require('../img/panda.png')} style={styles.img_nhanvien}></Image>
        <Text>Họ tên nhân viên</Text>
      </View>
      <View style={styles.menu_nhanvien}>
        <View style={styles.button_bill}>
          <View style={styles.button_project}>
            <TouchableOpacity style={styles.button_opacity}>
              <Image source={require('../icon/invoice_img.png')} style={styles.button_img}></Image>
              <Text style={styles.button_text}>Quản lý hóa đơn</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button_project}>
            <TouchableOpacity style={styles.button_opacity}>
              <Image source={require('../icon/ticket.png')} style={styles.button_img}></Image>
              <Text style={styles.button_text}>Quản lý đặt vé</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button_project}>
            <TouchableOpacity style={styles.button_opacity}>
              <Image source={require('../icon/analysis.png')} style={styles.button_img}></Image>
              <Text style={styles.button_text}>Quản lý thống kê</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button_project}>
            <TouchableOpacity style={styles.button_opacity}>
              <Image source={require('../icon/person.png')} style={styles.button_img}></Image>
              <Text style={styles.button_text}>Thông tin tài khoản</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button_project}>
            <TouchableOpacity style={styles.button_opacity}>
              <Image source={require('../icon/promo-code.png')} style={styles.button_img}></Image>
              <Text style={styles.button_text}>Quản lý khuyến mãi</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.button_logout}>
          <TouchableOpacity style={styles.button_opacity}>
            <Text style={styles.text_logout}>Log out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Menu

const styles = StyleSheet.create({
  menu_nhanvien: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    top: 20
  },
  menu: {
    flexDirection: 'row',
    alignItems: 'center',
    // top: 5,
    // left: 10,
    backgroundColor: 'rgba(248, 94, 94, 1)',
    height: 40
  },
  img_menu: {
    width: 20,
    height: 20,
    marginRight: 5,
    left: 10
  },
  text: {
    color: 'white',
    left: 10
  },
  img_nhanvien: {
    width: 70,
    height: 70,
  },
  button_background: {
    backgroundColor: 'white',
    height: 40,
    width: 44,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10
  },
  button_project: {
    backgroundColor: 'rgba(221, 57, 57, 1)',
    width: 282,
    height: 37,
    borderRadius: 10,
    // top: 40,
    // left: 62,
    marginBottom: 20
  },
  button_opacity: {
    flexDirection: 'row',
  },
  button_img: {
    margin: 10,
    left: 10,
    width: 20,
    height: 20
  },
  button_text: {
    color: 'white',
    margin: 10
  },
  button_bill: {
    top: 20,
  },
  button_logout: {
    backgroundColor: 'rgba(221, 57, 57, 1)',
    top: 20,
    width: 155,
    height: 38,
    borderRadius: 10,
    alignItems: 'center',
  },
  text_logout: {
    color: 'white',
    margin: 10,
    alignItems: 'center',
  }
})