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
  get_gradientIcon: (state) => {
    return {
      background: "linear-gradient(135deg, #0074E8 0%, #A933FB 100%)",
      webkitBackgroundClip: "text",
      webkitTextFillColor: "transparent",
    };
  },
};
