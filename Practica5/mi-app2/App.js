import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Perfil } from './components/Perfil';

export default function App() {
  return (
    <View style={styles.container}>

      <Perfil
        estiloE={styles.tarjetaVerde}
        nombre="Rafael de Jesus"
        carrera="Sistemas"
        materia="Programación Móvil"
        cuatri="9no Cuatrimestre"
      />

      <Perfil
        estiloE={styles.tarjetaRoja}
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
    flexDirection: 'row',
  },

  tarjetaRoja: {
    backgroundColor: '#ec44f1',
  },

  tarjetaVerde: {
    backgroundColor: '#6b79cb',
  },
});