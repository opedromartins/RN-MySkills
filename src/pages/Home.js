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
    const [mySkills, setMySkills] = useState([]);

    function handleAddNewSkill(){
        setMySkills(oldState => [...oldState, newSkill]);
    }

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
        onPress={handleAddNewSkill}
        >
            <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>

        <Text style={[styles.title, {marginTop: 50, marginBottom: 20}]}>
            My Skills:
        </Text>

        {
            mySkills.map(skill => (
            <TouchableOpacity key={skill} style={styles.buttonSkill}>
                <Text style={styles.textSkill}>
                    {skill}
                </Text>
            </TouchableOpacity>
            ))
        }

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
        marginBottom: 10
    },
    textSkill: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
        }
})