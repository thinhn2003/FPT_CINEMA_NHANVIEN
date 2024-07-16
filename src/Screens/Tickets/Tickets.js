import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native'
import React, { useState } from 'react'

const Tickets = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedCinema, setSelectedCinema] = useState(null);
  const [selectedDuration, setSelectedDuration] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const dates = ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'Chủ nhật'];
  const days = ['1', '2', '3', '4', '5', '6', '7'];
  const cinemas = ['CGV', 'Beta', 'Galaxy', 'Lotte'];
  const durations = ['Tất Cả', '90 phút', '120 phút', '150 phút', '180 phút'];

  const handleDatePress = (date, day) => {
    setSelectedDate(date);
    setSelectedDay(day);
  };
  const handleCinemaPress = (cinema) => {
    setSelectedCinema(cinema);
  };
  const handleDurationPress = (duration) => {
    setSelectedDuration(duration);
  };
  const handleSeatPress = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((selectedSeat) => selectedSeat !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const renderItem = ({ item, index }) => (
    <TouchableOpacity
      style={[
        styles.dateButton,
        selectedDate === item && styles.selectedDateButton,
        selectedDay === days[index] && styles.selectedDateButton
      ]}
      onPress={() => handleDatePress(item, days[index])}
    >
      <Text style={[styles.dateText, selectedDate === item && styles.selectedDateText]}>
        {item}
      </Text>
      <Text style={[styles.dayText, selectedDay === days[index] && styles.selectedDateText]}>
        {days[index]}
      </Text>
    </TouchableOpacity>
  );
  const renderItemMovie = ({ item }) => (
    <TouchableOpacity
      style={[styles.cinemaButton, selectedCinema === item && styles.selectedCinemaButton]}
      onPress={() => handleCinemaPress(item)}
    >
      <Text style={[styles.cinemaText, selectedCinema === item && styles.selectedCinemaText]}>
        {item}
      </Text>
    </TouchableOpacity>
  );
  const renderItemProject = ({ item }) => (
    <TouchableOpacity
      style={[styles.durationButton, selectedDuration === item && styles.selectedDurationButton]}
      onPress={() => handleDurationPress(item)}
    >
      <Text style={[styles.durationText, selectedDuration === item && styles.selectedDurationText]}>
        {item}
      </Text>
    </TouchableOpacity>
  );
  const renderSeat = (seat) => (
    <TouchableOpacity
      key={seat}
      style={[
        styles.seat,
        selectedSeats.includes(seat) && styles.selectedSeat,
        isSeatInDisabledRange(seat) && styles.disabledSeat,
      ]}
      onPress={() => handleSeatPress(seat)}
      disabled={isSeatInDisabledRange(seat)}
    >
      <Image
        source={{uri: 'https://img.icons8.com/?size=80&id=x1z6X7afpfCA&format=png'}}
        style={styles.seatIcon}
      />
      <Text style={styles.seatText}>{seat}</Text>
    </TouchableOpacity>
  );
  const isSeatInDisabledRange = (seat) => {
    // Logic để kiểm tra xem ghế có nằm trong khoảng ghế bị vô hiệu hóa hay không
    // Trả về true nếu ghế nằm trong khoảng bị vô hiệu hóa, ngược lại trả về false
    // Ví dụ: return seat === 'A1' || seat === 'B5';
    return false;
  };
  const renderSeatRow = (row) => (
    <View key={row} style={styles.seatRow}>
      {renderSeat(`${row}1`)}
      {renderSeat(`${row}2`)}
      {renderSeat(`${row}3`)}
      {renderSeat(`${row}4`)}
      {renderSeat(`${row}5`)}
      {renderSeat(`${row}6`)}
      {renderSeat(`${row}7`)}
      {renderSeat(`${row}8`)}
    </View>
  );
  return (
    <View style={styles.tickets}>
      <View style={styles.menu}>
        <TouchableOpacity>
          <Image source={require('../icon/left-arrow.png')} style={styles.img_menu} />
        </TouchableOpacity>
        <Text style={styles.text}>Quản lý đặt vé</Text>
      </View>
      {/* <View style={styles.title_tickets}>
        <Text style={styles.text_title}>Phim FPT Cinema Hay</Text>
        <Text>Thể Loại: Pass</Text>
        <Text>Thời lượng:123456:123456</Text>
      </View> */}
      <View style={styles.list_project}>
        <View style={styles.tickets_project}>
          <FlatList
            data={dates}
            renderItem={renderItem}
            keyExtractor={(item, index) => String(index)}
            horizontal
            contentContainerStyle={styles.flatList_tickets}
            showsHorizontalScrollIndicator={false}
            style={styles.flatList_project}
          />
        </View>
        <View style={styles.movie_project}>
          <FlatList
            data={cinemas}
            renderItem={renderItemMovie}
            keyExtractor={(item) => item}
            horizontal
            contentContainerStyle={styles.flatList_cinemas}
            showsHorizontalScrollIndicator={false}
            style={styles.movie_title}
          />
        </View>
        <View style={styles.project_movie}>
          <FlatList
            data={durations}
            renderItem={renderItemProject}
            keyExtractor={(item) => item}
            horizontal
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.flatList_durations}
          />
        </View>
      </View>
      <View style={styles.screen_movie}>
        <View style={styles.screen_Project}>
          <Text style={styles.screenText}>Màn hình</Text>
        </View>

        {/* <View style={styles.seatLayout}>
          {renderSeatRow('A')}
          {renderSeatRow('B')}
          {renderSeatRow('C')}
          {renderSeatRow('D')}
        </View> */}
        {/* <View style={styles.lengend_project}>
          <View style={styles.legendItem}>
            <View style={[styles.seat_project, styles.selectedSeat]} />
            <Text style={styles.legendText}>Đã chọn</Text>
          </View>
          <View style={styles.legendItem}>
            <View style={styles.seat_project} />
            <Text style={styles.legendText}>Chưa chọn</Text>
          </View>
          <View style={styles.legendItem}>
            <View style={[styles.seat_project, styles.disabledSeat]} />
            <Text style={styles.legendText}>Đang chọn</Text>
          </View>
        </View>

        <View style={styles.selected_project}>
          <Text style={styles.selectedSeatsText}>Ghế đã chọn: {selectedSeats.join(', ')}</Text>
        </View> */}
        <View style={styles.seat_project}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.seatLayout}>
              {renderSeatRow('A')}
              {renderSeatRow('B')}
              {renderSeatRow('C')}
              {renderSeatRow('D')}
              {renderSeatRow('E')}
              {renderSeatRow('F')}
              {renderSeatRow('G')}
              {renderSeatRow('I')}
            </View>
            <View style={styles.lengend_project}>
              <View style={styles.legendItem}>
                <View style={[styles.seat_project, styles.selectedSeat]} />
                <Text style={styles.legendText}>Đã chọn</Text>
              </View>
              <View style={styles.legendItem}>
                <View style={styles.seat_project} />
                <Text style={styles.legendText}>Chưa chọn</Text>
              </View>
              <View style={styles.legendItem}>
                <View style={[styles.seat_project, styles.disabledSeat]} />
                <Text style={styles.legendText}>Đang chọn</Text>
              </View>
            </View>

            <View style={styles.selected_project}>
              <Text style={styles.selectedSeatsText}>Ghế đã chọn: {selectedSeats.join(', ')}</Text>
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

          </ScrollView>
        </View>
        {/* <View style={styles.button_project}>
          <View style={styles.button_money}>
            <Text style={styles.button_text}>Tổng tiền</Text>
            <Text style={styles.money_text}>4.000.000.000</Text>
          </View>
          <View style={styles.button_continue}>
            <TouchableOpacity>
              <Text style={styles.continue_text}>Tiếp tục</Text>
            </TouchableOpacity>
          </View>
        </View> */}
      </View>
      {/* <View style={styles.button_project}>
        <View style={styles.button_money}>
          <Text style={styles.button_text}>Tổng tiền</Text>
          <Text style={styles.money_text}>4.000.000.000</Text>
        </View>
        <View style={styles.button_continue}>
          <TouchableOpacity>
            <Text style={styles.continue_text}>Tiếp tục</Text>
          </TouchableOpacity>
        </View>
      </View> */}
    </View>
  )
}

