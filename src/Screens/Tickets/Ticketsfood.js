import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'

const Ticketsfood = () => {
    return (
        <View>
            <View style={styles.menu}>
                <TouchableOpacity>
                    <Image source={require('../icon/left-arrow.png')} style={styles.img_menu} />
                </TouchableOpacity>
                <Text style={styles.text}>Quản lý đặt vé</Text>
            </View>
            <View style={styles.movie_food}>
                <Image source={require('../img/panda.png')} style={styles.movie_img}></Image>
                <View>
                    <Text style={styles.movie_text}>Tên phim</Text>
                    <Text style={styles.movie_text}>Thời gian xem phim - Ngày xem phim</Text>
                </View>
            </View>
            <View style={styles.food_text}>
                <Text style={styles.food_project}>Chọn mua food</Text>
            </View>
            <View style={styles.project_fpt}>
                <ScrollView contentContainerStyle={styles.scrollViewContent}>
                    <View style={styles.movie_food}>
                        <Image source={require('../img/panda.png')} style={styles.movie_img} />
                        <View style={styles.movie_info}>
                            <Text style={styles.movie_name}>INSIDE OUT FOOD 1</Text>
                            <Text style={styles.movie_price}>200.000vnđ</Text>
                        </View>
                    </View>
                    <View style={styles.movie_food}>
                        <Image source={require('../img/panda.png')} style={styles.movie_img} />
                        <View style={styles.movie_info}>
                            <Text style={styles.movie_name}>INSIDE OUT FOOD 2</Text>
                            <Text style={styles.movie_price}>200.000vnđ</Text>
                        </View>
                    </View>
                    <View style={styles.movie_food}>
                        <Image source={require('../img/panda.png')} style={styles.movie_img} />
                        <View style={styles.movie_info}>
                            <Text style={styles.movie_name}>INSIDE OUT FOOD 3</Text>
                            <Text style={styles.movie_price}>200.000vnđ</Text>
                        </View>
                    </View>
                    <View style={styles.movie_food}>
                        <Image source={require('../img/panda.png')} style={styles.movie_img} />
                        <View style={styles.movie_info}>
                            <Text style={styles.movie_name}>INSIDE OUT FOOD 4</Text>
                            <Text style={styles.movie_price}>200.000vnđ</Text>
                        </View>
                    </View>
                    <View style={styles.movie_food}>
                        <Image source={require('../img/panda.png')} style={styles.movie_img} />
                        <View style={styles.movie_info}>
                            <Text style={styles.movie_name}>INSIDE OUT FOOD 5</Text>
                            <Text style={styles.movie_price}>200.000vnđ</Text>
                        </View>
                    </View>
                    <View style={styles.movie_food}>
                        <Image source={require('../img/panda.png')} style={styles.movie_img} />
                        <View style={styles.movie_info}>
                            <Text style={styles.movie_name}>INSIDE OUT FOOD 6</Text>
                            <Text style={styles.movie_price}>200.000vnđ</Text>
                        </View>
                    </View>
                    <View style={styles.movie_food}>
                        <Image source={require('../img/panda.png')} style={styles.movie_img} />
                        <View style={styles.movie_info}>
                            <Text style={styles.movie_name}>INSIDE OUT FOOD 7</Text>
                            <Text style={styles.movie_price}>200.000vnđ</Text>
                        </View>
                    </View>
                    <View style={styles.movie_food}>
                        <Image source={require('../img/panda.png')} style={styles.movie_img} />
                        <View style={styles.movie_info}>
                            <Text style={styles.movie_name}>INSIDE OUT FOOD 8</Text>
                            <Text style={styles.movie_price}>200.000vnđ</Text>
                        </View>
                    </View>
                    <View style={styles.movie_food}>
                        <Image source={require('../img/panda.png')} style={styles.movie_img} />
                        <View style={styles.movie_info}>
                            <Text style={styles.movie_name}>INSIDE OUT FOOD 9</Text>
                            <Text style={styles.movie_price}>200.000vnđ</Text>
                        </View>
                    </View>
                    <View style={styles.movie_food}>
                        <Image source={require('../img/panda.png')} style={styles.movie_img} />
                        <View style={styles.movie_info}>
                            <Text style={styles.movie_name}>INSIDE OUT FOOD 10</Text>
                            <Text style={styles.movie_price}>200.000vnđ</Text>
                        </View>
                    </View>
                    <View style={styles.movie_food}>
                        <Image source={require('../img/panda.png')} style={styles.movie_img} />
                        <View style={styles.movie_info}>
                            <Text style={styles.movie_name}>INSIDE OUT FOOD 10</Text>
                            <Text style={styles.movie_price}>200.000vnđ</Text>
                            {/* <View>
                                <TouchableOpacity>
                                    <Image source={require('../img/panda.png')} style={styles.movie_img}></Image>
                                </TouchableOpacity>
                            </View> */}
                        </View>
                        <View style={styles.button_food}>
                            <TouchableOpacity>
                                <Image source={require('../icon/minus.png')} style={styles.button_img}></Image>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image source={require('../icon/addition.png')} style={styles.button_img}></Image>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
            <View style={styles.button_project}>
                <View style={styles.button_money}>
                    <Text style={styles.button_text}>Tổng tiền</Text>
                    <Text style={styles.money_text}>4.000.000.000</Text>
                </View>
                <View style={styles.button_continue}>
                    <TouchableOpacity>
                        <Text style={styles.continue_text}>Tiếp tục</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View>
            </View>
        </View>
    )
}

export default Ticketsfood

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
    movie_food: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        backgroundColor: 'rgba(112, 204, 255, 1)',
        borderRadius: 10,
        margin: 5,
    },
    movie_img: {
        width: 50,
        height: 50,
        // marginRight: 10,
        margin: 10,
    },
    movie_name: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
    movie_text:{
        color: 'white',
    },
    movie_price: {
        fontSize: 14,
        color: 'white',
    },
    food_project: {
        color: 'black',
        left: 10,
    },
    // movie_info: {
    //     flex: 1,
    // },
    scrollViewContent: {
        flexGrow: 1,
        // alignItems: 'center',
        // paddingVertical: 0,
        // paddingBottom: 10,
    },
    project_fpt: {
        height: 380,
    },
    button_food: {
        flexDirection: 'row',
    },
    button_img: {
        width: 20,
        height: 20,
        margin: 20,
        left: 20,
    },
    button_project: {
        backgroundColor: 'rgba(250, 86, 86, 1)',
        marginBottom: 20,
        borderRadius: 10,
        width: '100%',
        height: '100%',
      },
      button_money: {
        flexDirection: 'row',
        margin: 10,
      },
      button_text: {
        marginRight: 170,
        color: 'white',
      },
      money_text: {
        color: 'white',
      },
      button_continue: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(221, 57, 57, 1)',
        marginRight: 40,
        marginLeft: 40,
        marginBottom: 40,
        // marginTop: 10,
        borderRadius: 10,
      },
      continue_view: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      },
      continue_text: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        padding: 4,
        // alignItems: 'center',
        // justifyContent: 'center',
      },
})