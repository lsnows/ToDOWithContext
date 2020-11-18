import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';

import { AntDesign } from '@expo/vector-icons'; 

const ShowScreen = (props) => {
    const { route, navigation } = props
    const id = route.params?.id;

    const { state } = useContext(BlogContext);

    const blogPost = state.find((blogPost) => blogPost.id === id);

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={() => { navigation.navigate('EditScreen', {id: id}) }}>
                    <AntDesign name="edit" size={24} color="black" />
                </TouchableOpacity>
            )
        })
    }, [navigation])

    return (
        <View>
            <Text>{blogPost.title}</Text>
            <Text>{blogPost.content}</Text>
        </View>
    )
};

const styles = StyleSheet.create({

});

export default ShowScreen;