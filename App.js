import React, { useState, useEffect } from 'react';
//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Pressable, Image, Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
export default function App() {
  const [joueur_active, setActive_joueur] = useState('X')
  //pour la logique du jeu
  const [markers, setMarkers] = useState([
    null, null, null,
    null, null, null,
    null, null, null
  ])
  const markPosition = (position) => {
    if (!markers[position]) {
      let temp = [...markers]
      temp[position] = joueur_active
      setMarkers(temp)
      if (joueur_active === 'X') {  //changer a l'autre joueur
        setActive_joueur('O')
      } else {
        setActive_joueur('X')
      }
    }
  }
  const resetMarkers = () => {
    setMarkers([
      null, null, null,
      null, null, null,
      null, null, null
    ])
  }
  const calculateGagnant = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
  useEffect(() => {
    const winner = calculateGagnant(markers);
    if (winner === 'X') {
      alert("Joueur X a gagné!")
      resetMarkers()
    } else if (winner === 'O') {
      alert("Joueur O a gagné!")
      resetMarkers()
    }
  }, [markers])

  // l'interface
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.joueurInfo, { backgroundColor: joueur_active === 'X' ? '#007FF4' : '#F40075' }]}>
        <Text style={styles.JoueurTxt}>
          Tour du Joueur {joueur_active}</Text>
      </View>

      {/*creation de la grille*/}
      <View style={styles.mainContainer}>

        {/* Top Left Cell */}
        <Pressable style={styles.cell_top_left} onPress={() => markPosition(0)}>
          {markers[0] === 'X' && <Image source={require('./assets/croix.png')} style={styles.icon} />}
          {markers[0] === 'O' && <Image source={require('./assets/zero.png')} style={styles.icon} />}
        </Pressable>

        {/* Top Mid Cell */}
        <Pressable style={styles.cell_top_mid} onPress={() => markPosition(1)}>
          {markers[1] === 'X' && <Image source={require('./assets/croix.png')} style={styles.icon} />}
          {markers[1] === 'O' && <Image source={require('./assets/zero.png')} style={styles.icon} />}
        </Pressable>

        {/* Top Right Cell */}
        <Pressable style={styles.cell_top_right} onPress={() => markPosition(2)}>
          {markers[2] === 'X' && <Image source={require('./assets/croix.png')} style={styles.icon} />}
          {markers[2] === 'O' && <Image source={require('./assets/zero.png')} style={styles.icon} />}
        </Pressable>

        {/* Mid Left Cell */}
        <Pressable style={styles.cell_mid_left} onPress={() => markPosition(3)}>
          {markers[3] === 'X' && <Image source={require('./assets/croix.png')} style={styles.icon} />}
          {markers[3] === 'O' && <Image source={require('./assets/zero.png')} style={styles.icon} />}
        </Pressable>

        {/* Mid Mid Cell */}
        <Pressable style={styles.cell_mid_mid} onPress={() => markPosition(4)}>
          {markers[4] === 'X' && <Image source={require('./assets/croix.png')} style={styles.icon} />}
          {markers[4] === 'O' && <Image source={require('./assets/zero.png')} style={styles.icon} />}
        </Pressable>

        {/* Mid Right Cell */}
        <Pressable style={styles.cell_mid_right} onPress={() => markPosition(5)}>
          {markers[5] === 'X' && <Image source={require('./assets/croix.png')} style={styles.icon} />}
          {markers[5] === 'O' && <Image source={require('./assets/zero.png')} style={styles.icon} />}
        </Pressable>

        {/* Bottom Left Cell */}
        <Pressable style={styles.cell_bottom_left} onPress={() => markPosition(6)}>
          {markers[6] === 'X' && <Image source={require('./assets/croix.png')} style={styles.icon} />}
          {markers[6] === 'O' && <Image source={require('./assets/zero.png')} style={styles.icon} />}
        </Pressable>

        {/* Bottom Mid Cell */}
        <Pressable style={styles.cell_bottom_mid} onPress={() => markPosition(7)}>
          {markers[7] === 'X' && <Image source={require('./assets/croix.png')} style={styles.icon} />}
          {markers[7] === 'O' && <Image source={require('./assets/zero.png')} style={styles.icon} />}
        </Pressable>

        {/* Bottom Right Cell */}
        <Pressable style={styles.cell_bottom_right} onPress={() => markPosition(8)}>
          {markers[8] === 'X' && <Image source={require('./assets/croix.png')} style={styles.icon} />}
          {markers[8] === 'O' && <Image source={require('./assets/zero.png')} style={styles.icon} />}
        </Pressable>


      </View>
      <Pressable style={styles.restartBTN} onPress={resetMarkers}>
        <Image source={require('./assets/replay.png')} style={styles.restartIcon} />
      </Pressable>

    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  joueurInfo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    paddingVertical: 20,
    marginTop: 30
  },
  JoueurTxt: {
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: 1.2,
    color: '#fff'
  },
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: 60
  },
  cell_top_left: {
    width: windowWidth / 3.2,
    height: windowWidth / 3.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 6,
    borderBottomWidth: 6
  },
  cell_top_mid: {
    width: windowWidth / 3.2,
    height: windowWidth / 3.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 6
  },
  cell_top_right: {
    width: windowWidth / 3.2,
    height: windowWidth / 3.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 6,
    borderLeftWidth: 6,
  },
  cell_mid_left: {
    width: windowWidth / 3.2,
    height: windowWidth / 3.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 6,
  },
  cell_mid_mid: {
    width: windowWidth / 3.2,
    height: windowWidth / 3.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cell_mid_right: {
    width: windowWidth / 3.2,
    height: windowWidth / 3.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftWidth: 6,
  },
  cell_bottom_left: {
    width: windowWidth / 3.2,
    height: windowWidth / 3.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 6,
    borderTopWidth: 6,
  },
  cell_bottom_mid: {
    width: windowWidth / 3.2,
    height: windowWidth / 3.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 6,
  },
  cell_bottom_right: {
    width: windowWidth / 3.2,
    height: windowWidth / 3.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftWidth: 6,
    borderTopWidth: 6,
  },
  icon: {
    height: 62,
    width: 62
  },
  restartBTN: {
    position: 'absolute',
    bottom: 20,
    right: 20
  },
  restartIcon: {
    height: 80,
    width: 80
  }
});
