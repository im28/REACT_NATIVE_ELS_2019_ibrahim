import React ,{useEffect,useState}from 'react';
import { StyleSheet,TouchableOpacity,View,TextInput,KeyboardAvoidingView,Text,ScrollView } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


export default function LinksScreen() {
  const [Inputs, setInputs] = useState([])
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding"keyboardVerticalOffset="200" enabled>
      <View style={styl.list}>
        <ScrollView >
          <View style={[styl.todo]}>
            <Text style={[styl.inputText]} >Jh</Text>
            <TouchableOpacity style={[styl.container]}>
              <FontAwesome5 name="trash-alt" style={styl.icon}></FontAwesome5> 
            </TouchableOpacity>
          </View>
          <View style={[styl.todo]}>
            <Text style={[styl.inputText]} >JhAASD</Text>
            <TouchableOpacity style={[styl.container]}>
              <FontAwesome5 name="trash-alt" style={styl.icon}></FontAwesome5> 
            </TouchableOpacity>
          </View>
          <View style={[styl.todo]}>
            <Text style={[styl.inputText]} >ASDASJh</Text>
            <TouchableOpacity style={[styl.container]}>
              <FontAwesome5 name="trash-alt" style={styl.icon}></FontAwesome5> 
            </TouchableOpacity>
          </View>
          <View style={[styl.todo]}>
            <Text style={[styl.inputText]} >JADASDh</Text>
            <TouchableOpacity style={[styl.container]}>
              <FontAwesome5 name="trash-alt" style={styl.icon}></FontAwesome5> 
            </TouchableOpacity>
          </View>
          <View style={[styl.todo]}>
            <Text style={[styl.inputText]} >JASDAFGGSh</Text>
            <TouchableOpacity style={[styl.container]}>
              <FontAwesome5 name="trash-alt" style={styl.icon}></FontAwesome5> 
            </TouchableOpacity>
          </View>
          <View style={[styl.todo]}>
            <Text style={[styl.inputText]} >ASD</Text>
            <TouchableOpacity style={[styl.container]}>
              <FontAwesome5 name="trash-alt" style={styl.icon}></FontAwesome5> 
            </TouchableOpacity>
          </View>
          <View style={[styl.todo]}>
            <Text style={[styl.inputText]} >JSDAh</Text>
            <TouchableOpacity style={[styl.container]}>
              <FontAwesome5 name="trash-alt" style={styl.icon}></FontAwesome5> 
            </TouchableOpacity>
          </View>
          <View style={[styl.todo]}>
            <Text style={[styl.inputText]} >JDDh</Text>
            <TouchableOpacity style={[styl.container]}>
              <FontAwesome5 name="trash-alt" style={styl.icon}></FontAwesome5> 
            </TouchableOpacity>
          </View>
          <View style={[styl.todo]}>
            <Text style={[styl.inputText]} >JDDh</Text>
            <TouchableOpacity style={[styl.container]}>
              <FontAwesome5 name="trash-alt" style={styl.icon}></FontAwesome5> 
            </TouchableOpacity>
          </View>

        </ScrollView>
      </View>

      <View style={[style.todo]}>
        <TextInput style={[style.input]} contentContainerStyle={[style.inputText]}></TextInput>
        <TouchableOpacity style={[style.container]}>
          <FontAwesome5 name="plus" style={style.icon}></FontAwesome5> 
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

LinksScreen.navigationOptions = {
  title: 'Links',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});
const styl = StyleSheet.create({
  list:{
    height:350,
  },
  todo:{
    backgroundColor:'red',
    width: '100%',
    height: 50,
    flexDirection:"row",
    marginBottom: 20
  },
  inputText:{
    flex:1,
    fontFamily: 'roboto-regular',
    fontSize: 30,
    height:50,
    borderStyle:"solid",
    borderColor:"#000",
    borderBottomWidth: 1,
  },
  container: {
    backgroundColor: "#6F0000",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    elevation: 2,
    width: 50,
    height: 50,
    borderRadius: 100,
    shadowOffset: {
      height: 2,
      width: 0
    },
    shadowColor: "#111",
    shadowOpacity: 0.2,
    shadowRadius: 1.2
  },
  icon: {
    color: "#fff",
    fontSize: 30,
    alignSelf: "center",
    width: 30,
    height: 30,
    textAlign: "center",
  }

});

const style = StyleSheet.create({
  todo:{
    width: '100%',
    height: 50,
    flexDirection:"row",
    marginBottom: 20
  },
  input:{
    flex:1,
    fontFamily: 'roboto-regular',
    fontSize: 30,
    height:50,
    borderStyle:"solid",
    borderColor:"#000",
    borderBottomWidth: 1,
  },
  inputText:{
    fontFamily: 'roboto-regular',
  },
  container: {
    backgroundColor: "#3F51B5",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    elevation: 2,
    width: 50,
    height: 50,
    borderRadius: 100,
    shadowOffset: {
      height: 2,
      width: 0
    },
    shadowColor: "#111",
    shadowOpacity: 0.2,
    shadowRadius: 1.2
  },
  icon: {
    color: "#fff",
    fontSize: 30,
    alignSelf: "center",
    width: 30,
    height: 30,
    textAlign: "center",
  }
});