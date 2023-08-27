<template>
    <div class="container">
        <AppButton
            @click="handleClick"
            v-bind="btnProps"
        />
    </div>
</template>

<script setup lang="ts">
import { ref, Ref } from 'vue'
import { AppButton, type ButtonProps } from '@/components/AppButton'

const btnProps: Ref<ButtonProps> = ref({
    content: 'click me',
    type: 'default',
    size: 'large',
    disabled: false,
    circle: false,
    square: false,
})

const handleClick = (event: Event) => {
    console.log(event)
}
</script>

<style scoped lang="sass">
.container
    display: flex
    justify-content: center
    align-items: center
    height: 100vh
</style>
