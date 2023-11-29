import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Home from './components/organisms/Home';
import AddFood from './components/organisms/add-food';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator 
    initialRouteName="Home"
    screenOptions={{
      headerShown: false,
    }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="AddFood" component={AddFood} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
