import { useState } from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const NoteScreen = () => {

  const [notes, setNotes] = useState([
    {id: '1', text: "nota uno"},
    {id: '2', text: "nota dos"},
    {id: '3', text: "nota tres"},
  ])

  return (
    <View style={styles.container}>
      <FlatList 
        data={notes}
        keyExtractor={(item)=> item.id}
        renderItem={({item}) => (
          <View style={styles.noteItem}>
            <Text style={styles.noteText}>{item.text}</Text>
          </View>
        )}
      />
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButton}>Agregar</Text>
      </TouchableOpacity>
    </View>
  )
}

export default NoteScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:20,
        backgroundColor: '#fff'
    },
    noteItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: '#7d4d0480',
      padding:15,
      borderRadius:5,
      marginVertical:5
    },
    noteText: {
      fontSize:18
    },
    addButton: {
      position: 'absolute',
      bottom: 20,
      left: 20,
      right:20,
      backgroundColor: '#666',
      padding:15,
      borderRadius:5,
      alignItems:'center'
    }
})