<template>
  <div
    class="card-wrap"
    @mousemove="handleMouseMove"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    ref="card"
  >
    <div class="card" :style="cardStyle">
      <div class="card-bg" :style="[cardBgTransform, cardBgImage]"></div>
      <div class="card-info">
        <slot name="header"></slot>
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, defineProps, onMounted } from 'vue'

const props = defineProps({
  dataImage: String
})

const card = ref(null)
const width = ref(0)
const height = ref(0)
const mouseX = ref(0)
const mouseY = ref(0)
const mouseLeaveDelay = ref(null)

const mousePX = computed(() => mouseX.value / width.value)
const mousePY = computed(() => mouseY.value / height.value)

const cardStyle = computed(() => {
  const rX = mousePX.value * 30
  const rY = mousePY.value * -30
  return {
    transform: `rotateY(${rX}deg) rotateX(${rY}deg)`
  }
})

const cardBgTransform = computed(() => {
  const tX = mousePX.value * -40
  const tY = mousePY.value * -40
  return {
    transform: `translateX(${tX}px) translateY(${tY}px)`
  }
})

const cardBgImage = computed(() => {
  return {
    backgroundImage: `url(${props.dataImage})`
  }
})

const handleMouseMove = (e) => {
  mouseX.value = e.pageX - card.value.offsetLeft - width.value / 2
  mouseY.value = e.pageY - card.value.offsetTop - height.value / 2
}

const handleMouseEnter = () => {
  clearTimeout(mouseLeaveDelay.value)
}

const handleMouseLeave = () => {
  mouseLeaveDelay.value = setTimeout(() => {
    mouseX.value = 0
    mouseY.value = 0
  }, 1000)
}

onMounted(() => {
  width.value = card.value.offsetWidth
  height.value = card.value.offsetHeight
})
</script>

<style scoped>
.card-wrap {
  margin: 10px;
  transform: perspective(800px);
  transform-style: preserve-3d;
  cursor: pointer;
}
.card {
  position: relative;
  flex: 0 0 240px;
  width: 240px;
  height: 320px;
  background-color: #555; /* Lighter shade of the original color */
  overflow: hidden;
  border-radius: 10px;
  box-shadow:
    rgba(255, 255, 255, 0.1) 0 0 20px 5px,
    /* Added subtle glowing effect */ rgba(0, 0, 0, 0.66) 0 30px 60px 0,
    inset #555 0 0 0 5px,
    inset rgba(255, 255, 255, 0.5) 0 0 0 6px;
  transition: transform 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
}
.card:hover .card-info {
  transform: translateY(0);
}
.card:hover .card-info p {
  opacity: 1;
}
.card:hover .card-info,
.card:hover .card-info p {
  transition: 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}
.card:hover .card-info:after {
  transition: 5s cubic-bezier(0.23, 1, 0.32, 1);
  opacity: 1;
  transform: translateY(0);
}
.card:hover .card-bg {
  transition:
    0.6s cubic-bezier(0.23, 1, 0.32, 1),
    opacity 5s cubic-bezier(0.23, 1, 0.32, 1);
  opacity: 0.8;
}
.card:hover {
  box-shadow:
    rgba(255, 255, 255, 0.5) 0 0 40px 5px,
    /* Enhanced glowing effect */ rgba(255, 255, 255, 1) 0 0 0 1px,
    rgba(0, 0, 0, 0.66) 0 30px 60px 0,
    inset #555 0 0 0 5px,
    inset white 0 0 0 6px;
}
.card-bg {
  opacity: 0.5;
  position: absolute;
  top: -20px;
  left: -20px;
  width: 115%;
  height: 115%;
  padding: 20px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  transition:
    1s cubic-bezier(0.445, 0.05, 0.55, 0.95),
    opacity 5s 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  pointer-events: none;
}
.card-info {
  padding: 10px;
  position: absolute;
  bottom: 0;
  color: #fff;
  transform: translateY(100%);
  transition: transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
}
.card-info p {
  opacity: 0;
  text-shadow: rgba(0, 0, 0, 1) 0 2px 3px;
  transition: opacity 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
}
.card-info * {
  position: relative;
  z-index: 1;
}
.card-info:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.6) 100%);
  background-blend-mode: overlay;
  opacity: 0;
  transform: translateY(100%);
  transition: opacity 5s cubic-bezier(0.445, 0.05, 0.55, 0.95);
}
.card-info h1 {
  font-family: 'Playfair Display';
  font-size: 36px;
  font-weight: 700;
  text-shadow: rgba(0, 0, 0, 0.5) 0 10px 10px;
}
</style>
