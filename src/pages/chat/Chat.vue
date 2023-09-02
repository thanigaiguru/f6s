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
import { mapState, mapActions } from 'vuex';

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
    beforeMount() {
        this.fetchConversation();
    },
    computed: {
        ...mapState('chatstore',['me','conversation'])
    },
    methods: {
        ...mapActions({
            fetchConversation: 'chatstore/fetchConversation'
        }),

        sendReply(message) {
            message = message.replace(/\n/g, '<br>');
            // Logic for adding msg to bottom of the compose section
            this.$store.dispatch('chatstore/addMessage', message)
            // Compose section shoulde be cleared
                .finally(() => this.message = "");
        }
    }
}
</script>