import Button from "../../atoms/Button/Button";
import { ButtonType } from "../../atoms/Button/button-type";

export interface StepButtonsProps {
  onNext: () => void;
  onPrev?: () => void;
  onCancel?: () => void;
  onFinish: () => void;
  isLastStep: boolean;
  isFirstStep: boolean;
}

export function StepButtons({
  onNext,
  onPrev,
  onCancel,
  onFinish,
  isLastStep,
  isFirstStep,
}: StepButtonsProps) {
  return (
    <div className="bg-white flex flex-row justify-center md:justify-end px-4 py-4">
      <div className="flex flex-row flex-grow md:flex-grow-0 items-center align-middle space-x-2">
        {!isFirstStep && (
          <Button
            label={"Back"}
            onClick={onPrev}
            buttonType={ButtonType.Primary}
          />
        )}
        <Button
          label={"Cancel"}
          onClick={onCancel}
          buttonType={ButtonType.Secondary}
        />

        {!isLastStep ? (
          <Button
            label={"Next"}
            onClick={onNext}
            buttonType={ButtonType.Primary}
          />
        ) : (
          <Button
            label={"Finish"}
            onClick={onFinish}
            buttonType={ButtonType.Primary}
          />
        )}
      </div>
    </div>
  );
}
