import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Step, Stepper } from "./components/stepper";
import { VendorForm } from "./components/vendors/VendorForm/VendorForm";
import { VendorLocationForm } from "./components/vendors/VendorLocationForm/VendorLocationForm";
import { VendorReview } from "./components/vendors/VendorReview/VendorReview";
import { useEffect } from "react";
import { useWindowSize } from "./core/hooks/useWindowSize";

function App() {
  const steps: Step[] = [
    {
      component: <VendorForm />,
      name: "Vendor Details",
    },
    {
      component: <VendorLocationForm />,
      name: "Vendor Locations",
    },
    {
      component: <VendorReview />,
      name: "Review",
    },
  ];

  const { height } = useWindowSize();
  useEffect(() => {
    const doc = document.documentElement;
    doc.style.setProperty("--app-height", `${window.innerHeight}px`);
  }, [height]);

  return (
    <div className="bg-gray-100  p-4 ">
      <div className="flex flex-row space-x-4 w-full ">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="h-full ">
        <Stepper
          steps={steps}
          onNext={() => {
            console.info("Next Clicked");
          }}
          onFinish={() => {
            console.info("onFinish");
          }}
        />
      </div>
    </div>
  );
}

export default App;
