<template>
    <div>
        <div>Chat Section</div>
        <conversation-area
            :messages="messages"
            :currentUser="currentUserObj"
        ></conversation-area>
        <compose-section v-model="message" @submit="sendReply" />
    </div>
</template>

<script>

import ComposeSection from "../../components/ComposeSection.vue";
import ConversationArea from "../../components/ConversationArea.vue";
import { currentUser, conversation } from "../../util/constant.js";

let currentUserObj = JSON.parse(currentUser);
let conversationArr = JSON.parse(conversation);

export default {
    name : 'Chat',
    components: {
        ConversationArea,
        ComposeSection
    },
    data(){
        return {
            message: "Default msg for testing purpose",
            messages: conversationArr,
            currentUserObj: currentUserObj
        }
    },
    computed: {

    },
    methods: {
        sendReply(message) {
            // Logic for adding msg to bottom of the compose section
            

            // Compose section shoulde be cleared
            this.message = "";
        }
    }
}
</script>