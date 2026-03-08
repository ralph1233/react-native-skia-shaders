import {
  StyleSheet,
  FlatList,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import type {
  RootNativeStackScreenProps,
  RootNativeStackParamList,
} from '../../types/navigation';

const data: ArrayLike<keyof RootNativeStackParamList> = ['Seascape'];

const Home = ({ navigation }: RootNativeStackScreenProps<'Home'>) => {
  const renderItem = ({ item }: { item: keyof RootNativeStackParamList }) => {
    return (
      <TouchableWithoutFeedback onPress={() => navigation.navigate(item)}>
        <Text>{item}</Text>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={data} renderItem={renderItem} />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
