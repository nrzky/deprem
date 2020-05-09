import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../constants/Colors';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Touchable from './Touchable';

function IconButton(props) {
  return (
    <Touchable style={props.style}>
      <Icon {...props}
        name={props.name}
        size={props.size}
        color={props.color}
      />
    </Touchable>
  );
}

IconButton.defaultProps = {
  name: 'filter',
  size: 30,
  color: Colors.black,
}

export default IconButton;
