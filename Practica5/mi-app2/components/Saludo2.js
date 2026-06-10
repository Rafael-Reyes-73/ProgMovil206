import {Button, Text, Image, View} from 'react-native';

 export const Saludo2 = () => {
    return(
        <View>
        <Text>Componnete propio</Text>
        <Image source={require('../assets/image.png')} />
        <Button title="Saludar" onPress={() => alert("Hola, Saludo 2")} />
        </View>
    );
}