import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

export const ActionButton = ({
  title,
  customStyle,
  customTextStyle,
  onPressBtn,
  icon,
}) => {
  return (
    <TouchableOpacity style={customStyle} onPress={onPressBtn}>
      {icon}
      <Text
        style={customTextStyle}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
