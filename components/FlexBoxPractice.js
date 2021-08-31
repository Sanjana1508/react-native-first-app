import React from 'react'
import { StyleSheet, Text, View} from 'react-native';

const FlexBoxPractice=()=>{
    return (
        <View style={styles.screen}>
        <View style={styles.text1}>
          <Text>1</Text>
        </View>
        <View style={styles.text2}>
          <Text>2</Text>
        </View>
        <View style={styles.text3}>
          <Text>3</Text>
        </View>
      </View>
    )
}

const styles=StyleSheet.create({
    screen:{
        marginTop: 10, 
        flexDirection: 'row', 
        width: '80%', 
        height: 100, 
        justifyContent: 'space-around', 
        alignItems: 'stretch'
    },
    text1:{ 
        backgroundColor: 'red', 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center' 
    },
    text2:{ 
        backgroundColor: 'yellow', 
        flex: 2, 
        justifyContent: 'center', 
        alignItems: 'center' 
    },
    text3:{ 
        backgroundColor: 'green', 
        justifyContent: 'center', 
        alignItems: 'center' 
    }
})

export default FlexBoxPractice
