import { Button, Form, Input, InputNumber, Select } from 'antd';
import { useEffect, useState } from 'react';

import { addCarProfile, CarBrandType, CarProfileValuesType, getCarBrandList } from '../lib/carProfile';

export const AddCarProfile = () => {
    const [theArray, setTheArray] = useState<CarBrandType []>([]);

    const onSubmit = (values: CarProfileValuesType) => {
        addCarProfile(values);
    };

    useEffect(() => {
        const fetchData = async () => {
            setTheArray(await getCarBrandList());
        }
        fetchData()
    }, []);
    return (
        <>
            <Form
                layout="horizontal"
                style={{ maxWidth: 300 }}
                onFinish={onSubmit}
            >

                <Form.Item name="carName">

                    <Input
                        placeholder="Nazwa samochodu"
                        style={{ width: "200px" }}
                    />
                </Form.Item>
                <Form.Item name="carBrand">

                    <Select
                        showSearch
                        placeholder="Wybierz markę samochodu"
                        showArrow={false}
                        style={{ width: "200px" }}
                        options={theArray.map((item) => ({ label: item.name, value: item.name }))}
                        filterOption={(input, option) =>
                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                        }

                    />
                </Form.Item>
                <Form.Item name="carMileage">
                    <InputNumber
                        placeholder="Wpisz przebieg auta"
                        style={{ width: "200px" }}
                        controls={false}
                    />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Dodaj
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};
