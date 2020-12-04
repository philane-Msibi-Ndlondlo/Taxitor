import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native'

const PerRow = () => {

    const [fare, setFare] = useState('');
    const [ result, setResult ] = useState(null);

    const onTaxiFareValue = (val) => {

        if (val.toString().trim().length === 0) {
            setFare('');
            return;
          }

        try {
            const fareVal = parseInt(val);
            setFare(fareVal.toString())
        } catch (error) {
            //setError('Taxi Fare must be a valid amount!');
            setFare('');
            return;
        }
    }

    const onCalculateFare = () => {

        const showCal = new Array(21);

        showCal.fill(1, 0, 21);

        const results = showCal.map((data, index) => (
            <View key={index} style={styles.row}>
                <Text style={styles.rowSeat}>{index + 1}</Text>
                <Text style={styles.rowSeatSum}>{(index + 1) * parseInt(fare)}</Text>
            </View>
        ));

        setResult(results);

    }


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.textInputContainer}>
                <Text>Taxi Fare</Text>
                <TextInput onChangeText={(val => onTaxiFareValue(val))} value={fare.toString()} style={styles.textInput} keyboardType='decimal-pad' name="TaxiFare" underlineColorAndroid = "transparent"/>
            </View>
            <TouchableOpacity style={styles.calculateFareBtn} onPress={() => {onCalculateFare()}}>
                <Text style={styles.calculateFareBtnText}>Calculate Fare</Text>
            </TouchableOpacity>
            <View style={{...styles.row, backgroundColor: '#56CCF2', padding: 10,}}>
                <Text style={{...styles.rowSeat, color: '#fff'}}>Passangers</Text>
                <Text style={{...styles.rowSeatSum, color: '#fff'}}>Taxi Fare</Text>
            </View>
            <ScrollView style={styles.PerRowStyle}>
                {result}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        height: '100%',
        justifyContent: 'center',
        padding: 20,
    },
    PerRowStyle: {
        flex: 1,
        marginTop: 20,
    },
    stats: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textInput: {
        width: '100%',
        color: '#aaa',
        borderBottomColor: '#56CCF2',
        borderBottomWidth: 2,
        fontSize: 22,
        paddingVertical: 5,
    },
    textInputContainer: {
        padding: 10,
    },
    formContainer: {
        paddingVertical: 20,
    },
    calculateFareBtn: {
        marginVertical: 20,
        padding: 10,
        width: '100%',
        backgroundColor: '#56CCF2',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    calculateFareBtnText: {
        color: '#fff',
        fontSize: 20,

    },
    changeContainer: {
        flexDirection:'column',
        margin: 20,
        justifyContent: 'center'
    },
    changeTitle: {
        fontSize: 16,
        color: '#56CCF2'
    },
    changePrice: {
        fontSize: 30,
        color: '#bbb'
    },
    error: {
        color: '#FA8072'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    rowSeat: {
        fontSize: 18,
    },
    rowSeatSum: {
        fontSize: 18,
    }
})

export default PerRow
