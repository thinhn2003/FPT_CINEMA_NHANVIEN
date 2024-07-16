import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, Modal, FlatList } from 'react-native'
import React, { useState } from 'react'

const Ticketsmoney = () => {
    const [selectedMethod, setSelectedMethod] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false); // Thêm trạng thái để hiển thị modal
    const [selectedOption, setSelectedOption] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);


    const handleMethodSelection = (method) => {
        setSelectedMethod(method);
        if (method === 'qr') {
            setIsModalVisible(true); // Hiển thị modal khi bấm vào nút Qr code
        }
    };

    const closeModal = () => {
        setIsModalVisible(false);
    };

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        setModalVisible(true);
    };

    const handleOptionClose = () => {
        setSelectedOption(null);
        setModalVisible(false);
    };

    const discountTickets = [
        { id: 1, code: 'DISCOUNT10', discount: '10%' },
        { id: 2, code: 'SALE20', discount: '20%' },
        { id: 3, code: 'DISCOUNT10', discount: '10%' },
        { id: 4, code: 'SALE20', discount: '20%' },
        { id: 5, code: 'DISCOUNT10', discount: '10%' },
        { id: 6, code: 'SALE20', discount: '20%' },
        { id: 7, code: 'DISCOUNT10', discount: '10%' },
        { id: 8, code: 'SALE20', discount: '20%' },
        // Thêm các phiếu giảm giá khác vào đây
    ];

    const renderItem = ({ item }) => (
        <View style={styles.ticketItem}>
            <Text style={styles.ticketCode}>{item.code}</Text>
            <Text style={styles.ticketDiscount}>{item.discount}</Text>
        </View>
    );
    return (
        <View style={{ aligncontent: 'center' }}>
            <View style={styles.menu}>
                <TouchableOpacity>
                    <Image source={require('../icon/left-arrow.png')} style={styles.img_menu} />
                </TouchableOpacity>
                <Text style={styles.text}>Quản lý đặt vé</Text>
            </View>
            <View>
                <Text style={styles.movie_project}>Thông tin đặt vé</Text>
                <View style={styles.movie_food}>
                    <TouchableOpacity onPress={() => handleOptionSelect('movie_food')}>
                        <View style={styles.movie_food}>
                            <Image source={require('../img/panda.png')} style={styles.movie_img} />
                            <View>
                                <Text style={styles.movie_text}>Tên phim</Text>
                                <Text style={styles.movie_text}>Thời gian xem phim - Ngày xem phim</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>

                <Modal visible={modalVisible} animationType="slide" transparent={true}>
                    <View style={styles.modalOverlay}>
                        <View style={styles.modal_movie}>
                            <Text style={styles.modalTitle}>Thông tin phim</Text>
                            {/* Hiển thị thông tin chi tiết về phim dựa trên tùy chọn đã chọn */}
                            {selectedOption === 'movie_food' && (
                                <View>
                                    <Text style={styles.modalText}>Tên phim: Tên phim 1</Text>
                                    <Text style={styles.modalText}>Thời gian xem phim: 2 giờ</Text>
                                    <Text style={styles.modalText}>Ngày xem phim: 01/01/2022</Text>
                                    {/* Thêm thông tin khác về phim */}
                                </View>
                            )}

                            <TouchableOpacity style={styles.modalButton} onPress={handleOptionClose}>
                                <Text style={styles.modalButtonText}>Đóng</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
            <View>
                <Text style={styles.movie_project}>Thông tin người nhận</Text>
                <View style={styles.input_project}>
                    <TextInput style={styles.input_text} placeholder='Nhập số điện thoại khách hàng' keyboardType='numeric'>
                    </TextInput>
                    <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/588/588436.png' }} style={styles.input_img}></Image>
                </View>
            </View>
            <View>
                <Text style={styles.movie_project}>Phiếu giảm giá sản phẩm</Text>
                {/* <FlatList
                    data={discountTickets}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                /> */}
                <View style={styles.tickets_project}>
                    <FlatList
                        data={discountTickets}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id.toString()
                        }
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            </View>
            <View>
                <Text style={styles.movie_project}>Phương thức thanh toán</Text>
                <TouchableOpacity
                    style={[styles.button, selectedMethod === 'qr' && styles.selectedButton]}
                    onPress={() => handleMethodSelection('qr')}
                >
                    <Text style={styles.buttonText}>Qr code</Text>
                    {selectedMethod === 'qr' && (
                        <Image
                            source={{ uri: 'https://cdn-icons-png.flaticon.com/128/5114/5114041.png' }}
                            style={styles.icon}
                        />
                    )}
                </TouchableOpacity>

                {/* Modal */}
                <Modal visible={isModalVisible} animationType="slide" onRequestClose={closeModal} transparent={true}>
                    <View style={styles.modalOverlay}>
                        <View style={styles.modal_project}>
                            {/* Nội dung modal */}
                            <Text style={styles.tickets_text}>Số tiền : 4.000.000.000.000</Text>
                            <Image source={{ uri: 'https://tse4.mm.bing.net/th?id=OIP.votfT_W_HIQAzMmptluH4AHaHW&pid=Api&P=0&h=220' }} style={styles.modal_img}></Image>
                            <View style={{ flexDirection: 'row' }}>
                                {/* <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
                                <Text style={styles.closeButtonText}>Đóng</Text>
                            </TouchableOpacity> */}
                                <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
                                    <Text style={styles.closeButtonText}>Success</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
                <TouchableOpacity
                    style={[styles.button, selectedMethod === 'cash' && styles.selectedButton]}
                    onPress={() => handleMethodSelection('cash')}
                >
                    <Text style={styles.buttonText}>Tiền mặt</Text>
                    {selectedMethod === 'cash' && (
                        <Image
                            source={{ uri: 'https://cdn-icons-png.flaticon.com/128/5114/5114041.png' }}
                            style={styles.icon}
                        />
                    )}
                </TouchableOpacity>
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
        </View>
    )
}

