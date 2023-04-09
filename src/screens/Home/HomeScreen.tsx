/* eslint-disable react-hooks/exhaustive-deps */
import {View} from 'react-native';
import React, {useEffect} from 'react';
import {ScaledSheet} from 'react-native-size-matters';
import {FlashList} from '@shopify/flash-list';
import {TweetType} from '../../types';
import SingleTweet from '../../components/SingleTweet';
import {colors} from '../../theme/colors';
import {useDispatch, useSelector} from 'react-redux';
import {GetTweets} from '../../api/tweetApi';
import {tweetSelector} from '../../redux/tweet/tweetSlice';

const HomeScreen = () => {
  // component state
  // redux staff
  const dispatch: any = useDispatch();
  const {tweets} = useSelector(tweetSelector);

  useEffect(() => {
    dispatch(GetTweets());
  }, []);

  // render single item
  const renderItem = ({item}: {item: TweetType}) => <SingleTweet item={item} />;
  return (
    <View style={styles.container}>
      <FlashList
        data={tweets.timeline}
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
