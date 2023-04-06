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
        fontFamily: `HelveticaNeue-${type ? type : 'Regular'}`,
        ...(style as object),
      }}
      {...otherProps}>
      {children}
    </Text>
  );
};

export default MyText;
