import React from 'react';
import {StyleSheet, Button, View, Text} from 'react-native';
import Box from './Box';
import Footer from './Footer';
const descriptions = ['Ver One Piece', 'Hacer del baño', 'Terminar tarea de web', 'comprar mandado', 'terminar lo de motores'];
const colors = ['red', 'green', 'blue', 'yellow', 'pink'];
let color;
function Menu({navigation}) {

    return (
        <View style={{backgroundColor: 'green', height: '100%'}}>
            <Text style={{textAlign:'center', fontSize: 20}}>Menu</Text>
            <View style={styles.containerButton}>
                {
                    descriptions.map((value, idx) => {
                        {
                            color = colors[idx];
                        }
                        return (
                            <Box>
                                    <Text>{value}</Text>
                                    <Button 
                                        title={`Tarea #${idx + 1}`}
                                        onPress={() => navigation.push('Details', {
                                            id: idx + 1,
                                            description: value,
                                            backgroundColor: colors[idx],
                                        })}
                                    />
                            </Box>
                        )
                    })
                }
            </View>
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
        marginRight: 'auto',
        marginLeft: 'auto',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center', 
        backgroundColor: 'black',
        borderRadius: 50,
        marginTop: 100,
        padding: 10,

        width: '85%',
        height: 'auto',
    }
})

export default Menu;