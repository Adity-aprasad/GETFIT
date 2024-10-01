import React from "react";
import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import { AntDesign, FontAwesome, Fontisto, MaterialIcons, Ionicons } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from "@react-navigation/native";

const SignupScreen = () => {
  const navigation = useNavigation();

  const handleCreateAccount = () => {
    // Navigate to Home or another screen after creating an account
    navigation.navigate("Home");
  };
  const handleLogin = () => {
    navigation.navigate("Login");  // Ensure this matches the route name in App.jsx
  };

  return (
    <LinearGradient
      colors={["#0f0c29", "#302b63", "#24243e"]}
      style={styles.container}
    >
      <View style={styles.topImageContainer}>
        <Image source={require("../assets/topVector.png")} style={styles.topImage} />
      </View>
      <View style={styles.helloContainer}>
        <Text style={styles.helloText}>Create Account</Text>
      </View>
      <View>
        <Text style={styles.signInText}>Sign into fitness</Text>
      </View>
      <View style={styles.inputContainer}>
        <FontAwesome name="user" size={24} color="#9A9A9A" style={styles.inputIcon} />
        <TextInput style={styles.textInput} placeholder="Username" />
      </View>
      <View style={styles.inputContainer}>
        <Fontisto name="locked" size={24} color="#9A9A9A" style={styles.inputIcon} />
        <TextInput style={styles.textInput} placeholder="Password" secureTextEntry />
      </View>
      <View style={styles.inputContainer}>
        <MaterialIcons name="email" size={24} color="#9A9A9A" style={styles.inputIcon} />
        <TextInput style={styles.textInput} placeholder="E-Mail" />
      </View>
      <View style={styles.inputContainer}>
        <MaterialIcons name="smartphone" size={24} color="#9A9A9A" style={styles.inputIcon} />
        <TextInput style={styles.textInput} placeholder="Mobile" />
      </View>
      <TouchableOpacity onPress={handleCreateAccount} style={styles.signInButtonContainer}>
        <Text style={styles.signIn}>Create</Text>
        <LinearGradient colors={["#F97794", "#623AA2"]} style={styles.linearGradient}>
          <AntDesign name="arrowright" size={24} color="white" />
        </LinearGradient>
      </TouchableOpacity>
      <View style={styles.createusingContainer}>
        <Text style={styles.createusingtext}>Create Account Using</Text>
      </View>
      <View style={styles.apiContiner}> 
        <Ionicons name="logo-google" size={26} color={"red"} style={styles.apiIcon} />
      </View>
    </LinearGradient>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topImageContainer: {},
  topImage: {
    width: "100%",
    height: 130,
  },
  helloContainer: {},
  helloText: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "500",
    color: "white",
  },
  signInText: {
    textAlign: "center",
    fontSize: 18,
    color: "white",
    marginBottom: 40,
  },
  inputContainer: {
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    borderRadius: 20,
    marginHorizontal: 40,
    elevation: 10,
    marginVertical: 25,
    alignItems: "center",
    paddingHorizontal: 10,
  },
  inputIcon: {
    marginRight: 10,
  },
  textInput: {
    flex: 1,
    height: 40,
  },
  signInButtonContainer: {
    flexDirection: "row",
    marginTop: 40,
    width: "80%",
    alignSelf: "center",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  signIn: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
  linearGradient: {
    height: 34,
    width: 56,
    borderRadius: 17,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
  },
  createusingContainer: {
    flexDirection: "row",
    marginTop: 40,
    width: "80%",
    justifyContent: "center",
    alignSelf: "center",
  },
  createusingtext: {
    color: "white",
    textAlign: "center",
    fontSize: 15,
  },
  apiContiner: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  apiIcon: {
    marginHorizontal: 10,
  },
});
