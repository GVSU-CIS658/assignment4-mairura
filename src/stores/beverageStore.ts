import { defineStore } from "pinia";
import tempretures from "../data/tempretures.json";
import bases from "../data/bases.json";
import creamers from "../data/creamers.json";
import syrups from "../data/syrups.json";

// --- ADD THESE EXPORTS ---
export interface BaseBeverageType {
  id: string;
  name: string;
  color: string;
}

export interface CreamerType {
  id: string;
  name: string;
  color: string;
}

export interface SyrupType {
  id: string;
  name: string;
  color: string;
}
// -------------------------

export const useBeverageStore = defineStore("BeverageStore", {
  state: () => ({
    temps: tempretures,
    // Cast the JSON data to the types we just defined
    bases: bases as BaseBeverageType[],
    creamers: creamers as CreamerType[],
    syrups: syrups as SyrupType[],

    currentTemp: tempretures[0],
    currentBase: bases[0] as BaseBeverageType,
    currentCreamer: creamers[0] as CreamerType,
    currentSyrup: syrups[0] as SyrupType,
    beverageName: "",

    beverages: [] as any[],
  }),

  actions: {
    makeBeverage() {
      if (!this.beverageName.trim()) return;

      const newBeverage = {
        name: this.beverageName,
        temp: this.currentTemp,
        base: this.currentBase,
        creamer: this.currentCreamer,
        syrup: this.currentSyrup,
      };

      this.beverages.push(newBeverage);
    },

    showBeverage(beverage: any) {
      this.currentTemp = beverage.temp;
      this.currentBase = beverage.base;
      this.currentCreamer = beverage.creamer;
      this.currentSyrup = beverage.syrup;
      this.beverageName = beverage.name;
    },
  },
  persist: true,
});
