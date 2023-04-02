import React from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../assets/index';
import CommonStyles from '../common/CommonStyles';
import { ActionButton } from '../components/ActionButton';
import { MovieListComponent } from '../components/MovieListComponent';
import { TopicTextComponent } from '../components/TopicTextComponent';

const DATA = [
    {
        id: 1,
        image: assets.movie1,
    },
    {
        id: 2,
        image: assets.movie2,
    },
    {
        id: 3,
        image: assets.movie3,
    },
    {
        id: 4,
        image: assets.movie4,
    },

];
const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.btnContainer}>
            <ActionButton
                title={'Search for Movies'}
                customStyle={styles.btnStyle}
                customTextStyle={styles.btnText}
                icon={<Icon name="md-search-sharp" size={20} />}
            />
        </View>
        <View style={styles.flatListContainer}>
            <TopicTextComponent title={'Popular'}/>
            <FlatList
                data={DATA}
                horizontal
                renderItem={({item}) => (
                    <MovieListComponent image={item.image}/>
                )}
                keyExtractor={item => item.id}
            />
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: CommonStyles.colors.black,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
  },
  btnStyle: {
    backgroundColor: CommonStyles.colors.white,
    height: 40,
    width: CommonStyles.width * 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    flexDirection: 'row',
  },
  btnText: {
    fontFamily: CommonStyles.fontFamily.bold,
    color: CommonStyles.colors.black,
    fontSize: 14,
    right: 5,
    marginLeft: 20,
  },
  flatListContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
  },
});

export default Home;
