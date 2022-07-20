import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

import LineLogin from '@xmartlabs/react-native-line';

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        onPress={() => {
          console.log('==================');
          LineLogin?.login?.();
        }}>
        <Text style={{color: '#000'}}>App</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
