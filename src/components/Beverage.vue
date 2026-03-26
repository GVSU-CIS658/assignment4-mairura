<template>
  <Mug>
    <Cold v-if="isIced" />
    <Hot v-else />
    <Contents>
      <template v-slot:top>
        <Creamer v-if="creamer.id !== 'c1'" :color="creamer.color" />
      </template>

      <template v-slot:mid>
        <Syrup v-if="syrup.id !== 's1'" :color="syrup.color" />
      </template>

      <template v-slot:bottom>
        <Base :color="base.color" />
      </template>
    </Contents>
  </Mug>
</template>

<script setup lang="ts">
import Contents from "./Contents.vue";
import Mug from "./Mug.vue";
import Syrup from "./Syrup.vue";
import Base from "./Base.vue";
import Creamer from "./Creamer.vue";
import Hot from "./Hot.vue";
import Cold from "./Cold.vue";

import type { BaseBeverageType, CreamerType, SyrupType } from "../stores/beverageStore";

type Props = {
  isIced: boolean;
  base: BaseBeverageType;
  creamer: CreamerType;
  syrup: SyrupType;
};

defineProps<Props>();
</script>