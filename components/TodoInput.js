import React, { useState } from "react";
import { StyleSheet, View, Button, TextInput, Modal } from "react-native";

const TodoInput = (props) => {
  const [enteredTodo, setEnteredTodo] = useState("");

  const addTodoHandler = () => {
    props.onAddTodo(enteredTodo);
    setEnteredTodo("");
  };

  const handleTodo = (text) => {
    setEnteredTodo(text);
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Todo"
          style={styles.input}
          onChangeText={handleTodo}
          value={enteredTodo}
        />
        <View style={styles.buttonView}>
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={props.onCancel} />
          </View>
          <View style={styles.button}>
            <Button title="ADD" onPress={addTodoHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    margin: 10,
  },
  buttonView: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%",
  },
  button: {
    width: "40%",
  },
});
export default TodoInput;
