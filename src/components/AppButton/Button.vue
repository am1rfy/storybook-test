<template>
    <button
        class="btn"
        :class="cssVariables"
        @click="onClick"
    >
        <slot>
            {{ content }}
        </slot>
    </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Props } from './types'

const props = withDefaults(defineProps<Props>(), {
    content: '',
    type: 'default',
    size: 'medium',
})

const emit = defineEmits<{
    click: [event: MouseEvent]
}>()

const onClick = (event: MouseEvent) => {
    if (props.disabled)
        return
    
    emit('click', event)
}

const cssVariables = computed(() => [
    props.size,
    props.type,
    props.disabled ? 'disabled' : '',
    props.circle ? 'circle' : '',
    props.square ? 'square' : '',
])
</script>

<style scoped lang="sass">
.btn
    display: block
    color: $button-default-color
    background-color: $button-default-background-color
    border: 1px solid $button-default-border-color
    border-radius: 6px
    cursor: pointer
    padding: 8px 16px
    text-align: center
    text-wrap: nowrap
    text-decoration: none
    font-size: 14px
    font-weight: 500
    outline: none
    transition: 0.2s

    &:hover
        color: $button-default-color-hover
        background-color: $button-default-background-color-hover
        border-color: $button-default-border-color-hover

.btn.primary
    color: white
    background-color: $primary-color
    border-color: $primary-color

    &:hover
        background-color: $primary-color-8
        border-color: $primary-color-8

.btn.success
    color: white
    background-color: $success-color
    border-color: $success-color

    &:hover
        background-color: $success-color-8
        border-color: $success-color-8

.btn.error
    color: white
    background-color: $error-color
    border-color: $error-color

    &:hover
        background-color: $error-color-8
        border-color: $error-color-8

.btn.warning
    color: white
    background-color: $warning-color
    border-color: $warning-color

    &:hover
        background-color: $warning-color-8
        border-color: $warning-color-8

.btn.info
    color: white
    background-color: $info-color
    border-color: $info-color

    &:hover
        background-color: $info-color-8
        border-color: $info-color-8

.btn.large
    padding: 10px 20px
    text-transform: uppercase

.btn.small
    padding: 6px 12px
    font-size: 12px

.btn.square
    border-radius: 0

.btn.circle
    border-radius: 50%
    padding: 16px

.btn.disabled
    cursor: not-allowed
    user-select: none
</style>
