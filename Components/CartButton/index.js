import React, { Component } from "react";
import { Icon, View, Text, Right } from "native-base";
import { withNavigation } from "react-navigation";
import { connect } from "react-redux";

class CartButton extends Component {
  render() {
    let badge = 0;
    this.props.items.forEach(item => (badge += item.quantity));
    return (
      <View>
        <Text
          style={{
            backgroundColor: "red",
            color: "white",
            textAlign: "center",
            fontSize: 10,
            height: 15,
            alignSelf: "center",
            paddingRight: 4,
            paddingLeft: 5,
            borderRadius: 50
          }}
        >
          {badge}
        </Text>
        <Right>
          <Icon
            onPress={() => this.props.navigation.navigate("CoffeeCart")}
            name="cart"
            style={{ right: 10, bottom: 10, color: "white" }}
          />
        </Right>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  items: state.cartReducer.items
});

export default withNavigation(connect(mapStateToProps)(CartButton));
