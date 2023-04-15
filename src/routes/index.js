import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//import Home from '../pages/Home'
import Favorites from '../pages/Favorites' 

import{Ionicons} from '@expo/vector-icons'
import { StackRoutes } from './stackRoutes';

const Tab = createBottomTabNavigator();

export default function Routes() {

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarShowLabel: false,
                tabBarActiveTintColor: 'green',

                tabBarStyle:{
                    backgroundColor: '#fff',
                    borderTopWidth: 0,
                }
            }}
        >
            <Tab.Screen 
                name="Home"
                component={StackRoutes}
                options={{
                    tabBarIcon: ({color, size, focused}) =>{
                        if(focused){
                           return <Ionicons name="home" color="#000" size={size}/>
                        }
                            return <Ionicons name="home-outline" color={color} size={size}/>
                    }
                }} 
            />
            <Tab.Screen 
                name="Favorite" 
                component={Favorites} 
                options={{
                    tabBarIcon: ({color, size, focused}) =>{
                        if(focused){
                           return <Ionicons name="heart" color="#ff4141" size={size}/>
                        }
                            return <Ionicons name="heart-outline" color={color} size={size}/>
                    }
                }} 
            />
        </Tab.Navigator>
    );
}