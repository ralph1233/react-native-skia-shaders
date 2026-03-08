import React from 'react';
import {
  StyleSheet,
  FlatList,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import type {
  RootNativeStackScreenProps,
  RootNativeStackParamList,
} from '../../types/navigation';

const data: ArrayLike<keyof RootNativeStackParamList> = ['Seascape'];

const ListSeparator = () => <View style={styles.separator} />;

const Home = ({ navigation }: RootNativeStackScreenProps<'Home'>) => {
  const renderItem = ({ item }: { item: keyof RootNativeStackParamList }) => {
    return (
      <TouchableWithoutFeedback onPress={() => navigation.navigate(item)}>
        <Text style={styles.itemText}>{item}</Text>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
        ItemSeparatorComponent={ListSeparator}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContent: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  itemText: {
    fontSize: 17,
    fontWeight: '600',
    color: '#111',
    paddingVertical: 14,
    paddingHorizontal: 16,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    overflow: 'hidden',
  },
  separator: {
    height: 12,
  },
});
