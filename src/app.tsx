// import React from 'react';

// const App = () => {
//   return ();
// };
//함수 이름 첫 글자 대문자

// export default App;
// 기본형식





//! 함수 이름 첫 글자 대문자

import React from 'react';

import JJy from '../static/basic-data'
import hoyeong from '../static/hoyeong'


import JO from './jjy'
import Ulli from './Ulli'



const App:React.FC = () => {
  return (
    <div>
      <JO textNode={JJy} />
      <h1>안녕</h1>
      <Ulli listItem={hoyeong}/>
    </div>
  );
};

export default App;