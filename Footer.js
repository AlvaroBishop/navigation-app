import React from 'react'
import { Button, Text, View } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

const Footer = ({ children }) => {
  return (
    <View style={styles.footer}>
      {children}
    </View>
  )
}

Footer.propTypes = {
  children: PropTypes.node.isRequired
};


export default Footer