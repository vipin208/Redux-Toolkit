import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Demo from './src/screen/Demo'
import { Provider } from 'react-redux'
import { store } from './src/redux/store'
import { NavigationContainer } from '@react-navigation/native'
import AppNavigation from './src/navigation/appNavigation'
import 'react-native-gesture-handler';
import { ThemeProvider } from './src/contextApi/darkModeContext'
const App = () => {
  return (
    <Provider store={store} >
      <ThemeProvider>
    <NavigationContainer>
      <AppNavigation/>
    </NavigationContainer>
    </ThemeProvider>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})