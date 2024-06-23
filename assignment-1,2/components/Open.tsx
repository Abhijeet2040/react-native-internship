import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';

type RootStackParamList = {
  Login: undefined;
  // Add other screens to the param list if necessary
};

type OpenScreenNavigationProp = NavigationProp<RootStackParamList, 'Login'>;

const Open = () => {
  const navigation = useNavigation<OpenScreenNavigationProp>();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image
        source={require('../assets/furniture_logo.png')}
        style={{ width: 100, height: 100 }}
      />
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>
        Furniture App
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: '#4CAF50',
          padding: 10,
          borderRadius: 5,
        }}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={{ color: '#fff', fontSize: 18 }}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Open;
