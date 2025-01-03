import React, { Component } from "react";
import {
  TouchableOpacity,
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Dimensions,
} from "react-native";
import Row from "../components/Row";
import calculator, { initialState } from "../util/calculator";

export default class App extends Component {
  state = initialState;

  handleTap = (type, value) => {
    this.setState((state) => calculator(type, value, state));
  };
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView>
          {/* status bar */}
          <Text style={styles.value}>{this.state.currentValue}</Text>

          <Row>
            <TouchableOpacity
              style={[styles.button, styles.addons]}
              title="C"
              onPress={() => this.handleTap("clear")}
            >
              <Text style={styles.text_black}>C</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, styles.addons]}
              title="+/-"
              onPress={() => this.handleTap("percentage")}
            >
              <Text style={styles.text_black}>%</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, styles.addons]} title="+/-">
              <Text
                style={styles.text_black}
                onPress={() => this.handleTap("posneg")}
              >
                +/-
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, styles.operator]}
              title="/"
              onPress={() => this.handleTap("operator", "/")}
            >
              <Text style={styles.text}>/</Text>
            </TouchableOpacity>
          </Row>

          <Row>
            <TouchableOpacity
              style={styles.button}
              title="7"
              onPress={() => this.handleTap("number", 7)}
            >
              <Text style={styles.text}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              title="8"
              onPress={() => this.handleTap("number", 8)}
            >
              <Text style={styles.text}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              title="9"
              onPress={() => this.handleTap("number", 9)}
            >
              <Text style={styles.text}>9</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.operator]}
              title="*"
              onPress={() => this.handleTap("operator", "*")}
            >
              <Text style={styles.text}>x</Text>
            </TouchableOpacity>
          </Row>

          <Row>
            <TouchableOpacity
              style={styles.button}
              title="4"
              onPress={() => this.handleTap("number", 4)}
            >
              <Text style={styles.text}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              title="5"
              onPress={() => this.handleTap("number", 5)}
            >
              <Text style={styles.text}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              title="6"
              onPress={() => this.handleTap("number", 6)}
            >
              <Text style={styles.text}>6</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.operator]}
              title="-"
              onPress={() => this.handleTap("operator", "-")}
            >
              <Text style={styles.text}>-</Text>
            </TouchableOpacity>
          </Row>

          <Row>
            <TouchableOpacity
              style={styles.button}
              title="1"
              onPress={() => this.handleTap("number", 1)}
            >
              <Text style={styles.text}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              title="2"
              onPress={() => this.handleTap("number", 2)}
            >
              <Text style={styles.text}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              title="3"
              onPress={() => this.handleTap("number", 3)}
            >
              <Text style={styles.text}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.operator]}
              title="+"
              onPress={() => this.handleTap("operator", "+")}
            >
              <Text style={styles.text}>+</Text>
            </TouchableOpacity>
          </Row>

          <Row>
            <TouchableOpacity
              style={styles.button}
              title="0"
              onPress={() => this.handleTap("number", "0")}
            >
              <Text style={styles.text}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              title="."
              onPress={() => this.handleTap("number", ".")}
            >
              <Text style={styles.text}>.</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              title="="
              onPress={() => this.handleTap("equal")}
            >
              <Text style={styles.text}>=</Text>
            </TouchableOpacity>
          </Row>
        </SafeAreaView>
      </View>
    );
  }
}

const screen = Dimensions.get("window");
const buttonWidth = screen.width / 4;

const styles = StyleSheet.create({
  text_black: {
    color: "#000000",
    fontSize: 24,
  },
  addons: {
    backgroundColor: "#a6a6a6",
  },
  operator: {
    backgroundColor: "#ffc400",
  },
  text: {
    color: "#fff",
    fontSize: 24,
  },
  button: {
    backgroundColor: "#303030",
    flex: 1,
    height: Math.floor(buttonWidth - 10),
    borderRadius: Math.floor(buttonWidth),
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  container: {
    flex: 1,
    backgroundColor: "#202020",
    justifyContent: "flex-end",
  },
  value: {
    color: "#fff",
    fontSize: 42,
    textAlign: "right",
    marginRight: 20,
    marginBottom: 10,
  },
});
