import { Image, StyleSheet, View, Button, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text numberOfLines={1} style={styles.text}>E-Commerce App</Text>
    </View>
  );
}

// Styles should be defined outside the component function
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    color: '#b17220',
    marginTop: 30,
    marginBottom: 8,
    fontWeight: 'bold', // Makes the text bold
    fontSize: 18,
  },
});
