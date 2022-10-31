import InputColor from "./InputColor";
import InputField from "./InputField";

const InputForm = () => {
  return (
    <div className="col-span-2 p-6 grid gap-4">
      <InputField />
      <InputColor />
      <button className="bg-blue-500 max-w-xs ml-auto px-4 py-2 text-white rounded-md mt-4 hover:bg-blue-600">
        Generate QR-Code
      </button>
    </div>
  );
};

export default InputForm;
