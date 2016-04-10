/**
 * # Subview.js
 *
 *  This is called from main to demonstrate the back button
 *  
 */
'use strict';
/*
 * ## Imports
 *  
 * Imports from redux
 */
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

/**
 * Immutable
 */ 
import {Map} from 'immutable';

/**
 * Router
 */
import {Actions} from 'react-native-router-flux';

/**
 * Navigation Bar
 */
import NavigationBar from 'react-native-navbar';

/**
 * The necessary components from React
 */
import React,
{ 	
  Component,
  StyleSheet,
  View,
  Text, 
  TextInput
}
from 'react-native';

/**
 * The platform neutral button
 */
const  Button = require('apsl-react-native-button');

/**
 * If your app uses Redux action creators, you can add them here...
 * 
 */
const actions = [
];

// var QRCodeScreen = require('./QRCodeScreen');

/**
 *  Instead of including all app states via ...state
 *  You probably want to explicitly enumerate only those which Main.js will depend on.
 *
 */
function mapStateToProps(state) {
  return {
      ...state
  };
};

/*
 * Bind all the functions from the ```actions``` and bind them with
 * ```dispatch```

 */
function mapDispatchToProps(dispatch) {

  const creators = Map()
          .merge(...actions)
          .filter(value => typeof value === 'function')
          .toObject();

  return {
    actions: bindActionCreators(creators, dispatch),
    dispatch
  };
}

var styles = StyleSheet.create({
  container: {
    borderTopWidth: 2,
    borderBottomWidth:2,
    marginTop: 80,
    padding: 10
  },
  summary: {
    fontFamily: 'BodoniSvtyTwoITCTT-Book',
    fontSize: 18,
    fontWeight: 'bold'
  },
  scanButton: {
    backgroundColor: '#FF3366',
    borderColor:  '#FF3366',
    marginLeft: 10,
    marginRight: 10    
  }
});

/**
 * ## Subview class
 */
let Subview = React.createClass({

  handlePress() {
    // Actions.Subview({
    //   title: 'Subview'
    //   // you can add additional props to be passed to Subview here...
    // });
    


  },
  
  render() {
    var titleConfig = {
      title: "容器收货"
    };
    
    var leftButtonConfig = {
      title: '返回',
      handler: Actions.pop
    };
    
    return(
      <View>
      	<NavigationBar
                  title={ titleConfig }
                  leftButton={ leftButtonConfig }
      	/>

      	<View style={ styles.container }>
      	  <Text>当前容器码:</Text>
          <TextInput style={{height:30, borderColor: 'blue', borderWidth:1}}></TextInput>
          <Button style={ styles.scanButton } onPress={ this.handlePress.bind(this) }>
           {'扫描二维码'}
          </Button>
      	</View>

      </View>
    );
  }
});

/**
 * Connect the properties
 */
export default connect(mapStateToProps, mapDispatchToProps)(Subview);
