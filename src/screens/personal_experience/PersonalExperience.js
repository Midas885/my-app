

import { useRef } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { styles } from '../../theme/styles';   
import { Video }  from 'expo-av';
import MenuButton from '../../components/MenuButton';

export default function PersonalExperience() {
  return (  
    <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.ntContainer}>
            <MenuButton/>
            <ExperienciaPersonal/>
        </View>
    </ScrollView> 
  )
}

const ExperienciaPersonal = () => {
    const videoRef = useRef(null);
    const videoSource = require('../../assets/Tarea 3_ Explorando IONIC o React con un Proyecto Creativo.mp4'); 
    //const videoSource = { uri: 'https://itlaedudo-my.sharepoint.com/:v:/g/personal/20231200_itla_edu_do/EeVaXqCDsMxEnzjZhdOpI8sBmeO5RcivXgs9AlHMAyURIg?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=zO7mUf' };

  return (
    <View>
      <Text style={styles.title}>Mi Experiencia</Text>
      <Text style={styles.subtitle}>Video explicativo sobre mi proceso</Text>
      
      <View style={styles.videoContainer}>
        <Video
          ref={videoRef}
          source={videoSource}
          style={styles.video}
          resizeMode="contain"
          useNativeControls
        />
      </View>
      
      <View style={styles.description}>
        <Text style={styles.descriptionTitle}>Reflexiones:</Text>
        <Text style={styles.descriptionText}>
          En este video comparto los desafios que enfrente, las soluciones que implemente 
          y lo que aprendí durante el desarrollo de este proyecto.
        </Text>
      </View>
    </View>
  );
};

