import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";
import Blog from "../components/blog";
import { NavigationEvents } from "react-navigation";

const EditScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  const { state, editBlogPost } = useContext(Context);
  const blogPost = state.find((blogpost) => blogpost.id === id);
  return (
    <Blog
      initialValues={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={(title, content) => {
        editBlogPost(id, title, content, () => navigation.pop());
      }}
    />
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
    textAlign: "center",
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
