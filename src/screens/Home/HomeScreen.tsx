import {RefreshControl, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ScaledSheet, moderateScale} from 'react-native-size-matters';
import {FlashList} from '@shopify/flash-list';
import {TweetType} from '../../types';
import SingleTweet from '../../components/SingleTweet';
import {colors} from '../../theme/colors';
import Feather from 'react-native-vector-icons/Feather';
import {spacing} from '../../theme/spacing';
import {useGetTweetsQuery} from '../../api/tweetApi';
import MyToast from '../../components/shared/MyToast/MyToast';
import Loading from '../../components/shared/Loading';
import EmptyComponent from '../../components/shared/Empty';

interface HomeProps {
  navigation: any;
}

const HomeScreen: React.FC<HomeProps> = ({navigation}) => {
  const {data, isLoading, error, isError, isFetching, refetch} =
    useGetTweetsQuery();
  // render single item
  const renderItem = ({item}: {item: TweetType}) => <SingleTweet item={item} />;
  return (
    <View style={styles.container}>
      {isError && <MyToast message={error?.error} visible={isError} />}
      {isLoading ? (
        <Loading />
      ) : (
        <FlashList
          data={data?.timeline}
          renderItem={renderItem}
          estimatedItemSize={200}
          // onEndReached={() => setPageCurrent(prev => prev + 1)}
          onEndReachedThreshold={0}
          ListEmptyComponent={<EmptyComponent text="tweets" />}
          refreshControl={
            <RefreshControl refreshing={isFetching} onRefresh={refetch} />
          }
        />
      )}
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
