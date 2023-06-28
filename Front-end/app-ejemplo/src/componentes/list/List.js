import React, { useEffect, useState } from "react";
import { StyleSheet, Text, FlatList, TouchableOpacity, View, StatusBar, Modal, Alert } from "react-native";
import Task from "./Task";
import Profile from "./Profile";

const ListComponent = () => {

    const [taskItems, setTaskItems] = useState([]);
    const [showProfile, setShowProfile] = useState(false);
    const [task, setTask] = useState();

    // Para notificar al componente que existe un cambio
    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        try {
            const response = await fetch('https://api.unsplash.com/photos/?client_id=ZXjOAAdwefwfYGtyhjJmAerkWnGDxNNnEwTlnHkSqk4');
            const jsonData = await response.json();
            setTaskItems(jsonData)
        } catch (e) {
            console.error("error", e)
        }
    }

    const Item = ({ task, i }) => {
        return (
            <TouchableOpacity style={styles.peritem} key={i} onPress={() => { getProfile(task) }}>
                <Task task={task} />
            </TouchableOpacity>
        )
    }

    const closeProfile = () => {
        setShowProfile(!showProfile)
    }

    const getProfile = (task) => {
        setShowProfile(true);
        setTask(task)
    }

    return (taskItems &&
        <View style={styles.container}>
            <View style={styles.taskWrapper}>
                <Text style={styles.sectionTitle}>Se listan los perfiles</Text>
                <View style={styles.items}>
                    <FlatList
                        data={taskItems}
                        renderItem={({ item, i }) => <Item task={item} i={i} />}
                    >
                    </FlatList>
                </View>
            </View>

            {/* Modal */}
            <Modal
                animationType="slide"  
                transparent={true}
                visible={showProfile}
                onRequestClose={() => {
                    Alert.alert("modal has been close!!")
                    setShowProfile(!showProfile)
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>
                            <Profile task={task} closeProfile={closeProfile} />
                        </Text>
                    </View>
                </View>
            </Modal>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#E8EAED",
        marginTop: StatusBar.currentHeight || 0,
        display: "flex"
    },
    taskWrapper: {
        paddingTop: 80,
        paddingHorizontal: 20,
        height: 900
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: "bold"
    },
    items: {

    },
    peritem: {

    },
    centeredView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 22
    },
    modalView: {
        margin: 0, 
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        width: "100%",
        height: 300,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4, 
        elevation: 5
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        width: "100%"
    }
})

export default ListComponent;