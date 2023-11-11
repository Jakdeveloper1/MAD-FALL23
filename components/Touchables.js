import React from "react"
import { Alert, Image, Pressable, Text, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native"


export const App = () =>
{
    const [isPress, setPress] = React.useState(false)
    return(
        <View>
            <Text>Touchables VS Pressable</Text>

            <TouchableOpacity onPress={()=>Alert.alert("Pressed")} activeOpacity={0.2} style={{backgroundColor:"blue"}}>
                <Text style={{fontSize:20, textAlign:"center"}}>
                    Touchable Opacity</Text>
            </TouchableOpacity>

            <TouchableHighlight onPress={()=>Alert.alert("Pressed")} style={{backgroundColor:"blue"}}>
                <Text style={{fontSize:20, textAlign:"center"}}>
                    Touchable Highlight</Text>
            </TouchableHighlight>

            <TouchableWithoutFeedback onPress={()=>Alert.alert("Pressed")} style={{backgroundColor:"blue"}}>
                <Text style={{fontSize:20, textAlign:"center"}}>
                    Touchable Without Feedback</Text>
            </TouchableWithoutFeedback>

            <Pressable onPressIn={()=> setPress(true)} onPressOut={()=> setPress(false)}
            onPress={()=>Alert.alert("Pressed")} 
            style={{backgroundColor: isPress ? "blue" : "green"}}>
                
                <Text style={{fontSize:20, textAlign:"center"}}>
                    Pressable</Text>
            </Pressable>

            <Image style={{height:100, width:50}} source={require("../tiny.png")}>
            </Image>
        </View>
    )
}