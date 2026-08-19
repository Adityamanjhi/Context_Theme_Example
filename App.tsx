import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from './src/context/ThemeContext';
import HomeScreen from './src/screens/HomeScreen';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <HomeScreen/>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

export default App;
