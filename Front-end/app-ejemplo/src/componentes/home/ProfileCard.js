import React from "react";
import { StyleSheet, View, Image, Text, Linking } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const ProfileCard = () => {
    
    const user = {
        avatar: "https://cdn.icon-icons.com/icons2/1736/PNG/512/4043260-avatar-male-man-portrait_113269.png",
        coverPhoto: "https://concepto.de/wp-content/uploads/2023/01/avion.jpg",
        name: "Marvin Salcedo"
    }

    // agregar otras redes
    const twitter = <Icon name="twitter" size={30} color={"black"} />
    const facebook = <Icon name="facebook" size={30} color={"black"}/>
    const instagram = <Icon name="instagram" size={30} color={"black"}/>
    const linkedin = <Icon name="linkedin" size={30} color={"black"}/>
    const tiktok = <Icon name="tiktok" size={30} color={"black"}/>
    
    return (
        <View style={styles.container}>
            <Image source={{uri: user.coverPhoto}} style={styles.coverPhoto} />
            <View style={styles.avatarContainer}>
                <Image source={{uri: user.avatar}} style={styles.avatar} />
                <Text style={styles.name}>
                    {user.name}
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                <Text style={{color: "blue"}} onPress={() => Linking.openURL("https://www.twitter.com")}>
                    {twitter}
                </Text>
                <Text style={{color: "blue"}} onPress={() => Linking.openURL("https://www.facebook.com")}>
                    {facebook}
                </Text>
                <Text style={{color: "blue"}} onPress={() => Linking.openURL("https://www.instagram.com")}>
                    {instagram}
                </Text>
                <Text style={{color: "blue"}} onPress={() => Linking.openURL("https://www.linkedin.com")}>
                    {linkedin}
                </Text>
                <Text style={{color: "blue"}} onPress={() => Linking.openURL("https://www.tiktok.com")}>
                    {tiktok}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      width: "100%",
      alignItems: "center"
    },
    coverPhoto: {
        width: "100%",
        height: 200,
        resizeMode: "cover"
    },
    avatarContainer: {
        alignItems: "center",
        marginTop: -75
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 75,
        borderWidth: 5,
        borderColor: "white"
    },
    name: {
        marginTop: 15,
        fontSize: 20,
        fontWeight: "bold"
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 20, 
        width: "60%"
    }
    
});

export default ProfileCard;