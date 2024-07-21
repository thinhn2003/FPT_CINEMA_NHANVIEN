import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, Modal, FlatList } from 'react-native'
import React, { useState } from 'react'

const Searchmovie = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setModalVisible(false);
  };

  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.categoryButton,
        selectedCategory === item.category && styles.selectedCategory,
      ]}
      onPress={() => handleCategorySelect(item.category)}
    >
      <Text style={styles.categoryButtonText}>{item.label}</Text>
    </TouchableOpacity>
  );

  const categories = [
    { label: 'Hành động', category: 'action' },
    { label: 'Hài', category: 'comedy' },
    { label: 'Kịch', category: 'drama' },
    { label: 'Lãng mạn', category: 'romance' },
    { label: 'Phiêu lưu', category: 'adventure' },
    { label: 'Kinh dị', category: 'horror' },
    { label: 'Hoạt hình', category: 'animation' },
    { label: 'Tài liệu', category: 'documentary' },
    { label: 'Viễn tưởng', category: 'sci-fi' },
    { label: 'Tình cảm', category: 'romantic' },
  ];
  return (
    <View>
      <View style={styles.menu}>
        <TouchableOpacity>
          <Image source={require('../icon/left-arrow.png')} style={styles.img_menu} />
        </TouchableOpacity>
        <Text style={styles.text}>Tim kiem va loc</Text>
      </View>
      <View style={styles.text_search}>
        <TextInput style={styles.textInput}
          placeholder="Search...">
        </TextInput>
        <TouchableOpacity>
          <View style={styles.button_background}>
            <Image source={require('../icon/magnifying-glass.png')} style={styles.button_search}></Image>
          </View>
          {/* <Image source={require('../icon/magnifying-glass.png')}></Image> */}
        </TouchableOpacity>
      </View>
      <View style={styles.button_project}>
        <View style={styles.button_filter}>
          <Text style={styles.filter_text}>Thể loại</Text>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/2516/2516722.png' }} style={styles.filter_img}></Image>
          </TouchableOpacity>
          <Modal animationType="slide" transparent={true} visible={modalVisible}>
            <View style={styles.modalproject}>
              <View style={styles.modalContent}>
                <TouchableOpacity onPress={() => setModalVisible(false)}>
                  <Text style={styles.modalClose}>&times;</Text>
                </TouchableOpacity>
                <FlatList
                  data={categories}
                  renderItem={renderCategoryItem}
                  numColumns={5}
                  keyExtractor={(item) => item.category}
                />
              </View>
            </View>
          </Modal>
        </View>
        <View style={styles.button_filter}>
          <Text style={styles.filter_text}>Đạo diễn</Text>
          <TouchableOpacity>
            <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/2516/2516722.png' }} style={styles.filter_img}></Image>
          </TouchableOpacity>
        </View>
        <View style={styles.button_filter}>
          <Text style={styles.filter_text}>Diễn Viên</Text>
          <TouchableOpacity>
            <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/2516/2516722.png' }} style={styles.filter_img}></Image>
          </TouchableOpacity>
        </View>
        <View style={styles.button_filter}>
          <Text style={styles.filter_text}>Quốc Gia</Text>
          <TouchableOpacity>
            <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/2516/2516722.png' }} style={styles.filter_img}></Image>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Searchmovie

const styles = StyleSheet.create({
  menu: {
    flexDirection: 'row',
    alignItems: 'center',
    // top: 5,
    // left: 10,
    // backgroundColor: 'rgba(248, 94, 94, 1)',
    height: 40
  },
  img_menu: {
    width: 20,
    height: 20,
    marginRight: 5,
    left: 10
  },
  text: {
    color: 'black',
    left: 10
  },
  text_search: {
    backgroundColor: 'rgba(248, 94, 94, 1)',
    padding: 4,
    top: 20,
    borderRadius: 10,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'row'
  },
  textinput_search: {
    backgroundcolor: 'black',

  },
  textinput_color: {
    backgroundcolor: 'rgba(255, 255, 255, 1)'
  },
  textInput: {
    height: 40,
    backgroundColor: 'white',
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: 'white',
    // borderRadius: 10,
    marginLeft: 4,
    // marginRight: 4,
    width: 260,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10
  },
  button_search: {
    // backgroundColor: 'white',
    width: 20,
    height: 20,
    left: 10,
    top: 10,
  },
  button_background: {
    backgroundColor: 'white',
    height: 40,
    width: 44,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10
  },
  button_project: {
    marginTop: 35,
    flexDirection: 'row',
  },
  button_filter: {
    backgroundColor: 'rgba(112, 204, 255, 1)',
    width: 75,
    height: 29,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
    margin: 8,
  },
  filter_text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 10,
    marginRight: 4,
  },
  filter_img: {
    width: 14,
    height: 14,
  },
  modalproject: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  modalContent: {
    backgroundColor: '#fefefe',
    padding: 20,
    borderWidth: 1,
    borderColor: '#888',
    width: 320,
    height: 380,
  },
  modalClose: {
    color: '#aaa',
    fontSize: 28,
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    marginBottom: 10,
  },
  categoryButton: {
    padding: 4,
    marginBottom: 10,
    backgroundColor: 'rgba(112, 204, 255, 1)',
    margin: 4,
  },
  categoryButtonText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 10,
  },
  selectedCategory: {
    backgroundColor: 'red',
  },
})