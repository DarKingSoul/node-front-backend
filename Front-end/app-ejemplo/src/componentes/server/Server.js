import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const Server = () => {

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [data, setData] = useState();

    // Correr server desde github
    const url = "https://darkingsoul-vigilant-winner-5pgj6vgwpj634wj-3000.preview.app.github.dev";
    
    const fetchData = async () => {
        try {
            console.log(`URL solicitada: ${url}/hola/${nombre}/${apellido}`);
            const response = await fetch(`${url}/hola/${nombre}/${apellido}`);
            const jsonData = await response.json();
            setData(jsonData);
        } catch (e) {
            console.error("error", e);
        }
    }

    const saludar = () => {
        fetchData();
    }

    const Item = () => {
        return (data && 
            <View style={styles.responseContainer} >
                <Text style={styles.responseText} >
                    {`Bienvenido ${data.nombre} ${data.apellido}!!`}
                </Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titleContainer}>
                Conexión con el servidor 
            </Text>
            <View style={styles.serverContainer}>
                <Text style={styles.titleServer}>Ingrese los siguientes datos</Text>
                <Text style={styles.textServer}>Ingrese su nombre</Text>
                <TextInput style={styles.inputServer} onChangeText={setNombre} value={nombre} placeholder="Ingrese su nombre..." />
                <Text style={styles.textServer}>Ingrese su apellido</Text>
                <TextInput style={styles.inputServer} onChangeText={setApellido} value={apellido} placeholder="Ingrese su apellido..."/>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.buttonServer} onPress={saludar}>
                        <Text style={styles.textButton}>Saludar!!!</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <Item />
            </View>
        </View>
    )    
}

const styles = StyleSheet.create({
    container: {
        margin: 10
    },
    titleContainer: {
        fontWeight: "bold",
        fontSize: 25,
        textAlign: "center"
    },
    serverContainer: {
        margin: 10
    },
    titleServer: {
        fontWeight: "bold",
        paddingBottom: 10
    },
    textServer: {

    },
    inputServer: {
        height: 40,
        padding: 10,
        margin: 10,
        borderWidth: 1,
        borderRadius: 15
    },
    buttonContainer: {
        display: "flex",
        alignItems: "center",
    },
    buttonServer: {
        backgroundColor: "#79c0f2",
        padding: 12,
        borderRadius: 15,
        width: 150,
        textAlign: "center"
    }, 
    textButton: {
        fontWeight: "bold"
    },
    responseContainer: {
        marginTop: 25,
        borderTopWidth: 1,
        borderTopColor: "#6a6867"
    },
    responseText: {
        paddingTop: 12,
        textAlign: "center",
        fontSize: 26,
        fontWeight: "bold"
    }
})

export default Server;