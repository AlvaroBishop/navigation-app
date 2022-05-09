import React from 'react'
import { Button, Text, View } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

const Box = ({ children }) => {
  return (
    <View style={styles.box}>
      {children}
    </View>
  )
}

Box.propTypes = {
  children: PropTypes.node.isRequired
};


export default Box