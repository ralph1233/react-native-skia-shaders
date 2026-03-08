import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootNativeStackParamList } from './types/navigation';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Home from './Screens/Home';
import Seascape from './Screens/Seascape';

const Stack = createNativeStackNavigator<RootNativeStackParamList>();

const App = () => {
  return (
    <GestureHandlerRootView>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Seascape" component={Seascape} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
