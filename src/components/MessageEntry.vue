<template>
    <div class="message-entry" :class="{ 'current-user': isCurrentUser }">
        <!-- alt for thumbnail failed case -->
        <img class="thumbnail" :src="message.from.thumbnail" :alt="message.from.firstName" />
        <div class="message-bubble" v-html="message.message"></div>
    </div>
</template>
  
<script>
export default {
    props: {
        message: {
            type: Object,
            default: () => {}
        },
        currentUser: {
            type: Object,
            default: () => {}
        }
    },

    computed: {
        isCurrentUser() {
            return this.message.from.id === this.currentUser.id;
        }
    }
  };
</script>
  
<style scoped>
    .message-entry {
        display: flex;
        align-items: flex-end;
        margin-bottom: 12px;
    }
    .thumbnail {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        margin-right: 12px;
    }
    .current-user .thumbnail{
        margin-left: 12px;
        margin-right: 0px;
    }
    .message-bubble {
        padding: 8px;
        border-radius: 8px;
        max-width: 60%;
        /* word-wrap: break-word; */
        background-color: #e8e8e8;
    }
    .current-user {
        flex-direction: row-reverse;
        text-align: right;
    }
    .current-user .message-bubble {
        background-color: #007bff;
        color: white;
    }
  </style>
  