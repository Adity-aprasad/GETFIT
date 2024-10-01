import React from "react";
import { Image, StyleSheet, Text, View, TextInput, Pressable, TouchableOpacity } from "react-native";
import { AntDesign, FontAwesome, Fontisto } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from "@react-navigation/native"; // Change import to @react-navigation/native
import { SafeAreaView } from "react-native-safe-area-context";

const LoginScreen = () => {
  const navigation = useNavigation();

 
  const handleRegister = () => {
    navigation.navigate("Signup");
  };

 
  return (
    
    <LinearGradient
      colors={["#0f0c29", "#302b63", "#24243e"]}
      style={styles.container}
    >
      <View style={styles.topImageContainer}>
        <Image
          source={require("../assets/topVector.png")}
          style={styles.topImage}/>
      </View>
      <View style={styles.helloContainer}>
        <Text style={styles.helloText}>Hello</Text>
      </View>
      <View>
        <Text style={styles.signInText}>Sign in to your account</Text>
      </View>
      <View style={styles.inputContainer}>
        <FontAwesome name="user" size={24} color="#9A9A9A" style={styles.inputIcon} /* templet to define logo  *//>
        <TextInput style={styles.textInput} placeholder="Email"   clearButtonMode="always" />
      </View>
      <View style={styles.inputContainer}>
        <Fontisto name="locked" size={24} color="#9A9A9A" style={styles.inputIcon}/>
        <TextInput style={styles.textInput} placeholder="Password"  clearButtonMode="always" secureTextEntry />
      </View>
      <View>
        <Pressable>
          <Text style={styles.forgetpasswordtext}>Forget Password</Text>
        </Pressable>
      </View>
      <View style={styles.signInButtonContainer}>
        <Text style={styles.signIn}>Sign IN</Text>
        <LinearGradient
          colors={["#F97794", "#623AA2"]}
          style={styles.linearGradient}
        >
          <AntDesign name="arrowright" size={24} color="white"/>
        </LinearGradient>
      </View>
      <TouchableOpacity onPress={handleRegister}>
        <Text style={styles.footertext}> Don't Have An Account? <Text style={{ textDecorationLine: "underline" }}>Create</Text></Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
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
    fontSize: 60,
    fontWeight: "500",
    color: "white",
  },
  signInText: {
    textAlign: "center",
    fontSize: 18,
    color: "white",
    marginBottom: 30,
  },
  inputContainer: {
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    borderRadius: 20,
    marginHorizontal: 40,
    elevation: 10,
    marginVertical: 20,
    alignItems: "center",
  },
  inputIcon: {
    marginHorizontal: 10,
  },
  textInput: {
    flex: 1,
    height: 40,
  },
  forgetpasswordtext: {
    color: "#BEBEBE",
    textAlign: "right",
    width: "90%",
    fontSize: 15,
  },
  signInButtonContainer: {
    flexDirection: "row",
    marginTop: 100,
    width: "80%",
    justifyContent: "flex-end",
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
  footertext: {
    color: "white",
    marginTop: 150,
    textAlign: "center",
    fontSize: 17,
  },
});
