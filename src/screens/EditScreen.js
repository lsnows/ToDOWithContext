import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';

import BlogPostForm from '../components/BlogPostForm';

const EditScreen = (props) => {  
    const { route, navigation } = props
    const id = route.params?.id;

    const { state, editBlogPost } = useContext(BlogContext);

    const blogPost = state.find((blogPost) => blogPost.id === id);

    return (
        <BlogPostForm 
            initialValues={{title: blogPost.title, content: blogPost.content}}
            onSubmit={(title, content) => {
                editBlogPost(id, title, content, () => navigation.pop() );
            }}
        />
    )
};

const styles = StyleSheet.create({

});

export default EditScreen;