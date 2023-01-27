import React from 'react';
import { Text, View } from 'react-native';
import { useState } from 'react';


export default function App() {

    const [fontSize,setFontSize] = useState("25");

        return (
          <View style={{flex:1,paddingTop:50}}>
          <Text style={{fontSize:fontSize}}>Hello</Text>
          <TextInput value={fontSize} onChangeText={(text)=>{setFontSize(text)}} keyboardType="numeric" 
           style={{
          height: 40,
          margin: 12,
          borderWidth: 1,
          padding: 10,}}>
           </TextInput>
          </View>
      )}
    
     
      
  
   const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    
    },
    input:{
      width:156,
      margin:12,
      borderWidth:2,
      padding:10,
    },
    
  });
  

    
      



//   const [selected, setSelected] =useState("");

//   const data = [
//       {key:'1', value:'Georgia, serif;'},
//       {key:'2', value:'Arial'},
//       {key:'3', value:'Verdana'},
//       {key:'4', value:'Tahoma'},
//       {key:'5', value:'Times New Roman'},
//       {key:'6', value:'Courier New'},
//       {key:'7', value:'Trebuchet MS'},
//       {key:'8',value:'monospace'},
//       {key:'9',value:'fantasy'},
//       {key:'10',value:'Helvetica'},
//   ];


//   return(
  
   
//      <View style={{paddingHorizontal:20,paddingVertical:50,flex:1,}}>
//     <SelectList data={data}
//      setSelected={setSelected}
//      boxStyles={{backgroundColor:'pink',marginHorizontal:20,borderWidth:2}}
    
//      dropdownStyles={{backgroundColor:'grey' ,borderColor:'navy',borderRadius:20,borderWidth:3}}
        
//     />
//     </View>
    
//   )
    


  
// export default App();

  


 

