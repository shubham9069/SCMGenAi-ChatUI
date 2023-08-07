export default {
  selectedLabelFunc: ({ dispatch, commit }, params) => {
    commit("selectedLabelFunc", params);
  },
  closeSideBar: ({ dispatch, commit }) => {
    commit("closeSideBar");
  },
  sentMessage: ({ dispatch, commit }, params) => {
    commit("sentMessage", params);
    setTimeout(() => {
      commit("setLoading", false);
    }, 1000);
  },
  sentAnalytics: ({ dispatch, commit }, params) => {
    commit("sentAnalytics", params);
    setTimeout(() => {
      commit("setLoading", false);
    }, 1000);
  },
  gotoLandingPage: ({ dispatch, commit }) => {
    commit("gotoLandingPage");
  },
  chatActionAreaToggle: ({ dispatch, commit }, params) => {
    commit("chatActionAreaToggle", params);
  },
};
