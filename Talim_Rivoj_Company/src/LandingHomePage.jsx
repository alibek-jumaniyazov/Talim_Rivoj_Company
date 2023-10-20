// import React from 'react'
// import video1 from './images/video.mp4'
// import img from './images/004.png'
// import poster1 from './images/add.jpg'
// import { Link } from 'react-router-dom'

// export default function LandingHomePage() {


//   return (
//     <div className='LandingHomePage'>
//       {/* Mobila Version */}
//       <div className="header">
//         <div className="animated-text">
//           <img src={img} alt="" width={"120px"} />
//           <div className="line">O'zbekiston Diplomi</div>
//           <img src={img} alt="" width={"120px"} />
//           <div className="line">O'zbekiston Universiteti</div>
//           <img src={img} alt="" width={"120px"} />

//         </div>
//       </div>
//       <div className="main">
//         <div className="mainHeaderInfo">
//           <p>15 - SENTABR</p>
//           <span>Talim Rivoj</span>
//         </div>
//         <div className="mainTextDiv">
//            <h5 className="mainText">
//           Keyingi yilni kutmang
//           Vaqt sotib olishni imkoni yo’q
//           1 hafta ichida O’zbekistonda talaba bo’ling
//         </h5>
//         </div>
       
//         <div className="mainBigInfo">
//           <div className="imgButton">
//             {/* <img src={img1} alt="" /> */}
//             <div id="video-wrapper">
//               <video controls width="350" height="220" poster={poster1} >
//                 <source src={video1} type='video/mp4' />
//               </video>
//             </div>
//             <Link to={'register'}>  <button>Ro'yxatdan o'tish</button></Link>
//           </div>
//           <p>Shoshiling! Joylar soni cheklangan</p>
//         </div>
//         <div className="mainInfos">
//           <p>1 Hafta Ichida :</p>
//           <ul>
//             <div className="MinInfosLi">
//               <li>Kontraktingizni 5 yildan keyin to’laysiz Xavotir olmang foizsiz bosh og’riqlarsiz ta’lim krediti xavotirga o’rin yo’q</li>
//             </div>
//             <div className="MinInfosLi">
//               <li>Boshingizni devorga urish shart bo’lmagan xolda Imtixonga kirish yoki javob kutish shart emas</li>
//             </div>
//             <div className="MinInfosLi">
//               <li>Hafta davomida sizga 1000$ qiymatdagi biznes treninglar SMM mobilografiya treding online darsliklari sovg’a qilinadi </li>
//             </div>
//             <div className="MinInfosLi">
//               <li>Kontrakt to’lovingizni 1 mln to’lab beriladi va registratsiya to’lovidan ozod bo’lasiz natijada faqatgina kompaniya to’lovini qilasiz </li>
//             </div>
//             <div className="MinInfosLi">
//               <li>Hafta davomida universitetni o’rganib chiqishingiz uchun video roliklar Prezentatsiyalar ofisimizda oilangiz bilan uchrashuvlar</li>
//             </div>
//           </ul>
//         </div>
//       </div>
//       <div className="footer">
//         <div className="footerOne">
//           <p className="footerName">Ta'lim Rivoj Company</p>
//           <span className="academyInfo">Talaba bo’lish uchun.Talabalikga hujjat topshirish 25.09.2023 yilgacha davom etadi
//             Manzil: Darital Savdo Majmuasi Hyundai Avto Salon yonida </span>
//           <p className="phoneNumber">+998 90 077 00 67</p>
//           <span className="infoData">Barcha huquqlar himoyalangan, 2023.</span>
//         </div>
//       </div>
//     </div>
//   )
// }

import React from 'react'
import video1 from './images/video.mp4'
import img from './images/004.png'
import poster1 from './images/add.jpg'
import { Link } from 'react-router-dom'

