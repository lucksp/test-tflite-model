import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useTensorflowModel } from 'react-native-fast-tflite';

export default function TabTwoScreen() {
  const { model, state } = useTensorflowModel(
    require('../../src/assets/tflite/model.tflite'),
    /* 'core-ml' */ /* 'android-gpu' */ 'default' // toggle to see import failure
  );

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <Ionicons size={310} name="code-slash" style={styles.headerImage} />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">TFLite</ThemedText>
      </ThemedView>
      <ThemedText>When this view loads, it will load TFLite file.</ThemedText>
      <ThemedText>I would expect to see an error.</ThemedText>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Model Status</ThemedText>
        <ThemedText>State: {state}</ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    gap: 8,
  },
});
