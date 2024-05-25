import { useState } from 'react';
import orderCoverImage from '../../../assets/shop/banner2.jpg'
import Cover from '../../Shard/Cover/Cover'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../Hooks/UseMenu';
import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drink']
    const {category} = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex)
    console.log(tabIndex)
    const [menu] = useMenu()


    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const drink = menu.filter(item => item.category === 'drink');

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | order</title>
            </Helmet>
            <Cover img={orderCoverImage} title="Order Food"></Cover>
            <Tabs className='mt-10 mb-10 text-center' defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>SALAD</Tab>
                    <Tab>PIZZA</Tab>
                    <Tab>SOUP</Tab>
                    <Tab>DESSERT</Tab>
                    <Tab>DRINK</Tab>
                </TabList>
                <TabPanel>
                    <OrderTab items={salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={pizza}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={soup}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={dessert}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={drink}></OrderTab>
                </TabPanel>
            </Tabs>
        </div>
    )
}

export default Order
