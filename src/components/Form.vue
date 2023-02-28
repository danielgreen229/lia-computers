<script setup>
import { ref  } from 'vue'

const props = defineProps(['SelectedPlan'])

let message = ref('')

let SendTo = (i) => {
  console.log(i)
  if(i == 0) {
    window.open('https://t.me/Fainar30', '_blank').focus();
  }
  else if(i == 1) {
   
    let user_message = message.value != '' ? '" и ' + message.value : '"'

    window.open('https://api.whatsapp.com/send?phone=89673389639&text=Привет!%20Интересен план "' + props.SelectedPlan + user_message, '_blank').focus();
    
  }
}



</script>

<template>

<form id="form" class="form-main__container bg-light p-4">
  

  <div class="form-group pb-4">
    <label class="pb-3" for="exampleInputEmail1">Ваши пожелания, для <span class="text-primary">{{props.SelectedPlan}}</span>:</label>
    <input v-model="message" type="text" class="form-control"  placeholder="Введите текст...">
    <small id="emailHelp" class="form-text text-muted">Наши сотрудники сразу же вам ответят</small>
  </div>
  
  <div class="contact-buttons__container gap-3">
    
    <button @click="SendTo(0)" type="submit" class="btn btn-primary"> 
      <a class="text-light text-decoration-none">
        <img class="wa-img__button" src="@/assets/telegram.svg"/>
          Telegram
      </a>
    </button>

    <button @click="SendTo(1)" type="submit" class="btn btn-primary"> 
      <a class="text-light text-decoration-none">
        <img class="wa-img__button" src="@/assets/wa.svg"/>
          WhatsApp
      </a>
    </button>
  </div>
  
</form>
 
</template>


<style scoped>
.contact-buttons__container {
  width: 80%;
  display: flex;
  align-items: flex-start;
  max-width: 600px;
  justify-content: flex-end;
}
.wa-img__button {
  filter: invert(1);
  margin-top: -3px;
}
.form-group {
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 600px;
}
.form-main__container {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 200px;
  margin-bottom: 150px;
}
</style>