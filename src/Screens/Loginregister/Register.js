import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const Register = () => {
    return (
        <View style={styles.login_project}>
            <View style={styles.hello_login}>
                <Text style={styles.hello_text}>Đăng ký</Text>
            </View>
            <View style={styles.login_register}>
                <View style={styles.register_login}>
                    <View>
                        <Text style={styles.text_loginpassword}>Họ tên</Text>
                        <TextInput
                            style={styles.customInput}
                        />
                        <Text style={styles.text_loginpassword}>Email</Text>
                        <TextInput
                            style={styles.customInput}
                        />
                        <Text style={styles.text_loginpassword}>Password</Text>
                        <TextInput
                            style={styles.customInput}
                            secureTextEntry={true}
                        />
                        <Text style={styles.text_loginpassword}>Số điện thoại</Text>
                        <TextInput
                            style={styles.customInput}
                            keyboardType='numeric'
                        />
                    </View>
                    <View style={styles.button_login}>
                        <TouchableOpacity>
                            <Text style={styles.button_text}>Đăng ký</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.button_register}>
                        <Text style={styles.text_register}>Bạn đã có tài khoản ?</Text>
                        <TouchableOpacity>
                            <Text style={styles.register_text}>Đăng nhập ngay</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <Image source={{ uri: 'https://i.pinimg.com/originals/79/ed/f5/79edf5564289c255bc5dad36ca8ecf73.jpg' }} style={styles.login_img}></Image>
        </View>
    )
}

export default Register

const styles = StyleSheet.create({
    login_project: {
        backgroundColor: 'red',
        flex: 1,
    },
    customInput: {
        /* Một số thuộc tính để tạo kiểu cho TextInput */
        padding: 4,
        fontSize: 10,
        borderBottomColor: 'rgba(68, 89, 109, 1)',
        borderBottomWidth: 1,
        borderRadius: 4,
    },
    text_loginpassword: {
        color: 'rgba(221, 57, 57, 1)',
        top: 8,
    },
    forgot_password: {
        marginLeft: 200,
        marginBottom: 20,
    },
    textforgot_password: {
        color: 'rgba(68, 89, 109, 1)',
        fontSize: 14,
    },
    button_login: {
        backgroundColor: 'rgba(221, 57, 57, 1)',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 65,
        marginBottom: 20,
        borderRadius: 10,
        height: 35,
    },
    button_text: {
        color: 'white',
        fontWeight: 'bold',
    },
    button_register: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
    },
    text_register: {
        fontSize: 10,
        marginRight: 5,
    },
    register_text: {
        color: 'rgba(23, 127, 142, 1)',
        fontWeight: 'bold',
    },
    hello_login: {
        height: 140,
        marginLeft: 220,
        top: 110,
        backgroundColor: 'rgba(221, 57, 57, 1)',
        marginRight: 40,
        borderTopLeftRadius: 65,
        alignItems: 'center',
        justifyContent: 'center',
    },
    hello_text: {
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'capitalize',
        fontSize: 10,
        fontStyle: 'italic',
        bottom: 46,
        left: 10,
    },
    login_register: {
        backgroundColor: 'white',
        flex: 1,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
    },
    register_login: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 40,
    },
    login_img: {
        position: "absolute",
        top: 0,
        left: 0,
        width: 400,
        height: 400,
        resizeMode: 'cover',
        zIndex: -1,
    },
})