import React from 'react';
import {TouchableOpacity, Text, StyleSheet, Image, StatusBar} from 'react-native';
import CommonStyles from '../common/CommonStyles';

export const MovieListComponent = ({
  image,
  customStyle,
  onPressBtn,
  title,
}) => {
  return (
    <TouchableOpacity
      onPress={onPressBtn}
      style={styles.flatListContainer}>
      <Image style={styles.imageStyle} source={image} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    flatListContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageStyle: {
        height: 250,
        width: 150,
        borderRadius: 10,
        bottom: 10,
        margin: 10,
    },
});