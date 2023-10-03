import { Step } from "../models/step";

interface StepBulletsProps {
  steps: Step[];
  currentStep: number;
}

export function StepBullets({ steps, currentStep }: StepBulletsProps) {
  const activeStep = steps[currentStep];
  const modifiedCurrentStep = currentStep + 1;
  return (
    <div className="bg-white flex flex-col flex-grow space-x-2 justify-between align-middle items-center rounded-md px-6 py-4 shadow">
      <div className="flex flex-row space-x-4 items-center mb-3">
        {steps.map((_, index) => {
          const stepIndex = index + 1;
          return (
            <div key={index}>
              {modifiedCurrentStep === stepIndex ? (
                <div className="h-5 w-5 p-px rounded-full bg-blue-200 flex flex-row items-center justify-center">
                  <div className="h-3 w-3 p-px rounded-full bg-blue-600" />
                </div>
              ) : (
                <div className="h-3 w-3 p-px rounded-full bg-gray-300" />
              )}
            </div>
          );
        })}
      </div>
      <div className="text-gray-400 text-sm">
        Step {modifiedCurrentStep} of {steps.length}
      </div>
      <div></div>

      <div className="text-base font-medium">{activeStep.name}</div>
    </div>
  );
}
