const InputField = () => {
  return (
    <div>
      <label className="font-semibold text-[18px]">Your URL</label>
      <input
        type="url"
        placeholder=" https://example.com"
        className="w-full border-2 py-1 mt-3 text-gray-600 rounded-sm"
      />
    </div>
  );
};

export default InputField;
