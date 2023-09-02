<template>
    <div class="compose-section">
      <textarea
        v-model="messageText"
        @input="adjustTextareaHeight"
        @keyup.enter="submitMessage"
        ref="messageInput"
        rows="1"
        placeholder="Enter your message."
      ></textarea>
      <button @click="submitMessage">Send</button>
    </div>
</template>
  
<script>
export default {
    name : 'ComposeSection',
    props: {
        value: {
            tyep: String,
            default: ''
        }
    },
    data() {
        return {
            messageText: this.value || ''
        }
    },
    methods: {
        
        // To increase the text Area height when we typing
        adjustTextareaHeight() {
            const textarea = this.$refs.messageInput;
            textarea.style.height = 'auto';
            textarea.style.height = textarea.scrollHeight + 'px';
        },

        // Handler to emit submit event
        submitMessage() {
            if (this.messageText.trim() === '') {
                return;
            }
            this.$emit('submit', this.messageText);
            this.messageText = '';
            this.adjustTextareaHeight();
        }
    }
  };
  </script>
  
  <style scoped>
    .compose-section {
        display: flex;
        align-items: center;
        margin-top: 12px;
    }
    
    textarea {
        flex-grow: 1;
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
        resize: vertical;
        overflow: hidden;
    }
    
    button {
        width: 60px;
        margin-left: 12px;
    }
  </style>
  