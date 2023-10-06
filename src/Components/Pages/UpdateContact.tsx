import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ContactService } from "../Services/fetchAPI";
import { Button, Form, Input } from "antd";
import { Typography } from "antd";

const { Title } = Typography;

const UpdateContact: React.FC<any> = ({
  showToastMessage,
  showErrorToastMessage,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { contactDetails } = location.state;

  const handleUpdate = (values: any) => {
    ContactService.updateContact(values, contactDetails.contact_id)
      .then((res) => {
        if (res && res.data) {
          showToastMessage("Contact Updated Successfully");
          navigate("/");
        }
      })
      .catch((err) => {
        showErrorToastMessage(err.message);
      });
  };

  return (
    <div className="addContact-main">
      <div className="addContact-div">
        <Title level={3} type="warning" style={{ textAlign: "center" }}>
          Update Contact
        </Title>
        <Form onFinish={handleUpdate}>
          <Form.Item
            name={["fname_emp"]}
            label="First Name"
            rules={[{ required: true }]}
            initialValue={contactDetails.fname_emp}
          >
            <Input placeholder="First Name" />
          </Form.Item>
          <Form.Item
            name={["lname_emp"]}
            label="Last Name"
            rules={[{ required: true }]}
            initialValue={contactDetails.lname_emp}
          >
            <Input placeholder="Last Name" />
          </Form.Item>
          <Form.Item
            name={["email_emp"]}
            label="Email"
            rules={[{ required: true }]}
            initialValue={contactDetails.email_emp}
          >
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item
            name={["imgurl_emp"]}
            label="Image"
            rules={[{ required: true }]}
            initialValue={contactDetails.imgurl_emp}
          >
            <Input placeholder="Image" />
          </Form.Item>
          <Form.Item
            name={["mobile_emp"]}
            label="Mobile No"
            rules={[{ required: true }]}
            initialValue={contactDetails.mobile_emp}
          >
            <Input placeholder="Mobile No" />
          </Form.Item>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              type="default"
              htmlType="submit"
              style={{
                width: "150px",
                height: "35px",
                backgroundColor: "#52C41A",
                color: "#fff",
                fontSize: "16px",
                fontWeight: "500",
              }}
            >
              Update
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default UpdateContact;
