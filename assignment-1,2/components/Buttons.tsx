import { StyleSheet, Text, TouchableOpacity, View  } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';

export default function Buttons() {
  return (
    <View style={styles.container}>
      <LinearGradient colors={['#4CAF50', '#087f23']} style={styles.gradientButton}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </LinearGradient>

      <LinearGradient colors={['#2196F3', '#0b79d0']} style={styles.gradientButton}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Signup</Text>
        </TouchableOpacity>
      </LinearGradient>

      <LinearGradient colors={['#FF9800', '#f57c00']} style={styles.gradientButton}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
      </LinearGradient>

      <LinearGradient colors={['#F44336', '#c62828']} style={styles.gradientButton}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f2f5',
    padding: 20,
  },
  gradientButton: {
    width: 200,
    borderRadius: 25,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 25,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

