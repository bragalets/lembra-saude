import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Login from '../screens/Login'
import Dashboard from '../screens/Dashboard'
import ResultadoDeExames from '../screens/ResultadoDeExames'
import AgendaDeConsultas from '../screens/Agenda de Consultas'



const Stack = createNativeStackNavigator();

export default function Routes(){
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Login"
                component={Login}
                options={ {headerShown: false}}
            />

            <Stack.Screen
                name="Dashboard"
                component={Dashboard}
                options={{headerShown: false}}
            />

            <Stack.Screen
                name="ResultadoDeExames"
                component={ResultadoDeExames}
                options={{headerShown: false}}
            />

            <Stack.Screen
                name="AgendaDeConsultas"
                component={AgendaDeConsultas}
                options={{headerShown: false}}
            />


            
        </Stack.Navigator>
    )
}