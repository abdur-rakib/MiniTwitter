import {StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {commonStyles} from '../../styles/commonstyles';
import {useDispatch, useSelector} from 'react-redux';
import {userSelector} from '../../redux/user/userSlice';
import {GetUsers} from '../../api/userApi';
import {FlashList} from '@shopify/flash-list';
import {SingleUserType} from '../../types';
import SingleUser from '../../components/SingleUser';

const UsersScreen = () => {
  // redux staff
  const dispatch: any = useDispatch();
  const {users} = useSelector(userSelector);

  // render single item
  const renderItem = ({item}: {item: SingleUserType}) => (
    <SingleUser item={item} />
  );

  useEffect(() => {
    dispatch(GetUsers());
  }, [dispatch]);
  return (
    <View style={[commonStyles.container, styles.container]}>
      <FlashList
        data={users.users}
        renderItem={renderItem}
        estimatedItemSize={200}
      />
    </View>
  );
};

export default UsersScreen;

const styles = StyleSheet.create({
  container: {},
});
