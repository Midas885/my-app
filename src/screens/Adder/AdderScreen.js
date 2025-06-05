import { ScrollView, View, Text } from 'react-native';
import { styles } from '../../theme/styles'
import MenuButton from '../../components/MenuButton';
import CustomInput from '../../components/CustomInput';
import { useState } from 'react';


export default function AdderScreen() {
   const [firstNumber, setFirstNumber] = useState('');
   const [secondNumber, setSecondNumber] = useState('');
   const [result, setResult] = useState('');

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            
            <View style={styles.ntContainer}>
                <MenuButton />

                <Text style={styles.title}>Suma de Números</Text>


                <CustomInput
                    label="Primer Número"
                    value={firstNumber}
                    onChange={setFirstNumber}
                    placeholder="Ingrese el primer número"
                    keyboardType="numeric"
                />
                <CustomInput
                    label="Segundo Número"
                    value={secondNumber}
                    onChange={setSecondNumber}
                    placeholder="Ingrese el segundo número"
                    keyboardType="numeric"
                />
                
                { result ? (
                    <View style={styles.resultContainer}>
                        <Text style={styles.resultLabel}>Resultado:</Text> 
                        <Text style={styles.resultText}>{firstNumber} + {secondNumber} = {result}</Text>    
                    </View>) : null 
                } 

                

                <View style={styles.buttonContainer}>
                    <Text 
                        style={styles.button1} 
                        onPress={() => {
                            setResult(parseFloat(firstNumber) + parseFloat(secondNumber));
                        }}
                        disabled={!firstNumber || !secondNumber}    
                    > Sumar </Text>

                    {   result ? (
                        <Text 
                            style={[styles.button1, styles.clearButton]} 
                            onPress={() => {
                                setFirstNumber('');
                                setSecondNumber('');
                                setResult('');
                            }}
                        > Limpiar</Text>) : null
                    }
                    
                </View>
            </View>
        </ScrollView>
    );
}