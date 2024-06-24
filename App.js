import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';

= () => {
  
    
={[
les.container,
        
          // Try setting `flexDirection` to `"row"`.
          lexDirection: 'column',
        
      
      style={{flex: 2, backgroundColor: 'white', justifyContent: 'center', alignItems:'center'}}>
      age styles={{width:120, height:160}}
        ource={require('./assets/adaptive-icon.png')}
        
        <Text style={{fontSize: 24}}>มหาวิทยาลัยราชภัฏเลย</Text>
          </View>
      <View style={{flex: 1, backgroundColor: 'darkorange'}} 
      />
      <View style={{flex: 3, backgroundColor: 'green'}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default Flex;