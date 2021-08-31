import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const TodoItem = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onDelete.bind(this, props.id)}
      accessibilityRole="button"
    >
      <View style={styles.listItem} accessibilityValue={{ text: "listItem" }}>
        <Text>{props.todo}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    margin: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
});

export default TodoItem;
