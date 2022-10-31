import Qr from "../assets/QR.png";

const QrCode = () => {
  return (
    <div className="bg-gray-100 rounded-r-md flex flex-col items-center justify-center">
      <div>
        <img className="w-52" src={Qr} alt="QrCode" />
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 mt-2 w-full">
          Download
        </button>
      </div>
    </div>
  );
};

export default QrCode;
