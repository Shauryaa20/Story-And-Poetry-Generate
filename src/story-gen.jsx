// import React, { useState, useEffect } from 'react';
// import { generateStory } from './backend/backend';
// import { useLocation } from 'react-router-dom';

// const StoryGenerator = () => {
//   const [story, setStory] = useState('');
//   const location = useLocation();
//   const genre = location.state.genre;
//   const numCharacters = location.state.numCharacters;
//   const storyPlot = location.state.storyPlot || 'default';

//   useEffect(() => {
//     generateStory(setStory, genre, numCharacters, storyPlot);
//   }, []);

//   return (
//     <div style={{
//       maxWidth: '800px',
//       margin: '0 auto',
//       padding: '20px',
//     }}>
//       {story && (
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
//           }}>
//             Generated Story
//           </h2>
//           <div>
//             <p style={{
//               whiteSpace: 'pre-wrap',
//               lineHeight: '1.6',
//             }}>
//               {story}
//             </p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default StoryGenerator;

import React, { useState, useEffect } from 'react';
import { generateStory } from './backend/backend';
import { useLocation } from 'react-router-dom';

const StoryGenerator = () => {
  const [story, setStory] = useState('');
  const location = useLocation();
  const genre = location.state.genre;
  const numCharacters = location.state.numCharacters;
  const storyPlot = location.state.storyPlot || 'default';

  useEffect(() => {
    generateStory(setStory, genre, numCharacters, storyPlot);
  }, []);

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh', // Allows expansion if content grows
      padding: '40px 20px', // Adds top padding to prevent cutoff
      boxSizing: 'border-box', // Ensures padding doesn't cause overflow
    }}>
      {story && (
        <div style={{
          background: 'rgba(11, 44, 99, 0.95)', // Dark royal blue
          backdropFilter: 'blur(4px)',
          padding: '24px',
          borderRadius: '12px',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.5)',
          width: '80%',
          maxWidth: '800px',
          overflow: 'hidden', // Ensures no weird scrolling issues
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
        </div>
      )}
    </div>
  );
};

export default StoryGenerator;


