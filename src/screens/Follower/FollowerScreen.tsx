import {RefreshControl, StyleSheet, View} from 'react-native';
import React from 'react';
import {commonStyles} from '../../styles/commonstyles';
import {FlashList} from '@shopify/flash-list';
import {SingleUserType} from '../../types';
import SingleUser from '../../components/SingleUser';
import {useGetFollowersQuery} from '../../api/userApi';
import MyToast from '../../components/shared/MyToast/MyToast';
import Loading from '../../components/shared/Loading';

const FollowerScreen = () => {
  const {data, isLoading, error, isError, isFetching, refetch} =
    useGetFollowersQuery();

  // render single item
  const renderItem = ({item}: {item: SingleUserType | any}) => (
    <SingleUser item={item} />
  );

  return (
    <View style={[commonStyles.container, styles.container]}>
      {isError && <MyToast message={error?.error} visible={isError} />}
      {isLoading ? (
        <Loading />
      ) : (
        <FlashList
          data={data?.followers}
          renderItem={renderItem}
          estimatedItemSize={200}
          onEndReachedThreshold={0}
          refreshControl={
            <RefreshControl refreshing={isFetching} onRefresh={refetch} />
          }
        />
      )}
    </View>
  );
};

export default FollowerScreen;

const styles = StyleSheet.create({
  container: {},
});
