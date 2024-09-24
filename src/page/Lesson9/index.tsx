import { StyleSheet, Text, View, } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import React from "react";

type info = {
    name: string,
    age?: number,
    address?: string
}

type message = {
    users: info
}
 
export default function Component({users}: message) {
    return(
        <>
            <Text>{users.name}</Text>
        </>
    );
}