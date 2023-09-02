<template>
    <div>
        <div>Chat Section</div>
        <compose-section v-model="message" @submit="sendReply" />
    </div>
</template>

<script>

import ComposeSection from "../../components/ComposeSection.vue";

export default {
    name : 'Chat',
    components: {
        ComposeSection
    },
    data(){
        return {
            message: "Default msg for testing purpose",
            messageList: "",
           
        }
    },
    computed: {

    },
    methods: {
        sendReply(message) {
            // Logic for adding msg to bottom of the compose section


            // Scroll the conversation area to the bottom, if not already there
            

            // Compose section shoulde be cleared
            this.message = "";
        }
    }
}
</script>