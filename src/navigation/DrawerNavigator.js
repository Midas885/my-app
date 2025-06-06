
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from '../components/CustomDrawer';
import { colors } from '../theme/styles';
import HomeScreen from '../screens/Home/HomeScreen';
import AdderScreen from '../screens/Adder/AdderScreen';
import NumberTranslator from '../screens/number_translator/NumberTranslator';
import MultiplyTable from '../screens/multiply_table/MultiplyTable';
import PersonalExperience from '../screens/personal_experience/PersonalExperience';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
        drawerContent={(props) => <CustomDrawer {...props}/>}
        screenOptions={{
            headerShown: false,
            drawerActiveTintColor: colors.activeTintColor,
            drawerInactiveTintColor: colors.inactiveTintColor
        }}
        >
            <Drawer.Screen name='Inicio' component={HomeScreen}/>
            <Drawer.Screen name='Sumadora' component={AdderScreen}/>
            <Drawer.Screen name='Traductor de numeros' component={NumberTranslator}/>
            <Drawer.Screen name='Tabla de multiplicar' component={MultiplyTable}/>
            <Drawer.Screen name='Experiencia Personal' component={PersonalExperience}/>

        </Drawer.Navigator>
    )
}

export default DrawerNavigator;
