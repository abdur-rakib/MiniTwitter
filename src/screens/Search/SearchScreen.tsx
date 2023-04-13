import {Platform, TextInput, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ScaledSheet} from 'react-native-size-matters';
import {commonStyles} from '../../styles/commonstyles';
import {colors} from '../../theme/colors';
import {spacing} from '../../theme/spacing';
import MyText from '../../components/shared/MyText';
import {useSearchUserQuery} from '../../api/userApi';
import {FlashList} from '@shopify/flash-list';
import {SingleUserType} from '../../types';
import SingleUser from '../../components/SingleUser';
import Loading from '../../components/shared/Loading';
import MyToast from '../../components/shared/MyToast';

const SearchScreen = () => {
  // component state
  const [searchText, setSearchText] = useState<string>('');
  const [debouncedSearchText, setDebouncedSearchText] = useState<string>('');

  const {data, isLoading, isError, error, isSuccess} = useSearchUserQuery(
    {token: debouncedSearchText},
    {skip: !debouncedSearchText},
  );
  console.log(
    '🚀 ~ file: SearchScreen.tsx:21 ~ SearchScreen ~ isSuccess:',
    isSuccess,
  );

  useEffect(() => {
    const debounceId = setTimeout(() => {
      setDebouncedSearchText(searchText);
    }, 1000);

    return () => {
      clearTimeout(debounceId);
    };
  }, [searchText]);

  // render single item
  const renderItem = ({item}: {item: SingleUserType | any}) => (
    <SingleUser item={item} />
  );
  return (
    <View style={[commonStyles.container, styles.container]}>
      {isError && <MyToast message={error?.error} visible={isError} />}
      {/* search input */}
      <TextInput
        value={searchText}
        style={[styles.inputStyle, commonStyles.regularText]}
        onChangeText={text => setSearchText(text)}
        placeholder="Search User"
        cursorColor={colors.blue}
      />
      {isSuccess ? (
        <MyText type="Light" style={styles.text}>
          Total users found: {data?.count ?? 0}
        </MyText>
      ) : (
        <MyText type="Light" style={styles.text}>
          Please input text to search user
        </MyText>
      )}

      {/* search results */}
      <View style={styles.listContainer}>
        {isLoading ? (
          <Loading />
        ) : (
          isSuccess && (
            <FlashList
              data={data?.search_results}
              renderItem={renderItem}
              estimatedItemSize={200}
            />
          )
        )}
      </View>
    </View>
  );
};

export default SearchScreen;

const styles = ScaledSheet.create({
  container: {},
  inputStyle: {
    backgroundColor: colors.extra_light_gray,
    paddingHorizontal: spacing[18],
    marginVertical: spacing[8],
    borderRadius: spacing[24],
    paddingVertical: Platform.OS === 'android' ? spacing[6] : spacing[10],
    fontSize: spacing[13],
    color: colors.black,
  },
  text: {
    fontSize: spacing[16],
    color: colors.black,
    textAlign: 'center',
  },
  listContainer: {
    flex: 1,
  },
});
