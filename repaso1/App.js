import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Switch, Button, Alert, SafeAreaView, ScrollView, Platform } from 'react-native';

export default function App() {

    const [nombre, setNombre] = useState('');
    const [carrera, setCarrera] = useState('');
    const [semestre, setSemestre] = useState('');
  
    const [taller, setTaller] = useState(false);
    const [constancia, setConstancia] = useState(false);
    const [deportes, setDeportes] = useState(false);

      const mostrarAlerta = (titulo, mensaje) => {
        if (Platform.OS === 'web') {
          window.alert(`${titulo}\n\n${mensaje}`);
        } else {
          Alert.alert(titulo, mensaje);
        }
      };

      const enviarRegistro = () => {
    if (nombre.trim() === '' || carrera.trim() === '' || semestre.trim() === '') {
      mostrarAlerta('Campos incompletos', 'Debes llenar todos los campos.');
      return;
    }

    if (isNaN(semestre)) {
      mostrarAlerta('Error', 'El semestre debe ser un número.');
      return;
    }

    const mensaje = `Nombre: ${nombre}\nCarrera: ${carrera}\nSemestre: ${semestre}\n\nTaller: ${taller ? 'Sí' : 'No'}\nConstancia: ${constancia ? 'Sí' : 'No'}\nDeportes: ${deportes ? 'Sí' : 'No'}`;

    mostrarAlerta('Registro enviado', mensaje);
  };




  return (
    <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.container}>
              
              <Text style={styles.title}>Registro de Evento Universitario</Text>
      
              <TextInput 
                style={styles.input} 
                placeholder="Nombre completo" 
                value={nombre} 
                onChangeText={setNombre} 
              />
              <TextInput 
                style={styles.input} 
                placeholder="Carrera" 
                value={carrera} 
                onChangeText={setCarrera} 
              />
              <TextInput 
                style={styles.input} 
                placeholder="Semestre" 
                value={semestre} 
                onChangeText={setSemestre} 
                keyboardType="numeric" 
              />
      
              <Text style={styles.subtitle}>Opciones</Text>
      
              <View style={styles.switchRow}>
                <Text style={styles.switchLabel}>¿Asistirá al taller?</Text>
                <Switch value={taller} onValueChange={setTaller} />
              </View>
              
              <View style={styles.switchRow}>
                <Text style={styles.switchLabel}>¿Requiere constancia?</Text>
                <Switch value={constancia} onValueChange={setConstancia} />
              </View>
              
              <View style={styles.switchRow}>
                <Text style={styles.switchLabel}>¿Participará en deportes?</Text>
                <Switch value={deportes} onValueChange={setDeportes} />
              </View>
      
              <View style={styles.buttonContainer}>
                <Button title="Enviar Registro" onPress={enviarRegistro} />
              </View>
      
            </ScrollView>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 40,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 15,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  switchLabel: {
    fontSize: 16,
  },
  buttonContainer: {
    marginTop: 20,
  }
});