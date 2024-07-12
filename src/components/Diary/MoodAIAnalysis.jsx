import { useRef, useState } from 'react';
import { Charts } from '@/components/Diary';
import { Getchatgpt } from './GetChatGpt';

const MoodAIAnalysis = ({ entries }) => {
  const modalRef = useRef();

  const analysetext = entries.map((entries) => entries.content);

  const text = JSON.stringify(analysetext);

  //console.log(Charts);

  const [showResult, setShowResult] = useState(false);

  //console.log('Übergabetext an ChatGpt:', { text });

  const handleAISummary = async (text) => {
    text.preventDefault();
    if (text != []) {
      setShowResult(true);
    }
  };

  const [eingabe, setEingabe] = useState('');

  let analyseart = '';

  if (eingabe != '')
    analyseart =
      'Erstelle eine kurze Stimmungsanalyse der Gesamtstimmungs aller Einträge nach folgenden Methoden :  ' +
      eingabe;
  //console.log('test:', eingabe);

  return (
    <>
      <div className="fixed bottom-4 right-4">
        <button
          onClick={() => modalRef.current.showModal()}
          className="bg-purple-400 hover:bg-purple-300 text-white font-bold py-2 px-4 rounded-full shadow-lg w-10 h-10"
        >
          ✨
        </button>
      </div>
      <dialog
        id="modal-note"
        className="modal"
        ref={modalRef}
      >
        <div className="modal-box h-[600px] py-0 w-11/12 max-w-5xl">
          <div className="modal-action items-center justify-between mb-2">
            <h1 className="text-2xl text-center">
              Get your AI Gen Mood Analysis
            </h1>
            <form method="dialog">
              <button className="btn">&times;</button>
            </form>
          </div>
          <div className="flex items-center gap-3">
            <div className="textarea textarea-success w-1/2 h-[400px] overflow-y-auto">
              {showResult && (
                <Getchatgpt
                  text={text}
                  analyseart={analyseart}
                />
              )}
            </div>
            <div className="textarea textarea-success w-1/2 h-[400px] overflow-y-scroll">
              <Charts
                eingabe={eingabe}
                setEingabe={setEingabe}
              />
            </div>
          </div>
          <div className="flex justify-center">
            <button
              className="mt-5 btn bg-purple-500 hover:bg-purple-400 text-white"
              onClick={handleAISummary}
            >
              Gen AI mood analysis ✨
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default MoodAIAnalysis;
