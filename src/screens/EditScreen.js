import React, { useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button,
} from "react-native";
import { Context } from "../context/BlogContext";

const EditScreen = ({ navigation }) => {
  const { state } = useContext(Context);
  const blogPost = state.find(
    (blogpost) => blogpost.id === navigation.getParam("id")
  );

  const [title, setTitle] = useState(blogPost.title);
  const [content, setContent] = useState(blogPost.content);

  return (
    {title} &&
    <View style={styles.view}>
      <Text style={styles.title}>Edit Title :</Text>
      <TextInput style={styles.input} value={title} onChangeText={(newTitle)=> setTitle(newTitle)} />
      <Text style={styles.title}>Edit Content :</Text>
      <TextInput style={styles.input} value={content} onChangeText={(newContent)=> setContent(newContent)} />
      <Button title="Update" />
    </View>
  );
};

// ShowScreen.navigationOptions = ({navigation}) => {
//   return {
//     headerRight: <TouchableOpacity onPress={() => navigation.navigate('Edit')} >
//       <FontAwesome name='pencil' size={40} />
//     </TouchableOpacity>
//   }
// }

const styles = StyleSheet.create({
  view: {
    margin: 10,
  },
  title: {
    fontSize: 24,
    margin: 10,
    textAlign:"center"
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    margin: 10,
    padding: 5,
  },
});

export default EditScreen;
