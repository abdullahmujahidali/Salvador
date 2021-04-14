/* eslint-disable no-trailing-spaces */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { TextInput, Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';


const ListItemScreen = () => {
    const myitems = [
        {
            name: 'Adopt chow chow',
            type: 'cat',
            breed: 'persian',
            age: '3',
            description: 'moving out dye to the megerncy cant but mre pets in my',
            contactNumber: '03229437619',
            contactName: 'abdullah',
            image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aXBob25lfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        },
        {
            name: 'Milk',
            type: 'dog',
            breed: 'german',
            age: '8',
            description: 'Dont have time',
            contactNumber: '03334720687',
            contactName: 'abdullah',
            image: 'https://images.unsplash.com/photo-1511044568932-338cba0ad803?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
        },
    ]
    const renderIntem = (item) => {
        return (
            <Card style={styles.card}>
                <Card.Title title={item.name}  />
                <Card.Content>
                    <Paragraph>{item.description}</Paragraph>
                </Card.Content>
                <Card.Cover source={{ uri: item.image }} />
                <Card.Actions>
                    <Button>Adopt Me </Button>
                    <Button>Call Seller</Button>
                </Card.Actions>
            </Card>
        )
    }
    return (
       
        <View>
                <FlatList
                    data={myitems}
                    keyExtractor={(item) => item.contactNumber}
                    renderItem={({ item }) => renderIntem(item)}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        margin: 10,
        elevation: 2,
    },
   
});

export default ListItemScreen;
