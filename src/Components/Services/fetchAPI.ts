import axios from "axios";
import { IContact } from "../Interface/ContactInterface";

export class ContactService {
  private static serverUrl = "http://localhost:3000";
  public static getAllContacts = (): Promise<{ data: IContact[] }> => {
    const dataUrl = `${this.serverUrl}/allemp/`;
    return axios.get(dataUrl);
  };

  public static createContact = (
    contactData: IContact
  ): Promise<{ data: IContact }> => {
    const dataUrl = `${this.serverUrl}/allemp/create`;
    return axios.post(dataUrl, contactData);
  };

  public static updateContact = (contactData: IContact, id: number) => {
    const dataUrl = `${this.serverUrl}/allemp/update/${id}`;
    return axios.put(dataUrl, contactData);
  };

  public static deleteContact = (id: number) => {
    const dataUrl = `${this.serverUrl}/allemp/delete/${id}`;
    return axios.delete(dataUrl);
  };
}
