import type { StoryFn, Meta } from '@storybook/vue3-vite'
import LButton from './LButton.vue'

export default {
  title: 'Button',
  component: LButton,
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
} as Meta<typeof LButton>

const Template: StoryFn<typeof LButton> = (args) => ({
  components: { LButton },
  setup() {
    return { args }
  },
  template: `
    <div style="display: flex; flex-direction: row; gap: 12px;">
      <LButton v-bind="args" size="large"  />
      <LButton v-bind="args" size="medium" />
      <LButton v-bind="args" size="small"  />
    </div>
  `,
})

export const DefaultButton: StoryFn<typeof LButton> = (args) => ({
  components: { LButton },
  setup() {
    return { args }
  },
  template: '<LButton v-bind="args" />',
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
