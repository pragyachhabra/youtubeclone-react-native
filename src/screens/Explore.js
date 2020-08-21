import React from 'react';
import { StyleSheet, Text, View ,FlatList,ScrollView} from 'react-native';
import Header from '../components/Header'
import Card from '../components/Card'
import {useSelector} from 'react-redux'
import Constant from 'expo-constants'

const LittleCard= ({name})=>{
    
    return(
        <View style={{
            backgroundColor:"red",
            height:50,
            width:173,
            borderRadius:4,
            marginTop:20
        }}>
            <Text style={{
                textAlign:"center",
                color:"white",
                fontSize:22,
                marginTop:5
            }}>{name}</Text>
        </View>
    )
}

const Explore = ()=>{
    const cardData = useSelector(state=>{
        return state.cardData
      })
   return(
       <View style={{    
        }}>
           <Header />
           <ScrollView>
           <View style={{
               flexDirection:"row",
               flexWrap:"wrap",
               marginTop:60,
               justifyContent:"space-between"
           }}>
                <LittleCard name="Gaming" />
                <LittleCard name="Trending"/>
                <LittleCard name="Music" />
                <LittleCard name="News" />
                <LittleCard name="Movies"/>
                <LittleCard name="Fashion"/> 
           </View>
           <Text style={{
               margin:8,
               fontSize:22,
               borderBottomWidth:1
           }}>Trending Videos</Text>
            <FlatList 
                data={cardData}
                renderItem={({item})=>{
                    return <Card
                    videoId={item.id.videoId}
                    title={item.snippet.title}
                    channel={item.snippet.channelTitle}
                
                    />
                }}

                keyExtractor={item=>item.id.videoId}
                />
                </ScrollView>
           
       </View>
   )
}

export default Explore