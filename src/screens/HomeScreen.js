import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { connect } from 'react-redux';

import screenSize from '../constants/Layout';
import {
  addCount,
  subtractCount,
  resetCount } from '../actions/counterActions';

 class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.counterTextTitle}>Counter Now At</Text>
        <Text style={styles.counterText}>{this.props.count}</Text>
        <View style={styles.counterButtonView}>
          <TouchableOpacity
            onPress={() => this.props.subtractCount()}
            style={styles.counterButton}
          >
            <Text style={styles.counterButtonText}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.addCount()}
            style={styles.counterButton}
          >
            <Text style={styles.counterButtonText}>+</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => this.props.resetCount()}
          style={styles.counterButton}
        >
          <Text style={styles.counterButtonText}>RESET</Text>
        </TouchableOpacity>
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
    marginBottom: 20,
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

const mapStateToProps = (state) => {
  const { count } = state.counterReducer;
  return { count };
};

export default connect(mapStateToProps, {
  addCount,
  subtractCount,
  resetCount
})(HomeScreen);
