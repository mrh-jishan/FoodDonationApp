import storage from '@react-native-firebase/storage';
import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { Button, Card, Paragraph, Title } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

const DrequestDonor = ({ dRequests, acceptRequest }) => {




    return (
        <Card style={{  marginVertical: 15, backgroundColor: "#e6e6e6"}}>
            <Card.Content>
                <Title style={{fontSize:18}}>Date Requested: {dRequests.dateRequested}</Title>
                <Title style={{fontSize:18}}>Orphanage Home Name: {dRequests.oName}</Title>
                <Title style={{fontSize:18}}>Care Taker Name: {dRequests.name}</Title>
                <Title style={{fontSize:18}}>Needed date: {dRequests.neededDateVal}</Title>
                <Title style={{fontSize:18}}>Description: {dRequests.description}</Title>
            </Card.Content>
            <Card.Actions>
                <Button style={{width: "100%",
                                backgroundColor: "#006666",
                                borderRadius: 25,
                                marginVertical: 16,
                                paddingVertical: 12,
                                marginRight: 5}} 
                                onPress={() => acceptRequest(dRequests)}>
                
                    <Icon name="check" size={20} style={{ color: 'white', marginRight: '20' }} />
                    <Text style={{fontSize: 16,
                                        fontWeight: '500',
                                        color: 'white',
                                        textAlign: "center"}}>   Accept Donation Request</Text>
                </Button>
            </Card.Actions>
        </Card>
    )
};

export default DrequestDonor;