import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';
import screenSize from '../constants/Layout';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.counterTextTitle}>Counter Now At</Text>
        <Text style={styles.counterText}>00</Text>
        <View style={styles.counterButtonView}>
          <TouchableOpacity
            onPress={() => {}}
            style={styles.counterButton}
          >
            <Text style={styles.counterButtonText}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={styles.counterButton}
          >
            <Text style={styles.counterButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  counterTextTitle: {
    fontSize: 24,
  },
  counterText: {
    fontSize: 50
  },
  counterButtonView: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: screenSize.window.width / 2,
  },
  counterButton: {
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 20,
    paddingRight: 20,
  },
  counterButtonText: {
    fontSize: 60
  }
});
