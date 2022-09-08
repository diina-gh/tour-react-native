import React, {useRef} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Image,
  ImageBackground,
  Pressable,
  Linking,
  Alert,
} from 'react-native';
import Carousel from 'react-native-anchor-carousel';
import DotPagination from '../commons/DotPagination';
import { LinearGradient } from 'expo-linear-gradient';
import LocationIcon from '../ui/icons/locationIcon';

const {width: windowWidth} = Dimensions.get('window');

const data = [
  {
    id: 'item6',
    image: 'https://firebasestorage.googleapis.com/v0/b/tour-base-887ca.appspot.com/o/vue-des-piscines-lage.jpeg?alt=media&token=d7f9b82d-6760-4847-ab00-36ebd12bde03',
    title: 'Bottle Opener Lorem ipsum dolor sit amet',
    uri: 'https://github.com/lehoangnam97/react-native-anchor-carousel',
  },
  {
    id: 'item2',
    image: 'https://firebasestorage.googleapis.com/v0/b/tour-base-887ca.appspot.com/o/33075123.jpeg?alt=media&token=9990eeb4-d38e-43a1-85a5-e85a145e5109',
    title: 'Peach tea Whiskey Lorem ipsum',
    uri: 'https://github.com/lehoangnam97/react-native-anchor-carousel',
  },
  {
    id: 'item3',
    image: 'https://firebasestorage.googleapis.com/v0/b/tour-base-887ca.appspot.com/o/55472295_-VmXnOnzPz1EYBje8D3onqo7Ey16KEp4TfHzqyXaRm0.jpeg?alt=media&token=f790f246-f132-47aa-9d2a-36942aabea2c',
    title: 'Camera lens Lorem ipsum dolor sit amet',
    uri: 'https://www.npmjs.com/package/react-native-anchor-carousel',
  },
  {
    id: 'item1',
    image: 'https://firebasestorage.googleapis.com/v0/b/tour-base-887ca.appspot.com/o/vue-des-piscines-lage.jpeg?alt=media&token=d7f9b82d-6760-4847-ab00-36ebd12bde03',
    title: 'Shoes Lorem ipsum dolor sit amet',
    uri: 'https://www.npmjs.com/package/react-native-anchor-carousel',
  },
];

const ITEM_WIDTH = 0.7 * windowWidth;
const SEPARATOR_WIDTH = 10;
export default function Hotels(props) {
  const {style} = props;
  const carouselRef = useRef(null);

  async function handleInstallNowClick(uri) {
    const supported = await Linking.canOpenURL(uri);
    if (supported) {
      await Linking.openURL(uri);
    } else {
      Alert.alert(`Don't know how to open this URL: ${uri}`);
    }
  }

  function renderItem({item, index}) {
    return (
      <Pressable activeOpacity={1} style={styles.item} onFocus={() => {carouselRef.current.scrollToIndex(index);}}>

        <Image  style={styles.itemImage} source={{uri: item?.image}} />

        <LinearGradient colors={['rgba(0, 0, 0, 0)','rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.6)']} style={styles.placeView}>
            <View style={styles.itemDesc}>
                <View style={styles.itemLocation}>
                    <svg style={styles.locationIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    <Text style={styles.locationDesc}>Dakar, Senegal</Text>
                </View>
                <Text style={styles.itemName}>Hôtel Terrou Bi</Text>
            </View>
            <Text style={styles.itemStars}>
                <Text style={styles.starsNumber}>5</Text>
                <svg style={styles.starsIcon} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
            </Text>
        </LinearGradient>

      </Pressable>
    );
  }

  return (
    <View style={styles.container}>
      <Carousel
        keyExtractor={item => item?.id}
        style={[styles.carousel, style]}
        ref={carouselRef}
        data={data}
        renderItem={renderItem}
        itemWidth={ITEM_WIDTH - 50}
        separatorWidth={SEPARATOR_WIDTH + 4}
        inActiveScale={1}
        inActiveOpacity={1}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingVertical: 20
      },
      carousel: {
        width: '100%',
        height: 175,
        aspectRatio: 1.5,
        flexGrow: 0,
        marginBottom: 20,
      },
      item: {
        borderWidth: 2,
        backgroundColor: '#ede6e7',
        flex: 1,
        borderRadius: 30,
        borderColor: '#f3f3f3',
        elevation: 3,
      },
      itemImage: {
        width: '100%',
        height: '100%',
        borderRadius: 30,
     },

     placeView:{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: 30,
        opacity: '100%',
      },

      itemDesc:{
        position: 'absolute',
        bottom: 15,
        left: 12,
        display: 'flex',
        flexDirection: 'column',
      },

      itemLocation:{
        display: 'flex',
        flexDirection: 'row',
        color: '#cbcbcb',
        fontSize: '13px',
        fontWeight: '500',
        marginBottom: '3px',
      },

      locationDesc:{
        color: '#e8e8e8',
        fontSize: '13px',
        fontWeight: '500',
        alignSelf: 'center',
      },

      locationIcon:{
        width: '12.5px',
        marginRight: '3px',
        alignSelf: 'center',
      },

      itemName:{
        color: 'white',
        fontSize: '16.5px',
        fontWeight: '700'
      },

      itemStars:{
        position: 'absolute',
        top: 15,
        right: 12,
        backgroundColor: 'white',
        paddingVertical: '4px',
        paddingHorizontal: '10px',
        display: 'flex',
        flexDirection: 'row',
        borderRadius: 60,
      },

      starsNumber:{
        color: '#333333',
        fontSize: '12px',
        fontWeight: '700',
        alignSelf: 'center',
      },

      starsIcon:{
        width: '15px',
        marginLeft: '1px',
        color: '#ffad00',
        elevation: 3,
        alignSelf: 'center',
      },


});
