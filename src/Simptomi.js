import React from "react";
import { Form, Input, Button, DatePicker, Select } from "antd";

const { Option } = Select;

const Simptomi = () => {
  return (
    <Form>
      <div className="row">
        <div className="col-lg-6 col-xl-6 col-md-12 col-sm-12">
          <Form.Item
            label="Temperatura"
            name="Temperatura"
            rules={[
              { required: true, message: "Molimo odaberite opciju" },
            ]}
          >
            <Select
              style={{ width: 250 }}
              placeholder="Odaberite"
            >
              <Option value="Da">Da</Option>
              <Option value="Ne">Ne</Option>
            </Select>
          </Form.Item>
        </div>
        <div className="col-lg-6 col-xl-6 col-md-12 col-sm-12">
        <Form.Item
            label="Umor"
            name="Umor"
            rules={[
              { required: true, message: "Molimo odaberite opciju" },
            ]}
          >
            <Select
              style={{ width: 250 }}
              placeholder="Odaberite"
            >
              <Option value="Da">Da</Option>
              <Option value="Ne">Ne</Option>
            </Select>
          </Form.Item>
        </div>
        <div className="col-lg-6 col-xl-6 col-md-12 col-sm-12">
        <Form.Item
            label="Suhi Kašalj"
            name="SuhiKašalj"
            rules={[
              { required: true, message: "Molimo odaberite opciju" },
            ]}
          >
            <Select
              style={{ width: 250 }}
              placeholder="Odaberite"
            >
              <Option value="Da">Da</Option>
              <Option value="Ne">Ne</Option>
            </Select>
          </Form.Item>
        </div>
        <div className="col-lg-6 col-xl-6 col-md-12 col-sm-12">
        <Form.Item
            label="Teškoće pri disanju"
            name="Teskoce"
            rules={[
              { required: true, message: "Molimo odaberite opciju" },
            ]}
          >
            <Select
              style={{ width: 250 }}
              placeholder="Odaberite"
            >
              <Option value="Da">Da</Option>
              <Option value="Ne">Ne</Option>
            </Select>
          </Form.Item>
        </div>
        <div className="col-lg-6 col-xl-6 col-md-12 col-sm-12">
        <Form.Item
            label="Grlobolja"
            name="Grlobolja"
            rules={[
              { required: true, message: "Molimo odaberite opciju" },
            ]}
          >
            <Select
              style={{ width: 250 }}
              placeholder="Odaberite"
            >
              <Option value="Da">Da</Option>
              <Option value="Ne">Ne</Option>
            </Select>
          </Form.Item>
        </div>
        <div className="col-lg-6 col-xl-6 col-md-12 col-sm-12">
        <Form.Item
            label="Proljev"
            name="Proljev"
            rules={[
              { required: true, message: "Molimo odaberite opciju" },
            ]}
          >
            <Select
              style={{ width: 250 }}
              placeholder="Odaberite"
            >
              <Option value="Da">Da</Option>
              <Option value="Ne">Ne</Option>
            </Select>
          </Form.Item>
        </div>
        <div className="col-lg-6 col-xl-6 col-md-12 col-sm-12">
        <Form.Item
            label="Bolovi"
            name="Bolovi"
            rules={[
              { required: true, message: "Molimo odaberite opciju" },
            ]}
          >
            <Select
              style={{ width: 250 }}
              placeholder="Odaberite"
            >
              <Option value="Da">Da</Option>
              <Option value="Ne">Ne</Option>
            </Select>
          </Form.Item>
        </div>
        <div className="col-lg-6 col-xl-6 col-md-12 col-sm-12">
        <Form.Item
            label="Začepljenje Nosa"
            name="Nos"
            rules={[
              { required: true, message: "Molimo odaberite opciju" },
            ]}
          >
            <Select
              style={{ width: 250 }}
              placeholder="Odaberite"
            >
              <Option value="Da">Da</Option>
              <Option value="Ne">Ne</Option>
            </Select>
          </Form.Item>
        </div>
        <div className="col-lg-6 col-xl-6 col-md-12 col-sm-12">
        <Form.Item
            label="Curenje Nosa"
            name="curenje"
            rules={[
              { required: true, message: "Molimo odaberite opciju" },
            ]}
          >
            <Select
              style={{ width: 250 }}
              placeholder="Odaberite"
            >
              <Option value="Da">Da</Option>
              <Option value="Ne">Ne</Option>
            </Select>
          </Form.Item>
        </div>
        <div className="col-lg-6 col-xl-6 col-md-12 col-sm-12">
        <Form.Item
            label="Blagi Simptomi"
            name="Blagi"
            rules={[
              { required: true, message: "Molimo odaberite opciju" },
            ]}
          >
            <Select
              style={{ width: 250 }}
              placeholder="Odaberite"
            >
              <Option value="Da">Da</Option>
              <Option value="Ne">Ne</Option>
            </Select>
          </Form.Item>
        </div>
        <div className="col-lg-6 col-xl-6 col-md-12 col-sm-12">
        <Form.Item
            label="Srednje Jaki Simptomi"
            name="Srednji"
            rules={[
              { required: true, message: "Molimo odaberite opciju" },
            ]}
          >
            <Select
              style={{ width: 250 }}
              placeholder="Odaberite"
            >
              <Option value="Da">Da</Option>
              <Option value="Ne">Ne</Option>
            </Select>
          </Form.Item>
        </div>
        <div className="col-lg-6 col-xl-6 col-md-12 col-sm-12">
        <Form.Item
            label="Jaki Simptomi"
            name="jaki"
            rules={[
              { required: true, message: "Molimo odaberite opciju" },
            ]}
          >
            <Select
              style={{ width: 250 }}
              placeholder="Odaberite"
            >
              <Option value="Da">Da</Option>
              <Option value="Ne">Ne</Option>
            </Select>
          </Form.Item>
        </div>
        <div className="col-lg-6 col-xl-6 col-md-12 col-sm-12">
        <Form.Item
            label="Veoma Blagi Simptomi"
            name="Blagi"
            rules={[
              { required: true, message: "Molimo odaberite opciju" },
            ]}
          >
            <Select
              style={{ width: 250 }}
              placeholder="Odaberite"
            >
              <Option value="Da">Da</Option>
              <Option value="Ne">Ne</Option>
            </Select>
          </Form.Item>
        </div>
        <div className="col-lg-6 col-xl-6 col-md-12 col-sm-12">
        <Form.Item
            label="Kontakt sa Zaraženom Osobom"
            name="kontakt"
            rules={[
              { required: true, message: "Molimo odaberite opciju" },
            ]}
          >
            <Select
              style={{ width: 250 }}
              placeholder="Odaberite"
            >
              <Option value="Da">Da</Option>
              <Option value="Ne">Ne</Option>
            </Select>
          </Form.Item>
        </div>
      </div>
    </Form>
  );
};

export default Simptomi;
