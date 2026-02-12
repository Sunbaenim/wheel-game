import { WheelContainer } from "./components/WheelContainer";
import { WheelProvider } from "./context/WheelProvider";

function App() {
  return (
    <>
      <WheelProvider>
        <WheelContainer />
      </WheelProvider>
    </>
  )
}

export default App
