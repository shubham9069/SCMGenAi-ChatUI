export default {
  selectedLabelFunc: (state, label) => {
    if (label == state.selectedLabel) {
      state.isVisible = !state.isVisible;
      state.expandScreen = false;
    } else {
      state.isVisible = true;
    }
    state.selectedLabel = label;
  },
  closeSideBar: (state) => {
    state.isVisible = false;
    state.expandScreen = false;
  },
  sentMessage: (state, inputText) => {
    state.isLoading = true;
    state.landingToggle = false;
    const obj = {
      isAI: false,
      text: inputText,
      id: state.chatMessages?.length,
      chart: false,
      chartInfo: {},
      isChatActionArea: false,
      isLoading: false,
      date: new Date(),
    };
    state.chatMessages.push(obj, {
      ...obj,
      isAI: true,
      isLoading: true,
      id: state.chatMessages?.length + 1,
    });

    // scroll to bottom function
    //  when new msg are added into the chatMEssage Array so it will take few millisecound to update Dom so according to updated dom they will now look updated height of chat-container then scroll bottom

    setTimeout(function () {
      const chatContainer = document.getElementById("chatui-container");

      if (chatContainer) {
        chatContainer.scrollTop = chatContainer?.scrollHeight;
      }
    }, 50);
  },
  sentAnalytics: (state, inputText) => {
    state.isLoading = true;
    state.landingToggle = false;
    const obj = {
      isAI: false,
      text: inputText,
      id: state.chatMessages?.length,
      chart: false,
      chartInfo: {},
      isChatActionArea: false,
      isLoading: false,
      date: new Date(),
    };
    state.chatMessages.push(obj, {
      ...obj,
      isAI: true,
      isLoading: true,
      chart: true,
      chartInfo: {
        chartArr: [30, 40, 45, 50, 49, 60, 70, 91],
        datauri: "",
      },
      id: state.chatMessages?.length + 1,
    });
    // scroll to bottom function
    //  when new msg are added into the chatMEssage Array so it will take few millisecound to update Dom so according to updated dom they will now look updated height of chat-container then scroll bottom

    setTimeout(function () {
      const chatContainer = document.getElementById("chatui-container");

      if (chatContainer) {
        chatContainer.scrollTop = chatContainer?.scrollHeight;
      }
    }, 50);
  },

  chatActionAreaToggle: (state, id) => {
    state.chatMessages = state.chatMessages?.map((msg) => {
      return id == msg?.id
        ? { ...msg, isChatActionArea: !msg.isChatActionArea }
        : msg;
    });
  },
  setLoading: (state, value) => {
    state.isLoading = value;
  },
  landingPageToggle: (state) => {
    state.landingToggle = true;
  },
  expandScreenToggle: (state) => {
    state.expandScreen = !state.expandScreen;
  },
  editorMessage: (state, params) => {
    state.editorMessage = params;
  },
};
