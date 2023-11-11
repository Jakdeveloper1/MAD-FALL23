import React from "react";
import { Button, Keyboard, ScrollView, StatusBar, StyleSheet, Text, TextInput, ToastAndroid, TouchableHighlight, TouchableOpacity, View } from "react-native";


const ToDoList = () =>
{
    const[item, setItem] = React.useState("")
    const[list, setList] = React.useState([]) 
    const[edit, setEdit] = React.useState(0) 

    const addItems = () =>
    {
        setList([...list, {key:Math.random().toString() , data:item}])
        setItem("")
        Keyboard.dismiss()
        ToastAndroid.show("Item Added", ToastAndroid.SHORT)
    }

    const deleteItem = (key) =>
    {
        console.warn(key)
        setList(()=> list.filter((element) => element.key != key))
    }

    const updateItem = (item) =>
    {
        setItem(item.data)
        setEdit(item.key)
    }
    
    const updateList = () =>
    {
        setList(()=> list.map((element) => element.key == edit ? 
        {key: element.key, data: item}: element))
    }
    
    return(
        <View>
            <StatusBar backgroundColor={"lightblue"}></StatusBar>
            
            <View style ={mystyle.mainView}>
                <Text style={mystyle.headerText}>To Do List</Text>
            </View>

            <View style={{marginTop:15,width:"100%", flexDirection:"row", justifyContent:"center"}}>
                <TextInput style={mystyle.input} placeholder="Enter an item"
                value={item} onChangeText={setItem}
                ></TextInput>
                <TouchableOpacity style={mystyle.touchable} 
                onPress={edit==0 ? addItems : updateList}>
                    <Text style={{ color:"white", fontWeight:"bold"}}>
                        {edit==0 ? "Add Item" : "Update Item"}</Text>
                </TouchableOpacity>
            
            </View>

            <ScrollView  contentContainerStyle={mystyle.scroll}>
                {list.map((item, index)=>
                
                <TouchableOpacity key={item.key} onPress={()=> updateItem(item)}>
                    <View key={item.key} style={{marginTop:10, flexDirection:"row",borderWidth:1, 
                    width:"100%", justifyContent:"space-between", padding:10,
                    borderRadius:30, alignItems:"center"
                }}>
                        
                        <Text style={{marginLeft:5,fontSize:20}}>{index+1}: {item.data}</Text>
                        <TouchableOpacity key={item.key} style={{ padding:5}} onPress={()=> deleteItem(item.key)}>
                            <Text style={{marginRight:5,fontSize:22, fontWeight:"bold"}}>X</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            
                 )}
            </ScrollView>
        </View>
    )

}

const mystyle = StyleSheet.create({
    mainView:{
        backgroundColor:"lightblue"
    },
    headerText:{
        textAlign:"center",
        fontSize:24,
        padding:10,
        color:"white",
        fontWeight:"bold"
    },
    input:
    {
        borderWidth:1,
        width:"60%"
        
    },
    touchable:{
        borderWidth:1,
        backgroundColor:"lightblue",
        height:"100%",
        padding:13,
        borderColor:"lightblue",
        borderRadius:30,
        marginLeft:10
    },
    scroll:
    {
        marginTop:10,
        width:"90%",
        alignSelf:"center"
    }
})

export default ToDoList;