import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'

const HelloScreen = ({navigation}) => {
    const [isLoading, setIsLoading] = useState(true);

    const handleLoadingComplete = () => {
        setIsLoading(false);
    };

    // useEffect(() => {
    //     // Giả lập việc loading hoàn thành sau 3 giây
    //     setTimeout(() => {
    //     //   navigation.navigate('HomeScreen');
    //     }, 4000);
    //   }, []);
    return (
        <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 10}}>
            <View style={{marginTop: 40, flexDirection: 'row'}}>
                <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/831/831497.png' }} style={{ width: 60, height: 80, resizeMode: 'center'}}></Image>
                <Text style={{color: 'black', fontStyle: 'italic', fontWeight: 'bold', textTransform: 'uppercase', marginTop: 26}}>fpt cinema</Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center' , marginTop: 80}}>
            <ActivityIndicator size="large" color="rgba(221, 57, 57, 1)" />
            </View>
            <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 200}}>
                <Text style={{color: 'black', fontSize: 10}}>Đang tải dữ liệu........</Text>
                <Text style={{color: 'black'}}>Vui lòng chờ trong giây lát</Text>
            </View>
        </View>
    )
}

export default HelloScreen

const styles = StyleSheet.create({})