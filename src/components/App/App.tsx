import React, {useState} from 'react';
import './App.css';
import FirstScreen from "../FirstScreen/FirstScreen";
import SecondScreen from "../SecondScreen/SecondScreen";
import Fight from "../Fight/Fight";
import cassieImg from "../../assets/Cassie.jpg";
import divoraImg from "../../assets/Divora.jpg";
import jaxImg from "../../assets/Jax.jpg";
import jonnyImg from "../../assets/jonny1.jpg";
import kenshiImg from "../../assets/kenshi1.jpg";
import kitamaImg from "../../assets/kitana1.jpg";
import kunlaoImg from "../../assets/kunlao1.jpg";
import lukanImg from "../../assets/lukan1.jpg";
import reptileImg from "../../assets/reptile1.jpg";
import scorpionImg from "../../assets/scorpion1.jpg";
import siraxImg from "../../assets/sirax1.jpg";
import sonyaImg from "../../assets/sonya1.jpg";
import subzeroImg from "../../assets/subzero1.jpg";
import tanyaImg from "../../assets/tanya1.jpg";
import yarmakImg from "../../assets/yarmak1.jpg";
import {useAddToHomescreenPrompt} from "../useAddToHomescreenPrompt";

const fightersArray = [
    {
        name: 'Cassie',
        logo: cassieImg
    },
    {
        name: 'Divora',
        logo: divoraImg
    },
    {
        name: 'Jax',
        logo: jaxImg
    },
    {
        name: 'Jonny',
        logo: jonnyImg
    },
    {
        name: 'Kenshi',
        logo: kenshiImg
    },
    {
        name: 'Kitana',
        logo: kitamaImg
    },
    {
        name: 'KunLao',
        logo: kunlaoImg
    },
    {
        name: 'Lukan',
        logo: lukanImg
    },
    {
        name: 'Reptile',
        logo: reptileImg
    },
    {
        name: 'Scorpion',
        logo: scorpionImg
    },
    {
        name: 'Sirex',
        logo: siraxImg
    },
    {
        name: 'Sonya',
        logo: sonyaImg
    },
    {
        name: 'Subzero',
        logo: subzeroImg
    },
    {
        name: 'Tanya',
        logo: tanyaImg
    },
    {
        name: 'Yarmak',
        logo: yarmakImg
    },
]

const App = () => {

    const [choiceIsMade, setChoiceIsMade] = useState(false);
    const [loading, setLoading] = useState(false);
    const [fight, setFight] = useState(false);
    const [player1, setPlayer1] = useState(0);
    const [prompt, promptToInstall] = useAddToHomescreenPrompt();

    React.useEffect(
        () => {
            if (prompt) {
                console.log(prompt);
            }
        },
        [prompt]
    );

    const onChooseFighter = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (!loading) {
            switch (e.keyCode) {
                case 37:
                    if (player1 === 0) {
                        setPlayer1(4 )
                    }else {
                        setPlayer1(player1 - 1)
                    }
                    break;
                case 38:
                    if ( (player1 >= 0 && player1 <= 4)) {
                        setPlayer1(player1 + 10)
                    } else {
                        setPlayer1(player1 - 5)
                    }
                    break;
                case 39:
                    if (player1 === 14 && !choiceIsMade) {
                    setPlayer1(10 )
                } else {
                    setPlayer1(player1 + 1)
                }
                    break;
                case 40:
                    if ( (player1 >= 10 && player1 <= 14)) {
                        setPlayer1(player1 - 10)
                    } else {
                        setPlayer1(player1 + 5)
                    }
                    break;
                case 13:
                    setLoading(true);
                    setTimeout(() => setChoiceIsMade(true), 2000);
                    return;
            }
        }
    }

    return (
        <div className="App" onKeyDown={onChooseFighter} >
            {!choiceIsMade && !fight &&
                <FirstScreen
                player1={player1}
				fightersArray={fightersArray}
                loading={loading}
                fighter={fightersArray[player1]}
                />}
            {choiceIsMade &&
                <SecondScreen
                    setChoiceIsMade={setChoiceIsMade}
                    setFight={setFight}
					fighter1={fightersArray[player1]}
					fighter2={fightersArray[4]}
                    />}
            {fight && <Fight />}
            <button onClick={promptToInstall}>Add to homescreen</button>
        </div>
    );
}

export default App;
