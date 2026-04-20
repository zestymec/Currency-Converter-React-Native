import { SafeAreaView, StyleSheet, Text, View, StatusBar, TextInput, FlatList, Pressable } from 'react-native'
import React, { useState } from 'react'
import Toast from 'react-native-root-toast';
import { currencyByPKR } from './constants';
import CurrencyButton from './components/components';

const App = () => {
  const [inputValue, setInputValue] = useState('')
  const [resultValue, setResultValue] = useState('')
  const [targetValue, setTargetValue] = useState('')

  const buttonPressed = (targetValue: Currency) => {
    if (!inputValue) {

      return Toast.show("Enter a value to convert", {
        duration: Toast.durations.SHORT,
        position: Toast.positions.BOTTOM,
        backgroundColor: "#EA7773",
        textColor: "#000000",
      });
    }

    const inputAmount = parseFloat(inputValue)
    if (!isNaN(inputAmount)) {
      const convertedValue = inputAmount * targetValue.value
      const result = `${targetValue.symbol} ${convertedValue.toFixed(4)}`
      setResultValue(result)
      setTargetValue(targetValue.name)
    } else {

      return Toast.show("NOT A VALID NUMBER", {
        duration: Toast.durations.SHORT,
        position: Toast.positions.BOTTOM,
        backgroundColor: "#EA7773",
        textColor: "#c01e1e",
      });
    }
  }


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.rupeesContainer}>
            <Text style={styles.rupee}>Rs</Text>
            <TextInput
              style={styles.inputAmountField} 
              maxLength={14} 
              value={inputValue}
              clearButtonMode='always'
              onChangeText={setInputValue}
              keyboardType='number-pad'
              placeholder='Enter Amount'
              placeholderTextColor="#8d8d8d"
            />
          </View>
          {resultValue && (
            <Text style={styles.resultTxt}>
              {resultValue}
            </Text>
          )}
        </View>
        <View style={styles.bottomContainer}>
          <FlatList 
            numColumns={3} 
            data={currencyByPKR} 
            keyExtractor={item => item.name} 
            renderItem={({ item }) => (
            <Pressable
              style={[styles.button, targetValue === item.name && styles.selected]}
              onPress={() => buttonPressed(item)}
            >
              <CurrencyButton {...item} />
            </Pressable>
          )}/>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b1b1b', 
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  resultTxt: {
    fontSize: 32,
    color: '#ffffff',
    fontWeight: '800',
    marginTop: 20,
  },
  rupee: {
    marginRight: 12,
    fontSize: 24,
    color: '#db1c1c',
    fontWeight: '800',
  },
  rupeesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 12,
    elevation: 5,
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  inputAmountField: {
    height: 50,
    width: 200,
    fontSize: 18,
    color: '#000000',
    fontWeight: '600',
  },
  
  bottomContainer: {
    flex: 2,
  },
  button: {
    flex: 1,
    margin: 8,
    height: 70,
    borderRadius: 12,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },
  selected: {
    backgroundColor: '#ffeaa7',
    borderWidth: 1,
    borderColor: '#f7b731'
  },
});