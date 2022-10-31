import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from '../pages/Welcome';
import SignIn from '../pages/Sign In';

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Welcome"
                componente={Welcome}
            />
            <Stack.Screen
                name="SignIn"
                componente={SignIn}
            />
        </Stack.Navigator>
    )
};