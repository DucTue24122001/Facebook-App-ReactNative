import React from 'react'
import { Text, View } from 'react-native'
import Video from 'react-native-video'


const VideoScreen = () => {
  return (
    <View>
        <Text>Video Screen</Text>
        <Video source={{url:"https://www.facebook.com/watch?v=7036853413107508", type:'mp4'}} paused = {false} repeat={true} />
    </View>
  )
}

export default VideoScreen