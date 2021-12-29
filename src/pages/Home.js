import React, { useState } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TextInput,
    Platform,
    TouchableOpacity
} from 'react-native';

export function Home(){
    const [newSkill, setNewSkill] = useState('');
    const [myskills, setMyskills] = useState([]);

  return (
      <View style={styles.container}>
        <Text style={styles.title}>Welcome, Pedro</Text>

        <TextInput
        style={styles.input}
        placeholder="New Skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
        />
        
        <TouchableOpacity
        style={styles.button}
        activeOpacity={.7}
        >
            <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>

        <Text style={[styles.title, {marginTop: 50, marginBottom: 20}]}>
            My Skills:
        </Text>

        <TouchableOpacity style={styles.buttonSkill}>
            <Text style={styles.textSkill}>
                Teste
            </Text>
        </TouchableOpacity>
      </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121015',
        paddingHorizontal: 30,
        paddingVertical: 70,
    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },
    input: {
        backgroundColor: '#1F1E25',
        color: '#fff',
        fontSize: 18,
        padding: 15,
        marginTop: 30,
        borderRadius: 7,
    },
    button: {
        backgroundColor: '#A370F7',
        padding: 15,
        borderRadius: 7,
        alignItems: 'center',
        marginTop: 20
    },
    buttonText: {
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold',
    },
    buttonSkill: {
        backgroundColor: '#1F1E25',
        padding: 15,
        borderRadius: 50,
        alignItems: 'center',
    },
    textSkill: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
        }
})