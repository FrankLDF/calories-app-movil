import React from 'react';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import Routes from './src/routes/routes';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 2}}>
        <Routes />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}


