import { View, StyleSheet, Animated,SafeAreaView } from "react-native";
import React, { useRef, useState } from "react";
import Startdata from "../data/Startdata";
import { FlatList } from "react-native";
import Slideitem from "./Slideitem";
import Paging from "./Paging";
import NextButton from "./NextButton";
import { useNavigation } from "@react-navigation/native";

const Slides = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef(null);
  const navigation = useNavigation();


  const handleonScroll = Animated.event(
    [
      {
        nativeEvent: {
          contentOffset: {
            x: scrollX,
          },
        },
      },
    ],
    { useNativeDriver: false }
  );

  const handleonViewitemschange = useRef(({ viewableItems }) => {
    console.log("Viewable items", viewableItems);
  }).current;

  const handleNextPress = () => {
    if (currentIndex < Startdata.length - 1) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      flatListRef.current.scrollToIndex({ index: newIndex, animated: true });
    }
    else{
        navigation.navigate('Home');
    }
  };

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <FlatList
         ref={flatListRef}
          data={Startdata}
          renderItem={({ item }) => <Slideitem item={item} />}
          horizontal
          pagingEnabled
          snapToAlignment="center"
          showsHorizontalScrollIndicator={false}
          onScroll={handleonScroll}
          onViewableItemsChanged={handleonViewitemschange}
          viewabilityConfig={viewabilityConfig}
          bounces={false}
        />
        <Paging data={Startdata} scrollX={scrollX} />
        <NextButton   percentage={(currentIndex + 1) * (100 / Startdata.length)} onPress={handleNextPress}/>
      </View>
    </SafeAreaView>
  );
};

export default Slides;

const styles = StyleSheet.create({
  container:{
    backgroundColor: "rgb(253, 245, 230)",

  },
    

});
