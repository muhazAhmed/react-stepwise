# React Stepwise

**Author:** Muhaz Ahmed  
**License:** MIT  
**Documentation:** [react-stepwise.vercel.app/](https://react-stepwise.vercel.app/)  
**Repository:** [github.com/muhazAhmed/react-stepwise](https://github.com/muhazAhmed/react-stepwise)

---

## Description

**React Stepwise** is a **customizable, animated multi-step form component** for React + Tailwind CSS. It provides an easy-to-use **stepper** with various variants (numeric, check, custom icon, silent, labeled steps) and supports **dynamic step data**.

Perfect for onboarding flows, forms, tutorials, or any step-by-step UI in your React applications.

---

## Features

- ✅ Numeric or check step indicators  
- 🔥 Custom icon support  
- 🖤 Silent variant (no numbers or icons)  
- 🎨 Fully tailwind-styled with customizable colors  
- ⚡ Animated transitions (via Framer Motion on demo pages)  
- 📝 Supports step labels and custom step statuses  
- 📦 Works in both TypeScript and JavaScript projects  

---

## Installation

Install using **npm** or **yarn**:

```bash
# Using npm
npm install react-stepwise

# Using yarn
yarn add react-stepwise


| Prop                 | Type                                        | Default          | Description                                            |           |                 |
| -------------------- | ------------------------------------------- | ---------------- | ------------------------------------------------------ | --------- | --------------- |
| `steps`              | `number`                                    | `0`              | Number of steps (used if `stepData` not provided)      |           |                 |
| `stepData`           | `Step[]`                                    | `undefined`      | Array of objects \`{ label?: string, status: 'pending' | 'current' | 'completed' }\` |
| `currentStep`        | `number`                                    | `0`              | Current active step                                    |           |                 |
| `setCurrentStep`     | `(step: number) => void`                    | `undefined`      | Optional setter to update current step                 |           |                 |
| `type`               | `"count" \| "check" \| "silent"`            | `"count"`        | Stepper type                                           |           |                 |
| `size`               | `"sm" \| "md" \| "lg"`                      | `"md"`           | Step size                                              |           |                 |
| `bgColor`            | `string`                                    | `"bg-green-500"` | Background color of active/completed steps             |           |                 |
| `color`              | `string`                                    | `"text-white"`   | Text/icon color of active/completed steps              |           |                 |
| `icon`               | `ReactNode \| (index: number) => ReactNode` | `Check icon`     | Custom icon for completed steps                        |           |                 |
| `className`          | `string`                                    | `""`             | Additional classes for step circles                    |           |                 |
| `connectorClassName` | `string`                                    | `""`             | Additional classes for connectors between steps        |           |                 |
| `animate`            | `boolean`                                   | `false`          | Add smooth transition animation                        |           |                 |
```
## Variants
- Count Variant: Numeric stepper
- Check Variant: Completed steps show check icons
- Custom Icon: Use any icon or emoji
- Silent Variant: No numbers/icons, just progress connectors
- Step Data Variant: Fully controlled stepper with labels and custom statuses

## License
MIT © Muhaz Ahmed

