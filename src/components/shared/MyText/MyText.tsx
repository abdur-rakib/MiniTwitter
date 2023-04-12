/* eslint-disable react-native/no-inline-styles */
import {StyleProp, Text, TextStyle} from 'react-native';
import React from 'react';

interface MyTextProps {
  children: React.ReactNode;
  type?: 'Bold' | 'Medium' | 'Regular' | 'Light';
  style?: StyleProp<TextStyle>;
}

const MyText = ({
  children,
  type,
  style,
  ...otherProps
}: MyTextProps): JSX.Element => {
  return (
    <Text
      style={{
        fontFamily: type ? `HelveticaNeue-${type}` : 'HelveticaNeue',
        ...(style as object),
      }}
      {...otherProps}>
      {children}
    </Text>
  );
};

export default MyText;
