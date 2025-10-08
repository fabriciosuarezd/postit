import { StyleSheet, Text, View } from 'react-native'

const NoteScreen = () => {
  return (
    <View style={styles.container}>
      <Text>index</Text>
    </View>
  )
}

export default NoteScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:20,
        backgroundColor: '#fff'
    }
})