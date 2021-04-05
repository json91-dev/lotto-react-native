import React, { useEffect, useCallback } from 'react';
import { StyleSheet ,
  View,
  Text,
  TouchableOpacity,
  Linking,
} from 'react-native';

import PropTypes from 'prop-types';

const MapLinkButtonsComponent = (props) => {
  const { setIsOpenedMapLinkButtons } = props;
  useEffect(() => {
  
  }, []);
  
  const onPressTmap = useCallback(() => {
    const urlToOpen = 'tmap://route?goalx=126.980316&goaly=37.568091';
    Linking.openURL(urlToOpen);
  }, []);
  
  return (
    <View style={styles.container}>
      <View style={styles.linkContainer}>
        <TouchableOpacity style={styles.linkTouch}>
          <Text style={styles.linkText}>카카오내비로 안내</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.linkTouch} onPress={onPressTmap}>
          <Text style={styles.linkText}>티맵으로 안내</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.linkCopyTouch}>
          <Text style={styles.linkCopyText}>주소 복사</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.cancelContainer}>
        <TouchableOpacity style={styles.cancelTouch} onPress={() => setIsOpenedMapLinkButtons(false)}>
          <Text style={styles.cancelText}>취소</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

MapLinkButtonsComponent.propTypes = {
  setIsOpenedMapLinkButtons: PropTypes.func.isRequired,
};

export default MapLinkButtonsComponent;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(116, 121, 138, 0.5)',
    zIndex: 1000,
  },
  
  linkContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    // shadowColor: "rgba(51, 51, 51, 0.15)",
    // shadowOffset: { width: 0, height: 1 },
    // shadowRadius: 0.5,
    // shadowOpacity: 1,
    marginBottom: 30,
    backgroundColor: 'white',
    width: '90%',
  },
  
  cancelContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 36,
    backgroundColor: 'white',
    width: '90%',
    borderRadius: 15,
  },
  
  linkTouch: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 19,
    paddingBottom: 18,
    borderBottomWidth: 0.7,
    borderColor: '#EDEDED',
    width: '100%',
  },
  
  linkText: {
    color: '#74798a',
    fontSize: 16,
  },
  
  linkCopyTouch: {
    paddingTop: 19,
    paddingBottom: 18,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  
  linkCopyText: {
    color: '#2157f3',
    fontSize: 16,
  },
  
  cancelTouch: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 19,
    paddingBottom: 18,
    width: '100%',
  },
  
  cancelText: {
    justifyContent: 'center',
    alignItems: 'center',
    color: '#2157f3',
  },
  
});
