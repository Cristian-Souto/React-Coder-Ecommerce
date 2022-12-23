import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { useEffect, useState } from "react";

export const useGetItemImg = (imageName) => {
  const [img, setImg] = useState(null);
  const storage = getStorage();
  const productImgRef = ref(storage, imageName);

  useEffect(() => {
    getDownloadURL(productImgRef)
      .then((data) => setImg(data))
      .catch((error) => console.error({ error }))
  }, [productImgRef])

  return img
}