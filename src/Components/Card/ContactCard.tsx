import { Card, Divider, Image } from "antd";
import React from "react";
import { IContact } from "../Interface/ContactInterface";
import { Typography } from "antd";

const { Title, Text } = Typography;

interface IProps {
  contactItem: IContact;
}

const ContactCard: React.FC<IProps> = ({ contactItem }) => {
  return (
    <Card
      title={contactItem.fname_emp + " " + contactItem.lname_emp}
      bordered={false}
      style={{ marginTop: "10px" }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Image height={"150px"} width={"150px"} src={contactItem.imgurl_emp} />
      </div>
      <Divider />
      <Title level={5}>
        <Text type="secondary">First Name:</Text> {contactItem.fname_emp}
      </Title>
      <Title level={5} style={{ marginTop: "10px" }}>
        <Text type="secondary">Last Name:</Text> {contactItem.lname_emp}
      </Title>
      <Title level={5} style={{ marginTop: "10px" }}>
        <Text type="secondary">Email:</Text> {contactItem.email_emp}
      </Title>
      <Title level={5} style={{ marginTop: "10px" }}>
        <Text type="secondary">Mobile No:</Text> {contactItem.mobile_emp}
      </Title>
    </Card>
  );
};

export default ContactCard;
