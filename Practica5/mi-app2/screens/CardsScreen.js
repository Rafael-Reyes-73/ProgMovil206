import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Perfil } from '../componentes/Perfil';

export default function CardsScreen() {
    return (
        <View style={styles.container}>

            <Perfil
                estiloE={styles.tarjetaVerde}
                nombre="Rafael de Jesus Reyes Chavez"
                carrera="Sistemas"
                materia="Programación Móvil"
                cuatri="9 Cuatri"
            />

            <Perfil
                estiloE={styles.tarjetaRoja}
                nombre="Diosa Maru"
                carrera="Negocios Internacionales"
                materia="Aduanas"
                cuatri="9 Cuatrimestre"
            />
            <Perfil
                estiloE={styles.tarjetaVerde}
                nombre="Diana MM"
                carrera="LAGE"
                materia="Administracion de Proyectos"
                cuatri="9  Cuatrimestre"
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
        flexDirection: 'column',
    },

    tarjetaRoja: {
        backgroundColor: '#ff75d5',
    },

    tarjetaVerde: {
        backgroundColor: '#ffffff',
    },
});