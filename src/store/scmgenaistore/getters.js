export default {
  get_isVisible: (state) => {
    return state.isVisible;
  },
  get_selectedLabel: (state) => {
    return state.selectedLabel;
  },
  get_chatMessages: (state) => {
    return state.chatMessages;
  },
  get_isLoading: (state) => {
    return state.isLoading;
  },
  get_landingToggle: (state) => {
    return state.landingToggle;
  },
  get_expandScreen: (state) => {
    return state.expandScreen;
  },
};
