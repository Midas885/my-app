



import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import CustomInput from '../../components/CustomInput';
import MenuButton from '../../components/MenuButton';
import { styles } from '../../theme/styles'; 



export default function MultiplyTable() {
  return (
    <ScrollView contentContainerstyle={styles.scrollContainer}>
        <View style={styles.ntContainer}>
            <MenuButton />
            <TablaMultiplicar />
        </View>
    </ScrollView>
  )
}

const TablaMultiplicar = () => {
  const [numero, setNumero] = useState('');
  const [mostrarTabla, setMostrarTabla] = useState(false);

  const generarTabla = () => {
    if (numero === '' || isNaN(numero)) {
      alert('Por favor ingresa un número válido');
      return;
    }
    setMostrarTabla(true);
  };

  const limpiar = () => {
    setNumero('');
    setMostrarTabla(false);
  };

  return (
    <View >
      <Text style={styles.title}>Tabla de Multiplicar</Text>
      
      <CustomInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Ingresa un número"
        value={numero}
        onChange={setNumero}
      />
      
      

      {mostrarTabla && (
        <View style={styles.resultContainer}>
          <Text style={styles.tableTitle}>Tabla del {numero}:</Text>
          {[...Array(13)].map((_, i) => {
            const multiplicador = i + 1;
            return (
              <Text key={i} style={styles.tableItem}>
                {numero} × {multiplicador} = {parseInt(numero) * multiplicador}
              </Text>
            );
          })}
        </View>
      )}

        <View style={styles.buttonContainer}>
            <Text style={styles.button1} onPress={generarTabla}> Generar Tabla </Text>
            {numero ?  (<Text style={[styles.button1, styles.clearButton]} onPress={limpiar}> Limpiar</Text>) : null}
        </View>
    </View>
  );
};

