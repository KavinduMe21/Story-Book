import { UserOutlined, NumberOutlined  } from '@ant-design/icons';
import { Button, Col, Radio, Row } from 'antd';
import TestComponent from './other';
import './other.css';

const App: React.FC = () => {
  return (
    <>
      <Button type="primary"
          style={{
          width: 250,
          height: 250,
          color: "white",
          fontSize: 16,
          fontWeight: "600",
          borderRadius: 10,
        }}>
    <div style={{ fontSize: "90px" }}>
    <Row align="middle">
  <Col>
    <UserOutlined
      style={{
        verticalAlign: 'middle',
        marginLeft: '60px',
        marginTop: '-10px',
      }}
    />
  </Col>
</Row>
      </div>
      
        Search By Customer 
           <br />
            and Asset
      </Button>

      <br />
      <br />


      <Button type="primary"
          style={{
          width: 250,
          height: 250,
          color: "white",
          fontSize: 16,
          fontWeight: "600",
          borderRadius: 10,
          
        }}>
    <div style={{ fontSize: "90px",  }}>
    <Row align="middle">
  <Col>
    <NumberOutlined
      style={{
        verticalAlign: 'middle',
        marginLeft: '60px',
        marginTop: '-10px',
      }}
    />
  </Col>
</Row>
      </div>
        Search By Contract
        < br />
         Number
      </Button>
    </>
    
  );
};

export const Other = App;

export default {
  title: 'Other/Other',
  component: TestComponent,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    color: { control: 'color' },
    label:{ type:"string" }
  }
}
