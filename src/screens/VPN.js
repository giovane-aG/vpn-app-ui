import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from 'react-native';

import Modal from 'react-native-modal';

import {images, servers} from '../../constants';

const Vpn = () => {
  const [automatic, setAutomatic] = useState({
    name: 'Automatic',
    icon: images.icons.automatic,
  });
  const [server, setServer] = useState(null);
  const [connected, setConnected] = useState(false);
  const [statusText, setStatusText] = useState('Disconnected');
  const [statusButtonColor, setStatusButtonColor] = useState('#00AAFF');
  const [statusButton, setStatusButton] = useState('CONNECT NOW');
  const [statusImg, setStatusImg] = useState(images.icons.offline);
  const [statusIconColor, setStatusIconColor] = useState('#AAAAAA');
  const [modalVisible, setModalVisible] = useState(false);

  const changeStatus = () => {
    if (!connected) {
      setConnected(true);
      setStatusText('Connected');
      setStatusIconColor('#00DD00');
      setStatusButton('DISCONNECT');
      setStatusButtonColor('#FFF');
      setStatusImg(images.icons.online);
    } else {
      setConnected(false);
      setStatusText('Disconnected');
      setStatusIconColor('#AAAAAA');
      setStatusButton('CONNECT NOW');
      setStatusButtonColor('#00AAFF');
      setStatusImg(images.icons.offline);
    }
  };

  const renderSever = () => {
    const connection = server || automatic;
    return (
      <>
        <Image source={connection.icon} />
        <Text>
          {'  '}
          {connection.name}
          {'  '}
        </Text>
        <Image source={images.icons.dropdown} />
      </>
    );
  };

  const renderModal = () => {
    const connection = server || automatic;

    return (
      <Modal
        useNativeDriver
        isVisible={modalVisible}
        swipeDirecton="down"
        onBackdropPress={handleModal}
        onBackButtonPress={handleModal}
        style={{margin: 0, justifyContent: 'flex-end', flex: 1}}>
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>Pick your Server</Text>
          <ScrollView>
            <View>
              {servers.map((item) => {
                const isConnected = connection.name === item.name;
                const isChecked =
                  images.icons[isConnected ? 'checked' : 'unchecked'];
                return (
                  <TouchableOpacity
                    onPress={() => closeModal(item)}
                    key={`item ${item.name}`}>
                    <View style={styles.modalLine}>
                      <View style={styles.lineIcon}>
                        <Image source={item.icon} />
                      </View>

                      <Text style={styles.lineText}>{item.name}</Text>

                      <View style={styles.checkIcon}>
                        <Image source={isChecked} />
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
          </ScrollView>
        </View>
      </Modal>
    );
  };

  const handleModal = () => {
    setModalVisible(!modalVisible);
  };

  const closeModal = (item) => {
    setServer(item);
    handleModal();
  };

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.title}>
        <Text style={styles.titleText}>VPN</Text>
      </View>
      {/* MAIN */}
      <View style={styles.main}>
        <View style={styles.status}>
          <Text style={styles.statusText}>{statusText}</Text>
          <View
            style={[styles.statusIcon, {backgroundColor: statusIconColor}]}
          />
        </View>
        <Image style={styles.statusImg} source={statusImg} />
        <TouchableOpacity
          style={[styles.btn, {backgroundColor: statusButtonColor}]}
          onPress={changeStatus}>
          <Text>{statusButton}</Text>
        </TouchableOpacity>
      </View>
      {/* FOOTER */}
      <TouchableOpacity onPress={handleModal} style={styles.footer}>
        {renderSever()}
      </TouchableOpacity>
      {renderModal()}
    </View>
  );
};

export default Vpn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  title: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    paddingTop: 10,
  },

  titleText: {
    fontWeight: 'bold',
    fontSize: 20,
  },

  main: {
    flex: 6,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  status: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    width: 150,
    height: 40,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 10,
  },

  statusText: {
    color: '#999999',
    marginRight: 6,
  },

  statusIcon: {
    width: 8,
    height: 8,
    marginTop: 4,
    borderRadius: 10,
  },

  statusImg: {
    width: 200,
    height: 200,
  },
  btn: {
    borderWidth: 0.1,
    borderRadius: 25,
    backgroundColor: '#FFF',
    width: 200,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',

    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowOpacity: 0,
    shadowRadius: 5,
    elevation: 1,
  },

  footer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 20,
  },

  modalView: {
    justifyContent: 'flex-end',
    backgroundColor: 'white',
    margin: 0,
  },

  modalTitle: {
    alignSelf: 'center',
    margin: 15,
    color: '#888888',
  },

  modalLine: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 15,
  },

  lineIcon: {
    flex: 0.3,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  lineText: {
    flex: 1,
  },

  checkIcon: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
