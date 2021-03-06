import React from "react";
import DashLayout from "../../components/dashboardLayout"
import {Form,Input,DatePicker,Space,InputNumber,Button} from "antd";


const NewTour =()=>{
    const onFinish =(values)=>{
      console.log(values);
    }
    return(
        
           
           <Form onFinish={onFinish}>
               
           <Form.Item name="title" label="Title" rules={ [{required:true}]}>
               <Input/>
               </Form.Item>
           <Form.Item name="description" label="Description" rules={ [{required:false}]}>
           <Input.TextArea />
           </Form.Item>
           <Space>
           <Form.Item name="date scheduled" label="Date scheduled" rules={ [{required:false}]}>
               <DatePicker/>
           </Form.Item>
           <Form.Item name="duedate" label="Due Date" rules={ [{required:true}]}>
               <DatePicker/>
           </Form.Item>
           </Space>
           <br/>
           <Space> 
           <Form.Item name="seats" label="Seats" rules={ [{required:true}]}>
               <InputNumber/>
           </Form.Item>
           <Form.Item name="price" label="Price ($)" rules={ [{required:true}]}>
               <InputNumber/>
           </Form.Item>
           </Space>
           <Form.Item name="tripDescription" label="About Trip" rules={ [{required:false}]}>
               <Input.TextArea/>
           </Form.Item>
          
            <Button htmlType="Submit" type="primary">Register Tour</Button>

           </Form>

            
        
    )
}
 
export default NewTour;