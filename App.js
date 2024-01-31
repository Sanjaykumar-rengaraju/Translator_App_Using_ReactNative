import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Ionicons} from 'react-native-vector-icons'; 
import Translate from './Translate';
import DetectLanguage from './DetectLanguage';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Translate"
          component={Translate}
          options={{
            tabBarLabel: 'Translate',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="globe" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Detect Language"
          component={DetectLanguage}
          options={{
            tabBarLabel: 'Detect Language',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="language" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
