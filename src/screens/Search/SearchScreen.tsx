import {Text, View} from 'react-native';
import React from 'react';
import {ScaledSheet} from 'react-native-size-matters';
import {commonStyles} from '../../styles/commonstyles';

const SearchScreen = () => {
  return (
    <View style={[commonStyles.container, styles.container]}>
      <Text>Search Screen</Text>
    </View>
  );
};

export default SearchScreen;

const styles = ScaledSheet.create({
  container: {},
});
