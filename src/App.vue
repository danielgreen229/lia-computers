<script setup>
import Header from './components/Captions/Header.vue'
import Title from './components/Title.vue'
import Plans from './components/Plans.vue'

import Footer from './components/Captions/Footer.vue'

</script>

<template>
  <Header/>
  <main>
    <Title/>
    <Plans/>
  </main>
  <Footer/>
</template>

<style>

.my-float{
  margin-top:16px;
}
* {
  transition: all 1s;
}
.before-enter {
  opacity: 0;
  transform: translateY(100px);
  transition: all 1s ease;
}
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.title-main__container {
  max-height: 768px;
}
.center-title__container {
  position: absolute;
  z-index: 1;
  width: 100%;
  height: fit-content;
  left: 0;
  bottom: 0;
  top: 50%;
  transform: translateY(-50%);
}
.video__title {
  filter: invert(1);
  width: 100%;
}
.plan__container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.plan-info__container {
  position: absolute;
  color: var(--bs-body-color);
}
.card__container {
  transition: ease 1s;  
}
.ul-info__container, .text-on-plan {
  text-align: left;
}
.video__plan {
  width: 100%;
  object-fit: cover;
  object-position: top right;
  height: 100%;
  border-radius: 0.8rem;
  max-height: 225px;
}
.plan-content__container {
  width: 80%;
  height: 100%;
  border-radius: 21px 21px 0 0;
  display: flex;
  flex-direction: column;
}
.plans-main__container {
  margin: auto;
  max-width: 2100px;
}
.py-2 {
  color: white;
}
.sticky-top {
  background-color: #212529;
}
@media (min-width: 768px) {
  .flex-md-equal > * {
    flex: 1;
  }
}
</style>
