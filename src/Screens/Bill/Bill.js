import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'

const Bill = () => {
    return (
        <View style={styles.bill_project}>
            <View style={styles.menu}>
                <TouchableOpacity>
                    <Image source={require('../icon/left-arrow.png')} style={styles.img_menu} />
                </TouchableOpacity>
                <Text style={styles.text}>Quản lý hóa đơn</Text>
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
            <View style={styles.button_bill}>
                <View style={styles.button_project}>
                    <TouchableOpacity style={styles.button_opacity}>
                        <Image source={require('../icon/invoice_img.png')} style={styles.button_img}></Image>
                        <Text style={styles.button_text}>Hóa đơn 1</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.button_project}>
                    <TouchableOpacity style={styles.button_opacity}>
                        <Image source={require('../icon/invoice_img.png')} style={styles.button_img}></Image>
                        <Text style={styles.button_text}>Hóa đơn 2</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.button_project}>
                    <TouchableOpacity style={styles.button_opacity}>
                        <Image source={require('../icon/invoice_img.png')} style={styles.button_img}></Image>
                        <Text style={styles.button_text}>Hóa đơn 3</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.button_project}>
                    <TouchableOpacity style={styles.button_opacity}>
                        <Image source={require('../icon/invoice_img.png')} style={styles.button_img}></Image>
                        <Text style={styles.button_text}>Hóa đơn 4</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Bill

const styles = StyleSheet.create({
    // bill_project: {
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center'
    // },
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
        backgroundColor: 'rgba(221, 57, 57, 1)',
        width: 260,
        height: 70,
        borderRadius: 20,
        top: 40,
        left: 62,
        marginBottom: 20
    },
    button_opacity: {
        flexDirection: 'row',
    },
    button_img: {
        margin: 20,
        left: 20
    },
    button_text: {
        color: 'white',
        margin: 20
    },
    button_bill:{
        
    }
})