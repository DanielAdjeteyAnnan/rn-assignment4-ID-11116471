import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, TextInput, Text, Image, View, ImageBackground } from 'react-native';

export default function HomeScreen() {
    return (
        <ScrollView> 
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
            <TouchableOpacity onPress={() => { }}>
                <Text style={styles.sAll}>See all</Text>
            </TouchableOpacity>

            <ScrollView style={styles.scrollView} horizontal={true}>
                <ImageBackground source={require('../assets/images/fbIB.png')} style={styles.softwareEng}>
                    <View style={styles.subSWE}>
                    <TouchableOpacity onPress={() => { }}>
                        <View>
                            <View style={styles.fbIconContainer}>
                                <Image source={require('../assets/images/fbIcon.png')} style={styles.fbIcon} />
                            </View>
                            <Text style={styles.sWE}>Software Engineer</Text>
                            <Text style={styles.subsWE}>Facebook</Text>
                        </View>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <Text style={styles.amount}>$180,000</Text>
                        <Text style={styles.country}>Accra, Ghana</Text>
                    </View>
                </ImageBackground>

                <ImageBackground source={require('../assets/images/ggIB.png')} style={styles.forGoogel}>
                    <View style={styles.subSWE}>
                    <TouchableOpacity onPress={() => { }}>
                        <View>
                            <View style={styles.fbIconContainer}>
                                <Image source={require('../assets/images/google.png')} style={styles.fbIcon} />
                            </View>
                            <Text style={styles.sWE}>F-Stack Developer</Text>
                            <Text style={styles.subsWE}>Google</Text>
                        </View>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <Text style={styles.amount}> $160,000</Text>
                        <Text style={styles.country}>Mountain, CA</Text>
                    </View>
                </ImageBackground>

                <ImageBackground source={require('../assets/images/ama-img.png')} style={styles.forGoogel}>
                    <View style={styles.subSWE}>
                    <TouchableOpacity onPress={() => { }}>
                        <View>
                            <View style={styles.fbIconContainer}>
                                <Image source={require('../assets/images/amazonLogo.png')} style={styles.fbIcon} />
                            </View>
                            <Text style={styles.sWE}>DevOps Engineer</Text>
                            <Text style={styles.subsWE}>Amazon</Text>
                        </View>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <Text style={styles.amount}>$140,000</Text>
                        <Text style={styles.country}>Seattle, WA</Text>
                    </View>
                </ImageBackground>

                <ImageBackground source={require('../assets/images/nfx-img.png')} style={styles.forGoogel}>
                    <View style={styles.subSWE}>
                    <TouchableOpacity onPress={() => { }}>
                        <View>
                            <View style={styles.fbIconContainer}>
                                <Image source={require('../assets/images/netflixLogo.png')} style={styles.fbIcon} />
                            </View>
                            <Text style={styles.sWE}>Data Scientist</Text>
                            <Text style={styles.subsWE}>Netflix</Text>
                        </View>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <Text style={styles.amount}>$145,000</Text>
                        <Text style={styles.country}> Los Gatos </Text>
                    </View>
                </ImageBackground>

                <ImageBackground source={require('../assets/images/x-img.png')} style={styles.forGoogel}>
                    <View style={styles.subSWE}>
                    <TouchableOpacity onPress={() => { }}>
                        <View>
                            <View style={styles.fbIconContainer}>
                                <Image source={require('../assets/images/xLogo.png')} style={styles.fbIcon} />
                            </View>
                            <Text style={styles.sWE}>Software Enginee</Text>
                            <Text style={styles.subsWE}>Twitter</Text>
                        </View>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <Text style={styles.amount}>$135,000</Text>
                        <Text style={styles.country}>San Francisco</Text>
                    </View>
                </ImageBackground>

                <ImageBackground source={require('../assets/images/adb-img.png')} style={styles.forGoogel}>
                    <View style={styles.subSWE}>
                    <TouchableOpacity onPress={() => { }}>
                        <View>
                            <View style={styles.fbIconContainer}>
                                <Image source={require('../assets/images/adobeLogo.png')} style={styles.fbIcon} />
                            </View>
                            <Text style={styles.sWE}>Software Engineer</Text>
                            <Text style={styles.subsWE}>Adobe</Text>
                        </View>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <Text style={styles.amount}>$130,000</Text>
                        <Text style={styles.country}>San Jose, CA</Text>
                    </View>
                </ImageBackground>

                <ImageBackground source={require('../assets/images/ap-img.png')} style={styles.forGoogel}>
                    <View style={styles.subSWE}>
                    <TouchableOpacity onPress={() => { }}>
                        <View>
                            <View style={styles.fbIconContainer}>
                                <Image source={require('../assets/images/apple.png')} style={styles.fbIcon} />
                            </View>
                            <Text style={styles.sWE}>ML Engineer</Text>
                            <Text style={styles.subsWE}>Apple</Text>
                        </View>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <Text style={styles.amount}>$165,000</Text>
                        <Text style={styles.country}>Cupertino, CA</Text>
                    </View>
                </ImageBackground>

                <ImageBackground source={require('../assets/images/micro-img.png')} style={styles.forGoogel}>
                    <View style={styles.subSWE}>
                    <TouchableOpacity onPress={() => { }}>
                        <View>
                            <View style={styles.fbIconContainer}>
                                <Image source={require('../assets/images/microLogo.png')} style={styles.fbIcon} />
                            </View>
                            <Text style={styles.sWE}>C.security Engineer</Text>
                            <Text style={styles.subsWE}>Microsoft</Text>
                        </View>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <Text style={styles.amount}>$150,000</Text>
                        <Text style={styles.country}>Redmond, WA</Text>
                    </View>
                </ImageBackground>
            </ScrollView>

            <Text style={styles.fJob}>Popular Jobs</Text>
            <TouchableOpacity onPress={() => { }}>
                <Text style={styles.sAll}>See all</Text>
            </TouchableOpacity>

            <View style={styles.jobContainer}>
               <TouchableOpacity onPress={() => { }}>
                  <View style={styles.popJob}>
                       <Image source={require('../assets/images/burger.png')} style={styles.popIcon}/>
                        <View style={styles.jobName}> 
                            <Text style={styles.jobN}>Jr Executive</Text> 
                            <Text style={styles.subN}>Burger King</Text>
                        </View> 

                        <View style={styles.salLoct}>
                        <Text style={styles.sal}>$96,000/y</Text>
                            <Text style={styles.loct}>Los Angels, US</Text>
                       </View>   
                 </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { }}>
                  <View style={styles.popJob}>
                       <Image source={require('../assets/images/beats.png')} style={styles.popIcon}/>
                        <View style={styles.jobName}> 
                            <Text style={styles.jobN}>Product Manager</Text> 
                            <Text style={styles.subN}>Beats</Text>
                        </View> 

                        <View style={styles.salLoct}>
                        <Text style={styles.sal}>$84,000/y</Text>
                            <Text style={styles.loct}>Florida, US</Text>
                       </View>   
                 </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { }}>
                  <View style={styles.popJob}>
                       <Image source={require('../assets/images/fbIcon.png')} style={styles.popIcon}/>
                        <View style={styles.jobName}> 
                            <Text style={styles.jobN}>Product Manager</Text> 
                            <Text style={styles.subN}>Facebook</Text>
                        </View> 

                        <View style={styles.salLoct}>
                        <Text style={styles.sal}>$86,000/y</Text>
                            <Text style={styles.loct}>Florida, US</Text>
                       </View>   
                 </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { }}>
                  <View style={styles.popJob}>
                       <Image source={require('../assets/images/salforce.png')} style={styles.popIcon}/>
                        <View style={styles.jobName}> 
                            <Text style={styles.jobN}>Technical P M</Text> 
                            <Text style={styles.subN}>Salesforce</Text>
                        </View> 

                        <View style={styles.salLoct}>
                        <Text style={styles.sal}> $160,000/y</Text>
                            <Text style={styles.loct}>Francisco,</Text>
                       </View>   
                 </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { }}>
                  <View style={styles.popJob}>
                  <Image source={require('../assets/images/pinLogo.png')} style={styles.popIcon} />
                        <View style={styles.jobName}> 
                            <Text style={styles.jobN}>Site R Engineer</Text> 
                            <Text style={styles.subN}>Pinterest</Text>
                        </View> 

                        <View style={styles.salLoct}>
                        <Text style={styles.sal}>$150,000/y</Text>
                            <Text style={styles.loct}>Francisco,</Text>
                       </View>   
                 </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { }}>
                  <View style={styles.popJob}>
                       <Image source={require('../assets/images/ibmLogo.png')} style={styles.popIcon}/>
                        <View style={styles.jobName}> 
                            <Text style={styles.jobN}>Blockchain Dev</Text> 
                            <Text style={styles.subN}>IBM</Text>
                        </View> 

                        <View style={styles.salLoct}>
                        <Text style={styles.sal}>$155,000/y</Text>
                            <Text style={styles.loct}>Armonk, NY</Text>
                       </View>   
                 </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { }}>
                  <View style={styles.popJob}>
                       <Image source={require('../assets/images/slackLogo.png')} style={styles.popIcon}/>
                        <View style={styles.jobName}> 
                            <Text style={styles.jobN}>Product Manager</Text> 
                            <Text style={styles.subN}>Slack</Text>
                        </View> 

                        <View style={styles.salLoct}>
                        <Text style={styles.sal}>$165,000/y</Text>
                            <Text style={styles.loct}>Francisco</Text>
                       </View>   
                 </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { }}>
                  <View style={styles.popJob}>
                       <Image source={require('../assets/images/adobeLogo.png')} style={styles.popIcon}/>
                        <View style={styles.jobName}> 
                            <Text style={styles.jobN}>UX/UI Designer</Text> 
                            <Text style={styles.subN}>Adobe</Text>
                        </View> 

                        <View style={styles.salLoct}>
                        <Text style={styles.sal}>$130,000/y</Text>
                            <Text style={styles.loct}>San Jose, CA</Text>
                       </View>   
                 </View>
                </TouchableOpacity>

            </View>
            

            <StatusBar style="auto" />
        </View>
        </ScrollView>
    
    )
}

