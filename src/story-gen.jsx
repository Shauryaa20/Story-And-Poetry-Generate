
// import React, { useState, useEffect } from 'react';
// import { generateStory } from './backend/backend';
// import { useLocation, useNavigate } from 'react-router-dom';

// const StoryGenerator = () => {
//   const [story, setStory] = useState('');
//   const location = useLocation();
//   const navigate = useNavigate();
//   const genre = location.state.genre;
//   const numCharacters = location.state.numCharacters;
//   const storyPlot = location.state.storyPlot || 'default';

//   useEffect(() => {
//     generateStory(setStory, genre, numCharacters, storyPlot);
//   }, []);

//   return (
//     <div style={{
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       minHeight: '100vh',
//       padding: '40px 20px',
//       boxSizing: 'border-box',
//     }}>
//       {story && (
//         <div style={{
//           background: 'rgba(11, 44, 99, 0.95)',
//           backdropFilter: 'blur(4px)',
//           padding: '24px',
//           borderRadius: '12px',
//           boxShadow: '0 4px 10px rgba(0, 0, 0, 0.5)',
//           width: '80%',
//           maxWidth: '800px',
//           overflow: 'hidden',
//         }}>
//           <h2 style={{
//             fontSize: '26px',
//             fontWeight: 'bold',
//             marginBottom: '16px',
//             textAlign: 'center',
//             color: '#f8f8f8',
//             textShadow: '0 0 5px rgba(255, 255, 255, 0.5)',
//           }}>
//             Generated Story
//           </h2>
//           <div>
//             <p style={{
//               whiteSpace: 'pre-wrap',
//               lineHeight: '1.6',
//               fontSize: '18px',
//               color: 'white',
//               textShadow: '0 0 4px rgba(255, 255, 255, 0.3)',
//             }}>
//               {story}
//             </p>
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

// export default StoryGenerator;

import React, { useState, useEffect } from 'react';
import { generateStory } from './backend/backend';
import { useLocation, useNavigate } from 'react-router-dom';

const StoryGenerator = () => {
  const [story, setStory] = useState('');
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const genre = location.state.genre;
  const numCharacters = location.state.numCharacters;
  const storyPlot = location.state.storyPlot || 'default';

  useEffect(() => {
    const fetchStory = async () => {
      setLoading(true);
      await generateStory(setStory, genre, numCharacters, storyPlot);
      setLoading(false);
    };
    fetchStory();
  }, []);

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      padding: '40px 20px',
      boxSizing: 'border-box',
    }}>
      {loading ? (
        <div style={{
          background: 'rgba(11, 44, 99, 0.95)',
          backdropFilter: 'blur(4px)',
          padding: '24px',
          borderRadius: '12px',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.5)',
          width: '80%',
          maxWidth: '800px',
          textAlign: 'center',
        }}>
          <h2 style={{
            fontSize: '26px',
            fontWeight: 'bold',
            marginBottom: '20px',
            color: '#f8f8f8',
            textShadow: '0 0 5px rgba(255, 255, 255, 0.5)',
          }}>
            Generating Your Story...
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
          background: 'rgba(11, 44, 99, 0.95)',
          backdropFilter: 'blur(4px)',
          padding: '24px',
          borderRadius: '12px',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.5)',
          width: '80%',
          maxWidth: '800px',
          overflow: 'hidden',
        }}>
          <h2 style={{
            fontSize: '26px',
            fontWeight: 'bold',
            marginBottom: '16px',
            textAlign: 'center',
            color: '#f8f8f8',
            textShadow: '0 0 5px rgba(255, 255, 255, 0.5)',
          }}>
            Generated Story
          </h2>
          <div>
            <p style={{
              whiteSpace: 'pre-wrap',
              lineHeight: '1.6',
              fontSize: '18px',
              color: 'white',
              textShadow: '0 0 4px rgba(255, 255, 255, 0.3)',
            }}>
              {story}
            </p>
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

export default StoryGenerator;
