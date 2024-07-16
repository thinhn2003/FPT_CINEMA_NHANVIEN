import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, View, ScrollView, Dimensions, Image, TouchableOpacity, Text } from 'react-native';

const Listmovie = () => {
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

  const [movies] = useState([
    { title: 'Phim 1', price: 4000, imageUri: 'https://i.pinimg.com/736x/7d/10/1b/7d101b3e6751f141bc1a00342086bd21.jpg' },
    { title: 'Phim 2', price: 4000, imageUri: 'https://i.pinimg.com/736x/7d/10/1b/7d101b3e6751f141bc1a00342086bd21.jpg' },
    { title: 'Phim 3', price: 4000, imageUri: 'https://i.pinimg.com/736x/7d/10/1b/7d101b3e6751f141bc1a00342086bd21.jpg' },
    { title: 'Phim 4', price: 4000, imageUri: 'https://i.pinimg.com/736x/7d/10/1b/7d101b3e6751f141bc1a00342086bd21.jpg' },
    { title: 'Phim 1', price: 4000, imageUri: 'https://i.pinimg.com/736x/7d/10/1b/7d101b3e6751f141bc1a00342086bd21.jpg' },
    { title: 'Phim 2', price: 4000, imageUri: 'https://i.pinimg.com/736x/7d/10/1b/7d101b3e6751f141bc1a00342086bd21.jpg' },
    { title: 'Phim 3', price: 4000, imageUri: 'https://i.pinimg.com/736x/7d/10/1b/7d101b3e6751f141bc1a00342086bd21.jpg' },
    { title: 'Phim 4', price: 4000, imageUri: 'https://i.pinimg.com/736x/7d/10/1b/7d101b3e6751f141bc1a00342086bd21.jpg' },
    { title: 'Phim 1', price: 4000, imageUri: 'https://i.pinimg.com/736x/7d/10/1b/7d101b3e6751f141bc1a00342086bd21.jpg' },
    { title: 'Phim 2', price: 4000, imageUri: 'https://i.pinimg.com/736x/7d/10/1b/7d101b3e6751f141bc1a00342086bd21.jpg' },
    { title: 'Phim 3', price: 4000, imageUri: 'https://i.pinimg.com/736x/7d/10/1b/7d101b3e6751f141bc1a00342086bd21.jpg' },
    { title: 'Phim 4', price: 4000, imageUri: 'https://i.pinimg.com/736x/7d/10/1b/7d101b3e6751f141bc1a00342086bd21.jpg' },
    { title: 'Phim 1', price: 4000, imageUri: 'https://i.pinimg.com/736x/7d/10/1b/7d101b3e6751f141bc1a00342086bd21.jpg' },
    { title: 'Phim 2', price: 4000, imageUri: 'https://i.pinimg.com/736x/7d/10/1b/7d101b3e6751f141bc1a00342086bd21.jpg' },
    { title: 'Phim 3', price: 4000, imageUri: 'https://i.pinimg.com/736x/7d/10/1b/7d101b3e6751f141bc1a00342086bd21.jpg' },
    { title: 'Phim 400', price: 4000, imageUri: 'https://i.pinimg.com/736x/7d/10/1b/7d101b3e6751f141bc1a00342086bd21.jpg' },
    // Add more movies here
  ]);

  return (
    <View>
      <View style={{ backgroundColor: '#50C7C7', width: 380, height: 40, flexDirection: 'row' }}>
        <View style={{ width: 40, justifyContent: 'center' }}>
          <TouchableOpacity>
            <Image source={require('../icon/person.png')} style={{ margin: 10 }}></Image>
          </TouchableOpacity>
        </View>
        <View>
          <Image source={{ uri: 'https://seeklogo.com/images/C/cgv-cinemas-logo-F9CA4455F3-seeklogo.com.png' }} style={{ width: 40, height: 40, resizeMode: 'center', left: 250 }}></Image>
        </View>
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
            source={{ uri: 'https://khenphim.com/wp-content/uploads/2020/12/Doraemon-2020-4-banner-e1607620367703.jpg' }}
            style={styles.slideImage}
          />
          <Image
            source={{ uri: 'https://khenphim.com/wp-content/uploads/2020/12/Doraemon-2020-4-banner-e1607620367703.jpg' }}
            style={styles.slideImage}
          />
          <Image
            source={{ uri: 'https://khenphim.com/wp-content/uploads/2020/12/Doraemon-2020-4-banner-e1607620367703.jpg' }}
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
      <View style={{ backgroundColor: 'white', borderRadius: 10 }}>
        <View style={{ flexDirection: 'row', margin: 10, backgroundColor: 'white', borderWidth: 1, borderRadius: 10, borderColor: 'red' }}>
          <TouchableOpacity style={{ marginRight: 10, left: 20 }}>
            <Text>Phim top</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ marginRight: 10, left: 60 }}>
            <Text>Phim top</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ marginRight: 10, left: 110 }}>
            <Text>Phim top</Text>
          </TouchableOpacity>
        </View>
        <View style={{ height: 350 }}>    
          <ScrollView>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap'}}>
              {movies.map((movie, index) => (
                <View key={index} style={{ margin: 10, alignItems: 'center', justifyContent: 'center' }}>
                  <TouchableOpacity>
                    <Image source={{ uri: movie.imageUri }} style={{ width: 60, height: 140, borderRadius: 10 }} />
                    <Text style={styles.movie_title}>{movie.title}</Text>
                    <Text style={styles.movie_price}>{movie.price}</Text>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          </ScrollView>
        </View>
      </View>
      <View>
        
      </View>
    </View>
  )
}

const { width } = Dimensions.get('window');

export default Listmovie

const styles = StyleSheet.create({
  slide_project: {
    height: 140,
  },
  slideImage: {
    width,
    height: 200,
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
  }
})