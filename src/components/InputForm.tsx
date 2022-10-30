import InputColor from "./InputColor";
import InputField from "./InputField";

const InputForm = () => {
  return (
    <div className="col-span-2 p-6 grid gap-4">
      <InputField />
      <InputColor />
    </div>
  );
};

export default InputForm;
