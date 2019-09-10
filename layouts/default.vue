<template>
<div>
  <nuxt />
  <Chat
    iconColorProp="#e6e6e6"
    messageOutColorProp="#2b5284"
    messageInColorProp="#f1f0f0"
    messageBackgroundColorProp="#ffffff"
    :messageListProp="messageList"
    :initOpenProp="initOpen"
    @onToggleOpen="handleToggleOpen"
    @onMessageWasSent="handleMessageReceived"
  />
</div>
</template>

<script>
import Chat from '../components/chatbot/ChatBot.vue'
import io from '~/plugins/socket.io.js'
import handleFetch from '../utils/fetch'

const socketUrl = process.env.SOCKET_URL
let socket

export default {
  name: "app",
  components: {
    Chat,
  },
  data: () => {
    return {
      messageList: [],
      initOpen: false,
      toggledOpen: false
    }
  },
  methods: {
    // Send message from you
    handleMessageReceived(message) {
      this.messageList.push(message)

      // Post message to myself
      handleFetch(`${socketUrl}/chat`, 'POST', {
          query: {
              connection: socket.id,
              fromNumber: '+18312469107',
              toNumber: '+14084022790',
              twilioAccountSid: process.env.TWILIO_ACCOUNT_SID,
              twilioAuthToken: process.env.TWILIO_AUTH_TOKEN,
          },
          message: message.body
      })
       // .then()
    },
    // Receive message from them
    handleMessageResponse(message) {
       if (message.length > 0) {
            this.messageList.push({ body: message, author: 'them' })
        }
    },
    handleToggleOpen(open) {
      this.toggledOpen = open

      console.log(process.env.SOCKET_URL)

      if (!socket || socket.disconnected) {
          this.handleSocketConnect()
      } else if (socket.connected) {
          this.handleSocketDisconnect()
      }
    },
    handleMessageResponseSound() {
      const audio = new Audio(require('@/assets/media/notification.mp3'))
      audio.addEventListener('loadeddata', () => {
        audio.play()
      })
    },
    handleSocketConnect() {
        socket = io(socketUrl, {
            autoConnect: false,
        })

        socket.on('connect', () => {
            console.log('Client has connected to the server!')
        });

        socket.on('sms message', (sms) => this.handleMessageResponse(sms.toString()))
        socket.on('added to que', this.handleAddedToQue)
        socket.on('now messaging', this.handleRemoveFromQue)

        socket.open()
        socket.emit('add to stack')
    },
    handleSocketDisconnect() {
        console.log('Socket disconnected');
        socket.disconnect();
    },
    handleAddedToQue() {
        //this.handleMessageResponse(`Sorry ${this.state.userName}, Ted is chatting with another person, but wait, you're in que.`)
        this.handleMessageResponse(`Sorry David is chatting with another person, but wait, you're in que.`)
    },
    handleRemoveFromQue() {
        // Send message to Ted with next person on the chat
        handleFetch(`${socketUrl}/chat`, 'POST', {
            query: {
                connection: socket.id,
                fromNumber: '+18312469107',
                toNumber: '+14084022790',
                twilioAccountSid: process.env.TWILIO_ACCOUNT_SID,
                twilioAuthToken: process.env.TWILIO_AUTH_TOKEN,
            },
            message: `Hi David, you're now in a chat with ...`
        })
        .then(() => {
            this.handleMessageResponse(`Thanks for waiting, how can I help you!?`)
        })
    }
  },
  mounted() {
    this.messageList.push({ body: 'Welcome to the chat, I\'m David!', author: 'them' })
  },
  watch: {
    messageList: function(newList) {
      const nextMessage = newList[newList.length - 1]
      const isIncoming = (nextMessage || {}).author !== 'you'
      if (isIncoming && this.toggledOpen) {
        this.handleMessageResponseSound()
      }
    }
  }
}
</script>
