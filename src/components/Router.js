
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack"


// SCREENS
import Home from "../screens/home";
import Account from '../screens/account';
// import Menu from "../screens/menu";



export default function RouterComponent() {

    const Stack = createStackNavigator();

    const screenConfig = {
        headerShown: false,
    }

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} options={screenConfig}/>
                <Stack.Screen name="Account" component={Account} options={screenConfig}/>
                {/* <Stack.Screen name="Menu" component={Menu} options={[screenConfig, {presentation: 'card'}]}/> */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}