import Temprature from "./components/Temprature";

function App() {
  return (
    <>
      <div className="bg-[#1F213A] h-screen flex justify-center align-top">
        <div className="bg-blue-400 mt-40 w-1/5 h-1/2">
          <Temprature />
        </div>
        <div className="bg-blue-600 mt-40 w-1/3 h-1/2"></div>
      </div>
    </>
  );
}

export default App;
