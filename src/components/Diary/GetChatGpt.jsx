import React, { useState, useEffect } from 'react';

export const Getchatgpt = ({ text, analyseart }) => {
  //console.log(`getchatgpt text : ${text}`);

  const [response, setResponse] = useState(null);

  if (analyseart == '') {
    analyseart =
      "'1. Analysiere die Stiummung der folgenden Einträge und gebe mir darüber eine gesamtheitliche nett formulierter Aussage zurück, mit dem Textstart : Stimmungsbarometer:'";
  }

  useEffect(() => {
    // Funktion für den POST-Request
    const sendPostRequest = async () => {
      const data = {
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: `${analyseart}`,
          },
          {
            role: 'user',
            content: `${text}`,
          },
        ],
      };

      try {
        const result = await fetch(
          'https://gen-ai-wbs-consumer-api.onrender.com/api/v1/chat/completions',
          {
            method: 'POST', // Methode ist POST
            headers: {
              'Content-Type': 'application/json', // Header setzen
              Provider: 'open-ai',
              Mode: 'production',
              Authorization: 'dfyygp207w8j90vydgxj0c',
              _id: '6687f882d6853d82e4e752be',
              name: 'Christoph Kuri',
              batch: 'WDG#017',
              email: 'chkuri@chkuri.de',
              token: 'dfyygp207w8j90vydgxj0c',
              expireAt: '2024-07-05T13:43:30.420Z',
              __v: '0',
            },
            body: JSON.stringify(data), // Body als JSON-String
          }
        );

        const json = await result.json();
        setResponse(json); // Setze die Antwort in den State
      } catch (error) {
        console.error('Error:', error);
      }
    };

    // Aufruf der Funktion
    sendPostRequest();
  }, []); // Leeres Array als Abhängigkeit sorgt dafür, dass der Effekt nur einmal ausgeführt wird

  if (response === null) {
    return <p>Loading...</p>;
  }

  console.log(response);

  const content = response.message.content;

  return (
    <div>{response ? <div>{<p>{content}</p>}</div> : <p>Loading...</p>}</div>
  );
};
