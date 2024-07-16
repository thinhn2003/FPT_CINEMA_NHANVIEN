import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, FlatList, Dimensions } from 'react-native'
import React, { useState, useRef, useEffect } from 'react'

const Movie = () => {
    const actorsData = [
        { id: 1, name: 'Nobita', image: { uri: 'https://www.cartoonbucket.com/wp-content/uploads/2015/03/Standing-Pose-Of-Nobita.jpg' } },
        { id: 2, name: 'Doraemon', image: { uri: 'https://i.pinimg.com/736x/7d/10/1b/7d101b3e6751f141bc1a00342086bd21.jpg' } },
        { id: 3, name: 'Shizuka', image: { uri: 'https://wallpaperaccess.com/full/2471493.jpg' } },
        { id: 4, name: 'Gian', image: { uri: 'https://tse3.mm.bing.net/th?id=OIP.kCxANzPlOtOs5aUzIQNBiwHaJ4&pid=Api&P=0&h=220' } },
        { id: 5, name: 'Suneo', image: { uri: 'https://yt3.ggpht.com/a/AATXAJzglKvCO_bolmmA8xfiq2sVejjG_KjJZDGSvQ=s900-c-k-c0xffffffff-no-rj-mo' } },
    ];
    const renderActorItem = ({ item }) => (
        <View style={styles.actorItem}>
            <Image source={item.image} style={styles.actorImage} />
            <Text style={styles.actorName}>{item.name}</Text>
        </View>
    );

    const [currentSlide, setCurrentSlide] = useState(0);
    const scrollViewRef = useRef(null);
    const intervalRef = useRef(null);

    const handleSlideChange = (event) => {
        const contentOffset = event.nativeEvent.contentOffset.x;
        const slideIndex = Math.round(contentOffset / width);
        setCurrentSlide(slideIndex);
    };

    useEffect(() => {
        // Khởi tạo interval khi component được mount
        startAutoPlay();

        // Clear interval khi component bị unmount
        return () => {
            clearInterval(intervalRef.current);
        };
    }, [currentSlide]);

    const startAutoPlay = () => {
        // Thiết lập interval để tự động chuyển slide sau mỗi 3 giây (3000 milliseconds)
        intervalRef.current = setInterval(() => {
            const nextSlide = (currentSlide + 1) % 3;
            scrollSlide(nextSlide);
        }, 4000);
    };

    const scrollSlide = (slideIndex) => {
        setCurrentSlide(slideIndex);
        scrollViewRef.current.scrollTo({
            x: slideIndex * width,
            animated: true,
        });
    };

    const [showMore, setShowMore] = useState(false);

    const handleShowMore = () => {
        setShowMore(!showMore);
    };

    return (
        <View>
            <View style={styles.menu}>
                <TouchableOpacity>
                    <Image source={require('../icon/left-arrow.png')} style={styles.img_menu} />
                </TouchableOpacity>
                <Text style={styles.text}>Quản lý đặt vé</Text>
            </View>
            <View style={{ height: 460 }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View>
                        <View style={{ flexDirection: 'row', left: 20 }}>
                            <View style={{ top: 10, left: 20 }}>
                                <Image source={{ uri: 'https://i.pinimg.com/736x/a5/ac/92/a5ac929eac2df901959d104f3f878eeb--movie--the-movie.jpg' }} style={{ width: 110, height: 170, borderRadius: 10, resizeMode: 'contain', bottom: 4 }}></Image>
                            </View>
                            <View style={{ alignItems: 'center', justifyContent: 'center', left: 20 }}>
                                <View style={{ bottom: 25, left: 10 }}>
                                    <Text style={{ color: 'black', fontSize: 20, textTransform: 'uppercase' }}>Ten phim</Text>
                                    <Text style={{ color: 'black', fontSize: 10, marginLeft: 10 }}>The loai</Text>
                                </View>
                                <View style={{ backgroundColor: 'rgba(221, 57, 57, 1)', borderRadius: 20, left: 20 }}>
                                    <TouchableOpacity>
                                        <View style={{ flexDirection: 'row', padding: 10 }}>
                                            <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/5690/5690573.png' }} style={{ width: 22, height: 22 }}></Image>
                                            <Text style={{ color: 'white', left: 4 }}>Xem phim</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={{ backgroundColor: 'rgba(28, 85, 109, 1)', alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                            <View style={{ flexDirection: 'row', padding: 10 }}>
                                <View style={{ right: 40, alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ color: 'white', fontWeight: 'bold', textTransform: 'uppercase' }}>Thoi luong phim</Text>
                                    <Text style={{ color: 'white', fontSize: 10 }}>40000phut</Text>
                                </View>
                                <View style={{ right: 20, alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ color: 'white', fontWeight: 'bold', textTransform: 'uppercase' }}>Vote</Text>
                                    <Text style={{ color: 'white', fontSize: 10 }}>40000</Text>
                                </View>
                                <View style={{ left: 20, alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ color: 'white', fontWeight: 'bold', textTransform: 'uppercase' }}>Ve da ban</Text>
                                    <Text style={{ color: 'white', fontSize: 10 }}>40000+</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ backgroundColor: 'rgba(217, 217, 217, 1)', marginTop: 10, marginLeft: 10, marginRight: 10 }}>
                            <Text style={{ color: 'black', fontWeight: 'bold', textTransform: 'uppercase', left: 4 }}>Thông tin bộ phim</Text>
                            <Text style={{ color: 'black', fontSize: 10 }}>
                                Doraemon là một chú mèo máy được Nobi Sewashi (Nobi Nobito), cháu năm đời của Nobi Nobita, gửi từ thế kỷ 22 về quá khứ của ông mình để giúp đỡ Nobita trở nên tiến bộ và giàu có, tức là cũng sẽ cải thiện hoàn cảnh của con cháu Nobita sau này. Còn ở hiện tại, Nobita là một cậu bé luôn thất bại ở trường học, và sau đó công ty phá sản, thất bại trong công việc, đẩy gia đình và con cháu sau này vào cảnh nợ nần.
                                {showMore ? (
                                    <>
                                        Các câu chuyện trong Doraemon thường có một chủ đề chung, đó là xoay quanh những rắc rối hay xảy ra với cậu bé Nobita học lớp năm, nhân vật chính thứ hai của bộ truyện. Doraemon có một chiếc túi thần kỳ trước bụng với đủ loại bảo bối của tương lai. Cốt truyện thường gặp nhất sẽ là Nobita trở về nhà khóc lóc với những rắc rối mà cậu gặp phải ở trường học hoặc với bạn bè. Sau khi bị cậu bé van nài hoặc thúc giục, Doraemon sẽ đưa ra một bảo bối giúp Nobita giải quyết những rắc rối của mình, hoặc là để trả đũa hay khoe khoang với bạn bè của cậu. Nobita thường đi quá xa so với dự định ban đầu của Doraemon, thậm chí với những bảo bối mới cậu còn gặp rắc rối lớn hơn trước đó. Đôi khi những người bạn của Nobita, thường là Honekawa Suneo hoặc Goda Takeshi (Jaian), lại lấy trộm những bảo bối và sử dụng chúng không đúng mục đích. Tuy nhiên thường thì ở cuối mỗi câu chuyện, những ai sử dụng sai mục đích bảo bối sẽ phải chịu hậu quả do mình gây ra, và người đọc sẽ rút ra được bài học từ đó.[3]
                                    </>
                                ) : null}
                                <TouchableOpacity onPress={handleShowMore}>
                                    <Text style={{ color: 'blue', fontSize: 10 }}>{showMore ? 'Thu gọn' : 'Xem thêm'}</Text>
                                </TouchableOpacity>
                            </Text>
                        </View>
                        <View>
                            <Text style={{ color: 'black', fontWeight: 'bold', left: 10 }}>Dien vien</Text>
                            <FlatList
                                data={actorsData}
                                renderItem={renderActorItem}
                                keyExtractor={(item) => item.id.toString()}
                                contentContainerStyle={styles.list_project}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                            />
                        </View>
                        <View style={styles.slide_project}>
                            <ScrollView
                                ref={scrollViewRef}
                                horizontal
                                pagingEnabled
                                showsHorizontalScrollIndicator={false}
                                onMomentumScrollEnd={handleSlideChange}
                                onTouchStart={() => clearInterval(intervalRef.current)}
                            >
                                <Image
                                    source={{ uri: 'https://iguov8nhvyobj.vcdn.cloud/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/i/m/imgpsh_fullsize_anim_2.png' }}
                                    style={styles.slideImage}
                                />
                                <Image
                                    source={{ uri: 'https://iguov8nhvyobj.vcdn.cloud/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/t/3/t3_-_movie_-_cgv_980x448.jpg' }}
                                    style={styles.slideImage}
                                />
                                <Image
                                    source={{ uri: 'https://iguov8nhvyobj.vcdn.cloud/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/9/8/980x448_3_.png' }}
                                    style={styles.slideImage}
                                />
                            </ScrollView>
                            <View style={styles.pagination}>
                                {[...Array(3)].map((_, index) => (
                                    <View
                                        key={index}
                                        style={[
                                            styles.paginationDot,
                                            index === currentSlide && styles.paginationDotActive,
                                        ]}
                                    />
                                ))}
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
            <View style={{ backgroundColor: 'red', alignItems: 'center', justifyContent: 'center' }}>
                <TouchableOpacity>
                    <View style={{ padding: 10 }}>
                        <Text style={{ color: 'white', fontWeight: 'bold'}}>Mua ngay</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Movie

const { width } = Dimensions.get('window');


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
    list_project: {
        paddingVertical: 10,
    },
    actorItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        marginBottom: 16,
    },
    actorImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
        resizeMode: 'contain',
    },
    actorName: {
        fontSize: 10,
        color: 'black',
    },
    slide_project: {
        height: 160,
    },
    slideImage: {
        width,
        height: 140,
        resizeMode: 'center',
    },
    pagination: {
        flexDirection: 'row',
        justifyContent: 'center',
        // marginTop: 10,
        bottom: 10,
    },
    paginationDot: {
        width: 22,
        height: 8,
        borderRadius: 4,
        backgroundColor: 'white',
        marginHorizontal: 5,
    },
    paginationDotActive: {
        backgroundColor: 'rgba(221, 57, 57, 1)',
    },
    movie_title: {
        color: 'red',
    },
    movie_price: {
        color: 'black',
        fontSize: 10,
    },
})