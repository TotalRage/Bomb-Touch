import {StyleSheet, Text, View} from "react-native";

const App = () => {
    return (
        <View style={styles.container}>
            <Text>This is the game screen :P</Text>
        </View>
    )
}

export default App
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#794c3aff'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20
    }
});
