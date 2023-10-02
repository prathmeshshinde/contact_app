import { Button, Form, Input } from "antd";
import React from "react";
import { ContactService } from "../Services/fetchAPI";
import { useNavigate } from "react-router-dom";
import { Typography } from "antd";

const { Title } = Typography;

const AddContact: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (values: any) => {
    ContactService.createContact(values)
      .then((res) => {
        if (res && res.data) {
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="addContact-main">
      <div className="addContact-div">
        <Title level={3} style={{ textAlign: "center", color: "#52C41A" }}>
          Add Contact
        </Title>
        <Form onFinish={handleSubmit}>
          <Form.Item
            name={["fname_emp"]}
            label="First Name"
            rules={[{ required: true }]}
          >
            <Input placeholder="First Name" />
          </Form.Item>
          <Form.Item
            name={["lname_emp"]}
            label="Last Name"
            rules={[{ required: true }]}
          >
            <Input placeholder="Last Name" />
          </Form.Item>
          <Form.Item
            name={["email_emp"]}
            label="Email"
            rules={[{ required: true }]}
          >
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item
            name={["imgurl_emp"]}
            label="Image"
            rules={[{ required: true }]}
          >
            <Input placeholder="Image" />
          </Form.Item>
          <Form.Item
            name={["mobile_emp"]}
            label="Mobile No"
            rules={[{ required: true }]}
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
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default AddContact;
