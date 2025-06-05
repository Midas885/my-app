import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, ScrollView } from 'react-native';
import  MenuButton from '../../components/MenuButton';
import { styles } from '../../theme/styles';
import watashi from '../../assets/watashi.jpg';

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <MenuButton/>
  
        <Image 
          source={watashi} 
          style={styles.profileImage}
        />

        <Text style={styles.title}>Mis Datos Personales</Text>

        <View style={styles.infoCard}>
          <InfoRow label={"Nombre"} value={"Carlos"}/>
          <InfoRow label={"Apellidos"}  value={"Perez Divair"}/>
          <InfoRow label={"Carrera"} value={"Desarrollo de Software"}/>
          <InfoRow label={"Correo Electronnico"} value={"20231200@itla.edu.do"} isEmail={true}/>
          <InfoRow label={"Telefono"} value={"(809) 789-6182"}/>
        </View>
      
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const InfoRow = ({ label, value, isEmail = false }) => (
  <View style={styles.infoRow}>
    <Text style={styles.label}>{label}</Text>
    <Text style={[styles.value, isEmail && styles.emailValue]}>{value}</Text>
  </View>
);
