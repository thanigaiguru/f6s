<template>
    <div>
        <div>Chat Section</div>
        <conversation-area
            :messages="conversation"
            :currentUser="me"
        ></conversation-area>
        <compose-section v-model="message" @submit="sendReply" />
    </div>
</template>

<script>

import ComposeSection from "../../components/ComposeSection.vue";
import ConversationArea from "../../components/ConversationArea.vue";
import { mapState  } from 'vuex';

export default {
    name : 'Chat',
    components: {
        ConversationArea,
        ComposeSection
    },
    data(){
        return {
            message: ""
        }
    },
    beforeCreate() {
        this.$store.dispatch('chatstore/fetchConversation');
    },
    computed: {
        ...mapState('chatstore',['me','conversation'])
    },
    methods: {

        sendReply(message) {
            // Logic for adding msg to bottom of the compose section
            this.$store.dispatch('chatstore/addMessage', message);

            // Compose section shoulde be cleared
            this.message = "";
        }
    }
}
</script>