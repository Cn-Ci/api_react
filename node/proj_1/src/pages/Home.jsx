import 'bootstrap/dist/css/bootstrap.min.css';
import {CustomBtn} from '../components/CustomBtn';
import { MdKeyboardVoice } from 'react-icons/md';
import React, {useState} from "react";
import '../components/styles/customBtn.css';

export function Home() {

    const changeText = (evt) => {
        const txt = evt.currentTarget.innerText;
        console.log(txt);
        setCurrentLang(txt.trim());
    }

    const [currentLang, setCurrentLang] = useState('France');

    const langages = {
        'France' : 'Quel langue parlez-vous ?',
        'Italie' : 'Che lingua parli?',
        'Le Japon' : 'あなたは何語を話しますか？',
        'Allemagne' : 'Welche Sprache sprichst du?',
        'Tunisie' : 'Ana lora tahdar ?',
    }

    return (
        <div classes="d-flex justify-content-center">
            <div className="App">
                <CustomBtn onMouseOver={changeText} classes="btn btn-lg m-3 py-3 btn-lang" bgColor="linear-gradient(to right, #1864D6, #ffffff, #E30F0F)" textColor="black" border="white" Icon={MdKeyboardVoice} text="France"/> 
                <CustomBtn onMouseOver={changeText} classes="btn btn-lg m-3 py-3 btn-lang" bgColor="linear-gradient(to right, #04D224, #ffffff, #E30F0F)" textColor="black" border="white" Icon={MdKeyboardVoice} text="Italie"/>
                <CustomBtn onMouseOver={changeText} classes="btn btn-lg m-3 py-3 btn-lang" bgColor="radial-gradient(ellipse at center, #EF0808, #ffffff, #ffffff)" textColor="black" border="white" Icon={MdKeyboardVoice} text="Le Japon"/>
                <CustomBtn onMouseOver={changeText} classes="btn btn-lg m-3 py-3 btn-lang" bgColor="linear-gradient(to top, #FF0101, #FFC501, #000000)" textColor="black" border="white" Icon={MdKeyboardVoice} text="Allemagne"/>
                <CustomBtn onMouseOver={changeText} classes="btn btn-lg m-3 py-3 btn-lang" bgColor="radial-gradient(ellipse at center, #FF0101, #FFFFFF, #FF0101)" textColor="black" border="white" Icon={MdKeyboardVoice} text="Tunisie"/>
            </div>
            <p>{langages[currentLang]}</p>
        </div>
    );
}