import type { StoryFn, Meta } from '@storybook/vue3-vite'
import Button from './Button.vue'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large'],
      defaultValue: 'medium',
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
      defaultValue: 'primary',
    },
    label: {
      control: { type: 'text' },
      defaultValue: '',
      table: {
        category: 'Content',
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    icon: {
      control: { type: 'text' },
      defaultValue: undefined,
      table: {
        category: 'Content',
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
  },
} as Meta<typeof Button>

const Template: StoryFn<typeof Button> = (args) => ({
  components: { Button },
  setup() {
    return { args }
  },
  template: `
    <div style="display: flex; flex-direction: row; gap: 12px;">
      <Button v-bind="args" size="large"  />
      <Button v-bind="args" size="medium" />
      <Button v-bind="args" size="small"  />
    </div>
  `,
})

export const DefaultButton: StoryFn<typeof Button> = (args) => ({
  components: { Button },
  setup() {
    return { args }
  },
  template: '<Button v-bind="args" />',
})
DefaultButton.args = {
  label: 'Кнопка',
}

export const PrimaryButton = Template.bind({})
PrimaryButton.args = { color: 'primary', label: 'Кнопка' }

export const SecondaryButton = Template.bind({})
SecondaryButton.args = { color: 'secondary', label: 'Кнопка' }

export const ButtonWithIcon = Template.bind({})
ButtonWithIcon.args = {
  label: 'Кнопка с иконкой',
  icon: '🚀',
}

export const IconOnlyButton = Template.bind({})
IconOnlyButton.args = {
  icon: '⭐',
  size: 'medium',
}