export default function LandingHomeSotuvPage() {


  return (
    <div className='LandingHomePage sotuvPage'>
      {/* Mobila Version */}
      <div className="header">
        <div className="animated-text">
          <img src={img} alt="" width={"120px"} />
          <div className="line">Yo’qdan bor qiling !</div>
          <img src={img} alt="" width={"120px"} />
          <div className="line">Yo’qdan bor qiling !</div>
          <img src={img} alt="" width={"120px"} />

        </div>
      </div>
      <div className="main">
        <div className="mainHeaderInfo">
          <p>27 - OKTABR</p>
          <span>Dars Boshlanadi</span>
        </div>
        <div className="mainTextDiv">
           <h5 className="mainText">
           O’zingizni arzon baxolashni bas qiling. Ishsiz qolishdan ko’ra sizsiz qolish qimmatga tushadigan, 51 kun ichida Sotuv mashinasiga aylaning.
        </h5>
        </div>
       
        <div className="mainBigInfo">
          <div className="imgButton">
            {/* <img src={img1} alt="" /> */}
            <div id="video-wrapper">
              <video controls width="100%"  height="220" poster={poster1} >
                <source src={video1} type='video/mp4' />
              </video>
            </div>
            <Link to={'register'}>  <button>Ro'yxatdan o'tish</button></Link>
          </div>
          <p>Jami 15 ta joy, 6 ta joy qoldi!</p>
        </div>
        <div className="mainInfos">
          <p>Ushbu imkoniyatlarga egalik qilish hisi sizni uxlatmayotgan bo’lsa, kursda o’qing yoki o’qiting !</p>
          <ol>
            <div className="MinInfosLi">
              <li>Zamonaviy kasb egasisiz sizda na mijoz bor, bor bo’lsa ham uzoq muddatda qimmat narxda o’zingizni sota olmaslik stressidan charchagan bo’lsangiz</li>
            </div>
            <div className="MinInfosLi">
              <li>Nimadan qayerdan boshlay o’xshaydimi o’xshamaydimi degan qo’rquvlardan qutilib qorong’ulikni fanarik bilan yoritib yo’lga chiqish vaqti keldi deb o’ylasangiz</li>
            </div>
            <div className="MinInfosLi">
              <li>Sotuvda faoliyat yuritasiz, Ertalabdan kechgacha ish joyingizdasiz lekin vaqtga energiyaga yarasha haq olishni xoxlasangiz</li>
            </div>
            <div className="MinInfosLi">
              <li>Sotuvni yaxshi bilmaganligingiz uchun faqatgina bepul sinov muddatdan nariga o’ta olmaslikdan qutilib muhim shaxsga aylanishni istasangiz</li>
            </div>
            <div className="MinInfosLi">
              <li>Ishchi miyyadan ishlatuvchi miyyaga sakrab o’tib biznesga sherik bo’lish bilim va ko’nikmalarini egallashni maqsad qilgan bo’lsangiz</li>
            </div>
            <div className="MinInfosLi">
              <li>Gap eshituvchi emas gapingiz o’tadigan lavozimda menejerlikdan o’tib raxbarlik bayrog’ini ko’tarishim shart desangiz</li>
            </div>

            <div className="MinInfosLi">
              <li>Sizga berilgan vaqtni 150$ ga emas 1500$+ ko’tarishni va jamoaning qo’llari bilan ishlashni plan qilgan bo’lsangiz</li>
            </div>
          </ol>
        </div>
      </div>
      <div className="footer">
        <div className="footerOne">
          <p className="footerName">Ta'lim Rivoj</p>
          <span className="academyInfo">Ro’yxatdan o’tish 27.10.2023 yilgacha davom etadi.
            Manzil: Darital Savdo Majmuasi Hyundai Avto Salon yonida </span>
          <p className="phoneNumber">+998 90 077 00 67</p>
          <span className="infoData">Barcha huquqlar himoyalangan, 2023.</span>
        </div>
      </div>
    </div>
  )
}
