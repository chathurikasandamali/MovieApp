import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CommonStyles from '../common/CommonStyles';
import Home from '../screens/Home';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

function MainTabNavigation() {
  return (
    <Tab.Navigator
    screenOptions={{
        tabBarShowLabel: false,
    }}>
      <Tab.Screen
        name={'BROWSE'}
        component={Home}
        options={{
            tabBarLabel: 'Welcome',
            tabBarIcon: ({color, size}) => (
              <Icon name="home-outline" color={color} size={size} />
            ),
          }}
      />
      <Tab.Screen
        name={'Welcome'}
        component={Home}
        options={{
            tabBarLabel: 'Welcome',
            tabBarIcon: ({color, size}) => (
              <Icon name="copy-outline" color={color} size={size} />
            ),
          }}
      />
      <Tab.Screen
        name={'Library'}
        component={Home}
        options={{
            tabBarLabel: 'Welcome',
            tabBarIcon: ({color, size}) => (
              <Icon name="ios-play-circle-outline" color={color} size={size} />
            ),
          }}
      />
    </Tab.Navigator>
  );
}
export default MainTabNavigation;
