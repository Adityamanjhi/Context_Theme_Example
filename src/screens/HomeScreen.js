import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const HomeScreen = props => {
  const { theme, isDark, toggleTheme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <TouchableOpacity
        activeOpacity={0.8}
        style={[styles.buttonStyle, isDark && { backgroundColor: 'white' }]}
        onPress={toggleTheme}
      >
        <Text style={[styles.buttonTextStyle, isDark && { color: '#000' }]}>
          Toggle Theme
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  buttonStyle: {
    alignSelf: 'center',
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: 'black',
  },
  buttonTextStyle: {
    fontSize: 18,
    lineHeight: 27,
    color: 'white',
    fontWeight: '600',
  },
});

export default HomeScreen;
