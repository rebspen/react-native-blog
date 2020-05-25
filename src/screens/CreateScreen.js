import React, { useState, useContext } from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";
import {Context} from "../context/BlogContext"


const CreateScreen = ({navigation}) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const {addBlogPost} = useContext(Context)

  return (
    <View>
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.label}>Enter Content:</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={(text) => setContent(text)}
      />
      <Button 
      title="Add blog post" 
      onPress={() => addBlogPost(title,content, () => {
        navigation.navigate('Index')
      })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    margin: 10,
    padding: 5,
  },
  label: {
    fontSize: 20,
    margin: 10,
    textAlign: "center",
  },
});

export default CreateScreen;