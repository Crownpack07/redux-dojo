import { StepBullets } from "../StepBullets/StepBullets";
import { Step } from "../models/step";
import { useState } from "react";
import { StepBoxes } from "../StepBoxes/StepBoxes";
interface StepperProps {
  steps: Step[];
  onNext: () => void;
  onPrevious?: () => void;
  onCancel?: () => void;
  onFinish: () => void;
}

export function Stepper({
  steps,
  onNext,
  onPrevious,
  onCancel,
  onFinish,
}: StepperProps) {
  const [currentStep, setCurrentStep] = useState<number>(0);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }

    onNext();
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
    if (onPrevious) {
      onPrevious();
    }
  };

  const activeStep = steps[currentStep];

  return (
    <div className="h-full w-full flex flex-col flex-grow justify-between">
      <div className="flex md:hidden flex-row py-6">
        <StepBullets steps={steps} currentStep={currentStep} />
      </div>
      <div className="flex-row py-6 hidden md:flex">
        <StepBoxes steps={steps} currentStep={currentStep} />
      </div>
      <div className="py-4 overflow-auto flex-col flex-grow">
        {activeStep.component({
          onNext: handleNext,
          onPrev: handlePrev,
          isFirstStep: currentStep === 0,
          isLastStep: currentStep === steps.length - 1,
          onFinish: onFinish,
          onCancel: onCancel,
        })}
      </div>
    </div>
  );
}
