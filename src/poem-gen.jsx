
// import React, { useState, useEffect } from 'react';
// import { generatePoem } from './backend/backend';
// import { useLocation, useNavigate } from 'react-router-dom';

// const PoemGenerator = () => {
//   const [poem, setPoem] = useState('');
//   const location = useLocation();
//   const navigate = useNavigate();
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
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       height: '100vh',
//       padding: '20px',
//     }}>
//       {poem && (
//         <div style={{
//           background: 'rgba(11, 44, 99, 0.6)',
//           backdropFilter: 'blur(5px)',
//           padding: '24px',
//           borderRadius: '12px',
//           boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)',
//           width: '80%',
//           maxWidth: '800px',
//         }}>
//           <h2 style={{
//             fontSize: '26px',
//             fontWeight: 'bold',
//             marginBottom: '16px',
//             textAlign: 'center',
//             color: 'white',
//             textShadow: '0 0 12px rgba(255, 255, 255, 0.8)',
//           }}>
//             Generated Poem
//           </h2>
//           <div style={{ textAlign: 'center' }}>
//             {poem.split('\n').map((line, index) => (
//               <p key={index} style={{
//                 margin: '8px 0',
//                 fontSize: '18px',
//                 lineHeight: '1.5',
//                 color: 'white',
//                 textShadow: '0 0 10px rgba(255, 255, 255, 0.7)',
//               }}>
//                 {line || '\u00A0'}
//               </p>
//             ))}
//           </div>
//           <div style={{
//             display: 'flex',
//             justifyContent: 'center',
//             marginTop: '20px',
//           }}>
//             <button
//               onClick={() => navigate('/')}
//               style={{
//                 padding: '10px 20px',
//                 fontSize: '16px',
//                 backgroundColor: '#f8f8f8',
//                 color: 'rgba(11, 44, 99, 0.95)',
//                 border: 'none',
//                 borderRadius: '6px',
//                 cursor: 'pointer',
//                 boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
//                 transition: 'transform 0.2s',
//               }}
//               onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
//               onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
//             >
//               Back to Home
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PoemGenerator;

import React, { useState, useEffect } from 'react';
import { generatePoem } from './backend/backend';
import { useLocation, useNavigate } from 'react-router-dom';

const PoemGenerator = () => {
  const [poem, setPoem] = useState('');
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const genre = location.state.genre;
  const prompt = location.state.prompt;
  const wordLimit = location.state.wordLimit;

  useEffect(() => {
    const fetchPoem = async () => {
      setLoading(true);
      await generatePoem(setPoem, genre, prompt, wordLimit);
      setLoading(false);
    };
    fetchPoem();
  }, []);

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      padding: '20px',
    }}>
      {loading ? (
        <div style={{
          background: 'rgba(11, 44, 99, 0.6)',
          backdropFilter: 'blur(5px)',
          padding: '24px',
          borderRadius: '12px',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)',
          width: '80%',
          maxWidth: '800px',
          textAlign: 'center',
        }}>
          <h2 style={{
            fontSize: '26px',
            fontWeight: 'bold',
            marginBottom: '20px',
            color: 'white',
            textShadow: '0 0 12px rgba(255, 255, 255, 0.8)',
          }}>
            Crafting Your Poetry...
          </h2>
          <div style={{
            width: '100%',
            height: '4px',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '2px',
            overflow: 'hidden',
          }}>
            <div
              style={{
                width: '30%',
                height: '100%',
                backgroundColor: '#f8f8f8',
                borderRadius: '2px',
                animation: 'loading 1.5s infinite ease-in-out',
              }}
            />
          </div>
          <style>
            {`
              @keyframes loading {
                0% { transform: translateX(-100%); }
                100% { transform: translateX(400%); }
              }
            `}
          </style>
        </div>
      ) : (
        <div style={{
          background: 'rgba(11, 44, 99, 0.6)',
          backdropFilter: 'blur(5px)',
          padding: '24px',
          borderRadius: '12px',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)',
          width: '80%',
          maxWidth: '800px',
        }}>
          <h2 style={{
            fontSize: '26px',
            fontWeight: 'bold',
            marginBottom: '16px',
            textAlign: 'center',
            color: 'white',
            textShadow: '0 0 12px rgba(255, 255, 255, 0.8)',
          }}>
            Generated Poetry
          </h2>
          <div style={{ textAlign: 'center' }}>
            {poem.split('\n').map((line, index) => (
              <p key={index} style={{
                margin: '8px 0',
                fontSize: '18px',
                lineHeight: '1.5',
                color: 'white',
                textShadow: '0 0 10px rgba(255, 255, 255, 0.7)',
              }}>
                {line || '\u00A0'}
              </p>
            ))}
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '20px',
          }}>
            <button
              onClick={() => navigate('/')}
              style={{
                padding: '10px 20px',
                fontSize: '16px',
                backgroundColor: '#f8f8f8',
                color: 'rgba(11, 44, 99, 0.95)',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                transition: 'transform 0.2s',
              }}
              onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
            >
              Back to Home
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PoemGenerator;