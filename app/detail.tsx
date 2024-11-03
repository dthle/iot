import React, { FC, useCallback, useMemo, useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams, useRouter } from "expo-router";
import WebView from "react-native-webview";

const Detail: FC = () => {
  const data = useLocalSearchParams();

  return (
    <View style={styles.screen}>
      <LinearGradient
        colors={["#EAA9A9", "#000000", "#514E4E", "#000000"]}
        locations={[0, 0.5, 0.75, 1]}
        style={styles.background}
      >
        <ScrollView style={styles.scrollview}>
          {/* Title Section */}
          <Text style={styles.title}>{data.name}</Text>
          <View
            style={{
              alignItems: "center",
            }}
          >
            <WebView
              originWhitelist={["*"]}
              style={{
                width: Dimensions.get("screen").width - 30,
                height: 500,
              }}
              allowFileAccess={true}
              scalesPageToFit={true}
              source={{ uri: "http://10.10.27.0" }}
            />
          </View>
        </ScrollView>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "white",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: Dimensions.get("screen").height,
  },
  scrollview: {
    flex: 1,
    // paddingHorizontal: 20,
    paddingTop: 50,
    flexDirection: "column",
  },
  // title: {
  //   fontSize: 24,
  //   fontWeight: "bold",
  //   marginBottom: 20,
  //   color: "white",
  //   textAlign: "center",
  // },
  parameterWrapper: {
    backgroundColor: "#FEB35B",
    borderRadius: 15,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFF",
    textAlign: "center",
    marginBottom: 20,
  },
  infoGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  infoBox: {
    width: "48%",
    backgroundColor: "#FFA726",
    borderRadius: 10,
    padding: 20,
    marginBottom: 10,
    alignItems: "center",
  },
  infoText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  infoSubText: {
    fontSize: 14,
    color: "#333",
  },
  sectionTitle: {
    fontSize: 20,
    color: "#FFA726",
    marginVertical: 10,
  },
  buttonGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  roomButton: {
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    flex: 1,
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#000",
  },
  routineGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  routineButton: {
    width: "48%",
    backgroundColor: "#424242",
    borderRadius: 10,
    padding: 15,
  },
  activeRoutine: {
    backgroundColor: "#FFA726",
  },
  deviceIcons: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 40,
  },
  deviceWrapper: {
    width: 70,
    height: 70,
    marginRight: 10,
    borderRadius: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  deviceText: {
    fontSize: 16,
    color: "#000000",
  },
});

export default Detail;
