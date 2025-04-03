import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

const FileUpload = ({ onDone }) => {
  const [file, setFile] = useState(null);

  const onDrop = useCallback(
    (acceptedFiles) => {
      const selectedFile = acceptedFiles[0];

      if (selectedFile) {
        const reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onloadend = () => {
          const base64String = reader.result;
          onDone(base64String); // Send base64 to parent
        };

        setFile(
          Object.assign(selectedFile, {
            preview: URL.createObjectURL(selectedFile),
          })
        );
      }
    },
    [onDone]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*",
    multiple: false,
  });

  return (
    <div>
      <div {...getRootProps()} style={dropzoneStyles}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the file here...</p>
        ) : (
          <p>Drag & drop an image here, or click to select</p>
        )}
      </div>

      {file && (
        <div style={{ marginTop: "10px" }}>
          <img
            src={file.preview}
            alt="preview"
            width="100"
            height="100"
            style={{ borderRadius: "5px", }}
          />
        </div>
      )}
    </div>
  );
};

const dropzoneStyles = {
  border: "2px dashed #ccc",
  padding: "20px",
  textAlign: "center",
  cursor: "pointer",
  borderRadius: "10px",
  backgroundColor: "#f9f9f9",
};

export default FileUpload;
