import React, { useState, useEffect, useRef } from 'react';
import {
  Image, View, TextInput, Dimensions,
} from 'react-native';
import { Button } from 'react-native-elements';
import axios from 'axios';
import Constants from 'expo-constants';
import { AntDesign } from '@expo/vector-icons';
import useOrientation from './useOrientation';
import styles from './style';

const Tekstitv: React.FC = () => {
  const secrets: string = `app_id=${Constants.manifest.extra.yleApiId}&app_key=${Constants.manifest.extra.yleApiKey}`;
  const [page, setPage] = useState<number>(100);
  const [imageURL, setImageURL] = useState<string>(`${Constants.manifest.extra.yleBaseUrl}/${page}/1.png?${secrets}`);
  const orientation = useOrientation();
  const dims = Dimensions.get('window');
  const inputRef = useRef<null | TextInput>(null);

  useEffect(() => {
    const getPage = async (): Promise<void> => {
      try {
        await axios.get(`${Constants.manifest.extra.yleBaseUrl}/${page}/1.png?${secrets}`);
        setImageURL(`${Constants.manifest.extra.yleBaseUrl}/${page}/1.png?${secrets}`);
      } catch {
        setImageURL('404');
      }
    };
    getPage();
  }, [page]);

  const handleBtnClick = (value: string) => {
    if (value === 'minus') setPage(page - 1 < 100 ? 999 : page - 1);
    else setPage(page + 1 > 999 ? 100 : page + 1);
  };

  const handleInputChange = (value: string) => {
    if (value.length === 3 && inputRef.current) {
      setPage(Number(value));
      inputRef.current.blur();
    }
  };

  return (
    <View style={orientation === 'portrait' ? { marginBottom: 100 } : { marginBottom: 30, marginTop: -30 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 12 }}>
        <View style={styles.iconButtonWrap}>
          <Button
            buttonStyle={styles.iconButton}
            icon={<AntDesign name="caretleft" size={12} color="white" />}
            onPress={() => handleBtnClick('minus')}
          />
        </View>
        <TextInput
          style={styles.textInput}
          ref={inputRef}
          keyboardType="numeric"
          maxLength={3}
          placeholderTextColor="gray"
          placeholder={page.toString()}
          onChangeText={(p) => handleInputChange(p)}
        />
        <View style={styles.iconButtonWrap}>
          <Button
            buttonStyle={styles.iconButton}
            icon={<AntDesign name="caretright" size={12} color="white" />}
            onPress={() => handleBtnClick('plus')}
          />
        </View>
      </View>
      <Image
        style={orientation === 'portrait'
          ? { width: dims.width, height: dims.width / (720 / 432) }
          : { height: '85%', aspectRatio: 720 / 432 }}
        source={imageURL === '404' ? require('../assets/FourZeroFour.png') : { uri: imageURL }}
      />
    </View>
  );
};

export default Tekstitv;
