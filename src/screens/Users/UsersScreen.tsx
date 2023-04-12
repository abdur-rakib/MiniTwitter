import {RefreshControl, StyleSheet, View} from 'react-native';
import React from 'react';
import {commonStyles} from '../../styles/commonstyles';
import {useGetUsersQuery} from '../../api/userApi';
import {FlashList} from '@shopify/flash-list';
import {SingleUserType} from '../../types';
import SingleUser from '../../components/SingleUser';
import MyToast from '../../components/shared/MyToast/MyToast';
import Loading from '../../components/shared/Loading';

const UsersScreen = () => {
  const {data, isError, isLoading, isFetching, refetch} = useGetUsersQuery();

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
          data={data.users}
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

export default UsersScreen;

const styles = StyleSheet.create({
  container: {},
});
