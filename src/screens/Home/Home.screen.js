import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, Alert } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Home = () => {
  const [output, setOutput] = useState({ change: 0, driverAmount: 0 });
  const [taxiFare, setTaxiFare] = useState('');
  const [amount, setAmount] = useState('');
  const [noOfPassangers, setNoOfPassangers] = useState('');
  const [error, setError] = useState("");

  const onTaxiFareValue = (val) => {
    if (val.toString().trim().length === 0) {
      setTaxiFare('');
      setError("Taxi Fare is Required!");
      return;
    }

    try {
      const fare = parseInt(val);
      if (fare <= 0) {
        setError("Taxi Fare must be above 0!");
        setTaxiFare('');
        return;
      }
      setTaxiFare(fare.toString());
      setError("");
    } catch (error) {
      setError("Taxi Fare must be a valid amount!");
      setTaxiFare('');
      return;
    }
  };

  const onAmountValue = (val) => {
    if (val.toString().trim().length === 0) {
      setError("Amount is Required!");
      setAmount('');
      return;
    }

    try {
      const amountVal = parseInt(val);

      if (amountVal <= 0) {
        setError("Amout must be above 0!");
        setAmount('');
        return;
      }
      setAmount(amountVal.toString());
      setError("");
    } catch (error) {
      setError("Amount must be a valid amount!");
      setAmount('');
      return;
    }
  };

  const onNoOfPassangersValue = (val) => {
    if (val.toString().trim().length === 0) {
      setError("No. Of Passangers is Required!");
      setNoOfPassangers('');
      return;
    }

    try {
      const noOfPassangersVal = parseInt(val);

      if (noOfPassangersVal <= 0) {
        setError("No. Of Passangers must be above 0!");
        setNoOfPassangers('');
        return;
      }
      setNoOfPassangers(noOfPassangersVal.toString());
      setError("");
    } catch (error) {
      setError("No. Of Passangers must be a valid number!");
      setNoOfPassangers('');
      return;
    }
  };

  const onCalculateFare = async () => {
    setOutput({
      ...output,
      driverAmount: parseInt(taxiFare) * parseInt(noOfPassangers),
      change: parseInt(amount) - parseInt(output.driverAmount),
    });
  };

  const onReset = async () => {
    setOutput({ driverAmount: 0, change: 0 });
    setTaxiFare('');
    setAmount('');
    setNoOfPassangers('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <View style={styles.stats}>
          <View style={styles.changeContainer}>
            <Text style={styles.changeTitle}>Change:</Text>
            <Text style={styles.changePrice}>
              R{" "}
              {amount - output.driverAmount}
            </Text>
          </View>
          <View style={styles.changeContainer}>
            <Text style={styles.changeTitle}>Driver's Amount:</Text>
            <Text style={styles.changePrice}>R {output.driverAmount}</Text>
          </View>
        </View>
        <View style={styles.textInputContainer}>
          <Text style={{color: '#aaa'}}>Taxi Fare</Text>
          <TextInput
            onChangeText={(val) => onTaxiFareValue(val)}
            value={taxiFare.toString()}
            style={styles.textInput}
            keyboardType="decimal-pad"
            name="TaxiFare"
            underlineColorAndroid="transparent"
            onSubmitEditing={(e) => {  }}
          />
        </View>
        <View style={styles.textInputContainer}>
          <Text style={{color: '#aaa'}}>Amount</Text>
          <TextInput
            onChangeText={(val) => onAmountValue(val)}
            value={amount.toString()}
            keyboardType="decimal-pad"
            style={styles.textInput}
            name="Amount"
          />
        </View>
        <View style={styles.textInputContainer}>
          <Text style={{color: '#aaa'}}>No. of Passangers</Text>
          <TextInput
            onChangeText={(val) => onNoOfPassangersValue(val)}
            value={noOfPassangers.toString()}
            keyboardType="decimal-pad"
            style={styles.textInput}
            onSubmitEditing={(e) => {  }}
            name="NoOfPassangers"
          />
        </View>
        <Text style={styles.error}>{error.length !== 0 ? error : null}</Text>
        <TouchableOpacity
          style={styles.calculateFareBtn}
          onPress={() => {
            onCalculateFare();
          }}
        >
          <Text style={styles.calculateFareBtnText}>Calculate Fare</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.calculateFareBtn}
          onPress={() => {
            onReset();
          }}
        >
          <Text style={styles.calculateFareBtnText}>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    height: "100%",
    justifyContent: "center",
    padding: 20,
  },
  stats: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textInput: {
    width: "100%",
    color: "#aaa",
    borderBottomColor: "#56CCF2",
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
    width: "100%",
    backgroundColor: "#56CCF2",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  calculateFareBtnText: {
    color: "#fff",
    fontSize: 20,
  },
  changeContainer: {
    flexDirection: "column",
    margin: 20,
    justifyContent: "center",
  },
  changeTitle: {
    fontSize: 16,
    color: "#56CCF2",
  },
  changePrice: {
    fontSize: 30,
    color: "#bbb",
  },
  error: {
    color: "#FA8072",
  },
});

export default Home;
