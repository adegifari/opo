import { Button, Container, Content, Header } from 'native-base';
import React from 'react';
import {View, Image,StyleSheet, Text, ImageBackground,Dimensions} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';


const PinScreen = ({navigation}:{navigation:any}) => {
    return(
        <View style={{flex:1}}>
                <Container>
                    <ImageBackground source={require('../assets/page/pin-screen.png')} style={styles.ImageBackground}>
                        <Content>
                                <View style={styles.btnline1}>
                                    <Button transparent onPress={()=>navigation.navigate('Home')} style={{flex:1, justifyContent:"center"}}>
                                        <Text style={{fontSize:32, color:"#fff"}}>1</Text>
                                    </Button>
                                    <Button transparent style={{flex:1, justifyContent:"center"}}>
                                        <Text style={{fontSize:32, color:"#fff"}}>2</Text>
                                    </Button>
                                    <Button transparent style={{flex:1, justifyContent:"center"}}>
                                        <Text style={{fontSize:32, color:"#fff"}}>3</Text>
                                    </Button>
                                </View>

                                <View style={styles.btnline2}>
                                    <Button transparent onPress={()=>navigation.navigate('Home')} style={{flex:1, justifyContent:"center"}}>
                                        <Text style={{fontSize:32, color:"#fff"}}>4</Text>
                                    </Button>
                                    <Button transparent style={{flex:1, justifyContent:"center"}}>
                                        <Text style={{fontSize:32, color:"#fff"}}>5</Text>
                                    </Button>
                                    <Button transparent style={{flex:1, justifyContent:"center"}}>
                                        <Text style={{fontSize:32, color:"#fff"}}>6</Text>
                                    </Button>
                                </View>

                                <View style={styles.btnline3}>
                                    <Button transparent onPress={()=>navigation.navigate('Home')} style={{flex:1, justifyContent:"center"}}>
                                        <Text style={{fontSize:32, color:"#fff"}}>7</Text>
                                    </Button>
                                    <Button transparent style={{flex:1, justifyContent:"center"}}>
                                        <Text style={{fontSize:32, color:"#fff"}}>8</Text>
                                    </Button>
                                    <Button transparent style={{flex:1, justifyContent:"center"}}>
                                        <Text style={{fontSize:32, color:"#fff"}}>9</Text>
                                    </Button>
                                </View>
                        </Content>
                    </ImageBackground>
                </Container>
        </View>
    );
}

const styles = StyleSheet.create({
    ImageBackground:{
        flex: 1,
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        resizeMode: 'cover'
    },
    btnline1:{
        flexDirection:"row",
        alignItems:'center', 
        justifyContent:"center",
        marginTop: 150,
    },
    btnline2:{
        flexDirection:"row",
        alignItems:'center', 
        justifyContent:"center",
        marginTop: 50,
    },
    btnline3:{
        flexDirection:"row",
        alignItems:'center', 
        justifyContent:"center",
        marginTop: 50,
    }
})

export default PinScreen