import React, { useState } from "react";
import { StyleSheet, View, Button, FlatList } from "react-native";
import TodoItem from "./components/TodoItem";
import TodoInput from "./components/TodoInput";

export default function App() {
  const [todos, setTodos] = useState([]);

  const [isAddMode, setIsAddMode] = useState(false);

  const addTodoHandler = (todoText) => {
    if (todoText.length === 0) {
      return;
    }
    setTodos((currentTodos) => [
      ...currentTodos,
      { uid: Math.random().toString(), value: todoText },
    ]);
    setIsAddMode(!isAddMode);
  };

  const removeGoalHandler = (goalId) => {
    setTodos((currentTodos) => {
      return currentTodos.filter((goal) => goal.uid !== goalId);
    });
  };

  const cancelAddTodoHandler = () => {
    setIsAddMode(!isAddMode);
  };

  return (
    <View style={styles.screen}>
      <Button
        title="Add New Todo"
        testID="addTodo"
        accessibilityLabel="pressToAdd"
        onPress={() => setIsAddMode(!isAddMode)}
      />
      <TodoInput
        visible={isAddMode}
        onAddTodo={addTodoHandler}
        onCancel={cancelAddTodoHandler}
      />
      <FlatList
        keyExtractor={(item, index) => item.uid}
        data={todos}
        renderItem={(itemData) => (
          <TodoItem
            id={itemData.item.uid}
            onDelete={removeGoalHandler}
            todo={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 40,
  },
});
