import React, {useState, useEffect} from 'react';
import {useRouter} from 'next/router';
import dayjs from 'dayjs';
import styles from '../styles/detail.module.scss'
import Link from 'next/link';

import {
    Button,
    DatePicker,
    Form,
    Input,
    InputNumber,
} from 'antd';


const App: React.FC = () => {
    const onFinish = (values: any) => {
        const formattedValues = {
            ...values,
            projectDeadline: values.projectDeadline ? values.projectDeadline.format('YYYY-MM-DD') : null
        };
        console.log('Form data:', formattedValues);
    };
    const [formData] = Form.useForm();
    const [isEditing, setIsEditing] = useState(false);
    const router = useRouter();
    const {projectId} = router.query;
    console.log(projectId);
    useEffect(() => {
        if (projectId) {
            console.log('进来了');
            setIsEditing(true);
            // Fetch the project data by ID and populate the form (mocked here)
            const fetchedData = {
                projectName: 'Existing Project',
                projectDescription: 'This is an existing project description',
                projectNeedETH: 10,
                projectLink: 'http://example.com',
                projectCreator: 'John Doe',
                projectDeadline: '2023-12-31'
            };
            fetchedData.projectDeadline = dayjs(fetchedData.projectDeadline, 'YYYY-MM-DD');
            formData.setFieldsValue(fetchedData);

            console.log(formData, 'formData');
        }
    }, [projectId, formData]);


    return (
        <div className={styles.container}>
            <Link href="/" className={styles.rightBtn}>Exit</Link>
            <h1>Project Registration</h1>
            <Form
                className={styles.formBox}
                labelCol={{span: 7}}
                wrapperCol={{span: 24}}
                layout="horizontal"
                form={formData}
                size={'large'}
                style={{width: 640}}
                onFinish={onFinish}
            >
                <Form.Item
                    label="Project Name"
                    disabled={isEditing}
                    name="projectName"
                    rules={[{required: true, message: 'Please input the project name!'}]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    label="Project Description"
                    name="projectDescription"
                    rules={[{required: true, message: 'Please input the project description!'}]}
                >
                    <Input.TextArea rows={4}/>
                </Form.Item>

                <Form.Item
                    label="Project Link"
                    name="projectLink"
                    rules={[{required: true, message: 'Please input the project link!'}]}
                >
                    <Input addonBefore="https://"/>
                </Form.Item>
                <Form.Item
                    label="Project Creator"
                    disabled={isEditing}
                    name="projectCreator"
                    rules={[{required: true, message: 'Please input the project creator!'}]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    label="Project Need ETH"
                    disabled={isEditing}
                    name="projectNeedETH"
                    rules={[{required: true, message: 'Please input the amount of ETH needed!'}]}
                >
                    <InputNumber style={{width: 200}}
                    />
                </Form.Item>
                <Form.Item
                    label="Project Deadline"
                    disabled={isEditing}
                    name="projectDeadline"
                    rules={[{required: true, message: 'Please input the project deadline!'}]}
                >
                    <DatePicker style={{width: 200}} format={'YYYY-MM-DD'}/>
                </Form.Item>
                <Form.Item style={{'textAlign': 'right'}}>
                    <Button type="primary" htmlType="submit">
                        {isEditing ? 'Update' : 'Submit'}
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};
export default App;
