import React from 'react';
import {StyleSheet, TextInput, Image, View} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const TextInputExample = () => {
  const [name, onChangeName] = React.useState('Name : ');
  const [age, onChangeAge] = React.useState('Age : ');
  const [address, onChangeAddress] = React.useState('Address : ');
  const [school, onChangeSchool] = React.useState('School : ');
  const [course, onChangeCourse] = React.useState('Course : ');
  const [email, onChangeEmail] = React.useState('Email : ');
  const [number, onChangeNumber] = React.useState('Contact # : ');
  const [value, onChangeAboutMe] = React.useState('About Me : ');

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.content}>
        <View style={styles.row}>
          <Image
            style={styles.image}
            source={('https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg')}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeName}
            value={name}
            placeholder="Name : "
            keyboardType="default"
          />
        </View>

        <View style={styles.row}>
          <Image
            style={styles.image}
            source={('https://static.vecteezy.com/system/resources/previews/011/020/009/original/age-icon-design-illustration-arrow-symbol-age-limit-concept-vector.jpg')}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeAge}
            value={age}
            placeholder="Age : "
            keyboardType="default"
          />
        </View>

        <View style={styles.row}>
          <Image
            style={styles.image}
            source={('https://static.vecteezy.com/system/resources/previews/008/015/118/original/address-icon-free-vector.jpg')}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeAddress}
            value={address}
            placeholder="Address : "
            keyboardType="default"
          />
        </View>

        <View style={styles.row}>
          <Image
            style={styles.image}
            source={('https://static.vecteezy.com/system/resources/previews/002/206/174/original/school-building-icon-free-vector.jpg')}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeSchool}
            value={school}
            placeholder="School : "
            keyboardType="default"
          />
        </View>

        <View style={styles.row}>
          <Image
            style={styles.image}
            source={('https://w7.pngwing.com/pngs/575/29/png-transparent-computer-icons-instructor-led-training-course-education-toolbox-miscellaneous-blue-angle.png')}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeCourse}
            value={course}
            placeholder="Course : "
            keyboardType="default"
          />
        </View>

        <View style={styles.row}>
          <Image
            style={styles.image}
            source={('https://th.bing.com/th/id/OIP.MvrHgBzLaVfvb9k54h2iqwHaHa?w=198&h=198&c=7&r=0&o=5&pid=1.7')}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeEmail}
            value={email}
            placeholder="Email : "
            keyboardType="email-address"
          />
        </View>

        <View style={styles.row}>
          <Image
            style={styles.image}
            source={('https://cdn.pixabay.com/photo/2018/04/28/17/38/contact-icon-3357824_1280.png')}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="Contact # : "
            keyboardType="numeric"
          />
        </View>

        <View style={styles.row}>
          <Image
            style={styles.image}
            source={('https://th.bing.com/th/id/OIP.Weg7GkB2G16OpWynKYGwuAHaHw?rs=1&pid=ImgDetMain')}
          />
          <TextInput
            editable
            multiline
            numberOfLines={4}
            maxLength={40}
            onChangeText={text => onChangeText(text)}
            value={value}
            style={styles.textInput}
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: "100%",
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  textInput: {
    borderBottomColor: '#000',
    borderWidth: 1,
    padding: 10,
    margin: 12,
    width: "100%",
  },
    row: {
    flexDirection: 'row',
  },
  content: {
    flex: 1,
    height: '100%',
    width: '100%',
    padding: 20,
  },
  image: {
    height: 40,
    width: 40,
    alignSelf: 'center',
  },
});

export default TextInputExample;