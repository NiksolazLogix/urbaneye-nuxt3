<script lang="ts">
import { reactive } from "vue";

export default {
  async setup() {

    const {log} = console

    const formatDate = (fd): string => {
      const d = new Date(fd)
      let dd = d.getDate() < 10 ? '0' + String(d.getDate()) : String(d.getDate())
      let mm = (d.getMonth() + 1) < 10 ? '0' + String(d.getMonth() + 1) : String(d.getMonth() + 1)
      let yy = String(d.getFullYear()) 
      return dd + '-' + mm + '-' + yy + ' ' + d.getHours() + ':' + d.getMinutes()
    }

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
    const url:string = "https://agile-meadow-52439.herokuapp.com/api/cards/?api-key=foo"

    let cards:object[] = reactive([])

    await fetch(url)
    .then((res:any) => res.json())
    .then((data:object[]) => {
      cards = data
    })
    // log(cards)
    return {
      cards,
      ratingClass,
      formatDate
    }
  }
};
</script>

<template>
  <div>
    <div v-for="(card, i) in cards" :key="i">
      <div class="card">
        <div class="card-top">
          <div>
            <span class="t-3">{{card.city}}</span>
          </div>
          <div><span :class="ratingClass(card.rating)" class="t-3">{{card.rating}}</span> / 100</div>
        </div>
        <div class="card-middle">
          <p><span class="t-2">{{card.country}}</span></p>
          <p><span class="t-2">{{card.description}}</span></p>
        </div>
        <div  class="card-bottom">
          <img :src="card.user.logo" class="card-image" width="25" height="25">
          <span class="t-2 mx-10">{{card.user.username}}</span> | <span class="t-2 mx-10">{{formatDate(card.user.updated)}}</span></div>
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

function ref(arg0: undefined[]): any {
  throw new Error('Function not implemented.');
}
