import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider, Text, Center } from 'native-base';
import { THEME } from './src/styles/theme';

export default function App() {
  return (
    <NativeBaseProvider theme={THEME}>
      <Center flex={1} bgColor='gray.400'>
        <Text color='white' fontSize={24}>
          Hello React Native!
        </Text>
        <StatusBar style="auto" />
      </Center>
    </NativeBaseProvider>
  );
}

//RN trabalha com independencia de pixel
