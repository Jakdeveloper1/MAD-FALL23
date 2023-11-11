import { React, useState} from "react";
import {StyleSheet, Text, View, Alert, Button, TextInput, TouchableOpacity, ToastAndroid } from 'react-native';
import * as MyImport from './components/Second';
 

const App =  ()=>  {
  const[counter, setCounter] = useState(0)

  const Increment = () => {
    setCounter(counter+1)
  }
 
  const Decrement = () => {
    if(counter>0)
    setCounter(counter-1)
  }
  
  
  return (
    <View style={{flex:1}} >

      <Text style={mystyle.text}>Counter App</Text>
      
      <View style={mystyle.innerView}>
        <TouchableOpacity style={mystyle.touchable} 
        onPress={Increment}>
          <Text style={[mystyle.text1,{color:"green"}]}>+</Text>
        </TouchableOpacity>
        
        <Text style={mystyle.text1}>{counter}</Text>
        
        <TouchableOpacity style={mystyle.touchable}
        onPress={Decrement}>
          <Text style={[mystyle.text1,{color:"red"}]}>-</Text>
        </TouchableOpacity>
        
      </View>
      

    </View>
  );
}

const mystyle = StyleSheet.create(
  {
    text:{
      fontSize:50,
      color:"red",
      textAlign:"center",
    },
    text1:
    {
      fontSize:36,
      color:"black",
      textAlign:"center"
    },
    innerView:{
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"space-around",
      flex:1,
      

    },
    touchable:{
      backgroundColor:"lightblue",
      padding:20,
      borderRadius:10,
      width:80
    }
  }
)

// class App extends Component{

// state ={
//   name:""
// }
//   render(){
//     return(
//       <View>
//         <Text>Hello World {this.state.name}</Text>
//         <TextInput style={{borderWidth:1}} onChangeText={(text)=>this.setState({name:text})} ></TextInput>
//       </View>
//     )
//   }
// }


export default App;