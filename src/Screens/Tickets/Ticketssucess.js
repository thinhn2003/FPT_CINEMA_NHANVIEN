import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Ticketssucess = () => {
    return (
        <View style={styles.tickets_project}>
            <Text style={styles.tickets_fpoly}>Cảm ơn quý khách đã mua</Text>
            <View style={styles.tickets_movie}>
                <View>
                    <View style={styles.tickets_img}>
                        <Image source={{ uri: 'https://1.bp.blogspot.com/-LMCgt1FtiKA/XvRM4C2GczI/AAAAAAAAAD0/TtgbV1thv1k7i-AkQCKolbiW2lj8UTNYwCK4BGAsYHg/s623/the%2Bbirth%2Bof%2Bjapan.jpg' }} style={styles.img_tickets}></Image>
                    </View>
                    <View style={styles.tickets_fpt}>
                        <View style={styles.tickets_software}>
                            <View style={styles.software_tickets}></View>
                        </View>
                        <View style={styles.tickets_app}>
                            <View style={styles.software_tickets}></View>
                        </View>
                    </View>
                    <View>
                        <View style={styles.tickets_native}></View>
                    </View>
                    <View style={styles.project_tickets}>
                        <View style={styles.tickets_fpt}>
                            <View style={styles.tickets_software}>
                                <View style={styles.app_tickets}></View>
                            </View>
                            <View style={styles.tickets_app}>
                                <View style={styles.app_tickets}></View>
                            </View>
                        </View>
                        <View style={styles.fpoly_tickets}>
                            <Text style={styles.movie_text}>fpt cinema</Text>
                            <Text style={styles.movie_fpt}>1/1/2000 - 1000:1000</Text>
                        </View>
                        <View style={styles.movie_software}>
                            <Text style={styles.movie_native}>F88</Text>
                            <Text style={styles.movie_native}>F88</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.button_app}>
                <TouchableOpacity>
                    <Text style={styles.button_text}>Tiếp tục</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Ticketssucess

const styles = StyleSheet.create({
    tickets_project: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
    },
    tickets_fpoly: {
        margin: 20,
        color: 'black',
    },
    tickets_movie: {
        backgroundColor: 'red',
        width: 220,
        height: 440,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5,
    },
    tickets_img: {
        width: 220,
        height: 200,
    },
    img_tickets: {
        width: 220,
        height: 460,
        borderRadius: 10,
    },
    tickets_fpt: {
        flexDirection: 'row',
    },
    tickets_software: {
        right: 25,
    },
    software_tickets: {
        backgroundColor: 'white',
        width: 40,
        height: 40,
        borderRadius: 60,
        top: 20,
    },
    tickets_app: {
        left: 166,
    },
    tickets_native: {
        borderTopWidth: 4,
        borderColor: 'rgba(242, 240, 240, 1)',
        borderStyle: 'dashed',
        width: 220,
    },
    project_tickets: {
        backgroundColor: 'rgba(242, 240, 240, 1)',
        width: 220,
        height: 220,
        borderBottomStartRadius: 10,
        borderBottomEndRadius: 10,
    },
    app_tickets: {
        backgroundColor: 'white',
        width: 40,
        height: 40,
        borderRadius: 60,
        bottom: 20,
    },
    fpoly_tickets: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    movie_text: {
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: 'black',
    },
    movie_fpt: {
        fontWeight: 'bold',
        color: 'black',
    },
    movie_software: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    movie_native: {
        fontSize: 10,
        top: 20,
        margin: 20,
        color: 'black',
    },
    button_app: {
        backgroundColor: 'red',
        margin: 20, 
        width: 200, 
        height: 40, 
        alignItems: 'center', 
        justifyContent: 'center', 
        top: 20, 
        borderRadius: 10,
    },
    button_text: {
        color: 'white',
    },
})