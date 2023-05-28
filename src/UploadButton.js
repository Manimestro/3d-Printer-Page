import React from 'react';

function UploadButton({fileAdder}) {

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
     
    const data=Object.assign(selectedFile, {
      preview: URL.createObjectURL(selectedFile)
    })
    if (selectedFile){

      console.log("PREview")
      console.log(data.preview)
      fileAdder([data.preview])
    }
  };




  return (
   
        <input type="file" onChange={handleFileChange} accept=".stl" />
 
  );
}

export default UploadButton;
