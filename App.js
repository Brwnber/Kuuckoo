import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import * as React from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { Assets, createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import ComponentsScreen from './src/Components/ComponentsScreen';
import ListScreen from './src/Components/ListScreen';

const Stack = createStackNavigator();
const customFonts = {
  'Montserrat-Black': require('./assets/fonts/Montserrat-Black.ttf'),
  'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
  'Montserrat-BoldItalic': require('./assets/fonts/Montserrat-BoldItalic.ttf'),
  'Montserrat-Italic': require('./assets/fonts/Montserrat-Italic.ttf'),
  'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf')
}

export default class App extends React.Component {
  state = {
    fontsLoaded: false,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true});
  }

  componentDidMount(){
    this._loadFontsAsync();
  }

  render(){
    if(this.state.fontsLoaded){
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Tasks">
            <Stack.Screen
              name="Home"
              component={ComponentsScreen}
              options={{ title: 'App' }} />
            <Stack.Screen
              name="Tasks"
              component={ListScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      );
    } else {
      return <AppLoading/>;
    }
  }
}
