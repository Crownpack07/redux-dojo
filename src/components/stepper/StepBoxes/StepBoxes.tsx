import { CheckBadgeIcon } from "@heroicons/react/20/solid";
import { Step } from "../models/step";

interface StepBoxProps {
  stepNumber: string;
  stepName: string;
  isActive: boolean;
  isComplete: boolean;
}

interface StepBoxesProps {
  steps: Step[];
  currentStep: number;
}

export function StepBoxes({ steps, currentStep }: StepBoxesProps) {
  return (
    <div className="flex flex-row flex-grow">
      {steps.map((step, index) => {
        const stepIndex = index + 1;
        return (
          <StepBox
            key={index}
            stepNumber={stepIndex < 9 ? `0${stepIndex}` : `${stepIndex}`}
            stepName={step.name}
            isActive={index === currentStep}
            isComplete={index < currentStep}
          />
        );
      })}
    </div>
  );
}

function StepBox({
  stepNumber,
  stepName,
  isActive,
  isComplete = false,
}: StepBoxProps) {
  return (
    <div
      className={`group bg-white flex flex-row flex-grow items-center align-middle space-x-3 border-solid border-gray-200 border-t-2 border-b-2 first:border-l-2 first:rounded-l-md last:border-r-2 last:rounded-r-md`}
    >
      <div
        className={`flex flex-row flex-grow items-center align-middle p-4 space-x-3 `}
      >
        {isComplete && (
          <div className="rounded-full h-10 w-10 border text-blue-500 bg-gray-200 flex items-center align-middle justify-center">
            <div>
              <CheckBadgeIcon className="h-6 w-6 text-blue-500" />
            </div>
          </div>
        )}
        {!isComplete &&
          (isActive ? (
            <div className="rounded-full h-10 w-10 bg-blue-700 text-white flex items-center align-middle justify-center">
              <div className="text-sm">{stepNumber}</div>
            </div>
          ) : (
            <div className="rounded-full h-10 w-10 flex items-center align-middle justify-center border border-gray-400 text-gray-400">
              <div className="text-sm">{stepNumber}</div>
            </div>
          ))}
        <div
          className={`text-base font-semibold ${
            isComplete
              ? `text-base`
              : isActive
              ? `text-blue-500`
              : `text-gray-400`
          } `}
        >
          {stepName}
        </div>
      </div>

      <div className="h-full w-5 group-last:hidden">
        <ArrowSeparator />
      </div>
    </div>
  );
}

function ArrowSeparator() {
  return (
    <svg
      className="h-full w-full text-gray-300"
      viewBox="0 0 22 80"
      fill="none"
      preserveAspectRatio="none"
    >
      <path
        d="M0 -2L20 40L0 82"
        vectorEffect="non-scaling-stroke"
        stroke="currentcolor"
        strokeLinejoin="round"
      />
    </svg>
  );
}
