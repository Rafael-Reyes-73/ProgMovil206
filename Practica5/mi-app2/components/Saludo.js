import {Button} from 'react-native';

 export const Saludo = () => {
    return(
        <Button title="Saludar" onPress={() => alert("Hola, bienvenido a React Native")} />
    );
}