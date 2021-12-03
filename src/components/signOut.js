import {useRoute} from '@react-navigation/native';

const SignOut = () => {
  const route = useRoute();
  route.params.signOut({authState: false, userId: null});

  return null;
};

export default SignOut;
