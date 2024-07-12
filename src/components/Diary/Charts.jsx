import { useState } from 'react';

const Charts = ({ eingabe, setEingabe }) => {
  //const [inputText, setInputText] = useState('');

  const handleText = (e) => {
    e.preventDefault();
    setEingabe(e.target.value);
  };

  //console.log(eingabe);

  return (
    <div>
      <textarea
        className="mt-1 block w-full h-full border border-gray-300 p-2 rounded-md resize-none"
        placeholder="Hier bitte eingeben nach welchen Kriterien du den Text analysieren möchtest :)."
        value={eingabe}
        onChange={handleText}
      ></textarea>
    </div>
  );
};

export default Charts;
