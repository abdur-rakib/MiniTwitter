// @ts-nocheck
import {TextInput, TouchableOpacity, View} from 'react-native';
import React, {useRef} from 'react';
import CustomInput from '../../../components/shared/CustomInput';
import {commonStyles} from '../../../styles/commonstyles';
import {ScaledSheet} from 'react-native-size-matters';
import Title from '../../../components/shared/Title';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {spacing} from '../../../theme/spacing';
import {colors} from '../../../theme/colors';
import PrimaryButton from '../../../components/PrimaryButton';
import {Formik} from 'formik';
import {loginValidationSchema} from '../../../utils/schemas';
import MyText from '../../../components/shared/MyText';
import {LoginValuesType} from '../../../types';
import MyToast from '../../../components/shared/MyToast/MyToast';
import {useLoginMutation} from '../../../api/authApi';

interface LoginScreenProps {
  navigation: any;
}

const initialValues = {
  email: '',
  password: '',
};

const LoginScreen: React.FC<LoginScreenProps> = ({navigation}) => {
  const [login, {isLoading, error, isError}] = useLoginMutation();

  // refs
  const emailRef = useRef<TextInput>();
  const passwordRef = useRef<TextInput>();

  // handle submit editting
  const handleSubmitEdittng = (
    ref: React.MutableRefObject<TextInput | undefined>,
  ) => {
    if (ref && ref.current) {
      ref.current.focus();
    }
  };

  // handle login
  const handleLogin = async (values: LoginValuesType) => {
    await login(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginValidationSchema}
      onSubmit={handleLogin}>
      {({handleSubmit}) => (
        <KeyboardAwareScrollView
          contentContainerStyle={[commonStyles.container, styles.container]}>
          {/* error message */}
          {isError && <MyToast message={error?.error} visible={isError} />}
          {/* heading */}
          <View style={styles.titleContainer}>
            <Title title="Log in to Twitter." />
          </View>
          {/* Form */}
          <View style={styles.formContainer}>
            <CustomInput
              label="E-mail"
              name="email"
              ref={emailRef}
              onSubmitEditing={() => handleSubmitEdittng(passwordRef)}
              returnKeyType="next"
            />
            <CustomInput
              label="Password"
              name="password"
              ref={passwordRef}
              onSubmitEditing={handleSubmit}
              secureTextEntry
            />
          </View>
          {/* action container */}
          <View style={styles.actionContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Signup')}
              style={styles.pressContainer}>
              <MyText style={styles.pressText}>Don't have an account?</MyText>
            </TouchableOpacity>
            <PrimaryButton
              disabled={isLoading}
              label={'Log in'}
              onPress={handleSubmit}
            />
          </View>
        </KeyboardAwareScrollView>
      )}
    </Formik>
  );
};

const styles = ScaledSheet.create({
  container: {
    paddingTop: spacing[74],
  },
  titleContainer: {
    marginVertical: spacing[20],
  },
  formContainer: {
    marginTop: spacing[6],
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
