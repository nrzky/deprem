import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../constants/Colors';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

function IconButton(props) {
  return (
    <View style={props.style}>
      <TouchableWithoutFeedback {...props}>
        <Icon
          name={props.name}
          size={props.size}
          color={props.color}
        />
      </TouchableWithoutFeedback>
    </View>
  );
}

IconButton.defaultProps = {
  name: 'filter',
  size: 30,
  color: Colors.white,
}

export default IconButton;
