import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get('window');

export const colors = {
  primary: '#4a6da7',
  secondary: '#e74c3c',
  background: '#f8f9fa',
  text: '#2c3e50',
  lightText: '#ecf0f1',
  border: '#ddd',
  activeTintColor: '#fff',
  inactiveTintColor: '#333',
  placeholder: '#95a5a6'
};

export const spacing = {
    small: 8,
    medium: 16,
    large: 24,
};

export const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 40,
    alignItems: 'center',
    //justifyContent: 'center'
  },
  inputContainer: {
    marginBottom: 16,
    width: '100%',
  },
  ntContainer: {
    marginTop: 20,
    padding: 20,
    justifyContent: 'center',
  },
  header: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    alignItems: 'center',
  },
  profileImage: {
    width: 180,
    height: 180,
    borderRadius: 90,
    borderWidth: 4,
    borderColor: colors.primary,
    marginButton: 25
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
  },
  menuItems: {
    paddingTop: 20,
  },
  menuItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  menuItemText: {
    fontSize: 16,
    color: '#333',
  },
  menuButtonContainer: {
    alignSelf: 'flex-start',
    marginRight: 20,
    marginBottom: 10,
  },
  title: {
    alignSelf: 'center',
    fontSize: 24,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 15,
    marginTop: 15
  },
  infoCard: {
    width: 340,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height:4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5
  },
  infoRow: {
    marginBottom: 18
  },
  label: {
    fontSize: 15,
    fontWeight: '500',
    color: colors.primary,
    marginBottom: 4
  },
  input: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    padding: spacing.medium,
    fontSize: 16,
    color: colors.text,
  },
  inputError: {

  },
  errorText: {

  },
  value: {
    fontSize: 17,
    color: '#34495e',
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ecf0f1'
  },
  emailValue: {
    color: colors.secondary,
    fontWeight: '600'
  },
  button: {
    justifyContent: 'space-between',
    marginTop: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
    color: '#666',
  },
  resultContainer: {
    //marginTop: 15,
    marginBottom: 20,
    padding: 20,
    backgroundColor: colors.background,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  resultLabel: {
    fontSize: 16,
    color: '#7f8c8d',
    marginBottom: 5,
  },
  resultText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  button1: {
    backgroundColor: colors.primary,
    color: 'white',
    padding: 15,
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
    marginHorizontal: 5,
  },
  clearButton: {
    backgroundColor: '#e74c3c',
  },
  tableContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    maxHeight: 400,
  },
  tableTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#2c3e50',
    textAlign: 'center',
  },
  tableItem: {
    fontSize: 18,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    color: '#34495e',
  },
  videoContainer: {
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 25,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    backgroundColor: '#000',
  },
  video: {
    width: '100%',
    height: width * 0.5625,
  },
  controls: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressBarContainer: {
    height: 3,
    backgroundColor: 'rgba(255,255,255,0.3)',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#e74c3c',
  },
  description: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    elevation: 3,
  },
  descriptionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#34495e',
  },
});
