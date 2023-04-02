import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Route } from '../common/Enum';
import Home from '../screens/Home';
import MainTabNavigation from './MainTabNavigation';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            {/* <Stack.Screen
                name={Route.HOME}
                component={Home}
                options={{headerShown: false}}
            /> */}
            <Stack.Screen
                name={Route.TAB_HOME}
                component={MainTabNavigation}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigation;