// Zona1: Implementaciones de componenetes y archivos
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import {Saludo} from './components/Saludo';
import { Saludo2 } from './components/Saludo2';


//Zona2: Main Hogar de los componenetes
export default function App() {
  return (
    <View style={styles.container}>
      <Text>-----Componente Nativo-----</Text>
      <Image source={require('./assets/image.png')} />
      <Text>Rise of Champions</Text>
      <Text>-----Componente Simple-----</Text>
      <Saludo></Saludo>
      <Text>-----Componente Compuesto-----</Text>
      <Saludo2></Saludo2>
      <StatusBar style="auto" />
    </View>
  );
}

//Zona3: Estilos y posicionamientos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
