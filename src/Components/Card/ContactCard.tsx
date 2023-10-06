import { Button, Card, Divider, Image, Popconfirm } from "antd";
import React, { useEffect } from "react";
import { IContact } from "../Interface/ContactInterface";
import { Typography } from "antd";
import { Link } from "react-router-dom";
import { ContactService } from "../Services/fetchAPI";

const { Title, Text } = Typography;

interface IProps {
  contactItem: IContact;
  getContactData: any;
  showToastMessage: any;
  showErrorToastMessage: any;
}

const ContactCard: React.FC<IProps> = ({
  contactItem,
  getContactData,
  showToastMessage,
  showErrorToastMessage,
}) => {
  const handleDelete = (id: number) => {
    ContactService.deleteContact(id)
      .then((res) => {
        if (res && res.data) {
          showToastMessage("Contact deleted successfully!");
          getContactData();
        }
      })
      .catch((err) => {
        showErrorToastMessage(err.message);
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
        <Popconfirm
          title="Delete Contact"
          description="Are you sure to delete this contact?"
          onConfirm={() => handleDelete(contactItem.contact_id)}
          okText="Yes"
          cancelText="No"
        >
          <Button style={buttonStyle} danger>
            Delete
          </Button>
        </Popconfirm>

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
