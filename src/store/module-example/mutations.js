export function someMutation(/* state */) {}
export function SelectedLabelFunc(state, label) {
  if (label == state.selectedLabel) {
    state.isVisible = !state.isVisible;
  } else {
    state.isVisible = true;
  }
  state.selectedLabel = label;
}
export function closeSideBar(state, label) {
  state.isVisible = false;
}
export function sentMessage(state, inputText) {
  state.isLoading = false;
  const obj = {
    isAI: false,
    text: inputText,
    id: `${state.chatMessages?.length}`,
    chart: false,
    chartInfo: {},
    isChatActionArea: false,
    areaActionButtonOption: {
      title: "Recomandation",
      height: "100px",
      width: "300px",
      primaryButtonText: "Pin to Broad",
      secondaryButtonText: "Preview",
      primaryButtonIcon: "./assets/icons/placeholder.svg",
      secondaryButtonIcon: "./assets/icons/placeholder.svg",
    },
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
}

export function gotoLandingPage(state) {
  state.chatMessages = [];
}

export function chatActionAreaToggle(state, id) {
  state.chatMessages = state.chatMessages?.map((msg) => {
    return id == msg?.id
      ? { ...msg, isChatActionArea: !msg.isChatActionArea }
      : msg;
  });
}

export function load(state) {
  console.log(state);
}
