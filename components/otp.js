import React, { useState } from 'react';
import { Button,StyleSheet, TextInput, View } from 'react-native';
import auth from '@react-native-firebase/auth';

function otp() {
  // If null, no SMS has been sent
  const [confirm, setConfirm] = useState(null);
const [number,setNumber] = useState('');
  const [code, setCode] = useState('');

  // Handle the button press
  async function signInWithPhoneNumber(phoneNumber) {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation);
  }

  async function confirmCode() {
    try {
      await confirm.confirm(code);
    } catch (error) {
      console.log('Invalid code.');
    }
  }

  if (!confirm) {
    return (
     <View>
          <TextInput
          style={styles.inputStyle}
          placeholder="Mobile Number"
          value={number}
          onChangeText={(val) =>setNumber(val)}
        />
         <Button
        title="Phone Number Sign In"
        onPress={() => signInWithPhoneNumber(number)}
      />
     </View>
     
    );
  }

  return (
    <>
      <TextInput value={code} onChangeText={text => setCode(text)} />
      <Button title="Confirm Code" onPress={() => confirmCode()} />
    </>
  );
}

const styles = StyleSheet.create({
    inputStyle: {
        width: '100%',
        marginBottom: 15,
        paddingBottom: 15,
        alignSelf: "center",
        borderColor: "#ccc",
        borderBottomWidth: 1
      },
});
export default otp 