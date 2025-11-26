import {StyleSheet, Text, View} from "react-native";

const App = () => {
    return (
        <View style={styles.container}>
            <Text>This is the game screen :P</Text>
            <Text>This is a test text</Text>
            <Image source={} style={{width: 50, height: 50}}></Image>
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
        fontSize: 40
    }
});
