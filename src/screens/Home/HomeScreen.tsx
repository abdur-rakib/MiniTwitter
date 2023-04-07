import {View} from 'react-native';
import React, {useState} from 'react';
import {ScaledSheet} from 'react-native-size-matters';
import {FlashList} from '@shopify/flash-list';
import data from '../../mockData/timeline.json';
import {TweetType} from '../../types';
import SingleTweet from '../../components/SingleTweet';
import {colors} from '../../theme/colors';

const HomeScreen = () => {
  // component state
  const [tweets] = useState<TweetType[]>(data.timeline);

  // render single item
  const renderItem = ({item}: {item: TweetType}) => <SingleTweet item={item} />;
  return (
    <View style={styles.container}>
      <FlashList
        data={tweets}
        renderItem={renderItem}
        estimatedItemSize={200}
      />
    </View>
  );
};

export default HomeScreen;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.extra_extra_light_gray,
  },
});
