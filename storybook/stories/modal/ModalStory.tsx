import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Modal, ModalProps} from '../../../src';

export interface ModalStoryProps extends ModalProps {
  title?: string;
}

export default function ModalStory({
  title = 'Click Me',
  visible = false,
  animationType = 'fade',
  onPressBackdrop,
  children,
  ...props
}: ModalStoryProps) {
  const [toggle, setToggle] = useState(visible);

  useEffect(() => {
    setToggle(visible);
  }, [visible]);

  return (
    <View style={styles.container}>
      <Button title={title} onPress={() => setToggle(true)} />
      <Modal
        {...props}
        visible={toggle}
        animationType={animationType}
        onPressBackdrop={event => {
          onPressBackdrop && onPressBackdrop(event);
          setToggle(false);
        }}>
        {children || <View style={styles.modalContainer} />}
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  modalContainer: {
    height: 200,
    width: '100%',
    bottom: 0,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: 'white',
  },
});
