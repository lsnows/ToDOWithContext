import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';

import { Context as BlogContext } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

const IndexScreen = (props) => {
    const { navigation } = props;
    const { state, addBlogPost, deleteBlogPost } = useContext(BlogContext);

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate('CreateScreen')} >
                    <Feather name="plus" size={24} color="black" />
                </TouchableOpacity>
            ),
        }); 
    }, [navigation])

    return (
        <View>
            <FlatList 
                data={state}
                keyExtractor={(blogPost) => { blogPost.title }}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => {navigation.navigate('ShowScreen', { id: item.id })}}>
                            <View style={styles.container}>
                                <Text style={styles.title} >{item.title} - {item.id}</Text>
                                <TouchableOpacity onPress={() => { deleteBlogPost(item.id) }}>
                                    <Feather name='trash' style={styles.icon} />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderColor: 'gray',
        marginHorizontal: 5
    },
    title: {
        fontSize: 18,
    },
    icon: {
        fontSize: 24
    }
});

export default IndexScreen;