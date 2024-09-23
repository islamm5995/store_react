import React, { useState } from 'react';
import { Form, Input, Button, Steps } from 'antd';

const { Step } = Steps;

const Checkout = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: 'Contact Information',
      content: (
        <Form layout="vertical">
          <Form.Item label="Name">
            <Input placeholder="Enter your name" />
          </Form.Item>
          <Form.Item label="Email">
            <Input placeholder="Enter your email" />
          </Form.Item>
        </Form>
      ),
    },
    {
      title: 'Shipping Address',
      content: (
        <Form layout="vertical">
          <Form.Item label="Address">
            <Input placeholder="Enter your address" />
          </Form.Item>
          <Form.Item label="City">
            <Input placeholder="Enter your city" />
          </Form.Item>
        </Form>
      ),
    },
    {
      title: 'Review Order',
      content: <p>Review your order before confirming.</p>,
    },
  ];

  const next = () => setCurrentStep(currentStep + 1);
  const prev = () => setCurrentStep(currentStep - 1);

  return (
    <>
      <Steps current={currentStep}>
        {steps.map((step, index) => (
          <Step key={index} title={step.title} />
        ))}
      </Steps>
      <div style={{ marginTop: 24 }}>{steps[currentStep].content}</div>
      <div style={{ marginTop: 24 }}>
        {currentStep < steps.length - 1 && (
          <Button type="primary" onClick={next}>
            Next
          </Button>
        )}
        {currentStep === steps.length - 1 && (
          <Button type="primary" onClick={onComplete}>
            Confirm Order
          </Button>
        )}
        {currentStep > 0 && (
          <Button style={{ marginLeft: 8 }} onClick={prev}>
            Previous
          </Button>
        )}
      </div>
    </>
  );
};

export default Checkout;
