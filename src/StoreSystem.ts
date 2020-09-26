import SimpleCrypto from "simple-crypto-js";
import encryptedStore from "./EncryptedContent";

export interface StoreOne {
  name: string;
  email: string;
  born: string;
  address: string;
  addressLink: string;
  education: string;
  workexperience: string;
  hobby: string;
  otherinfo: string;
}

class Store {
  /*
        Decrypts the choosen store to access the information inside
        The class isn't dependent on data, so the function is static.
    */
  public static DecryptStore(store: string, password: string): StoreOne | null {
    // Only encone is a valid input, because we only have one store in encryptedstore
    if (store !== "encone") {
      console.log("store is not encone");
      return null;
    }

    const encryptedInfo = encryptedStore[store];

    const cryptr = new SimpleCrypto(password);
    try {
      // Using the simple-crypto library to decrypt the encrypted store with information
      // Since the library supports many different types as inputs, : any is the safest for output
      const data: any = cryptr.decrypt(encryptedInfo);

      // If data is not a object, the decryption process failed
      if (typeof data !== "object") {
        return null;
      }

      // Convert variable to StoreOne because of TypeScript
      const parsedData: StoreOne = data;
      return parsedData;
    } catch (e) {
      // Logs the error for convinience
      console.log("error: " + e);
      return null;
    }
  }
}

export default Store;
