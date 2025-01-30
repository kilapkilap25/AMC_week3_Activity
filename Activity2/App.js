import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
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
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeName}
          value={name}
          placeholder="Name : "
          keyboardType="default"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeAge}
          value={age}
          placeholder="Age : "
          keyboardType="default"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeAddress}
          value={address}
          placeholder="Address : "
          keyboardType="default"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeSchool}
          value={school}
          placeholder="School : "
          keyboardType="default"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeCourse}
          value={course}
          placeholder="Course : "
          keyboardType="default"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          value={email}
          placeholder="Email : "
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Contact # : "
          keyboardType="numeric"
        />
        <SafeAreaView
          style={[
            styles.container,
            {
              margin: 12,
              borderWidth: 1,
              backgroundColor: value,
            },
          ]}>
          <TextInput
            editable
            multiline
            numberOfLines={4}
            maxLength={40}
            onChangeText={text => onChangeText(text)}
            value={value}
            style={styles.textInput}
          />
      </SafeAreaView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  container: {
    borderBottomColor: '#000',
    borderBottomWidth: 1,
  },
  textInput: {
    padding: 10,
  },
});

export default TextInputExample;