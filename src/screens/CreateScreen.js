import React, { useState, useContext } from "react";
import { StyleSheet } from "react-native";
import {Context} from "../context/BlogContext"
import Blog from "../components/blog"


const CreateScreen = ({navigation}) => {
  const {addBlogPost} = useContext(Context)

  return <Blog onSubmit={(title, content)=> {
    addBlogPost(title,content, () => navigation.navigate('Index') )
  }} />
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
