import { Icon } from '@rneui/themed';

import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import React, { useState } from 'react';

//any additional import
import Task from './components/Task';

export default function App() {
  const [task, setTask] = useState();

  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    //append new task
    setTaskItems([...taskItems, task]);
    // reset
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    //remove
    itemsCopy.splice(index, 1);
    //update state
    setTaskItems(itemsCopy);
  }


  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>
          My To Do List
        </Text>
        <View style={styles.items}>
          {taskItems.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                <Task text={item} />
              </TouchableOpacity>
            );
          })}
        </View>
        </View>
        <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        
        <TextInput
          style={styles.input}
          placeholder={"Add your to do items here"}
          value={task}
          onChangeText={(text) => setTask(text)}
        />

        
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
              <Icon reverse raised name='check'
              color='#00695f'/>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#00695f",
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    // allows us with postion absolute to place this item anywhere on the screen UI
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 30,
    borderColor: "#33ab9f",
    borderWidth: 2,
    width: 310,
  },
  addWrapper: {
    width: 65,
    height: 65,
    
  },
  addText: {
    
  },
});
