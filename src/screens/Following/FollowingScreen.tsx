import {StyleSheet, View} from 'react-native';
import React from 'react';
import {commonStyles} from '../../styles/commonstyles';
import {FlashList} from '@shopify/flash-list';
import SingleUser from '../../components/SingleUser';
import {SingleUserType} from '../../types';
import {useGetFollowingsQuery} from '../../api/userApi';
import Loading from '../../components/shared/Loading';
import MyToast from '../../components/shared/MyToast/MyToast';
import {RefreshControl} from 'react-native-gesture-handler';
import EmptyComponent from '../../components/shared/Empty';

const FollowingScreen = () => {
  const {data, isError, isLoading, isFetching, refetch} =
    useGetFollowingsQuery();

  // render single item
  const renderItem = ({item}: {item: SingleUserType | any}) => (
    <SingleUser item={{...item, following: true}} />
  );

  return (
    <View style={[commonStyles.container, styles.container]}>
      {isError && <MyToast message={error?.error} visible={isError} />}
      {isLoading ? (
        <Loading />
      ) : (
        <FlashList
          data={data?.followings}
          renderItem={renderItem}
          estimatedItemSize={200}
          onEndReachedThreshold={0}
          ListEmptyComponent={<EmptyComponent text="following user" />}
          refreshControl={
            <RefreshControl refreshing={isFetching} onRefresh={refetch} />
          }
        />
      )}
    </View>
  );
};

export default FollowingScreen;

const styles = StyleSheet.create({
  container: {},
});
