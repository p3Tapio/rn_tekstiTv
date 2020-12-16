import React from 'react';
import { View } from 'react-native';
import styles from './src/style';

import Tekstitv from './src/Tekstitv';

const App: React.FC = () => (
  <View style={{ backgroundColor: 'black' }}>
    <View style={styles.mainContainer}>
      <Tekstitv />
    </View>
  </View>
);

export default App;
