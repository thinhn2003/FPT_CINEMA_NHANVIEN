import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const Person = () => {
    return (
        <View>
            <View style={styles.menu}>
                <TouchableOpacity>
                    <Image source={require('../icon/left-arrow.png')} style={styles.img_menu} />
                </TouchableOpacity>
                <Text style={styles.text}>Thông tin tài khoản</Text>
            </View>
            <View style={styles.person_project}>
                <View style={styles.project_person}>
                    <View style={styles.person_img}></View>
                    <View style={styles.project_fpt}>
                        <View style={styles.fpt_project}>
                            <View style={styles.project_img}></View>
                                <View style={styles.person_fpt}>
                                    <Text style={styles.text_person}>Ho va ten</Text>
                                </View>
                                <View style={styles.person_fpt}>
                                    <Text style={styles.text_person}>Ngay sinh</Text>
                                </View>
                                <View style={styles.person_fpt}>
                                    <Text style={styles.text_person}>Chuc vu</Text>
                                </View>
                                <View style={styles.person_fpt}>
                                    <Text style={styles.text_person}>So dien thoai</Text>
                                </View>
                                <View style={styles.person_fptpoly}>
                                    <TouchableOpacity>
                                        <Text style={styles.text_person}>Doi password</Text>
                                    </TouchableOpacity>
                                </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Person

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
    person_project: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    person_img: {
        backgroundColor: 'red',
        width: 350,
        height: 110,
    },
    project_person: {
        flex: 1,
    },
    project_fpt: {
        alignItems: 'center',
        flex: 1,
    },
    fpt_project: {
        backgroundColor: 'white',
        width: 350,
        height: 800,
        alignItems: 'center',
    },
    project_img: {
        backgroundColor: 'blue',
        width: 80,
        height: 80,
        borderRadius: 80,
        bottom: 40,
    },
    person_fpt: {
        width: 220,
        height: 35,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        margin: 10,
    },
    person_fptpoly: {
        width: 140,
        height: 25,
        backgroundColor: 'rgba(112, 204, 255, 1)',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        margin: 10,
    },
    text_person: {
        color: 'white',
    },
})