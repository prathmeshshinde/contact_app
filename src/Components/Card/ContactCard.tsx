import { Button, Card, Divider, Image } from "antd";
import React from "react";
import { IContact } from "../Interface/ContactInterface";
import { Typography } from "antd";
import { Link } from "react-router-dom";
import { ContactService } from "../Services/fetchAPI";

const { Title, Text } = Typography;

interface IProps {
  contactItem: IContact;
}

const ContactCard: React.FC<IProps> = ({ contactItem }) => {
  const handleDelete = (id: number) => {
    ContactService.deleteContact(id)
      .then((res) => {
        if (res && res.data) {
          console.log("deleted Successfully");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const buttonStyle = {
    margin: "0px 10px",
  };

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
      <div className="button-group">
        <Button
          style={buttonStyle}
          danger
          onClick={() => handleDelete(contactItem.contact_id)}
        >
          Delete
        </Button>

        <Link
          to={`/update/${contactItem.contact_id}`}
          state={{ contactDetails: contactItem }}
        >
          <Button type="primary">Update</Button>
        </Link>
      </div>
    </Card>
  );
};

export default ContactCard;
