import InputForm from "./components/InputForm";
import QrCode from "./components/QrCode";

function App() {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-screen pt-[85px] px-2">
      <div className="container mx-auto max-w-4xl bg-white rounded-md shadow">
        <div className="md:grid md:grid-cols-3">
          <InputForm />
          <QrCode/>
        </div>
      </div>
    </div>
  );
}

export default App;
