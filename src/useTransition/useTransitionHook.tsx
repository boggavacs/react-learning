import { useState, useTransition } from 'react';
import Blog from './blog';
const UseTransition = () => {
    const [isPending, startTransition] = useTransition();
    const [tab, setTab] = useState('home');

    const handleTabChange = (newTab: string) => {
        startTransition(() => {
            setTab(newTab);
        });
    };

    return <div className="border p-2">
        <h3 className="border-bottom">useTransition</h3>
        <div className="">
            <ul className="nav nav-tabs p-4">
                <li className="nav-item">
                    <button className={''} onClick={() => handleTabChange('home')}>Home</button>
                </li>
                <li className="nav-item">
                    <button className={''} onClick={() => handleTabChange('profile')}>Blog</button>
                </li>
                <li className="nav-item">
                    <button className={''} onClick={() => handleTabChange('contact')}>Contact</button>
                </li>
            </ul>
            <div className="tab-content">
                {isPending ? <div>Loading...</div> : (
                    <>
                        {tab === 'home' && <div className="tab-pane active">Home Content</div>}
                        {tab === 'profile' && <div className="tab-pane active"><Blog /></div>}
                        {tab === 'contact' && <div className="tab-pane active">Contact Content</div>}
                    </>
                )}
            </div>
        </div>
    </div>

};

export default UseTransition;