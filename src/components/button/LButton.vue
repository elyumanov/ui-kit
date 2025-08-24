<script lang="ts" setup>
import { defineProps, PropType } from 'vue'

const props = defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String as PropType<'small' | 'medium' | 'large'>,
    default: 'small',
  },
  color: {
    type: String as PropType<'primary' | 'secondary'>,
    default: 'primary',
  },
  label: {
    type: String,
    default: undefined,
  },
  icon: {
    type: String,
    default: undefined,
  },
})
</script>

<template>
  <button
    class="l-button hoverable"
    :class="[`l-button--${props.size}`, `l-button--${props.color}`]"
    :disabled="props.disabled"
  >
    <slot name="prepend" />
    <span class="l-button__item">
      <span v-if="props.label" class="l-button__label">{{ props.label }}</span>
      <i v-if="props.icon" class="l-button__icon" role="img">{{ props.icon }}</i>
    </span>
    <slot />
    <slot name="append" />
  </button>
</template>

<style lang="scss" scoped>
.l-button {
  color: #ffffff;
  outline: none;
  border: none;
  padding: 0 16px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-weight: 500;
  min-width: fit-content;

  &__item {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  &__label {
    display: inline-block;
  }

  &__icon {
    font-style: normal;
    text-transform: none;
    font-size: 16px;
    line-height: 1;
  }

  // Модификаторы размера
  &--small {
    height: 32px;
    border-radius: 8px;
    font-size: 14px;
  }

  &--medium {
    height: 36px;
    border-radius: 10px;
    font-size: 16px;
  }

  &--large {
    height: 40px;
    border-radius: 12px;
    font-size: 18px;
  }

  // Модификаторы цвета
  &--primary {
    background: var(--color-primary);
  }

  &--secondary {
    background: none;
    border: 1px solid var(--color-primary);
    color: var(--color-primary);
  }

  // Состояния
  &:hover:not(:disabled) {
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
}
</style>
