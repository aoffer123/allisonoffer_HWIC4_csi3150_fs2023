


import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const Task = (props) => {
  return (
    <View style={styles.item}>
    <View style={styles.itemLeft}>
      <View style={styles.squareIcon}>
      </View>
      <Text style={styles.itemText}>
            {props.text}
        </Text>
    </View>
    <View style={styles.circularIcon}>

    </View>
    </View>
  );
}

export default Task;

const styles = StyleSheet.create({
    item: {
        backgroundColor: "#FFF",
        padding: 15,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        margin: 20,
        borderColor: "#009688",
        borderWidth: 1,

    },
    itemLeft: {
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap",
    },
    squareIcon: {
        width: 24,
        height: 24,
        backgroundColor: "#84ccc5",
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    itemText: {
        maxWidth: "80%",
    },
    circularIcon: {
        width: 12,
        height: 12,
        borderColor: "#19554f",
        borderWidth: 2,
        borderRadius: 5,
    },

})


