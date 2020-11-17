import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';

import { Context as BlogContext } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

const IndexScreen = () => {
    const { state, addBlogPost } = useContext(BlogContext);

    return (
        <View>
            <View style={styles.buttonContainer}>
                <Button 
                    title='Add Post'
                    onPress={addBlogPost}
                />
            </View>
            <FlatList 
                data={state}
                keyExtractor={(blogPost) => { blogPost.title }}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.container}>
                            <Text style={styles.title} >{item.title}</Text>
                            <Feather name='trash' style={styles.icon} />
                        </View>
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        margin: 5,
    },
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