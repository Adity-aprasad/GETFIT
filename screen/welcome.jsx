import { View, Text, StyleSheet, Image, SafeAreaView ,TouchableOpacity} from "react-native";
import React from "react";
import { Button } from "react-native-paper";
import LottieView from 'lottie-react-native';
import { useNavigation } from "@react-navigation/native";


const Welcome = () => {
  const navigation = useNavigation();

  const handleRegister = () => {
    navigation.navigate("Start1");
  };
  const handlelogin=()=>{
    navigation.navigate("Journal ");
  }

  return (
    <SafeAreaView style={styles.topContainer}>

      <View style={styles.topContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>GETFIT</Text>
          <Text>Eat Wisely</Text>
          <View>
            <Image
              source={require("../assets/salad-84.png")}
              style={styles.topImage1}
            />
          </View>
        </View>
        <View style={styles.lottieStylecontainer}>
        <LottieView
                  loop={true}
                  style={styles.lottieStyle}
                  source={require("../assets/Animation - 1722693099679.json")}
                />
        </View>
        <View>
          <Image
            source={require("../assets/family-25 (1).png")}
            style={styles.topImage}
          />
        </View>
        
        
        <View style={styles.buttonContainer}>
          <Button
            mode="contained"
            onPress={handleRegister}
            color="rgb(8, 29, 54)"
            style={styles.button}
            contentStyle={styles.buttonContent}
            useNativeDriver={false}
          >
            <Text style={styles.textStartButton}>Start</Text>
          </Button>
          {/* 
          <View style={styles.accountcontainer}>
          <TouchableOpacity onPress={handlelogin} style={styles.accountcontainer}>
        <Text style={styles.footertext}> I Have an Account </Text>
      </TouchableOpacity>
          </View>*/}

        </View>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(253, 245, 230)",
  },
  titleContainer: {
    position: "absolute",
    top: "20%",
    left:-60,
  },
  titleText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "rgb(8, 29, 54)",
  },

  topImage1: {
    width: 200, // Adjust the size as needed
    height: 100, // Adjust the size as needed
    marginTop: 80,
    left: "-120%",
  },
  topImage: {
    width: 200,
    height: 200,
    position: "absolute",
    top: 123, // Adjust this value to position the image
    left: -70, // Adjust this value to position the image
  },
  buttonContainer: {
    position: "absolute",
    bottom: 88, // Position the item at the bottom
    width: "100%",
    alignItems: "center", // Center the button horizontally
  },
  button: {
    borderRadius: 40,
    width: "50%",
    height: 60,
    justifyContent: "center", // Center the text vertically
  },
  buttonContent: {
    height: "100%", // Ensure the content fills the button height
  },
  textStartButton: {
    fontSize: 20,
    color: "#FFF",
    fontWeight: "bold",
  },

  accountcontainer:{
    position:"absolute",
    bottom:-10,
    

  },
  footertext:{
    textDecorationLine: "underline" ,
    left:-59,
    top:27,
  },
  lottieStylecontainer:{

   

  },
  lottieStyle:{

  },

});
