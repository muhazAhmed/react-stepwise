import React from "react";
import type { StepperProps, StepStatus } from "./Stepper.types";
import clsx from "clsx";
// Default fallback icon
import { Check } from "lucide-react";

const Stepper: React.FC<StepperProps> = ({
  steps,
  stepData,
  currentStep = 0,
  type = "count",
  className,
  bgColor = "bg-green-500",
  color = "text-white",
  icon,
  size = "md",
  connectorClassName,
  animate = false,
}) => {
  // resolve step list: either stepData or numeric array
  const stepArray =
    stepData ??
    Array.from({ length: steps ?? 0 }, (_, i) => ({
      label: undefined,
      status:
        i < currentStep
          ? "completed"
          : i === currentStep
          ? "current"
          : "pending",
    }));

  const gridCols = stepArray
    .map((_, i) =>
      i === stepArray.length - 1 ? "minmax(0, auto)" : "auto 1fr"
    )
    .join(" ");

  const sizeClasses = {
    sm: "w-6 h-6 text-xs",
    md: "w-8 h-8 text-sm",
    lg: "w-10 h-10 text-base",
  };

  const getLabel = (i: number, status?: StepStatus) => {
    const isCompleted = status === "completed" || i < currentStep;

    if (isCompleted) {
      if (typeof icon === "function") return icon(i);
      if (React.isValidElement(icon)) return icon;

      return <Check size={16} />;
    }

    if (type === "silent") return "";
    if (type === "check") return i + 1;

    return i + 1;
  };

  return (
    <div
      className="grid items-center w-full"
      style={{ gridTemplateColumns: gridCols }}
    >
      {stepArray.map((step, index) => {
        const status =
          typeof step === "object" && "status" in step
            ? step.status
            : index < currentStep
            ? "completed"
            : index === currentStep
            ? "current"
            : "pending";

        const label =
          typeof step === "object" && "label" in step ? step.label : undefined;

        return (
          <React.Fragment key={index}>
            <div className="flex flex-col items-center relative">
              <div
                className={clsx(
                  "rounded-full flex items-center justify-center font-medium transition-all duration-500",
                  sizeClasses[size],
                  className,
                  status === "completed" || status === "current"
                    ? `${bgColor} ${color}`
                    : "bg-gray-300 text-black",
                  animate && "transition-transform ease-in-out"
                )}
              >
                {getLabel(index, status as StepStatus)}
              </div>
              {label && (
                <span
                  className="absolute top-full mt-2 text-center text-sm truncate max-w-[80px] md:max-w-[120px] lg:max-w-[160px]"
                  style={{ left: "50%", transform: "translateX(-50%)" }}
                >
                  {label}
                </span>
              )}
            </div>

            {index < stepArray.length - 1 && (
              <div
                className={clsx(
                  "h-1 w-full transition-all duration-500 self-center",
                  connectorClassName,
                  status === "completed" ? bgColor : "bg-gray-300"
                )}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Stepper;
