import React, { useEffect, useState } from "react";
import { IContact } from "../Interface/ContactInterface";
import { ContactService } from "../Services/fetchAPI";
import { Col, Row } from "antd";
import ContactCard from "../Card/ContactCard";

interface IState {
  contacts: IContact[];
}

const Home: React.FC = () => {
  const [contact, setContact] = useState<IState>({ contacts: [] });

  const getContactData = () => {
    ContactService.getAllContacts()
      .then((res) => {
        setContact({ ...contact, contacts: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getContactData();
  }, []);

  const { contacts } = contact;

  return (
    <div className="home-grid">
      <div style={{ width: "80%" }}>
        <Row gutter={16} style={{ display: "flex", justifyContent: "center" }}>
          {contacts?.map((contactItems: IContact, index: number) => {
            return (
              <Col xs={24} sm={15} md={10} xl={8} key={index}>
                <div>
                  <ContactCard contactItem={contactItems} />
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default Home;
