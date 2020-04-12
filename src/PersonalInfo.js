import React from "react";
import { Form, Input, Button, DatePicker } from "antd";

const PersonalInfo = () => {
  return (
    
      <Form>
      <div className="row">
        <div className="col-lg-6 col-xl-6 col-md-12 col-sm-12">
          <Form.Item
            label="Ime"
            name="Ime"
            rules={[{ required: true, message: "Molimo unesite vaše ime." }]}
          >
            <Input style={{width: 250, textAlign:'right'}}/>
          </Form.Item>
          </div>
          <div className="col-lg-6 col-xl-6 col-md-12 col-sm-12">
          <Form.Item
            label="Prezime"
            name="Prezime"
            rules={[{ required: true, message: "Molimo unesite vaše prezime!" }]}
          >
            <Input style={{width: 250, textAlign:'right'}}/>
          </Form.Item>
          </div>
          <div className="col-lg-6 col-xl-6 col-md-12 col-sm-12">
          <Form.Item
            label="Datum rodjenja"
            name="date"
            rules={[{ required: true, message: "Molimo unesite vaš datum rodjenja!" }]}
          >
              <DatePicker placeholder="Datum rodjenja" style={{width: 250}}/>
          </Form.Item>
          </div>
          <div className="col-lg-6 col-xl-6 col-md-12 col-sm-12">
          <Form.Item
            label="JMBG"
            name="JMBG"
            rules={[{ required: true, message: "Molimo unesite vaš JMBG!" }]}
          >
            <Input style={{width: 250}}/>
          </Form.Item>
          </div>
          <div className="col-lg-6 col-xl-6 col-md-12 col-sm-12">
          <Form.Item
            label="Broj Telefona"
            name="Broj"
            rules={[{ required: true, message: "Molimo unesite vaš broj telefona!" }]}
          >
            <Input style={{width: 250}}/>
          </Form.Item>
          </div>
          <div className="col-lg-6 col-xl-6 col-md-12 col-sm-12">
          <Form.Item
            label="Email"
            name="Email"
            rules={[{ required: true, message: "Molimo unesite vaš email!" }]}
          >
            <Input style={{width: 250}}/>
          </Form.Item>
          </div>
      </div>
      </Form>
    
  );
};

export default PersonalInfo;
