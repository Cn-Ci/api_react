import { CustomActivity } from '../components/CustomActivity';
import { GiNightSleep } from 'react-icons/gi';
import { MdFastfood } from 'react-icons/md';
import { IoMedicalOutline } from 'react-icons/io5';
import { useState } from 'react';
import { SeLoger, SeNourrir, SeSoigner } from './';

export const Activity = () => {

    const [page, setPage] = useState('null')
    const handleClick = (route) => {
        setPage(route)
        console.log(route)
    };

    return (
        <div className="activity mt-5">
            <div className="row justify-content-center align-items-center">
                <div className="col-4 col-md-3">
                    <CustomActivity route="SeLoger" classes="btn-md" borderRadius="40px" handleClick={handleClick} bgColor="black" textColor="white" text="Se Loger" Icon={GiNightSleep} /> 
                </div>
                <div className="col-4 col-md-3">
                    <CustomActivity  route="SeNourrir" classes="btn-md" borderRadius="40px" handleClick={handleClick} bgColor="black" textColor="white" text="Se Nourrir" Icon={MdFastfood} /> 
                </div>
                <div className="col-4 col-md-3">
                    <CustomActivity route="SeSoigner" classes="btn-md" borderRadius="40px" handleClick={handleClick} bgColor="black" textColor="white" text="Se Soigner" Icon={IoMedicalOutline} /> 
                </div>
            </div>

            <div className="mt-5">{page === 'SeLoger' && <SeLoger/>}</div>
            <div>{page === 'SeNourrir' && <SeNourrir/>}</div>
            <div>{page === 'SeSoigner' && <SeSoigner/>}</div>
        </div>
    );
};


