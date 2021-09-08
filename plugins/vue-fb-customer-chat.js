import Vue from 'vue'
import VueFbCustomerChat from 'vue-fb-customer-chat'
 
Vue.use(VueFbCustomerChat, {
  page_id: "223595172974610",
  theme_color: '#6699cc',
  locale: 'zh_TW',
  logged_out_greeting:"嗨~有問題可以私訊我喔！",
  logged_in_greeting:"您好，很高興為您服務"
})