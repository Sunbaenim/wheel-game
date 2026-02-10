import { WheelContainer } from "./components/WheelContainer";
import { WheelProvider } from "./context/WheelContext";

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
