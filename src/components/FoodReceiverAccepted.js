import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import React, { useEffect, useState } from 'react';
import { Linking, Text } from 'react-native';
import { Button, Card, Paragraph, Title } from 'react-native-paper';

const FoodReceiverAccepted = ({ food }) => {

    const [uri, setUri] = useState();
    const [receiver, setReceiver] = useState({
        phoneNumber: '',
        coords: {
            latitude: '',
            longitude: ''
        }
    })
    useEffect(() => {
        storage()
            .ref(food.img)
            .getDownloadURL().then(url => {
                setUri(url)
            });
        firestore().collection('Users')
            .where('email', '==', food.acceptedBy).get()
            .then(snap => {
                const profile = snap.docs[0].data();
                console.log('profile: ', profile);
                setReceiver(profile)
            })

    });


    return (
        <Card style={{ marginVertical: 15 }}>
            <Card.Content>
                <Title>Name: {food.name}</Title>
                <Text>Date Posted: {food.dataPosted}</Text>
                <Text>Manuf date: {food.manfDateVal}</Text>
                <Text>Exp date: {food.expDateVal}</Text>
                <Text>Type: {food.type}</Text>
                <Text>Accepted: {food.accepted ? 'YES' : 'NO'}</Text>
                <Text>Accepted By: {food.acceptedBy}</Text>
                <Paragraph>Description: {food.description}</Paragraph>
            </Card.Content>
            <Card.Cover source={{ uri: uri }} />
            <Card.Actions>
                <Button onPress={() => Linking.openURL('google.navigation:q=' + receiver.coords.latitude + '+' + receiver.coords.longitude)}>Follow In Map</Button>
                <Button onPress={() => Linking.openURL(`tel:${receiver.phoneNumber}`)}>Call User</Button>
            </Card.Actions>
        </Card>
    )
};

export default FoodReceiverAccepted;