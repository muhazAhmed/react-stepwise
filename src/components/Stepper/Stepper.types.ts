import type { ReactNode } from "react";

export type StepStatus = "completed" | "error" | "current" | "pending";

export type StepperProps = {
    /** total number of steps (if `steps` array isn’t provided) */
    steps?: number;

    /** optionally provide steps as objects for full control */
    stepData?: {
        label?: string;
        status?: StepStatus;
        icon?: ReactNode | ((index: number) => ReactNode);
    }[];

    currentStep: number;

    /** display style */
    type?: "count" | "check" | "silent";

    /** custom classes */
    className?: string;

    /** circle bg */
    bgColor?: string;

    /** circle text/icon color */
    color?: string;

    /** default icon (applied when step is completed) */
    icon?: ReactNode | ((index: number) => ReactNode);

    /** size of step circles */
    size?: "sm" | "md" | "lg";

    /** custom connector class */
    connectorClassName?: string;

    /** enable animations */
    animate?: boolean;
};
