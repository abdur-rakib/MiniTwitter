import {Text, TextInput, TouchableOpacity, View} from 'react-native';
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
import {signupValidationSchema} from '../../../utils/schemas';

interface SignupScreenProps {
  navigation: any;
}

const initialValues = {
  username: '',
  email: '',
  password: '',
};

const SignUpScreen: React.FC<SignupScreenProps> = ({navigation}) => {
  // refs
  const usernameRef = useRef<TextInput>();
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
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={signupValidationSchema}
      onSubmit={values => console.log(values)}>
      {({handleSubmit}) => (
        <KeyboardAwareScrollView
          contentContainerStyle={[commonStyles.container, styles.container]}>
          {/* heading */}
          <View style={styles.titleContainer}>
            <Title title="Sign up to Twitter." />
          </View>
          {/* Form */}
          <View style={styles.formContainer}>
            <CustomInput
              label="Username"
              name="username"
              ref={usernameRef}
              onSubmitEditing={() => handleSubmitEdittng(emailRef)}
              returnKeyType="next"
            />
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
              onPress={() => navigation.navigate('Login')}
              style={styles.pressContainer}>
              <Text style={styles.pressText}>Already have an account?</Text>
            </TouchableOpacity>
            <PrimaryButton label={'Sign up'} onPress={handleSubmit} />
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

export default SignUpScreen;
