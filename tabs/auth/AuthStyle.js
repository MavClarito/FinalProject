import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingBottom: 120, 
  },
  authContainer: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.01)',
    borderRadius: 10,
  },
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#004481',
    paddingVertical: 10,
    paddingHorizontal: 20,
    position: 'absolute', // Ensures it's on top
    top: 0, // Aligns it to the top of the screen
    zIndex: 10, // Makes it render above other components
    elevation: 5, // Adds shadow on Android for a "floating" effect
  },
  logo: {
    width: 80,
    height: 50,
    marginRight: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginLeft: 10, // Add this instead of marginTop
  },
  appTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2a9d8f',
    textAlign: 'center',
    marginTop: 20, 
    marginBottom: 20, 
  },
  authForm: {
    backgroundColor: 'rgba(151, 202, 219, 0.4)',
    padding: 20,
    width: '90%',
    maxWidth: 400,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    alignItems: 'center',
  },
  iconContainer: {
    backgroundColor: '#96CBDB',
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  userIcon: {
    fontSize: 24,
    color: '#2a9d8f',
  },
  heading: {
    fontSize: 20,
    color: '#333',
    marginBottom: 20,
  },
  inputField: {
    width: '100%',
    padding: 10,
    marginVertical: 10,
    borderRadius: 4,
    backgroundColor: '#DEE8F1', 
  },
  authButton: {
    backgroundColor: '#00509e',
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: '100%',
    borderRadius: 4,
    alignItems: 'center',
    marginTop: 10, 
  },
  authButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  forgotPassword: {
    color: '#00509e',
    fontSize: 14,
    textDecorationLine: 'underline',
    marginVertical: 10,
  },
  divider: {
    marginVertical: 20,
    color: '#333',
    fontWeight: 'bold',
  },
  switchAuth: {
    fontSize: 14,
    color: '#333',
    marginTop: 10,
  },
  loginText: {
    color: '#00509e',
    textDecorationLine: 'underline',
  },
  signUpText: {
    color: '#00509e',
    textDecorationLine: 'underline',
  },
});
