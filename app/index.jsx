import PostitImage from '@/assets/images/postit.png';
import { useRouter } from 'expo-router';
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const HomeScreen = () => {

  const router = useRouter()

  return (
    <View style={styles.container} >
      <Image source={PostitImage} style={styles.image} />
      <Text style={styles.titulo}>Bienvenidos a Nuestra Super Aplicación</Text>
      <Text style={styles.subtitulo}>Captura tus notas en cualquie lugar y en cualquier momento</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={()=>router.push('./notes')}
      >
        <Text style={{color:'#fff', fontWeight:'bold'}}>Iniciar</Text>
      </TouchableOpacity>
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
  },
  titulo: {
    fontSize:28,
    fontWeight: 'bold',
    marginBottom:10,
    color: '#333',
    textAlign: 'center'
  },
  subtitulo: {
    fontSize:16,
    color: '#666',
    textAlign: 'center',
    marginBottom:20
  },
  button:{
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius:8,
    alignItems: 'center',

  }
})

export default HomeScreen
