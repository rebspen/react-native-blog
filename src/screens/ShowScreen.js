import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Context } from "../context/BlogContext";

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);
  const blogPost = state.find(
    (blogpost) => blogpost.id === navigation.getParam("id")
  );
  return (
    <View style={styles.view}>
      <Text style={styles.title}>{blogPost.title} </Text>
      <Text style={styles.content}>{blogPost.content} </Text>
    </View>
  );
};

ShowScreen.navigationOptions = ({navigation}) => {
  return {
    headerRight: <TouchableOpacity onPress={() => navigation.navigate('Edit',  { id: navigation.getParam("id") })} >
      <FontAwesome name='pencil' size={40} />
    </TouchableOpacity>
  }
}

const styles = StyleSheet.create({
  view:{
    margin: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 24,
    margin: 10
  },
  content:{
    fontSize: 18
  }
});

export default ShowScreen;
