import React from "react";

export default function FileUpload({ setFileData, setFileType }) {
  const handleFile = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      const base64 = reader.result.split(",")[1];
      setFileData(base64);
      setFileType(file.type);
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="p-4 border-2 border-dashed border-gray-400 rounded-lg text-center">
      <p>Select PDF or Image</p>
      <input type="file" onChange={handleFile} />
    </div>
  );
}