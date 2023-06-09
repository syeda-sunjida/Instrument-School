import { useState } from 'react';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


import { useParams } from 'react-router';
import { Helmet } from 'react-helmet-async';

import useClasses from '../../../hooks/useClasses';
import EnrollTab from '../EnrollTab/EnrollTab';
 
const Enroll = () => {
    const categories = ['popular', 'classic', 'famous'];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [classes] = useClasses();
    console.log(classes)
    const popular = classes.filter(item => item.category === 'popular');
    const classic = classes.filter(item => item.category === 'classic');
    const famous = classes.filter(item => item.category === 'famous');
    

    return (
        <div>
            <Helmet>
                <title> Singerella | Enroll Class</title>
            </Helmet>
            
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Popular</Tab>
                    <Tab>Classic</Tab>
                    <Tab>Famous</Tab>
                    
                </TabList>
                <TabPanel>
                    <EnrollTab items={popular}></EnrollTab>
                </TabPanel>
                <TabPanel>
                    <EnrollTab items={classic}></EnrollTab>
                </TabPanel>
                <TabPanel>
                    <EnrollTab items={famous}></EnrollTab>
                </TabPanel>
                
            </Tabs>
        </div>
    );
};

export default Enroll;