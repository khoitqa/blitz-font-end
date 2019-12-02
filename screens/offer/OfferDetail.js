import React,{useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity,Dimensions,TextInput, KeyboardAvoidingView,ScrollView } from 'react-native';
import { TODOS } from '../../data/data'
import InventoryItem from '../../components/InventoryItem'
import { Input } from 'react-native-elements';
import { CheckBox } from 'react-native-elements'

export default function OfferDetail() {
  const [checked, setChecked] = useState(true);

    return (
      <KeyboardAvoidingView
            enabled
            behavior="padding">
        <View style={styles.toolBar}>
          <Text style={styles.textToolBar}>
            CHỢ ĐẦU MỐI
          </Text>
        </View>
        <ScrollView>
          <View style={styles.container}> 
            
            <View style={styles.imageViewItem}>
                <Image style={styles.imageItem} source={{uri : 'https://assets.forwardcdn.com/images/cropped/axe-1531828722.jpg'}}></Image>
            </View>
            <Text style={styles.textTitle}>Green grape from farm</Text>
            <View style={styles.viewContent}>
                <View style={styles.countBuy}>
                    <Text>Số lượng mua:</Text>
                    <View style={styles.countText}>
                        <TextInput 
                        style={styles.countInput}
                        keyboardType = {'numeric'}
                        placeholder={'500'} 
                        placeholderTextColor="black" />
                        <Text>/1000</Text>
                    </View>
                </View>
                <View style={styles.negotiateBuy}>
                      <CheckBox
                        containerStyle={styles.checkboxContainer}
                        textStyle={styles.textCheckbox}
                        title='Trả giá'
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        checked={!checked}
                        onPress={()=>setChecked(!checked)}
                      />
                      {checked
                      ?<View style={styles.priceView}></View>
                      :<View style={styles.priceView}>
                        <Text>Giá thương lượng</Text>
                        <View style={{flexDirection:'row'}}>
                          <TextInput 
                            style={styles.priceInput}
                            keyboardType = {'numeric'}
                            placeholder={'850.000'} 
                            placeholderTextColor="black" />
                          <Text> VND</Text>
                        </View>
                      </View>
                      }
                </View>
                <View style={styles.quickBuy}>
                      <CheckBox
                        containerStyle={styles.checkboxContainer}
                        textStyle={styles.textCheckbox}
                        title='Mua ngay'
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        checked={checked}
                        onPress={()=>setChecked(!checked)}
                      />
                      {!checked
                      ?<View style={styles.priceView}></View>
                      :<View style={styles.priceView}>
                        <Text>Giá mua nhanh</Text>
                        <Text>900.000 VND</Text>
                      </View>
                      }
                </View>
                
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
  const screenWidth = Math.round(Dimensions.get('window').width);
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      flexDirection:'column',
      marginTop:0,
      marginBottom:50  
    },
    toolBar:{
      backgroundColor:'#0099FF',
      width:'100%',
      justifyContent:'center',
      flexDirection:'row',
      alignItems:'center',
      height:70
    },
    textToolBar: {
      color:'white',
      fontSize:18,
      marginTop:13,
      fontWeight:'bold'
    },
    imageViewItem: {
        width:screenWidth,
        margin:6
        
    },
    imageItem:{
        width:screenWidth-12,
        height:250,
        borderRadius:5
    },
    textTitle: {
        fontWeight:'bold',
        fontSize:24,
        marginLeft:15,
        marginTop:5
    },
    viewContent: {
        margin:10,
        flexDirection:'column'
    },
    countBuy: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        height:50,
        backgroundColor:'#F5F5F5',
        borderRadius:7,
        paddingHorizontal:10

    },
    countText: {
        flexDirection:'row'
    },
    countInput: {
        width:50,
        textAlign: 'right',
    },
    quickBuy:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginTop:7
    },
    checkboxContainer: {
      marginLeft:0,
      marginRight:0,
      marginTop:0,
      marginBottom:0,
      backgroundColor:'white',
      borderColor:'white',
      
    },
    textCheckbox:{
      fontSize:13
    },
    negotiateBuy:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      marginTop:7
    },
    priceView: {
      backgroundColor:'#F5F5F5',
      height:50,
      borderRadius:8,
      paddingHorizontal:10,
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      width:250,
      
    },
    priceInput: {

    }
  });
  