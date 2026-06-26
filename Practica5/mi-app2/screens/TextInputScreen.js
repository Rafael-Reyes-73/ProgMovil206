import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View, Platform, Alert, Keyboard, TextInput, Button } from 'react-native';

export default function TextInputScreen() {
    const [nombre, setNombre] = useState('');
    const [password, setPassword] = useState('');
    const [edad, setEdad] = useState('');
    const [correo, setCorreo] = useState('');

    const alertManager = (titulo, mensaje) => {
        if (Platform.OS === 'web') {
            alert(`${titulo}: ${mensaje}`);
        } else {
            Alert.alert(titulo, mensaje);
        }
    };

    const procesarRegistro = () => {
        Keyboard.dismiss();

        if (!nombre || !password || !edad || !correo) {
            alertManager("Validación", "Todos los campos son obligatorios");
            return;
        }
        alertManager("Éxito", `Registro procesado para: ${nombre}`);
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Nombre Completo"
                value={nombre}
                onChangeText={setNombre}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <TextInput
                style={styles.input}
                placeholder="Edad"
                value={edad}
                onChangeText={setEdad}
                keyboardType="numeric" 
            />
            <TextInput
                style={styles.input}
                placeholder="Correo Electrónico"
                value={correo}
                onChangeText={setCorreo}
                keyboardType="email-address" // Corregido: email-address
                autoCapitalize="none"
                autoCorrect={false}
            />
            <Button
                title="Registrarse"
                onPress={procesarRegistro}
            />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        justifyContent: 'center', 
        padding: 20, 
        backgroundColor: '#f5f6fa' 
    },
    input: { 
        borderWidth: 1, 
        borderColor: '#dcdde1',
        padding: 12, 
        borderRadius: 8, 
        marginBottom: 12, 
        backgroundColor: '#fff' 
    }
});