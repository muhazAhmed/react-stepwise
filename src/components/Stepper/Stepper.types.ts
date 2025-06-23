export interface StepperProps {
    activeStep: number
    totalSteps: number
    onStepChange?: (step: number) => void
}
