import React from 'react';
import {StyleSheet, Button, View, Text} from 'react-native';
import Footer from './Footer';
function DetailScreen({navigation, route}) {

    const {id, description, backgroundColor } = route.params;
    return (
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor: `${backgroundColor}`}}>
            <Text>Tarea #{id}</Text>
            <Text>Descripcion: {description}</Text>
            

            {/* <View style={styles.containerButton}>
                <Button 
                    title="Tarea 1"
                    onPress={() => navigation.push('Details', {
                      id: 1,
                      description: 'Ver One Piece',
                      backgroundColor: 'red'
                    })}
                />
                <Button 
                    title="Tarea 2"
                    onPress={() => navigation.push('Details', {
                      id: 2,
                      description: 'Ir de Shopping',
                      backgroundColor: 'green'
                    })}
                />
                <Button 
                    title="Tarea 3"
                    onPress={() => navigation.push('Details', {
                      id: 3,
                      description: 'Acabar la tarea de Diseño de Juegos',
                      backgroundColor: 'blue'
                    } )}
                />
            </View>

            <View style={styles.containerButton}>
                <Button 
                    title="Atrás"
                    onPress={() => navigation.goBack()}
                />
                <Button 
                    title="Home"
                    onPress={() => navigation.navigate('Home')}
                />
                <Button 
                    title="Ir a Detalle"
                    onPress={() => navigation.push('Details', {
                      id: 4,
                      description: 'Aqui va la descripcion'
                    } )}
                />
            </View> */}

            <Button
              title='Inicio'
              onPress={() => navigation.popToTop()}
            />
            

            <Footer>
                <Button
                    title= "Back"
                    onPress={() => navigation.goBack()}
                />
                <Button
                    title= "Home"
                    onPress={() => navigation.navigate("Home")}
                />
            </Footer>
        </View>
    );
}

const styles = StyleSheet.create({
    containerButton: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center', 
        backgroundColor: 'gray',

        margin: 20,
        padding: 5,

        width: 300,
        height: 100,
    }
})

export default DetailScreen;