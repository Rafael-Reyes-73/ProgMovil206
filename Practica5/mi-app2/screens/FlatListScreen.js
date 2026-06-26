import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, FlatList, SectionList, Button } from 'react-native';
import { useState } from 'react';

export default function FlatListScreen() {
    const [elementos, setElementos] = useState([
        { id: '1', nombre: 'Elemento 1' },
        { id: '2', nombre: 'Elemento 2' },
        { id: '3', nombre: 'Elemento 3' },
        { id: '4', nombre: 'Elemento 4' },
        { id: '5', nombre: 'Elemento 5' },
    ]);

    const [secciones, setSecciones] = useState([
        {
            title: 'Sección A',
            data: [
                { id: '1', nombre: 'Elemento A1' },
                { id: '2', nombre: 'Elemento A2' },
            ],
        },
        {
            title: 'Sección B',
            data: [
                { id: '3', nombre: 'Elemento B1' },
                { id: '4', nombre: 'Elemento B2' },
            ],
        },
    ]);

    const eliminarElemento = (id) => {
        setElementos((prevElementos) =>
            // Corrección: se cambió "itemo" por "item"
            prevElementos.filter(item => item.id !== id)
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>FlatList</Text>

            <FlatList
                data={elementos}
                keyExtractor={(item) => item.id}
                scrollEnabled={true}
                renderItem={({ item }) => (
                    <View style={styles.itemFlat}>
                        <Text style={styles.itemText}>{item.nombre}</Text>
                        <Button title="Eliminar" onPress={() => eliminarElemento(item.id)} />
                    </View>
                )}
            />
            
            <View style={styles.barradivisora} />
            
            <Text style={styles.title}>SectionList</Text>

            <SectionList
                sections={secciones}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.itemSection}>
                        <Text style={styles.itemText}>{item.nombre}</Text>
                    </View>
                )}
                renderSectionHeader={({ section: { title } }) => (
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionHeaderText}>{title}</Text>
                    </View>
                )}
            />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // Modifiqué esto para que las listas no se amontonen en el centro
        paddingTop: 50, 
        paddingHorizontal: 20,
    },
    // SE AGREGARON TODOS LOS ESTILOS FALTANTES:
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 10,
        textAlign: 'center'
    },
    itemFlat: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    itemSection: {
        padding: 10,
        backgroundColor: '#f9f9f9',
        borderBottomWidth: 1,
        borderColor: '#eee',
    },
    itemText: {
        fontSize: 16,
    },
    barradivisora: {
        height: 2,
        backgroundColor: '#000',
        marginVertical: 20,
    },
    sectionHeader: {
        backgroundColor: '#ddd',
        padding: 8,
        marginTop: 10,
    },
    sectionHeaderText: {
        fontWeight: 'bold',
        fontSize: 18,
    }
});