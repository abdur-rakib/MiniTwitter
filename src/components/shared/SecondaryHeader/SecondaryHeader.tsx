import {TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ScaledSheet, moderateScale} from 'react-native-size-matters';
import {commonStyles} from '../../../styles/commonstyles';
import MyText from '../MyText';
import {colors} from '../../../theme/colors';
import {spacing} from '../../../theme/spacing';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import {useNavigation} from '@react-navigation/native';

interface HeaderProps {
  backTitle: string;
  right?: boolean;
}

const SecondaryHeader: React.FC<HeaderProps> = ({backTitle, right}) => {
  const navigation: any = useNavigation();

  const handleBackAction = () => {
    navigation.goBack();
  };
  return (
    <View style={[commonStyles.headerContainer, styles.container]}>
      {/* left */}
      <TouchableOpacity onPress={handleBackAction} style={styles.left}>
        <Ionicons
          name="arrow-back"
          color={colors.black}
          size={moderateScale(20)}
        />
        <MyText type="Medium" style={styles.backTitleStyle}>
          {backTitle}
        </MyText>
      </TouchableOpacity>
      {/* right */}
      {right && (
        <TouchableOpacity
          onPress={() => navigation.navigate('Users')}
          style={styles.right}>
          <Octicons
            name="person-add"
            color={colors.black}
            size={moderateScale(20)}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SecondaryHeader;

const styles = ScaledSheet.create({
  container: {
    justifyContent: 'space-between',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backTitleStyle: {
    color: colors.black,
    fontSize: spacing[16],
    marginHorizontal: spacing[12],
  },
  right: {},
});
