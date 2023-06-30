import { Configuration, OpenAIApi } from "openai";
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const Chat = () => {

    const [pregunta, setPregunta] = useState();
    const [respuesta, setRespuesta] = useState();
    const [tokens, setTokens] = useState();

    const configuration = new Configuration({
        apiKey: "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",
    });

    const openai = new OpenAIApi(configuration);
    
    const fetchData = async () => {
        try {
            const chatCompletion = await openai.createChatCompletion({
                model: "gpt-3.5-turbo",
                messages: [{role: "assistant", content: `Convierte el numero a binario ${pregunta}`}],
                temperature: 0.6,
            });
            setRespuesta(chatCompletion.data.choices[0].message.content)
            console.log(chatCompletion.data.choices[0].message);
            setTokens(chatCompletion.data.usage.total_tokens);
        } catch (e) {
            console.error("error", e);
        }
    }

    const Item = () => {
        return (respuesta && 
            <View style={styles.responseContainer} >
                <Text style={styles.responseText} >
                    {`Respuesta: ${respuesta}`}
                </Text>
                <Text style={styles.responseText} >
                    {`Respuesta: ${tokens}`}
                </Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titleContainer}>
                Conexión con OpenAi
            </Text>
            <View style={styles.serverContainer}>
                <Text style={styles.titleServer}>Convertidor Binario</Text>
                <Text style={styles.textServer}>Ingrese el número a convertir</Text>
                <TextInput style={styles.inputServer} onChangeText={setPregunta} value={pregunta} placeholder="Ingrese su pregunta..." />
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.buttonServer} onPress={fetchData}>
                        <Text style={styles.textButton}>Enviar</Text>
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
        textAlign: "center"
    }
})

export default Chat;