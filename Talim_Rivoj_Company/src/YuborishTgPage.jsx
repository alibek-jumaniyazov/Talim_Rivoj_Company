// import React from 'react'
// import tgImage from './images/Logo.png'

// export default function YuborishTgPage({ yuborishTg }) {
//   return (
//     <div className={yuborishTg}>
//       <h1>Oxirgi qadam qoldi!</h1>
//       <p>Har bir gap ispoti bilan bo’lgani yaxshi 
// Quyidagi tugmani bosing universitet va hujjatlar talabalar bilan tanishib chiqing</p>
//       <img src="" alt="" />
//       <a href={'https://t.me/+DRbxAuPUWy5mYTUy'}><button className='button'>
//         <div class="svg-wrapper-1">
//           <div class="svg-wrapper">
//             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
//               <path fill="none" d="M0 0h24v24H0z"></path>
//               <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
//             </svg>
//           </div>
//         </div>
//         <span>Obuna bo'lish</span>  
//       </button></a>
//       <img src={tgImage} alt="" className='FooterLogo'/>
//     </div>
//   )
// }

import React from 'react'
import tgImage from './images/Logo.png'

export default function YuborishTgPage({ yuborishTg }) {
  return (
    <div className={yuborishTg}>
      <h1>Oxirgi qadam qoldi!</h1>
      <p>Har bir gap ispoti bilan bo’lgani yaxshi. Kouching metodikasi kafolatlangan tugmani ustiga bosing va shular bilan to’liq tanishib chiqing.</p>
      <img src="" alt="" />
      <a href={'https://t.me/saidabdullo_madaminov'}><button className='button'>
        <div class="svg-wrapper-1">
          <div class="svg-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
            </svg>
          </div>
        </div>
        <span>Obuna bo'lish</span>  
      </button></a>
      <img src={tgImage} alt="" className='FooterLogo'/>
    </div>
  )
}
