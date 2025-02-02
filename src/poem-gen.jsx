// import React, { useState, useEffect } from 'react';
// import { generatePoem } from './backend/backend';
// import { useLocation } from 'react-router-dom';

// const PoemGenerator = () => {
//   const [poem, setPoem] = useState('');
//   const location = useLocation();
//   const genre = location.state.genre;
//   const prompt = location.state.prompt;
//   const wordLimit = location.state.wordLimit;

//   const generate = async () => {
//     await generatePoem(setPoem, genre, prompt, wordLimit);
//   };

//   useEffect(() => {
//     generate();
//   }, []);

//   return (
//     <div style={{
//       maxWidth: '800px',
//       margin: '0 auto',
//       padding: '20px',
//     }}>
//       {poem && (
//         <div style={{
//           backgroundColor: '#ffffff',
//           padding: '24px',
//           borderRadius: '4px',
//           boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
//         }}>
//           <h2 style={{
//             fontSize: '24px',
//             fontWeight: 'bold',
//             marginBottom: '16px',
//             textAlign: 'center',
//           }}>
//             Generated Poem
//           </h2>
//           <div style={{
//             textAlign: 'center',
//           }}>
//             {poem.split('\n').map((line, index) => (
//               <p key={index} style={{
//                 margin: '8px 0',
//               }}>
//                 {line || '\u00A0'}
//               </p>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PoemGenerator;

import React, { useState, useEffect } from 'react';
import { generatePoem } from './backend/backend';
import { useLocation } from 'react-router-dom';

const PoemGenerator = () => {
  const [poem, setPoem] = useState('');
  const location = useLocation();
  const genre = location.state.genre;
  const prompt = location.state.prompt;
  const wordLimit = location.state.wordLimit;

  const generate = async () => {
    await generatePoem(setPoem, genre, prompt, wordLimit);
  };

  useEffect(() => {
    generate();
  }, []);

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      padding: '20px',
    }}>
      {poem && (
        <div style={{
          background: 'rgba(11, 44, 99, 0.6)', // Dark royal blue with slight transparency
          backdropFilter: 'blur(5px)', // Soft blur effect
          padding: '24px',
          borderRadius: '12px',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)', // Stronger shadow for depth
          width: '80%',
          maxWidth: '800px',
        }}>
          <h2 style={{
            fontSize: '26px',
            fontWeight: 'bold',
            marginBottom: '16px',
            textAlign: 'center',
            color: 'white',
            textShadow: '0 0 12px rgba(255, 255, 255, 0.8)', // Strong glow effect
          }}>
            Generated Poem
          </h2>
          <div style={{ textAlign: 'center' }}>
            {poem.split('\n').map((line, index) => (
              <p key={index} style={{
                margin: '8px 0',
                fontSize: '18px',
                lineHeight: '1.5',
                color: 'white',
                textShadow: '0 0 10px rgba(255, 255, 255, 0.7)', // Glow effect for poem text
              }}>
                {line || '\u00A0'}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PoemGenerator;

