/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
/*
 * @Author: laotianwy 1695657342@qq.com
 * @Date: 2025-02-17 01:24:46
 * @LastEditors: laotianwy 1695657342@qq.com
 * @LastEditTime: 2025-02-18 18:37:09
 * @FilePath: /mock-api-cms/src/app/auth/login/component/LoginModule/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
'use client';
import { serviceConfig } from '@/config/request/swaggerServiceConfig';
import { useLogin } from '@/hooks/useLogin';
import { Button, Form, Input } from 'antd';
import { useState, useTransition } from 'react';

const LoginForm = () => {
    const loginAction = useLogin();
    const [isPending, startTransition] = useTransition();
    const [capachaKey, setCapachaKey] = useState(0);

    const handleSubmit = (form: any) => {
        startTransition(async () => {
            await loginAction({
                username: form.username,
                password: form.password,
                captcha: form.capacha,
            });
        });
    };

    const refreshCapacha = () => {
        setCapachaKey(new Date().getTime());
    };
    return (
        <div className="w-96 mo:w-[90vw] bg-white rounded-md p-8 mt-[-60px]">
            <h2 className="text-center text-[18px]">mock-api后台管理系统</h2>
            <div className="mt-8">
                <Form
                    onFinish={handleSubmit}
                    labelCol={{ span: 0, offset: 0 }}
                    autoComplete="off"
                >
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: '请输入账号!',
                            },
                        ]}
                    >
                        <Input placeholder="请输入账号" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: '请输入密码!',
                            },
                        ]}
                    >
                        <Input.Password placeholder="请输入密码" />
                    </Form.Item>
                    <Form.Item
                        name="capacha"
                        rules={[
                            {
                                required: true,
                                len: 4,
                                message: '请输入正确的验证码!',
                            },
                        ]}
                    >
                        <div className="flex items-center w-full justify-between">
                            <Input
                                className="w-[60%]"
                                placeholder="请输入验证码"
                            />
                            <img
                                onClick={refreshCapacha}
                                className="ml-2 h-[32px]"
                                src={`${serviceConfig.baseURL}/mock/user/getCaptcha?key=${capachaKey}`}
                                alt="capacha"
                            />
                        </div>
                    </Form.Item>
                    <Form.Item>
                        <Button
                            type="primary"
                            className="w-full"
                            disabled={isPending}
                            htmlType="submit"
                        >
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default LoginForm;
