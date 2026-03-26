<template>
  <div class="main-wrapper">
    <Beverage :isIced="beverageStore.currentTemp === 'Cold'" :base="beverageStore.currentBase"
      :creamer="beverageStore.currentCreamer" :syrup="beverageStore.currentSyrup" />

    <div class="form-container">
      <ul>
        <li>
          <template v-for="temp in beverageStore.temps" :key="temp">
            <label>
              <input type="radio" name="temperature" :value="temp" v-model="beverageStore.currentTemp" />
              {{ temp }}
            </label>
          </template>
        </li>

        <li>
          <template v-for="base in beverageStore.bases" :key="base.id">
            <label>
              <input type="radio" name="base" :value="base" v-model="beverageStore.currentBase" />
              {{ base.name }}
            </label>
          </template>
        </li>

        <li>
          <template v-for="creamer in beverageStore.creamers" :key="creamer.id">
            <label>
              <input type="radio" name="creamer" :value="creamer" v-model="beverageStore.currentCreamer" />
              {{ creamer.name }}
            </label>
          </template>
        </li>

        <li>
          <template v-for="syrup in beverageStore.syrups" :key="syrup.id">
            <label>
              <input type="radio" name="syrup" :value="syrup" v-model="beverageStore.currentSyrup" />
              {{ syrup.name }}
            </label>
          </template>
        </li>
      </ul>

      <div class="controls">
        <label for="bev-name">Name</label>
        <input id="bev-name" type="text" v-model="beverageStore.beverageName" placeholder="Beverage Name" />
        <button @click="beverageStore.makeBeverage()">🍺 Make Beverage</button>
      </div>
    </div>
  </div>

  <div id="beverage-container">
    <div v-for="(bev, index) in beverageStore.beverages" :key="index" class="saved-item">
      <label>
        <input type="radio" :name="'saved-drink-' + index" :checked="beverageStore.beverageName === bev.name"
          @change="beverageStore.showBeverage(bev)" />
        {{ bev.name }}
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
import Beverage from "./components/Beverage.vue";
import { useBeverageStore } from "./stores/beverageStore";

const beverageStore = useBeverageStore();
</script>

<style lang="scss">
body,
html {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #6e4228;
  background: linear-gradient(to bottom, #6e4228 0%, #956f5a 100%);
  color: white;
  font-family: sans-serif;
}

.form-container {
  margin-left: 20px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 10px;

  label {
    margin-right: 10px;
  }
}

.controls {
  margin-top: 20px;
  display: flex;
  gap: 10px;
}

#beverage-container {
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 15px;

  .saved-item label {
    cursor: pointer;
    padding: 5px;

    input {
      margin-right: 5px;
    }
  }
}
</style>