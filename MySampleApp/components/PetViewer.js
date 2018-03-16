import React,{Component} from 'react';
import {
    PanResponder,
    Platform,
    Animated,
    Dimensions,
    ScrollView,
    StyleSheet,
    Text,
    Image,
    ImageBackground,
    View
}
from 'react-native'
const styles = StyleSheet.create({
    background:{
        backgroundColor:'blue',
        flex:1 ,
        alignItems: 'center',
        justifyContent:'center'
    },
    card:{
        backgroundColor:'red',
       
        width:300,
        height:500
    },
    img:{
        width:"100%",
        height:"100%",
        flex:1,
        justifyContent:'space-around'
        
    },
    name: {
        fontWeight:"bold",
        fontSize:50,
        
    }
})
export default class PetViewer extends Component{
    
    constructor(){
        super();
        this.PanResponder;
        this.state = {
            Xposition: new Animated.Value(0),
            RightText:false,
            LeftText:false,
        }
        this.CardView_Opacity = new Animated.Value(1);
    }
    static navigationOptions = {
     drawerLabel:'pets'
 };

 ComponentWillMount(){
     this.PanResponder = PanResponder.create({
         onStartShouldSetPanResponder: (evt,gestureState) => false,
         onMoveShouldSetPanResponder: (evt, gestureState) => true,
         onStartShouldSetPanResponderCapture: (evt,gestureState) => false,
         onMoveShouldSetPanResponderCapture: (evt,gestureState) => true,
        
         onPanResponderMove:(evt,gestureState) =>
         {
             this.state.Xposition.setValue(gestureState.dx);

             if(gestureState.dx > SCREEN_WIDTH - 250 ){

                this.setState({
                    RightText:false,
                    LeftText: true
                });
             }
             else if(gestureState.dx > SCREEN_WIDTH + 250){

                this.setState({
                    RightText:true,
                    LeftText: false
                });
             }
         },
         onPanResponderRelease: (evt,gestureState) => {
             if(gestureState.dx < SCREEN_WIDTH - 150 && gestureState.dx >)
         }
     })
 }
    render(){
        return(
            <View style={styles.background}> 
                <View style={styles.card}>
                <ImageBackground style={styles.img} source={require('../img/puppie.jpg')} >
                    <Text style={styles.name}>Bruce</Text>
                </ImageBackground>
                
               </View>
            </View>
        )
    }
}