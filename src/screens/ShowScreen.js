import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';

const ShowScreen = (props) => {
    const { route } = props
    const id = route.params?.id;

    const { state } = useContext(BlogContext);

    const blogPost = state.find((blogPost) => blogPost.id === id);

    return (
        <View>
            <Text>ShowScreen</Text>
            <Text>{id}</Text>
            <Text>{blogPost.title}</Text>
        </View>
    )
};

const styles = StyleSheet.create({

});

export default ShowScreen;