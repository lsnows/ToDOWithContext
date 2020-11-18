import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button} from 'react-native';


const BlogPostForm = ({ onSubmit, initialValues = '' }) => {
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);

    return (
        <View>
            <Text style={styles.label}>Enter Title:</Text>
            <TextInput 
                value={title}
                onChangeText={setTitle} //forma reduzida
                placeholder={'title...'}
                style={styles.input}
            />
            <Text style={styles.label}>Enter Content:</Text>
            <TextInput 
                value={content}
                onChangeText={text => setContent(text)} //normal
                placeholder={'content...'}
                style={styles.input}
            />
            <View style={styles.button}>
                <Button 
                    title="Save Blog Post"
                    onPress={() => { 
                        onSubmit(title, content)
                    }}
                />
            </View>
        </View>
    )
};


const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 15,
        padding: 5,
        margin: 5,
    },
    label: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5,

    },
    button: {
        margin: 5,
    }
});

export default BlogPostForm;