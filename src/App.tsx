import 'react-native-gesture-handler';
import { ThemeProvider } from '@/theme';
import { MMKV } from 'react-native-mmkv';
import ApplicationNavigator from './navigators/Application';
import './translations';

export const storage = new MMKV();

function App() {
  
  return (
    <ThemeProvider storage={storage}>
      <ApplicationNavigator />
    </ThemeProvider>
  );
}

export default App;
