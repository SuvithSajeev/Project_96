import React, { useState,Component } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  Button,
} from 'react-native';
import AppHeader from '../components/AppHeader';
import { RFValue } from 'react-native-responsive-fontsize';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

export default class HomeScreen extends Component {

  render() {
    const [selectedDate, setSelectedDate] = useState(null);
    const [datePickerVisible, setDatePickerVisible] = useState(false);
    
    const showDatePicker = () => {
      setDatePickerVisible(true);
    };

    const hideDatePicker = () => {
      setDatePickerVisible(false);
    };

    return (
      <View style={styles.container}>
        <AppHeader />
        <View>
          <Button
            title="Show Date Picker"
            onPress={showDatePicker}
            style={styles.button}
          />
          <DateTimePickerModal
            date={selectedDate}
            isVisible={datePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
        </View>

        <View>
          <Button
            title="Show Time Picker"
            onPress={showDatePicker}
            style={styles.button}
          />
          <DateTimePickerModal
            date={selectedDate}
            isVisible={datePickerVisible}
            mode="time"
            is24Hour
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
        </View>


        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('HomeScreen')}>
            <Text style={styles.buttonText}> Back </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9EFF22',
  },
  button: {
    backgroundColor: 'green',
    width: RFValue(100),
    height: RFValue(60),
    borderRadius: RFValue(40),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: RFValue(455),
    marginBottom: RFValue(40),
  },
  buttonText: {
    fontSize: RFValue(25),
    color: '#9EFF22',
    fontFamily: 'Courier',
    fontWeight: 600,
  },
});