export default Tickets

const styles = StyleSheet.create({
  // tickets:{
  //   alignItems: 'center',
  //   justifyContent: 'center'
  // },
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
  title_tickets: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text_title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  tickets_project: {
    // top: 20,
    // width: 317,
    height: 68,
    borderRadius: 10,
  },
  flatList_tickets: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(221, 57, 57, 1)',
  },
  dateButton: {
    borderRadius: 10,
    width: 46,
    height: 59,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 4,
  },
  selectedDateButton: {
    backgroundColor: 'white',
  },
  dateText: {
    // alignItems: 'center',
    // justifyContent: 'center',
    fontSize: 10,
    fontWeight: 'bold',
    color: 'white',
  },
  selectedDateText: {
    color: 'black',
  },
  flatList_project: {
    borderRadius: 10,
  },
  dayText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  movie_project: {
    top: 10,
  },
  cinemaButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 10,
    marginHorizontal: 4,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'rgba(221, 57, 57, 1)',
    margin: 5,
  },
  selectedCinemaButton: {
    backgroundColor: 'white',
    borderColor: 'rgba(112, 90, 247, 1)',
    borderWidth: 4,
  },
  cinemaText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: 'black',
  },
  selectedCinemaText: {
    color: 'black',
  },
  flatList_cinemas: {
    borderColor: 'red',
  },
  movie_title: {
    borderRadius: 10,
    borderColor: 'red',
  },
  project_movie: {
    top: 20,
  },
  durationButton: {
    paddingHorizontal: 26,
    paddingVertical: 4,
    borderRadius: 20,
    marginHorizontal: 4,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'rgba(221, 57, 57, 1)',
  },
  selectedDurationButton: {
    backgroundColor: 'red',
  },
  durationText: {
    fontSize: 8,
    fontWeight: 'bold',
    color: 'black',
  },
  selectedDurationText: {
    color: 'white',
  },
  screen_movie: {
    top: 20,
  },
  screen_Project: {
    alignItems: 'center',
    marginBottom: 16,
  },
  screenText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  seatLayout: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  seatRow: {
    flexDirection: 'row',
    // marginBottom: 8,
  },
  seat: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    // margin: 5,
  },
  selectedSeat: {
    backgroundColor: 'rgba(221, 57, 57, 1)',
    borderRadius: 10,
  },
  disabledSeat: {
    backgroundColor: 'gray',
  },
  seatIcon: {
    width: 20,
    height: 20,
    // marginBottom: 5,
  },
  seatText: {
    fontSize: 10,
  },
  selected_project: {
    marginTop: 10,
  },
  selectedSeatsText: {
    fontSize: 10,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  lengend_project: {
    // flexDirection: 'row',
    // width: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 5,
    height: 20,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  legendText: {
    marginLeft: 4,
    fontSize: 10,
  },
  seat_project: {
    backgroundColor: 'red',
    width: 40,
    height: 20,
    marginLeft: 4,
    borderRadius: 10,
  },
  button_project: {
    backgroundColor: 'rgba(250, 86, 86, 1)',
    marginBottom: 20,
    borderRadius: 10,
    // width: '100%',
    // height: '100%',
    top: 25,
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
    marginTop: 10,
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
    padding: 10,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  list_project: {
    borderColor: 'rgba(112, 204, 255, 1)',
    borderWidth: 1,
    backgroundColor: 'rgba(112, 204, 255, 1)',
    height: 170,
    borderRadius: 4,
    borderStyle: 'dashed',
  },
  seat_project: {
    height: 350,
    // borderColor: 'red',
    // borderWidth: 1,
  }
})