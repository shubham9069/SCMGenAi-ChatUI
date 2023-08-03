import { markRaw } from "vue";
import GenAIChatPage from "../../components/genaichat/GenAIChatPage.vue";
import GenAIChatRecent from "../../components/genaichat/recent/GenAIChatRecent.vue";

export default function () {
  return {
    toolkitItems: [
      {
        section: "Section 1",
        items: [
          {
            label: "Ai",
            routerLink: "",
            icon: "./assets/icons/ai-gradient.svg",
            selectedIcon: "./assets/icons/AI.svg",
            padding: 8,
            Component: markRaw(GenAIChatPage),
            Props: {
              chatBoxStyle: {
                logo: "./assets/icons/ai-gradient.svg",
              },
              emptyChatContent: {
                showEmptyChatHeader: true,
                title: "AI-Driven Insights Companion",
                inputPlaceholder: "Ask your data question",
                searchIcon: "../assets/icons/search.svg",
              },
              chatBoxHeader: {
                title: "AI Exploration",
                showChatBoxHeader: true,
              },
              savedTemplates: {
                icon: "../assets/icons/search-blue.svg",
                title: "Or Start With One of a Common Prompts",
                useTemplate: true,
                showSavedTemplate: true,
                templates: [
                  {
                    title: "Which category has most growth potential?",
                    routerLink: "",
                  },
                  {
                    title: "Which brands should be delisted? ",
                    routerLink: "",
                  },
                  {
                    title: "How are Price Driven Customers behaving?",
                    routerLink: "",
                  },
                ],
              },
            },
          },
          {
            label: "Recent",
            routerLink: "",
            icon: "./assets/icons/history.svg",
            selectedIcon: "./assets/icons/white-history.svg",
            padding: 10,
            Component: markRaw(GenAIChatRecent),
            Props: {
              chatBoxHeader: {
                title: "Recent",
                showChatBoxHeader: true,
              },
              Content: "shubham Recent Search ",
            },
          },
        ],
      },
      {
        section: "Section 2",
        items: [
          {
            label: "Add",
            routerLink: "",
            icon: "./assets/icons/plus.svg",
            selectedIcon: "./assets/icons/plus-white.svg",
            padding: 10,
          },
          {
            label: "Notification",
            routerLink: "",
            icon: "./assets/icons/bell.svg",
            selectedIcon: "./assets/icons/notification-white.svg",
            padding: 10,
          },
          {
            label: "Setting",
            routerLink: "",
            icon: "./assets/icons/cog.svg",
            selectedIcon: "`./assets/icons/setting-white.svg",
            padding: 10,
          },
        ],
      },
      {
        section: "Section 3",
        items: [
          {
            label: "Chat",
            routerLink: "",
            icon: "./assets/icons/comments.svg",
            selectedIcon: "./assets/icons/chat-white.svg",
            padding: 10,
          },
        ],
      },
    ],
    selectedLabel: "",
    isVisible: false,
    chatMessages: [],
  };
}
