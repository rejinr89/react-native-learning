import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Switch } from 'react-native';
import { useColorScheme } from 'nativewind';

export default function App() {
  const {colorScheme,toggleColorScheme}=useColorScheme();
  return (
    <View className='flex-1 justify-center items-center dark:bg-neutral-900'>
      <View className='flex-row justify-center items-center space-x-2'>
      <Text className='text-xl dark:text-white'>Toggle Theme</Text>
      <Switch value={colorScheme=='dark'} onChange={toggleColorScheme}/>
      </View>
      <Text className='dark:text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae laborum excepturi unde in aliquid reprehenderit ratione, voluptatem inventore assumenda iusto beatae obcaecati, ducimus sequi ex repudiandae quis rem iure similique dolore maiores facere placeat pariatur. Nobis maxime minima modi magni saepe sed fuga quidem tempore dolores itaque consequuntur, eaque cum suscipit ut! Nemo officia inventore veritatis eos exercitationem voluptas dolores assumenda neque hic deleniti id sapiente vero magnam ex facere, odit porro, at, aliquid similique animi nostrum dolor molestias! Minus voluptatum exercitationem aliquid eaque! Harum placeat eligendi delectus blanditiis in, temporibus, voluptatibus praesentium nulla quam corrupti eaque ab incidunt iste!</Text>
      <StatusBar style='auto'/>
      <View className='h-48 w-full bg-sky-400 dark:bg-emerald-400'></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
