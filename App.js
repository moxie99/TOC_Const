import React, { useCallback } from 'react'; // Import React and useCallback
import { StyleSheet } from 'react-native'; // Remove Text and View imports (not used in this file)
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNav from './nav/BottomTabNav';
import { Cart, NewArrivals, ProductDetails } from './screens';
const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    // Provide correct font family names instead of file paths
    PoppinsBold: require('./assets/fonts/Poppins-Bold.ttf'),
    PoppinsExtraBold: require('./assets/fonts/Poppins-ExtraBold.ttf'),
    PoppinsLight: require('./assets/fonts/Poppins-Light.ttf'),
    PoppinsMedium: require('./assets/fonts/Poppins-Medium.ttf'),
    PoppinsRegular: require('./assets/fonts/Poppins-Regular.ttf'),
    PoppinsSemiBold: require('./assets/fonts/Poppins-SemiBold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Bottom Navigation'
          component={BottomTabNav}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name='Cart'
          component={Cart}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name='ProductDetails'
          component={ProductDetails}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name='NewArrivals'
          component={NewArrivals}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontFamily: 'PoppinsExtraBold', // Use the correct font family name
    fontSize: 20,
  },
});
