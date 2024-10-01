import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './screen/Login';
import SignupScreen from './screen/Signup';
import HomeScreen from './screen/Home';
import Calories from './compo/Calories';
import Start1Screen from './screen/Start1';
import WelcomeScreen from './screen/welcome';

import BodyFatCalculatorScreen from './screen/BodyFatCalculator';
import BmrScreen from './screen/Bmr';
import AddcaloriesScreen from './screen/Addcalories';
import Addcalories1Screen from './screen/Addcalories1';
import Addcalories2Screen from './screen/Addcalories2';

import Addcalories3Screen from './screen/Addcalories3';


import AsyncStorage from '@react-native-async-storage/async-storage';
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import { CaloriesProvider } from './CaloriesContext';
import { LeftProvider } from'./Leftcalories';
import { SnacksProvider } from'./Snackscalories';
import { DinnerProvider } from'./Dinnercalories';
import { LunchProvider } from "./Lunchcalories";

import FontAwesome6 from '@expo/vector-icons/FontAwesome6';




const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions=
    {{ headerShown: false,
      tabBarShowLabel:false, 
      tabBarStyle:{ backgroundColor: 'rgb(253, 245, 230)'},
      tabBarInactiveTintColor:' dark grey',
      tabBarActiveTintColor:'#003366',


    }} initialRouteName='Bmr'  > 
      <Tab.Screen name='BodyFatCalculator' component={BodyFatCalculatorScreen } options={{
        tabBarIcon:({color,size})=>(
          <FontAwesome6 name="weight-scale" size={size} color={color} />
       )
      }}/>
      <Tab.Screen name='Home2' component={HomeScreen}  
      options={{
        tabBarIcon:({color,size})=>(
           <Feather name="home" size={size} color={color} />
        )
      }}
      />
      <Tab.Screen name='Bmr' component={BmrScreen} 
      options={{
        tabBarIcon:({color,size})=>(
          <Ionicons name="journal" size={size} color={color} />
        )
      }}
      
      />
    </Tab.Navigator>
  );
};

const App = () => {
  const [isAppFirstLaunched, setIsAppFirstLaunched] = React.useState(null);

  React.useEffect(() => {
    const checkFirstLaunch = async () => {
      const appData = await AsyncStorage.getItem('isAppFirstLaunched');
      if (appData == null) {
        setIsAppFirstLaunched(true);
        AsyncStorage.setItem('isAppFirstLaunched', 'false');
      } else {
        setIsAppFirstLaunched(false);
      }
    };
    checkFirstLaunch();
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <LunchProvider>
      <DinnerProvider>
     <SnacksProvider>
      < LeftProvider >
       <CaloriesProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Welcome">
          <Stack.Screen name="welcome" component={WelcomeScreen} />
          <Stack.Screen name="Start1" component={Start1Screen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen name="Home" component={TabNavigator} />
          <Stack.Screen name='Addcalories'component={AddcaloriesScreen}/>
          <Stack.Screen name='Addcalories1'component={Addcalories1Screen}/>
          <Stack.Screen name='Addcalories2'component={Addcalories2Screen}/>
          <Stack.Screen name='Addcalories3'component={Addcalories3Screen}/>
          <Stack.Screen name='Calories' component={Calories} />
        </Stack.Navigator>
      </NavigationContainer>
      </CaloriesProvider>
      </LeftProvider>
      </SnacksProvider>
      </DinnerProvider>
      </LunchProvider>
    </GestureHandlerRootView>
  );
};

export default App;
