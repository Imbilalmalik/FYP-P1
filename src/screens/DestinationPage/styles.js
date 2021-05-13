import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    height: '100%',
  },
  textInput: {
    padding: 10,
    backgroundColor: '#eee',
    marginVertical: 5,
    marginLeft: 20,
  },

  separator: {
    backgroundColor: '#efefef',
    height: 1,
  },
  listView: {
    position: 'absolute',
      top: 105,
  },
  autocompleteContainer: {
    position: 'absolute',
    top: 0,
    left: 10,
    right: 10,
    marginLeft:20
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  iconContainer: {
    backgroundColor: '#add8e6',
    padding: 5,
    borderRadius: 50,
    marginRight: 15,
  },

  round: {
    width: 5,
    height: 5,
    backgroundColor: 'green',
    position: 'absolute',
    top: 20,
    left: 15,
    borderRadius: 5,
  },

  linear: {
    width: 1,
    height: 60,
    backgroundColor: 'green',
    position: 'absolute',
    top: 28,
    left: 17,
  },
  square: {
    position: 'absolute',
    top: 90,
    left: 15,
    width: 5,
    height: 5,
    backgroundColor: 'green',
    borderRadius:2
    
    
  },
});

export default styles;
