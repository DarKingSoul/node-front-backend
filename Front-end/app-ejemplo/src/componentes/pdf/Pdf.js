import React from "react";
import { Button, View } from "react-native";

const Pdf = () => {

    const [docPdf, setDocPdf] = useState()
    const [question, setQuestion] = useState('')
    const [result, setResult] = useState('')

    const cargarPDF = async () => {
        let result = await ExpoDocumentPicker.getDocumentAsync({copyToCacheDirectory: true});
        setDocPdf(result.file)
    }

    const preguntaDoc = async () => {
        try {
            const data = new FormData()
            data.append('question', question)
            data.append('file', docPdf)
            console.log(data.get('file'))
            const response = await fetch('http://localhost:9022/subir', {
                method: 'POST',
                body: data
            })
            if (response.ok) {
                setQuestion('')
                const responseJSON = await response.json()
                setResult(responseJSON.text)
            }

        } catch (error) {
            console.log(error)
        }

    }

    return ( 
        <View style={styles.container}>
            <Text style={styles.title}>PDF</Text>
                <View style={styles.btns}>
                    <Button title="Seleccionar el PDF" style={styles.btnCargar} onPress={cargarPDF} />
                    <Button title="Enviar" style={styles.btnEnviar} onPress={preguntaDoc} />
                </View>
        </View>
    )

}

export default Pdf;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: StatusBar.currentHeight || 0,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 20
    },
    btns: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        width: 240,
        marginTop: 30,
    },
    btnCargar: {
        width: 120,
        height: 35,
        backgroundColor: 'blue',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
      },
      btnEnviar: {
        height: 35,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
      }
})
