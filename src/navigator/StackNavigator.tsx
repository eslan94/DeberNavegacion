import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { DivisionScreen } from '../screens/DivisionScreen';


const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" options={{title:'Inicio'}} component={HomeScreen} />
      <Stack.Screen name="DivisionScreen" options={{title:'División'}} component={DivisionScreen} />
    </Stack.Navigator>
  );
}