import { collection, getDocs, writeBatch, doc } from "firebase/firestore";
import { db } from "../firebase";

const COLLECTION_NAME = "pokemonBuilds";

export const getAllData = async () => {
  const querySnapshot = await getDocs(collection(db, COLLECTION_NAME));
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const saveMultipleData = async (dataArray) => {
  const batch = writeBatch(db);
  dataArray.forEach((item) => {
    const { id, ...data } = item;
    const docRef = id ? doc(db, COLLECTION_NAME, id) : doc(collection(db, COLLECTION_NAME));
    batch.set(docRef, data);
  });
  await batch.commit();
};