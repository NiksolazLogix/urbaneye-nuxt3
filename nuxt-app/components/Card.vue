<script lang="ts" setup>
interface City {
  name: string;
  country: string;
  region: string;
}

class Cittadina<City>{
  info:any;
  constructor(info:City) {
    let self:any = this
    self.info = info
  }
}
const obj_1 = {
  name: 'Bari',
  country: 'Italia',
  region: 'Puglia'
}
const obj_2 = {
  name: 'Londra',
  country: 'Inghilterra',
  region: 'Bretagna'
}
const obj_3= {
  name: 'Oslo',
  country: 'Norvegia',
  region: 'Loften'
}
const createPaese = (obj:object) => {
  const paese = new Cittadina(obj)
  return paese.info
}
const p1 = createPaese(obj_1)

const p2 = createPaese(obj_2)

const p3 = createPaese(obj_3)

const cards = [p1,p2,p3]
</script>

<template>
  <div>
    <div v-for="(card, i) in cards" :key="i">
      <div class="border">
        <div>City: <span>{{card.name}}</span></div>
        <div>Country: <span>{{card.country}}</span></div>
        <div>Region: <span>{{card.region}}</span></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.border {
  width: 150px;
  color: rgb(21, 208, 218);
  background-color: rgb(39, 39, 40);
  border: 1px solid black;
  padding: 10px;
  margin: 5px;
}
span {
  font-size: 16px;
  font-weight: 700;
  color: rgb(123, 213, 218);
}
</style>
