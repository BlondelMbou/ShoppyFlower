import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { CartContext } from '../components/CartContext'; // Adjust the import path according to your project structure

export default function CheckoutScreen({ navigation }) {
  const { cart, clearCart } = useContext(CartContext);
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.Price * item.quantity, 0);
  };

  const renderProductDetails = () => {
    return cart.map(item => (
      <View key={item.id} style={styles.productDetails}>
        <Text>Name: {item.Title}</Text>
        <Text>Price: ${item.Price}</Text>
        <Text>Quantity: {item.quantity}</Text>
        <Text>Total: ${item.Price * item.quantity}</Text>
      </View>
    ));
  };

  const handleCheckout = () => {
    // Implement any validation logic for card details here
    if (cardNumber.length === 16 && cardName.length > 0) {
      clearCart();
      Alert.alert('Success', 'Your order has been placed.', [
        { text: 'OK', onPress: () => navigation.navigate('Home') } // Adjust 'YourMainScreen' as needed
      ]);
    } else {
      Alert.alert('Error', 'Please enter valid card details.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Checkout</Text>
      <View style={styles.productContainer}>
        {renderProductDetails()}
        <Text style={styles.totalPrice}>Total Price: ${getTotalPrice()}</Text>
      </View>
      <TextInput
        placeholder="Card Number"
        value={cardNumber}
        onChangeText={setCardNumber}
        keyboardType="numeric"
        maxLength={16}
        style={styles.input}
      />
      <TextInput
        placeholder="Name on Card"
        value={cardName}
        onChangeText={setCardName}
        style={styles.input}
      />
      <Button title="Place Order" onPress={(e) => { e.preventDefault(); handleCheckout(); }} style={styles.button} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#333',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingLeft: 10,
  },
  productContainer: {
    marginBottom: 20,
  },
  productDetails: {
    marginBottom: 10,
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
  },
  totalPrice: {
    fontWeight: 'bold',
  },
  button: {
    width: '100%',
    padding: 10,
    backgroundColor: 'green',
    border: 'none',
    borderRadius: 5,
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    cursor: 'pointer',
  },
});



