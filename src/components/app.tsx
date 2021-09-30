import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
  View,
  Text,
  StatusBar,
} from "react-native";

import { Header, Colors } from "react-native/Libraries/NewAppScreen";

const App = () => {
  const [data, setData] = useState("");

  const handleOpenURL = ({ url }: { url: string }) => {
    console.log(url, "URL");
    if (url.indexOf("user") !== -1) {
      if (url) {
        setData(url);
      }
    }
  };

  useEffect(() => {
    const sub = Linking.addEventListener("url", handleOpenURL);
    return () => {
      sub.remove();
    };
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Header />
          <Text>{data === "" ? null : data}</Text>
          <View style={styles.body}>
            <TouchableOpacity
              style={styles.socialBtn}
              onPress={() => Linking.openURL("http://localhost:4000")}
            >
              <Text style={styles.buttonText}>
                {data === "" ? "Connect via Google" : "You are connected !"}
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.white,
  },
  socialBtn: {
    margin: 30,
    backgroundColor: "#1f5c9e",
    paddingVertical: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default App;
