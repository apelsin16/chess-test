import React, {useEffect} from 'react';

type SecondScreenProps = {
    setChoiceIsMade: Function,
    setFight: Function,
    fighter1: { name: string; logo: string; }
    fighter2: { name: string; logo: string; }
}

const SecondScreen = ({setChoiceIsMade, setFight, fighter1, fighter2}:SecondScreenProps) => {

    const redirect = () => {
        setFight(true);
        setChoiceIsMade(false);
    }

    useEffect(() => {
        setTimeout(() => redirect(),4000)
    })

    return (
        <div className="SecondScreen">
            <span><img src={fighter1.logo} alt={fighter1.name}/></span>
            VS
            <span><img src={fighter2.logo} alt={fighter2.name}/></span>
        </div>
    );
}

export default SecondScreen;


