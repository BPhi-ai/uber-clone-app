import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import tw from "tailwind-react-native-classnames";
import Map from '../components/Map';
import MapView from 'react-native-maps';
import { createStackNavigator } from '@react-navigation/stack';
import NavigateCard from '../components/NavigateCard';
import RideOptionsCard from '../components/RideOptionsCard';

const MapScreen = () => {
  const Stack = createStackNavigator();

  return (
    <View>
      <View style={tw`h-1/3`}>
        <Map />
      </View>
      <View style={tw`h-2/3`}>
        <Stack.Navigator>
          <Stack.Screen
              name="NavigateCard"
              component={NavigateCard}
              options={{
                  headerShown: false,
              }}
          />
          <Stack.Screen
              name="RideOptionsCard"
              component={RideOptionsCard}
              options={{
                  headerShown: false,
              }}
          />
          </Stack.Navigator>
      </View>    
    </View>
  )
}

export default MapScreen

const styles = StyleSheet.create({})