const styles = StyleSheet.create({
    userCred: {
        top: 50,
        left: 20
    },
    homContainer: {
        flex: 1,
        backgroundColor: 'white'
    },
    name: {
        fontWeight: 'bold',
        fontSize: 25
    },
    email: {
        color: '#95969D',
        fontSize: 18
    },
    profCon: {
        left: 320,
        marginTop: -55,
    },
    profilePicture: {
        width: 50,
        height: 50,
        borderRadius: 75,
    },
    onlineDot: {
        width: 8,
        height: 8,
        borderRadius: 20,
        backgroundColor: '#FC1010',
        left: 40,
        bottom: 42,
        borderWidth: 2,
        borderColor: 'white',
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
        marginRight: 30
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
    fJob: {
        fontSize: 20,
        fontWeight: 'bold',
        top: 50,
        left: 20
    },
    sAll: {
        fontSize: 16,
        top: 30,
        left: 335,
        color: '#95969D'
    },
    softwareEng: {
        flexDirection: 'row',
        marginHorizontal: 20,
        marginTop: 55,
        alignItems: 'center',
        borderRadius: 14,
        padding: 16,
        width: 280,
        height: 170,
        overflow: 'hidden',
    },
    subSWE: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    fbIconContainer: {
        width: 46,
        height: 46,
        borderWidth: 12,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        borderColor: '#FFFFFF',
        backgroundColor: 'white',
        bottom: 15,
    },
    fbIcon: {
        width: 30,
        height: 33,
    },
    sWE: {
        fontSize: 18,
        fontWeight: 'bold',
        bottom: 65,
        left: 70,
        color: '#FFFFFF',
    },
    subsWE: {
        color: '#95969D',
        bottom: 55,
        left: 70,
        fontSize: 15
    },
    amount: {
        top: 60,
        right: 155,
        color: '#FFFFFF',
        fontSize: 15
    },
    country: {
        color: '#FFFFFF',
        fontSize: 15,
        top: 39,
        right: 15
    },
    forGoogel: {
        flexDirection: 'row',
        marginHorizontal: 20,
        marginTop: 55,
        alignItems: 'center',
        borderRadius: 14,
        padding: 16,
        width: 280,
        height: 170,
        overflow: 'hidden',
    },
    jobContainer:{
        marginLeft:20,
        flexDirection:'column',
        marginTop:60,
        gap:15,
        width:360
    


    },
    popJob:{
        flexDirection:'row',
        borderRadius:20,
        gap:10,
        backgroundColor:'#F7F7F7',
        padding:10,
    },
    popIcon:{
        height:50,
        width:50,
        marginTop:5,
        borderRadius:40

    },
    
    jobName: {
        gap:15,
        marginTop:10,
      
    },
    
    salLoct:{
        marginLeft:70,
        marginTop:10,
        gap:15,
        

    },
    sal:{
        color: '#0D0D26',
        fontSize:13,
        bottom: 3,
    },

    loct:{
        color: '#95969D',
        fontSize: 13,
        bottom: 13,

    },
    jobN:{
        fontSize: 18,
        fontWeight: 'bold',
        bottom: 5,
        color: '#0D0D26',
        left:12

    },
    subN:{
        color: '#95969D',
        bottom: 13,
        left: 12,
        fontSize: 13,

    }
        
    
});
