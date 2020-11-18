import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';

import BlogPostForm from '../components/BlogPostForm';



const CreateScreen = (props) => {
    const { navigation } = props;

    const { addBlogPost } = useContext(BlogContext);

    return (
        <BlogPostForm 
            onSubmit={(title, content) => {
                addBlogPost( title, content, () => navigation.navigate('IndexScreen') )
            }} 
        />
    )

   
};

const styles = StyleSheet.create({
    
});

export default CreateScreen;