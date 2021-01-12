import React,{Component} from "react";
import {Platform, StyleSheet, Text, View, Image, ImageBackground, Dimensions} from "react-native";

export default class HomeScreen extends Component{
  render() {
    return (
      <View style={{flex:1}}>
          {/* <Text>Clone Opo</Text> */}
        <View style={{flex:1}}>
          <ImageBackground source={require('../assets/page/home-screen.png')} style={styles.imagebackground}>
            <View style={{flexDirection:'row', marginTop:30}}>
              <Text style={styles.Logo}>OPO</Text>
              <Image style={{width:23, height:26}} source={require('../assets/icon/bell-solid.png')}/>
              
            </View>
          </ImageBackground>
        </View>

        <View style={{height:60, flexDirection:'row'}}>
          <View style={{flex:1, alignItems:'center', justifyContent:"center"}}>
              <Image style={styles.home}  source={require('../assets/icon/home-active.png')}/>
            <Text style={{fontSize:12, color:'#0088FF', marginTop:4}}>Home</Text>
          </View>
          <View style={{flex:1, alignItems:'center', justifyContent:"center"}}>
              <Image style={styles.deals}  source={require('../assets/icon/deals.png')}/>
            <Text style={{fontSize:12, color:'#919191', marginTop:4}}>Deals</Text>
          </View>
          <View style={{flex:1, alignItems:'center', justifyContent:"center"}}>
              <Image style={styles.scan}  source={require('../assets/icon/scan.png')}/>
            <Text style={{fontSize:12, color:'#919191', marginTop:4}}>Scan</Text>
          </View>
          <View style={{flex:1, alignItems:'center', justifyContent:"center"}}>
              <Image style={styles.finance}  source={require('../assets/icon/finance.png')}/>
            <Text style={{fontSize:12, color:'#919191', marginTop:4}}>Finance</Text>
          </View>
          <View style={{flex:1, alignItems:'center', justifyContent:"center"}}>
            <Image style={styles.profile}  source={require('../assets/icon/profile.png')}/>
            <Text style={{fontSize:12, color:'#919191', marginTop:4}}>Profile</Text>
          </View>
        </View>        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  Logo:{
    fontSize:25,
    fontWeight: "bold",
    color: '#fff',
  },

  imagebackground:{
    flex: 1,
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    resizeMode: 'cover'
  },

  home: {
    width:28, 
    height:24,
  },
  
  deals: {
    width:25, 
    height:27
  },

  scan:{
    width:27, 
    height:25
  },

  finance:{
    width:25, 
    height:25
  },

  profile:{
    width:25, 
    height:26
  }
})