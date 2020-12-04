import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const NavBar = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.navText}>Taxitor</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        backgroundColor: '#56CCF2',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingHorizontal: 20,
        elevation: .8,
    },
    navText: {
        fontSize: 20,
        color: '#fff',
        fontWeight: "bold",
    }
})

export default NavBar;


