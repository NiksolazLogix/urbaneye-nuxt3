<script lang="ts" setup>
interface City {
  name: string;
  country: string;
  description: string;
  rating: number | string;
  username: string;
  image: string;
  updated: string;
}

class Cittadina<City>{
  info:any;
  constructor(info:City) {
    let self:any = this
    self.info = info
  }
}

const getDate = (): string => {
  const d = new Date()
  let dd = d.getDate() < 10 ? '0' + String(d.getDate()) : String(d.getDate())
  let mm = (d.getMonth() + 1) < 10 ? '0' + String(d.getMonth()) : String(d.getMonth())
  let yy = String(d.getFullYear()) 
  return dd + '-' + mm + '-' + yy
}
const obj_1 = {
  name: 'Bari',
  country: 'Italia',
  description: 'Lorem ipsum dolor sit amet euismod rhoncus elementum hendrerit massa.',
  rating: 86,
  username: 'Coco',
  image: 'https://fakeimg.pl/25x25/?text=CC',
  updated: getDate()
}
const obj_2 = {
  name: 'Londra',
  country: 'Inghilterra',
  description: 'Lorem ipsum dolor sit amet euismod rhoncus elementum hendrerit massa.',
  rating: 39,
  username: 'Coco',
  image: 'https://fakeimg.pl/25x25/?text=CC',
  updated: getDate()
}
const obj_3= {
  name: 'Oslo',
  country: 'Norvegia',
  description: 'Lorem ipsum dolor sit amet euismod rhoncus elementum hendrerit massa.',
  rating: 64,
  username: 'Coco',
  image: 'https://fakeimg.pl/25x25/?text=CC',
  updated: getDate()
}
const createPaese = (obj:object) => {
  const paese = new Cittadina(obj)
  return paese.info
}
const p1 = createPaese(obj_1)

const p2 = createPaese(obj_2)

const p3 = createPaese(obj_3)

const cards = [p1,p2,p3]

enum classText {
  RED = 'redText',
  YEL = 'yellowText',
  GRE = 'greenText',
}

const ratingClass = (r: number | string):string => {
  if(r <= 50) {
    return  classText.RED
  }
  if(r > 50 && r < 80) {
    return classText.YEL
  }
  if(r >= 80) {
    return classText.GRE
  }
}
</script>

<template>
  <div>
    <div v-for="(card, i) in cards" :key="i">
      <div class="card">
        <div class="card-top">
          <div>
            <span class="t-3">{{card.name}}</span>
          </div>
          <div><span :class="ratingClass(card.rating)" class="t-3">{{card.rating}}</span> / 100</div>
        </div>
        <div class="card-middle">
          <p><span class="t-2">{{card.country}}</span></p>
          <p><span class="t-2">{{card.description}}</span></p>
        </div>
        <div  class="card-bottom">
          <img :src="card.image" class="card-image">
          <span class="t-2 mx-10">{{card.username}}</span> | <span class="t-2 mx-10">{{card.updated}}</span></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 300px;
  background-color: rgb(98, 95, 93);
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px;
  margin: 5px;
}
.card-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.card-bottom {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.card-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.card-image {
  border-radius: 50%;
}
.t-3 {
  font-size:large;
  font-weight:800;
}
.t-2 {
  font-size:smaller;
  font-weight:100;
}
.mx-10 {
  margin: 0px 10px 0px 10px;
}
span {
  font-size: 16px;
  font-weight: 700;
}
.redText {
  color: rgb(196, 96, 96);
}
.yellowText {
  color: rgb(224, 203, 46);
}
.greenText {
  color: rgb(154, 247, 154);
}
</style>
