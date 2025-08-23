import React, { useState } from "react";
import Stepper from "../Stepper";
import CodeBlock from "./CodeBlock";
import clsx from "clsx";

interface StepperDemoProps {
  title: string;
  description?: string;
  steps?: number;
  stepData?: any[];
  currentStep?: number; // optional shared state
  setCurrentStep?: (step: number) => void; // optional shared state
  type?: "count" | "check" | "silent";
  bgColor?: string;
  color?: string;
  icon?: React.ReactNode | ((index: number) => React.ReactNode);
  size?: "sm" | "md" | "lg";
  connectorClassName?: string;
  animate?: boolean;
}

const StepperDemo: React.FC<StepperDemoProps> = ({
  title,
  description,
  steps,
  stepData,
  currentStep: sharedStep,
  setCurrentStep: setSharedStep,
  ...rest
}) => {
  // If shared state exists, use it; else use internal state
  const [internalStep, setInternalStep] = useState(0);
  const currentStep = sharedStep !== undefined ? sharedStep : internalStep;
  const setCurrentStep =
    setSharedStep !== undefined ? setSharedStep : setInternalStep;

  const maxSteps = steps ?? stepData?.length ?? 0;

  const handleNext = () => {
    setCurrentStep(Math.min(currentStep + 1, maxSteps - 1));
  };

  const handleBack = () => {
    setCurrentStep(Math.max(currentStep - 1, 0));
  };

  const codeString = JSON.stringify(
    { steps, stepData, currentStep, ...rest },
    null,
    2
  );

  return (
    <div className="p-6 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 shadow-md w-full space-y-4">
      <h2 className="text-xl font-semibold">{title}</h2>
      {description && <p className="text-gray-700">{description}</p>}

      <Stepper
        steps={steps}
        stepData={stepData}
        currentStep={currentStep}
        {...rest}
      />

      <div className={clsx(stepData && "mt-6", "flex justify-between mt-4")}>
        <button
          onClick={handleBack}
          disabled={currentStep === 0}
          className={clsx(
            "px-4 py-2 rounded",
            currentStep === 0
              ? "bg-gray-300 text-gray-600 cursor-not-allowed"
              : "bg-gray-700 text-white hover:bg-gray-800"
          )}
        >
          Back
        </button>
        <button
          onClick={handleNext}
          disabled={steps ? currentStep === steps - 1 : false}
          className={clsx(
            "px-4 py-2 rounded",
            steps && currentStep === steps - 1
              ? "bg-gray-300 text-gray-600 cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700"
          )}
        >
          Next
        </button>
      </div>

      <CodeBlock code={codeString} />
    </div>
  );
};

export default StepperDemo;
