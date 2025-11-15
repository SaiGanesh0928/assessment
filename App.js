import React, { useState } from "react";
import FileUpload from "./components/FileUpload";
import SummaryOptions from "./components/SummaryOptions";
import OutputBox from "./components/OutputBox";
import { uploadFile, getSummary } from "./api";

function App() {
  const [fileData, setFileData] = useState("");
  const [fileType, setFileType] = useState("");
  const [extractedText, setExtractedText] = useState("");
  const [summary, setSummary] = useState("");

  const extractText = async () => {
    const res = await uploadFile(fileData, fileType);
    setExtractedText(res.data.text);
  };

  const generateSummary = async (length) => {
    const res = await getSummary(extractedText, length);
    setSummary(res.data.summary);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">Document Summary Assistant</h1>

      <FileUpload setFileData={setFileData} setFileType={setFileType} />

      {fileData && (
        <button className="bg-black text-white w-full mt-4 py-2 rounded" onClick={extractText}>
          Extract Text
        </button>
      )}

      {extractedText && <OutputBox label="Extracted Text" text={extractedText} />}
      {extractedText && <SummaryOptions generate={generateSummary} />}
      {summary && <OutputBox label="Summary" text={summary} />}
    </div>
  );
}

export default App;