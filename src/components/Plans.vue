<script setup>
import { reactive, computed, onMounted,ref  } from 'vue'
import Form from './Form.vue'

const plans = reactive([
  { 
    name: 'Про план',
    about: 'Почти квантовый.',
    active: false,
    text: 'Лучший вариант из всех',
    img: '',
    price: 32,
    options: [
      'Intel 8-и ядерный, уровень i9',
      'GeForce RTX 3080 Ti',
      '16 Gb оперативки',
      'HDD 1 Tb'
    ]
  },
  { 
    name: 'Пекарня',
    about: 'Горячий пиражок.',
    active: false,
    text: 'Лучший вариант из всех',
    img: '',
    price: 32,
    options: [
      'Intel 8-и ядерный, уровень i9',
      'GTX 1060 / RX 580',
      '16 Gb оперативки',
      'HDD 1 Tb'
    ]
  },
  { 
    name: 'Стандарт план',
    about: 'Самый используемый.',
    active: false,
    text: 'Лучший вариант из всех',
    img: '',
    price: 32,
    options: [
      'Intel 8-и ядерный, уровень i9',
      'GeForce GTX 1080 Max-Q',
      '8 Gb оперативки',
      'HDD 1 Tb'
    ]
  },
  { 
    name: 'Синий план',
    about: 'Просто синий.',
    active: false,
    text: 'Лучший вариант из всех',
    img: '',
    price: 32,
    options: [
      'Intel 8-и ядерный, уровень i9',
      'GeForce GTX 1650 SUPER',
      '16 Gb оперативки',
      'HDD 1 Tb'
    ]
  }
])
let setActive = (i) => {
  plans[i].active = true
}
let setDeActive = (i) => {
  plans[i].active = false
}
const AllPlans = computed(() => {
  return plans
})


let SelectedPlan = ref(plans[0].name)

let setPlan = (i) => {
  SelectedPlan.value = plans[i].name
  window.location = "#form"
}


</script>
<template> 
  <div id="plans">
    <div id="plan-0" class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3 position-relative plans-main__container" >
      <div class="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
        <div class="my-3 py-3" v-scroll>
          <h2 class="display-5">Про план</h2>
          <p class="lead">Почти квантовый.</p>
        </div>
        <div class="plan__container" @mouseover="setActive(0)" @mouseleave="setDeActive(0)">
          <div class="card__container bg-light shadow-sm p-4 plan-content__container gap-4">
             <video autoplay muted loop id="myVideo" class="video__plan">
              <source src="@/assets/video/video.mp4" type="video/mp4">
            </video>
            <div  class="position-absolute m-3 text-on-plan">
              <TransitionGroup name="list" tag="ul">
                <li v-if="AllPlans[0].active" v-for="option in AllPlans[0].options" :key="option">
                  <div >{{ option }}</div>
                </li>
              </TransitionGroup>
            </div>
            <div class=" d-flex justify-content-between align-items-center">
              <p class="text-primary m-0">32р/день</p>
              <button @click="setPlan(0)" class="btn btn-primary">Выбрать</button>
            </div>
          </div>
        </div>
      </div>
      <div id="plan-1" class="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
        <div class="my-3 p-3" v-scroll>
          <h2 class="display-5">Пекарня</h2>
          <p class="lead">Горячий пиражок.</p>
        </div>
        <div class="plan__container" @mouseover="setActive(1)" @mouseleave="setDeActive(1)">
          <div class="card__container bg-dark shadow-sm p-4 plan-content__container gap-4">
             <video autoplay muted loop id="myVideo" class="video__plan">
              <source src="@/assets/video/afr.webm" type="video/mp4">
            </video>
            <div  class="position-absolute m-3 text-on-plan text-white">
              <TransitionGroup name="list" tag="ul">
                <li v-if="AllPlans[1].active" v-for="option in AllPlans[1].options" :key="option">
                  <div >{{ option }}</div>
                </li>
              </TransitionGroup>
            </div>
            <div class=" d-flex justify-content-between align-items-center">
              <p class="text-light m-0">21р/день</p>
              <button @click="setPlan(1)" type="button" class="btn btn-primary">Выбрать</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="plan-2" class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3 plans-main__container" >
      <div class="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
        <div class="my-3 p-3" v-scroll>
          <h2 class="display-5">Стандарт план</h2>
          <p class="lead">Самый используемый.</p>
        </div>
        <div class="plan__container" @mouseover="setActive(2)" @mouseleave="setDeActive(2)">
          <div class="card__container bg-dark shadow-sm p-4 plan-content__container gap-4">
             <video autoplay muted loop id="myVideo" class="video__plan">
              <source src="@/assets/video/girl.webm" type="video/mp4">
            </video>
            <div  class="position-absolute m-3 text-on-plan text-white">
              <TransitionGroup name="list" tag="ul">
                <li v-if="AllPlans[2].active" v-for="option in AllPlans[2].options" :key="option">
                  <div >{{ option }}</div>
                </li>
              </TransitionGroup>
            </div>
            <div class=" d-flex justify-content-between align-items-center">
              <p class="text-light m-0">14р/день</p>
              <button @click="setPlan(2)" type="button" class="btn btn-primary">Выбрать</button>
            </div>
          </div>
        </div>
      </div>
      <div id="plan-3" class="bg-primary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
        <div class="my-3 py-3"  v-scroll>
          <h2 class="display-5">Синий план</h2>
          <p class="lead">Просто синий.</p>
        </div>
        <div class="plan__container" @mouseover="setActive(3)" @mouseleave="setDeActive(3)">
          <div class="card__container bg-light shadow-sm p-4 plan-content__container gap-4">
             <video autoplay muted loop id="myVideo" class="video__plan">
              <source src="@/assets/video/pro.mp4" type="video/mp4">
            </video>
            <div  class="position-absolute m-3 text-on-plan">
              <TransitionGroup name="list" tag="ul">
                <li v-if="AllPlans[3].active" v-for="option in AllPlans[3].options" :key="option">
                  <div >{{ option }}</div>
                </li>
              </TransitionGroup>
            </div>
            <div class=" d-flex justify-content-between align-items-center">
              <p class="text-primary m-0">10р/день</p>
              <button @click="setPlan(3)" type="button" class="btn btn-primary">Выбрать</button>
            </div>
          </div>
        </div>
      </div>

     
    </div>
    <Form  v-bind:SelectedPlan="SelectedPlan"/>
  </div>
</template>