import { conversation } from "../../util/constant.js";
let conversationArr = JSON.parse(conversation);

let chatAction = (() => {
    return {
        fetchConversation({ commit }) {
            commit('setConversation', conversationArr);
        },
    
        addMessage({ commit, state }, message) {
            const newMessage = {
                id: state.conversation.length + 1,
                from: state.me,
                message,
                date: new Date().toISOString()
            };
            commit('addMessage', newMessage);
        }
    }
})();

export default chatAction;