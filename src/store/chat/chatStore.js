import actions from './chatAction';
import { currentUser } from "../../util/constant.js";
let me = JSON.parse(currentUser);

let state = {
    conversation: [],
    me
};

let mutations = {
    setConversation(state, conversation) {
        state.conversation = conversation;
    },
    addMessage(state, message) {
        state.conversation.push(message);
    }
};

let getters = {
    conversation: (state) => state.conversation
};

export default {
    namespaced: true,
    state,
    mutations,
    getters,
    actions
}