import React, { useContext, useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  Pressable,
  Modal,
  Button,
} from "react-native";
import LottieView from "lottie-react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { CaloriesContext } from "../CaloriesContext";
import { Leftcalories } from "../Leftcalories";
import { Dinnercalories } from "../Dinnercalories";
import { Snackscalories } from "../Snackscalories";
import { Lunchcalories } from "../Lunchcalories";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CalorieStatusBar from "../compo/CalorieStatusBar";

export const HomeScreen = () => {
  const navigation = useNavigation();
  const { calories } = useContext(CaloriesContext);
  const { sum } = useContext(Leftcalories);
  const { sum3 } = useContext(Dinnercalories);
  const { sum2 } = useContext(Snackscalories);
  const { sum1 } = useContext(Lunchcalories);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isEmptyCaloriesModalVisible, setIsEmptyCaloriesModalVisible] = useState(false);
  const [mealCalories, setMealCalories] = useState({
    breakfast: 0,
    lunch: 0,
    snacks: 0,
    dinner: 0,
  });
  const [waterFill, setWaterFill] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);
  const waterAnimations = useRef([
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ]);

  const handlepluscircle = () => {
    navigation.navigate("Addcalories");
  };

  const handlepluscircle1 = () => {
    navigation.navigate("Addcalories1");
  };

  const handlepluscircle2 = () => {
    navigation.navigate("Addcalories2");
  };

  const handlepluscircle3 = () => {
    navigation.navigate("Addcalories3");
  };

  const handleWater = (index) => {
    if (waterFill[index]) {
      waterAnimations.current[index].current?.reset();
    } else {
      waterAnimations.current[index].current?.play(0, 30);
    }
    setWaterFill(waterFill.map((fill, i) => (i === index ? !fill : fill)));
  };

  useEffect(() => {
    if (calories) {
      const breakfastCalories = calories * 0.33;
      const lunchCalories = calories * 0.33;
      const snackCalories = calories * 0.11;
      const dinnerCalories = calories * 0.33;

      setMealCalories({
        breakfast: breakfastCalories,
        lunch: lunchCalories,
        snacks: snackCalories,
        dinner: dinnerCalories,
      });
    }
  }, [calories]);

  useEffect(() => {
    const checkModalStatus = async () => {
      try {
        const hasSeenModal = await AsyncStorage.getItem("hasSeenModal");
        if (!hasSeenModal) {
          setIsModalVisible(true);
        }
      } catch (error) {
        console.error("Failed to check modal status:", error);
      }
    };

    checkModalStatus();
  }, []);

  useEffect(() => {
    if (totalCaloriesConsumed === 0) {
      setIsEmptyCaloriesModalVisible(true);
    }
  }, [totalCaloriesConsumed]);

  const handleModalClose = async () => {
    setIsModalVisible(false);
    try {
      await AsyncStorage.setItem("hasSeenModal", "true");
    } catch (error) {
      console.error("Failed to save modal status:", error);
    }
  };

  const handleEmptyCaloriesModalClose = () => {
    setIsEmptyCaloriesModalVisible(false);
  };

  const totalCaloriesConsumed = sum + sum1 + sum2 + sum3;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <CalorieStatusBar
          totalCalories={calories}
          currentCalories={totalCaloriesConsumed}
        />
        <View style={{ marginTop: 100 }}>
          {["breakfast"].map((meal) => (
            <View key={meal} style={styles.addcontainer}>
              <View>
                <Image
                  source={require("../assets/107-healthy.png")}
                  style={styles.topImage1}
                />
              </View>
              <View style={{ left: -70 }}>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 20,
                    marginHorizontal: 16,
                    color: "#36454F",
                  }}
                >
                  {meal.charAt(0).toUpperCase() + meal.slice(1)}
                </Text>
                <Text
                  style={{
                    color: "#003366",
                    fontSize: 20,
                    marginHorizontal: 16,
                  }}
                >
                  {sum} / {mealCalories[meal].toFixed(0)} cal
                </Text>
              </View>
              <AntDesign
                name="pluscircle"
                size={32}
                color="#003366"
                onPress={handlepluscircle}
                style={{ marginHorizontal: 16 }}
              />
            </View>
          ))}
          <View style={{ borderWidth: 0.2, marginHorizontal: 16 }}></View>

          {["lunch"].map((meal) => (
            <View key={meal} style={styles.addcontainer}>
              <View>
                <Image
                  source={require("../assets/food image .jpg")}
                  style={styles.topImage1}
                />
              </View>
              <View style={{ left: -70 }}>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 20,
                    marginHorizontal: 16,
                    color: "#36454F",
                  }}
                >
                  {meal.charAt(0).toUpperCase() + meal.slice(1)}
                </Text>
                <Text
                  style={{
                    color: "#003366",
                    fontSize: 20,
                    marginHorizontal: 16,
                  }}
                >
                  {sum1} / {mealCalories[meal].toFixed(0)} cal
                </Text>
              </View>
              <AntDesign
                name="pluscircle"
                size={32}
                color="#003366"
                onPress={handlepluscircle1}
                style={{ marginHorizontal: 16 }}
              />
            </View>
          ))}
          <View style={{ borderWidth: 0.2, marginHorizontal: 16 }}></View>

          {["snacks"].map((meal) => (
            <View key={meal} style={styles.addcontainer}>
              <View>
                <Image
                  source={require("../assets/Wormies - Breakfast (1).png")}
                  style={styles.topImage1}
                />
              </View>
              <View style={{ left: -70 }}>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 20,
                    marginHorizontal: 16,
                    color: "#36454F",
                  }}
                >
                  {meal.charAt(0).toUpperCase() + meal.slice(1)}
                </Text>
                <Text
                  style={{
                    color: "#003366",
                    fontSize: 20,
                    marginHorizontal: 16,
                  }}
                >
                  {sum2} / {mealCalories[meal].toFixed(0)} cal
                </Text>
              </View>
              <AntDesign
                name="pluscircle"
                size={32}
                color="#003366"
                onPress={handlepluscircle2}
                style={{ marginHorizontal: 16 }}
              />
            </View>
          ))}
          <View style={{ borderWidth: 0.2, marginHorizontal: 16 }}></View>

          {["dinner"].map((meal) => (
            <View key={meal} style={styles.addcontainer}>
              <View>
                <Image
                  source={require("../assets/kiwi-6624736_1920.png")}
                  style={styles.topImage1}
                />
              </View>
              <View style={{ left: -70 }}>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 20,
                    marginHorizontal: 16,
                    color: "#36454F",
                  }}
                >
                  {meal.charAt(0).toUpperCase() + meal.slice(1)}
                </Text>
                <Text
                  style={{
                    color: "#003366",
                    fontSize: 20,
                    marginHorizontal: 16,
                  }}
                >
                  {sum3} / {mealCalories[meal].toFixed(0)} cal
                </Text>
              </View>
              <AntDesign
                name="pluscircle"
                size={32}
                color="#003366"
                onPress={handlepluscircle3}
                style={{ marginHorizontal: 16 }}
              />
            </View>
          ))}
        </View>

        <View style={styles.watercontainer}>
          <View style={{top:-30,}}>
            <Text
              style={{ fontWeight: "bold", fontSize: 20, color: "#36454F" }}
            >
              Water Intake
            </Text>
            <Text style={{ fontSize: 18 }}>Water</Text>
            <Text style={{ color: "grey" }}>Goal: 5.00L</Text>
          </View>

          <View style={styles.water1}>
            {waterAnimations.current.map((ref, index) => (
              <Pressable
                key={index}
                style={styles.touch}
                onPress={() => handleWater(index)}
              >
                <LottieView
                  ref={ref}
                  loop={false}
                  style={styles.lottieWater}
                  source={require("../assets/Jxihl5xFwl.json")}
                />
              </Pressable>
            ))}
          </View>
        </View>

        <View>
          <Modal
            visible={isModalVisible}
            transparent={true}
            animationType="slide"
            onRequestClose={handleModalClose}
          >
            <View style={styles.modalOverlay}>
              <View style={styles.modalContainer}>
                <Text style={styles.modalText}>
                  Welcome to GetFit! Customize your settings for a personalized
                  experience. Calculate  YOUR  BMR bottom left button
                </Text>
                <Button
                  title="Close"
                  onPress={handleModalClose}
                  color="#003366"
                />
              </View>
            </View>
          </Modal>
        </View>

        <View>
          <Modal
            visible={isEmptyCaloriesModalVisible}
            transparent={true}
            animationType="slide"
            onRequestClose={handleEmptyCaloriesModalClose}
          >
            <View style={styles.modalOverlay}>
              <View style={styles.modalContainer}>
                <Text style={styles.modalText}>
                  It looks like you haven't consumed any calories yet. Please
                  add your meals to track your intake.
                </Text>
                <Button
                  title="Close"
                  onPress={handleEmptyCaloriesModalClose}
                  color="#003366"
                />
              </View>
            </View>
          </Modal>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(253, 245, 230)",
  },
  addcontainer: {
    paddingTop: 30,
    paddingBottom: 30,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  topImage1: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  watercontainer: {
    padding: 45,
    width: "90%",
    height: 180,
    borderRadius: 25,
    borderWidth: 2,
    margin: 10,
    backgroundColor: 'rgb(253, 245, 230)',
    marginHorizontal: 20,
  },
  water1: {
    flexDirection: "row",
  },
  touch: {
    marginHorizontal: 5,
    height: 55,
  },
  lottieWater: {
    width: 45,
    height: 45,
    backgroundColor: "transparent",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    width: "80%",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalText: {
    fontSize: 18,
    color: "#36454F",
    marginBottom: 20,
  },
});

export default HomeScreen;
