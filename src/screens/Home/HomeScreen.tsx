/* eslint-disable react-hooks/exhaustive-deps */
import {RefreshControl, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ScaledSheet, moderateScale} from 'react-native-size-matters';
import {FlashList} from '@shopify/flash-list';
import {TweetType} from '../../types';
import SingleTweet from '../../components/SingleTweet';
import {colors} from '../../theme/colors';
import {useDispatch, useSelector} from 'react-redux';
import {GetTweets} from '../../api/tweetApi';
import {tweetSelector} from '../../redux/tweet/tweetSlice';
import Feather from 'react-native-vector-icons/Feather';
import {spacing} from '../../theme/spacing';

interface HomeProps {
  navigation: any;
}

const HomeScreen: React.FC<HomeProps> = ({navigation}) => {
  // component state
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [pageCurrent, setPageCurrent] = useState<number>(1);
  // redux staff
  const dispatch: any = useDispatch();
  const {tweets} = useSelector(tweetSelector);

  const fetchTweets = async (page: number) => {
    await dispatch(GetTweets(page));
    setRefreshing(false);
  };

  useEffect(() => {
    pageCurrent > 1 && fetchTweets(pageCurrent);
  }, [pageCurrent]);

  const initialFetch = () => {
    fetchTweets(1);
    setPageCurrent(1);
  };

  // render single item
  const renderItem = ({item}: {item: TweetType}) => <SingleTweet item={item} />;
  return (
    <View style={styles.container}>
      <FlashList
        data={tweets}
        renderItem={renderItem}
        estimatedItemSize={200}
        onEndReached={() => setPageCurrent(prev => prev + 1)}
        onEndReachedThreshold={0}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={initialFetch} />
        }
      />
      {/* floating add tweet button */}
      <TouchableOpacity
        onPress={() => navigation.navigate('CreateTweet')}
        style={styles.floatingContainer}>
        <Feather
          name="plus"
          size={moderateScale(25)}
          color={colors.extra_extra_light_gray}
        />
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.extra_extra_light_gray,
    position: 'relative',
  },
  floatingContainer: {
    position: 'absolute',
    height: spacing[50],
    width: spacing[50],
    borderRadius: spacing[50],
    zIndex: 999,
    bottom: spacing[10],
    right: spacing[12],
    backgroundColor: colors.blue,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
