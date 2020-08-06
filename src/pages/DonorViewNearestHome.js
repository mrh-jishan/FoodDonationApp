import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import NearestHome from '../components/NearestHome';

class DonorViewNearestHome extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            nearestH: [],
        }
    }

    componentDidMount() {
        firestore().collection('Users').onSnapshot(snap => {
            const vHome = [];
            snap.forEach(res => {
                const data = res.data();
                if (data.type == "receiver") {
                    vHome.push({
                        ...res.data(),
                        key: res.id,
                    });
                }
                
            });
            this.setState({ nearestH: vHome })
        })
    }

    // acceptRequest = (res) => {
    //     firestore()
    //         .collection('Users')
    //         .doc(res.key)
    //         .update({ accepted: true, acceptedBy: auth().currentUser.email })
    //         .then(() => {
    //             console.log('Nearest Home Displayed!');
    //         });
    // }

    render() {
        return (
            <ScrollView style={styles.container}>
                <Text style={{
                    textAlign: 'center',
                    fontSize: 22
                }}>View Nearest Orphanage Home</Text>

                {this.state.nearestH.length > 0 && (
                    this.state.nearestH.map((res, index) => (
                        <NearestHome vHome={res}
                            //acceptRequest={this.acceptRequest}
                            key={index}
                            navigation={this.props.navigation}
                        />
                    ))
                )}

            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ccc',
        padding: 15,

    },
    textInput: {
        width: "100%",
        marginVertical: 10,
        color: '#008080',
        borderRadius: 25,
        paddingHorizontal: 16

    },

    button: {
        width: 300,
        backgroundColor: "#006666",
        borderRadius: 25,
        marginVertical: 16,
        paddingVertical: 12,
        marginLeft: 30

    },

    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: "center"
    },


});


export default DonorViewNearestHome;