import QrCode from "qrcode";
import { useState } from "react";

function App() {
  const [url, setUrl] = useState("");
  const [qr, setQr] = useState("");

  const GenerateQRCode = () => {
    QrCode.toDataURL(
      url,
      {
        width: 200,
        margin: 1,
      },
      (err, url) => {
        if (err) return console.error(err);
        setQr(url);
      }
    );
  };

  return (
    <div className="bg-[#1b2034] h-screen md:py-16 py-4 text-center">
      <div className="">
        <h1 className="text-[2.5rem] mb-3 text-white font-Viaoda">QR-Code Generator</h1>
        <input
          className="w-full max-w-[300px] px-[1rem] py-[0.5rem] mr-[1rem] mt-6 rounded-[0.5rem] appearance-none outline-none border-none bg-[#EEE]"
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="e.g. https://google.com"
        />
        <button
          onClick={GenerateQRCode}
          className="bg-blue-600 hover:bg-blue-500 text-white rounded-md px-5 py-[6px] md:mt-2 mt-8 text-[18px]"
        >
          Generate
        </button>
        {qr && (
          <>
            <img
              src={qr}
              alt="data"
              className="md:ml-[530px] ml-[90px] mt-10"
            />
            <div className="mt-10 md:mr-[100px]">
              <a
                href={qr}
                download="qrcode.png"
                className="bg-blue-600 hover:bg-blue-500 text-white rounded-md px-5 py-[8px] mt-2 text-[18px]"
              >
                Download
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
