import {StyleSheet, Text, View} from "react-native";

const Home = () => {
    return (
        <View style={styles.container}>
            <Text>Developed by Infinity Studios</Text>
        </View>
    )
}

export default Home
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
