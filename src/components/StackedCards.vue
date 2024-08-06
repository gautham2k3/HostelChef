<template>
  <div class="center">
    <div class="stack-area">
      <div class="left">
        <div class="title">Dorm Cooking Made Easy</div>
        <div class="sub-title">
          Discover simple, delicious recipes and tips to make cooking in your dorm a breeze. From
          quick snacks to full meals, we've got you covered.
          <br />
          <button>Explore Recipes</button>
        </div>
      </div>
      <div class="right">
        <div class="cards">
          <div class="card" v-for="(card, index) in cards" :key="index">
            <div class="sub">{{ card.sub }}</div>
            <div class="content">{{ card.content }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const cards = ref([
  { sub: '1', content: 'Gather Ingredients.' },
  { sub: '2', content: 'Prepare Cooking Equipment.' },
  { sub: '3', content: 'Follow Recipe instructions.' },
  { sub: '4', content: 'Enjoy Your Meal!' }
])

onMounted(() => {
  const cardElements = document.querySelectorAll('.card')
  const stackArea = document.querySelector('.stack-area')

  function rotateCards() {
    let angle = 0
    cardElements.forEach((card) => {
      if (card.classList.contains('active')) {
        card.style.transform = `translate(-50%, -120vh) rotate(-48deg)`
      } else {
        card.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`
        angle = angle - 10
      }
    })
  }

  rotateCards()

  window.addEventListener('scroll', () => {
    const proportion = stackArea.getBoundingClientRect().top / window.innerHeight
    if (proportion <= 0) {
      const n = cardElements.length
      let index = Math.ceil((proportion * n) / 2)
      index = Math.abs(index) - 1
      for (let i = 0; i < n; i++) {
        if (i <= index) {
          cardElements[i].classList.add('active')
        } else {
          cardElements[i].classList.remove('active')
        }
      }
      rotateCards()
    }
  })

  function adjust() {
    const windowWidth = window.innerWidth
    const left = document.querySelector('.left')
    if (left) {
      left.remove()
      if (windowWidth < 800) {
        stackArea.insertAdjacentElement('beforebegin', left)
      } else {
        stackArea.insertAdjacentElement('afterbegin', left)
      }
    }
  }

  adjust()
  window.addEventListener('resize', adjust)
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700;800&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');

body {
  width: 100%;
  height: fit-content;
  margin: 0;
  padding: 0;
}

.sub {
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
  font-weight: 700;
}

.content {
  font-family: 'Poppins', sans-serif;
  font-size: 44px;
  font-weight: 700;
  line-height: 54px;
}

.center {
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.stack-area {
  width: 100%;
  height: 300vh;
  position: relative;
  display: flex;
  justify-content: center;
}

.right,
.left {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  box-sizing: border-box;
  flex-basis: 50%;
}

.cards {
  width: 100%;
  height: 100%;
  position: relative;
}

.card {
  width: 350px;
  height: 350px;
  box-sizing: border-box;
  padding: 35px;
  border-radius: 6mm;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transition: 0.5s ease-in-out;
  outline: auto;
}

.card:nth-child(1) {
  background: rgb(64, 122, 255);
  z-index: 4;
}

.card:nth-child(2) {
  background: rgb(221, 62, 88);
  z-index: 3;
}

.card:nth-child(3) {
  background: rgb(96, 228, 102);
  z-index: 2;
}

.card:nth-child(4) {
  background: rgb(140, 141, 127);
  z-index: 1;
}

.card.active {
  transform-origin: bottom left;
}

.left {
  align-items: center;
  flex-direction: column;
}

.title {
  width: 420px;
  font-size: 84px;
  color: #fff;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  line-height: 88px;
  text-decoration: wavy;
}

.sub-title {
  width: 420px;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  margin-top: 30px;
  color: azure;
}

.sub-title button {
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  padding: 15px 30px;
  background: black;
  color: white;
  border-radius: 8mm;
  border: none;
  outline: none;
  cursor: pointer;
  margin-top: 20px;
}

.top,
.bottom {
  width: 100%;
  height: 100vh;
  font-family: 'Poppins', sans-serif;
  font-size: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
}


@media screen and (max-width: 800px) {
  .left {
    position: relative;
    width: 100vw;
  }
}
</style>
