import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet, StatusBar} from 'react-native';
import CommonStyles from '../common/CommonStyles';

export const TopicTextComponent = ({
  title,
  onPressBtn,
}) => {
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.container} onPress={onPressBtn}>
            <Text style={styles.mainText}>{title}</Text>
            <Text style={styles.moreText}>
                MORE
            </Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
    },
    mainText: {
        color: CommonStyles.colors.white
    },
    moreText: {
        color: CommonStyles.colors.green,
        fontFamily: CommonStyles.fontFamily.bold
    },
  });