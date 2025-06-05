


import { View } from 'react-native';
import { Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { colors, styles } from '../theme/styles';

const MenuButton = () => {
  const navigation = useNavigation();
  
  return (
    <View style={styles.menuButtonContainer}>
      <Button
        type='clear'
        icon={{
          name: 'menu',
          color: colors.primary,
          size: 30
        }} 
        buttonStyle={{
          margin: -5,
          padding: 0,
        }}
        onPress={() => navigation.openDrawer()} 
      />
    </View>
  );
};

export default MenuButton;

