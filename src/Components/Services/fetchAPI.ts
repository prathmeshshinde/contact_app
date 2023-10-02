import axios from "axios";
import { IContact } from "../Interface/ContactInterface";

export class ContactService {
  private static serverUrl = "http://localhost:3000";
  public static getAllContacts = (): Promise<{ data: IContact[] }> => {
    const dataUrl = `${this.serverUrl}/allemp/`;
    return axios.get(dataUrl);
  };

  public static createContact = (
    teacherData: IContact
  ): Promise<{ data: IContact }> => {
    const dataUrl = `${this.serverUrl}/allemp/create`;
    return axios.post(dataUrl, teacherData);
  };
}
