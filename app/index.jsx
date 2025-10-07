import PostitImage from '@/assets/images/postit.png';
import { Image, StyleSheet, Text, View } from "react-native";

const HomeScreen = () => {
  return (
    <View style={styles.container} >
      <Image source={PostitImage} style={styles.image} />
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding:20,
      backgroundColor: '#f8f9fa'
  },
  image: {
    width: 100,
    height: 100,
    marginBottom:20,
    borderRadius:10
  }
})

export default HomeScreen
