import {Text, TouchableOpacity, View} from 'react-native';
import React, {useRef} from 'react';
import CustomInput from '../../../components/shared/CustomInput';
import {commonStyles} from '../../../styles/commonstyles';
import {ScaledSheet} from 'react-native-size-matters';
import Title from '../../../components/shared/Title';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {spacing} from '../../../theme/spacing';
import {colors} from '../../../theme/colors';
import PrimaryButton from '../../../components/PrimaryButton';

const LoginScreen = ({navigation}) => {
  // refs
  const emailRef = useRef();
  const passwordRef = useRef();
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={[commonStyles.container, styles.container]}>
      {/* heading */}
      <View style={styles.titleContainer}>
        <Title title="Log in to Twitter." />
      </View>
      {/* Form */}
      <View style={styles.formContainer}>
        <CustomInput
          label="E-mail"
          ref={emailRef}
          onSubmitEditing={() => passwordRef.current.focus()}
        />
        <CustomInput label="Password" ref={passwordRef} secureTextEntry />
      </View>
      {/* action container */}
      <View style={styles.actionContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Signup')}
          style={styles.pressContainer}>
          <Text style={styles.pressText}>Don't have an account?</Text>
        </TouchableOpacity>
        <PrimaryButton label={'Log in'} />
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = ScaledSheet.create({
  container: {
    paddingTop: spacing[100],
  },
  titleContainer: {
    marginVertical: spacing[6],
  },
  formContainer: {
    marginVertical: spacing[6],
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pressContainer: {},
  pressText: {
    color: colors.dark_gray,
    fontSize: spacing[14],
  },
});

export default LoginScreen;
