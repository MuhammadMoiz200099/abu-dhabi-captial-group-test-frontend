import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import storage from "../services/firebase";

export const handleFirebaseUpload = (file) => {
  return new Promise((resolve, reject) => {
    try {
      if (!file) {
        reject({ message: "not an image, the image file is a" + typeof file });
      }
      const fileName = `${file.name}-${new Date().getTime()}`;
      const storageRef = ref(storage, `/images/${fileName}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (error) => {
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            resolve(url);
          });
        }
      );
    } catch (err) {
      reject(err);
    }
  });
};
