

import React, { useState } from 'react';
import { View, Text, Button, } from 'react-native';
import CustomInput from '../../components/CustomInput';
import MenuButton from '../../components/MenuButton';
import { styles, colors} from '../../theme/styles'; 


export default function NumberTranslator() {
    return (
        <View contentContainerStyle={styles.scrollContainer}>
            <View style={styles.ntContainer}>
                <MenuButton />
                <TraductorNumeros />
            </View>
        </View>
    );
}

const TraductorNumeros = () => {
  const [numero, setNumero] = useState('');
  const [enLetras, setEnLetras] = useState('');

  const unidades = ['', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'];
  const decenas = ['', 'diez', 'veinte', 'treinta', 'cuarenta', 'cincuenta', 
                  'sesenta', 'setenta', 'ochenta', 'noventa'];
  const especiales = ['diez', 'once', 'doce', 'trece', 'catorce', 'quince',
                     'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve'];
  const centenas = ['', 'ciento', 'doscientos', 'trescientos', 'cuatrocientos',
                   'quinientos', 'seiscientos', 'setecientos', 'ochocientos', 'novecientos'];

  const traducirNumero = (num) => {
    const n = parseInt(num);
    if (isNaN(n) || n < 1 || n > 1000) {
      return 'Número inválido (1-1000)';
    }

    if (n === 1000) return 'mil';
    if (n === 100) return 'cien';

    let resultado = '';
    const centena = Math.floor(n / 100);
    const resto = n % 100;

    if (centena > 0) {
      resultado += centenas[centena] + ' ';
    }

    if (resto > 0) {
      if (resto < 10) {
        resultado += unidades[resto];
      } else if (resto >= 10 && resto < 20) {
        resultado += especiales[resto - 10];
      } else {
        const decena = Math.floor(resto / 10);
        const unidad = resto % 10;
        resultado += decenas[decena];
        if (unidad > 0) {
          resultado += ' y ' + unidades[unidad];
        }
      }
    }

    return resultado.trim();
  };

  const handleTraducir = () => {
    setEnLetras(traducirNumero(numero));
  };

  return (
    <View>
      <Text style={styles.title}>Traductor de Números a Letras</Text>
      <Text style={styles.subtitle}>Ingresa un número del 1 al 1000</Text>
      
      <CustomInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Ej: 123"
        value={numero}
        onChange={setNumero}
      />
      
      {enLetras ? (
        <View style={styles.resultContainer}>
            <Text style={styles.resultLabel}>En letras:</Text>
            <Text style={styles.resultText}>{enLetras}</Text>
        </View>
      ) : null}
      
      <View style={styles.button}>
        <Button 
        color={colors.primary}
        title="Traducir" 
        onPress={handleTraducir} 
        disabled={!numero}
      />
      </View>
      
    </View>
  );
};

