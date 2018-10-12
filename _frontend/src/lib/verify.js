  
export function file(files, size, types) {
  if(types && typeof types === 'string') {
    types = types.split(",").map((item) => (item.trim()));
  }
  if(files && files.length > 0) {
    files.forEach((item) => {
      const currentFile = item;
      const currentFileType = currentFile.type;
      const currentFileSize = currentFile.size;
      if(currentFileSize > size) {
        alert("This file is not allowd. "+currentFileSize+" bytes is too large.");
        return false;
      }
      if(!types.includes(currentFileType)) {
        alert("This file is not allowd. Only images are allowed.");
        return false;
      }
    })
    return true;
  }
}