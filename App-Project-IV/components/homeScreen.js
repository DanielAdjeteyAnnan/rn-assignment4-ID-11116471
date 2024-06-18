import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,TouchableOpacity, ScrollView, TextInput, Text, Image, View, } from 'react-native';

export default function HomeScreen(){
    return(
        <View style={styles.homContainer}>
            <View style={styles.userCred}>
                <Text style={styles.name}>Daniel Annan</Text>
                <Text style={styles.email}>byk@moni.com</Text>

                <View style={styles.profCon}>
                <Image source={require('../assets/images/profile.png')} style={styles.profilePicture} />
                 <View style={styles.onlineDot} />
            </View>
            </View>

            <View style={styles.seaBar}>
          <View style={styles.searchContainer}>
            <Image source={require('../assets/images/searchLogo.png')} style={styles.searchIcon} />
            <TextInput style={styles.searchInput} placeholder="Search a job or position" placeholderTextColor="#95969D" />
          </View>

          <View style={styles.uiButton}>
            <Image source={require('../assets/images/uiIcon.png')} style={styles.uiIcon} />
          </View>
        </View>

        <Text style={styles.fJob}>Featured Jobs</Text>
        <TouchableOpacity  onPress={() => {}}>
        <Text style={styles.sAll}>See all</Text>
        </TouchableOpacity>
          
        <ScrollView style={styles.scrollView} horizontal={true}>
            
        <View style={styles.softwareEng}>
            <View style={styles.subSWE}>
                <View>
                    <View style={styles.fbIconContainer}> 
                    <Image source={require('../assets/images/fbIcon.png')} style={styles.fbIcon} />
                    </View>
                <Text style={styles.sWE}>Software Engineer</Text>
                <Text style={styles.subsWE}>Facebook</Text>
                </View>
            </View>

            <View>
                <Text style={styles.amount}>$180,00</Text>
                <Text style={styles.country}>Accra, Ghana</Text>
            </View>

        </View>

        <View style={styles.forGoogel}>
            <View style={styles.subSWE}>
                <View>
                    <View style={styles.fbIconContainer}> 
                    <Image source={require('../assets/images/google.png')} style={styles.fbIcon} />
                    </View>
                <Text style={styles.sWE}>Software Engineer</Text>
                <Text style={styles.subsWE}>Google</Text>
                </View>
            </View>

            <View>
                <Text style={styles.amount}>$160,00</Text>
                <Text style={styles.country}>Accra, Ghana</Text>
            </View>

             

        </View>
        </ScrollView >

            
            <StatusBar style="auto" /> 
        </View>

    )
}
const styles = StyleSheet.create({
    userCred:{
        top:20,
        left:20
        
    },
    homContainer:{
        flex:1,
    
        backgroundColor:'white'
    },
    name:{
        fontWeight: 'bold',
        fontSize:25
    },
    email:{
        color:'#95969D',
        fontSize: 18
    },
    profCon:{
        left: 320,
        marginTop: -55,
    },
    profilePicture:{
        width:50,
        height: 50,
        borderRadius: 75,
      },
      onlineDot: {
        width: 6,
        height: 6,
        borderRadius: 20,
        backgroundColor: '#FC1010',
        left: 40,
        bottom:42
      }, 
      
  seaBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 70,
     
    
     
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#FBF9F7',
    borderRadius: 14,
    paddingHorizontal: 16,
    alignItems: 'center',
    maxWidth: '80%',
    marginRight:30
    
    
  },
  searchInput: {
    flex: 1,
    paddingVertical: 10,
  },
  searchIcon: {
    width: 20,
    height: 16,
    marginRight: 10,
  },
  
  uiIcon: {
    width: 55,
    height: 55,
    borderRadius: 24,
     
  },
  fJob:{
    fontSize:20,
    fontWeight:'bold',
    top:50,
    left:20
  },
  sAll:{
    fontSize:16,
    top:30,
    left:335,
    color:'#95969D'
  },
  softwareEng:{
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 55,
    alignItems: 'center',
    backgroundColor: '#0000FF',
    borderRadius: 14,
    padding: 16,
    width:280,
    height:170,
    

  },
  subSWE:{
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,

  },
  fbIconContainer: {
    width: 46,
    height: 46,
    borderWidth:12,
    borderRadius: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    borderColor:'#FFFFFF',
    backgroundColor:'white',
    bottom:15,
    

  },
  fbIcon: {
    width: 30,
    height: 33,
    
  },

  sWE:{
    fontSize: 18,
    fontWeight: 'bold',
    bottom:65,
    left:70,
    color: '#FFFFFF',
  },

  subsWE: {
    color: '#95969D',
    bottom:55,
    left:70,
    fontSize:15
  
  },
  amount:{
    top:60,
    right:155,
    color: '#FFFFFF',
    fontSize:15

  },
  country: {
    color: '#FFFFFF',
    fontSize:15,
    top:39,
    right:15
  },
  forGoogel:{
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 55,
    alignItems: 'center',
    backgroundColor: '#0B0B45',
    borderRadius: 14,
    padding: 16,
    width:280,
    height:170,
    

  },
  

   
  


})