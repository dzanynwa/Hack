import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import { Steps, Button, message } from 'antd';
import { UserOutlined, SolutionOutlined, LoadingOutlined, SmileOutlined } from '@ant-design/icons';
import PersonalInfo from './PersonalInfo';
import Simptomi from './Simptomi';

const { Step } = Steps;

const steps = [
  {
    title: 'Osobne Informacije',
    content: <PersonalInfo/>,
  },
  {
    title: 'Simptomi',
    content: <Simptomi/>,
  },
  {
    title: 'Rezultati',
    content: 'Rezultati',
  },
];

function App() {
  const [step, setStep] = useState(0);

  const next = () =>{
    setStep(step + 1);
  }

  const prev = () =>{
    setStep(step - 1);
  }
  return (
    <div className="bg">
      <div className="row text-center">
        <div className="col-12" style={{padding: '5% 20%'}}>
        <Steps current={step} className="stepTop" style={{padding: '2% 4%'}}>
          {steps.map(item => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <div className="steps-content">{steps[step].content}
        <div className="steps-action">
          {step < steps.length - 1 && (
            <Button type="primary" onClick={() => next()}>
              Next
            </Button>
          )}
          {step === steps.length - 1 && (
            <Button type="primary" onClick={() => message.success('Processing complete!')}>
              Done
            </Button>
          )}
          {step > 0 && (
            <Button style={{ margin: 8 }} onClick={() => prev()}>
              Previous
            </Button>
          )}
      </div></div>
        
        </div>
      </div>
    </div>
  );
}

export default App;
