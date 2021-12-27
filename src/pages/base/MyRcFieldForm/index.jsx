import React, {Component} from 'react';
import Form, { Field, useForm } from 'rc-field-form'
import { Button, Input } from 'antd';

const nameRules = {required: true, message: "请输入姓名！"};
const passwordRules = {required: true, message: "请输入密码！"};

function MyRcFieldForm(props) {
  const [ form ] = Form.useForm();

  const onFinish = (val) => {
    console.log('onFinish===', val);
  }

  const onFinishFailed = val => {
    console.log('onFinishFailed===', val);
  }

  return (
    <div>
      <h3>MyRcFieldForm</h3>
      <Form
        form={form}
        onFinish={onFinish}
        layout="horizontal"
        onFinishFailed={onFinishFailed}
      >
        <Field name='username' label="姓名" rules={nameRules}>
          <Input placeholder='username' />
        </Field>
        <Field name='password' label="密码" rules={passwordRules}>
          <Input placeholder='password' />
        </Field>
        <Field>
          <Button htmlType="submit">submit</Button>
        </Field>
      </Form>
    </div>
  );
}

export default MyRcFieldForm;

// export default class MyRcFieldForm extends Component {
//   formRef = React.createRef();

//   componentDidMount() {
    
//   }

//   onFinishFailed = val => {
//     console.log('onFinishFailed==', val);
//   }

//   onFinish = val => {
//     console.log('onFinish====', val);
//   }

//   render() {
//     return (
//       <div>
//         <h3>MyRcFieldForm</h3>
//         <Form
//           ref={this.formRef}
//           onFinishFailed={this.onFinishFailed}
//           onFinish={this.onFinish}
//         >
//           <Field
//             name='username'
//             rules={nameRules}
//           >
//             <Input placeholder='username' />
//           </Field>
//           <Field
//             name='password'
//             rules={passwordRules}
//           >
//             <Input placeholder='password' />
//           </Field>
//           <Field>
//             <Button htmlType='submit'>submit</Button>
//           </Field>

//         </Form>
//       </div>
//     )
//   }
// }
