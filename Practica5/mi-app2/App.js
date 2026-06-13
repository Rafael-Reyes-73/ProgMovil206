import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Perfil } from './components/Perfil';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>----- Componente Rafael Reyes -----</Text>

      <Perfil
        nombre="Rafael de Jesus"
        carrera="Sistemas"
        materia="Programación Móvil"
        cuatri="9no Cuatrimestre"
      />

      <Text>----- Componente Diosa Maru -----</Text>

      <Perfil
        nombre="Diosa Maru"
        carrera="Negocios Internacionales"
        materia="Comercio Exterior"
        cuatri="9no Cuatrimestre"
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});