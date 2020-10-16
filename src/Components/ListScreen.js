import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { AppText, AppTextBlack, AppTextBold } from "../Common/AppText";

const ListScreen = () => {
    const tasks = [
        { name: 'Task #1', description: ' - Brew Coffee' },
        { name: 'Task #2', description: ' - Exercise Routine' },
        { name: 'Task #3', description: '' },
        { name: 'Task #4', description: '' },
        { name: 'Task #5', description: '' },
        { name: 'Task #6', description: '' },
        { name: 'Task #7', description: '' }
    ];
    return (
        <FlatList 
        keyExtractor={task => task.name}
        data={tasks} 
        renderItem={({ item }) => {
            return (
                <View>
                    <AppTextBold style={styles.borderStyle}>{item.name}</AppTextBold>
                    <Text>{item.description}</Text>
                </View>
            );
        }}>
        </FlatList>
    )
};

const styles = StyleSheet.create({
    borderStyle: {
        marginVertical: 30
    }
});

export default ListScreen;