export default Ticketsmoney

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
        // marginBottom: 20,
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
    movie_text: {
        color: 'white',
    },

    movie_project: {
        color: 'black',
        left: 10,
        fontSize: 10,
    },
    input_project: {
        backgroundColor: 'white',
        borderRadius: 10,
        margin: 4,
        borderColor: '#191970',
        borderWidth: 1,
        borderStyle: 'dashed',
        // width: 60,
        flexDirection: 'row',
    },
    input_text: {
        left: 10,
    },
    input_img: {
        width: 20,
        height: 20,
        left: 60,
        top: 10,
    },
    button: {
        // marginTop: 10,
        margin: 10,
        padding: 10,
        backgroundColor: 'rgba(112, 204, 255, 1)',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    selectedButton: {
        backgroundColor: 'red',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        marginRight: 5,
    },
    icon: {
        width: 20,
        height: 20,
        // marginLeft: 20,
        left: 60,
    },
    modal_project: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    closeButton: {
        marginTop: 20,
        padding: 10,
        backgroundColor: 'red',
        borderRadius: 5,
        margin: 6,
    },
    closeButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
    modal_img: {
        width: 200,
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modal_fpoly: {
        width: '80%',
        height: '50%',
    },
    button_project: {
        backgroundColor: 'rgba(250, 86, 86, 1)',
        marginBottom: 20,
        borderRadius: 10,
        width: '100%',
        // height: 200,
        top: 40,
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
    ticketItem: {
        backgroundColor: '#FFFFFF',
        // marginBottom: 8,
        padding: 10,
        margin: 10,
    },
    ticketCode: {
        fontSize: 10,
        fontWeight: 'bold',
    },
    ticketDiscount: {
        fontSize: 10,
        marginTop: 8,
    },
    tickets_project: {
        // padding: 10,
        height: 70,
    },
    tickets_text: {
        color: 'black',
        fontWeight: 'bold',
        margin: 10,
        fontSize: 10,
    },
    modalOverlay: {
        flex: 1,
        // backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 70,
        marginBottom: 70,
    },
    modal_movie: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        bottom: 40,
    },
    modalText: {
        fontSize: 18,
        marginBottom: 8,
    },
    modalButton: {
        backgroundColor: '#2196F3',
        padding: 12,
        borderRadius: 8,
    },
    modalButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
})