<template>
    <div class="conversation-area">
        <!-- Show the entire message List -->
        <message-entry
            v-for="message in messages"
            :key="message.id"
            :message="message"
            :currentUser="currentUser"
        />
        <div ref="scrollTarget"></div>
    </div>
</template>
  
<script>
import MessageEntry from './MessageEntry.vue';
  
export default {
    props: {
        messages: {
            type: Array,
            default: () => []
        },
        currentUser: {
            type: Object,
            default: () => {}
        }
    },
    components: {
        MessageEntry
    },
    watch: {
        messages(newMessages) {
            this.scrollToBottom();
        },
    },
    mounted() {
        this.scrollToBottom();
    },
    methods: {
        scrollToBottom() {
                // Scroll the conversation area to the bottom, if not already there
            this.$nextTick(() => {
                const scrollTarget = this.$refs.scrollTarget;
                scrollTarget.scrollIntoView({ behavior: 'smooth', block: 'end' });
            });
        }
    },
  };
</script>
  
<style scoped>
    .conversation-area {
        overflow-y: auto;
        max-height: 400px;
        padding: 12px;
        border: 1px solid;
    }
</style>
  