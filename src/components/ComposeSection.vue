<template>
    <div class="compose-section">
      <textarea
        v-model="messageText"
        @input="adjustTextareaHeight"
        @keyup.enter="(e) => checkShitEnterAndSubmitMsg(e)"
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
            messageText: this.value || '',
            maxRows: 3
        }
    },
    methods: {
        
        // To increase the text Area height when we typing
        adjustTextareaHeight() {
            let textarea = this.$refs.messageInput;
            let lines = this.messageText.split('\n').length;

            if (lines > this.maxRows) {
                textarea.rows = this.maxRows;
            } else {
                textarea.rows = lines;
            }
        },

        checkShitEnterAndSubmitMsg(e) {
            if(e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                this.submitMessage();
                return;
            }
        },

        // Handler to emit submit event
        submitMessage() {
            let message = this.messageText.trim();
            if ( message === '') {
                return;
            }
            this.$emit('submit', message);
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
    }
    
    button {
        width: 60px;
        margin-left: 12px;
    }
  </style>
  