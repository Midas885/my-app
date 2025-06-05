import React from 'react';
import {View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from '../theme/styles';
import profile from '../assets/watashi.jpg'

const CustomDrawer = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={profile}
                    style={styles.profileImage}
                />
                <Text style={styles.headerText}>Bienvenido</Text>
            </View>

            <View style={styles.menuItems}>
                <TouchableOpacity 
                    style={styles.menuItem}
                    onPress={() => navigation.navigate('Inicio')}
                >
                    <Text  style={styles.menuItemText}>Inicio</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.menuItem}
                    onPress={() => navigation.navigate('Sumadora')}
                >
                    <Text style={styles.menuItemText}>Sumadora</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.menuItem}
                    onPress={() => navigation.navigate('Traductor de numeros')}
                >
                    <Text style={styles.menuItemText}>Traductor Numeros</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.menuItem}
                    onPress={() => navigation.navigate('Tabla de multiplicar')}
                >
                    <Text style={styles.menuItemText}>Tabla de multiplicar</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}

export default CustomDrawer;
