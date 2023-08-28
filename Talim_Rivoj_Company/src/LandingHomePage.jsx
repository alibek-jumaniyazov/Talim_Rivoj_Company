import React from 'react'
import video1 from './images/video.mp4'
import img from './images/004.png'
import poster1 from './images/add.png'
import { Link } from 'react-router-dom'

export default function LandingHomePage() {


  return (
    <div className='LandingHomePage'>
      {/* Mobila Version */}
      <div className="header">
        <div className="animated-text">
          <div className="line">Turk Tili</div>
          <img src={img} alt="" width={"120px"} />
          <div className="line">Rus Tili</div>
          <img src={img} alt="" width={"120px"} />
          <div className="line">Ingliz Tili</div>
        </div>
      </div>
      <div className="main">
        <div className="mainHeaderInfo">
          <p>25 - AVGUST</p>
          <span>Talim Rivoj</span>
        </div>
        <h5 className="mainText">
          1 Hafta bepul darsda kundalik muloqotingizni chet tillarida qilish darajasiga chiqing
        </h5>
        <div className="mainBigInfo">
          <div className="imgButton">
            {/* <img src={img1} alt="" /> */}
            <div id="video-wrapper">
              <video controls width="350" height="220" poster={poster1} >
                <source src={video1} type='video/mp4' />
              </video>
            </div>
            <Link to={'register'}>  <button>Ro'yxatdan o'tish</button></Link>
          </div>
          <p>Shoshiling! Joylar soni cheklangan</p>
        </div>
        <div className="mainInfos">
          <p>1 Haftalik bepul darsda :</p>
          <ul>
            <div className="MinInfosLi">
              <li>Boshingizni devorga urish shart bo'lmagan xolda bor imkoniyatlardan foydalanish mohiyatini tushunasiz </li>
            </div>
            <div className="MinInfosLi">
              <li>Hafta davomida xotira va diqqatingizni chalg'ituvchi omillardan xalos bo'lishga erishasiz albatda til o'rganish bilan birga</li>
            </div>
            <div className="MinInfosLi">
              <li>Sertifikatlarni qo'lga kiritishda qiynab qo'ymaydigan zeriktirmaydigan samarali usullarga qaratilgan darslar</li>
            </div>
            <div className="MinInfosLi">
              <li>Siz xoxlagan chet tiliga doir aniq tushunarli metodga qaratilgan o'quv dasturi </li>
            </div>
            <div className="MinInfosLi">
              <li>Hafta davomida 3 kun til kurslari bilan birga biznes olamiga sayohat hamda shaxsiy rivojlanishga qaratilgan aniq instrumentlar</li>
            </div>
          </ul>
        </div>
      </div>
      <div className="footer">
        <div className="footerOne">
          <p className="footerName">Ta'lim Rivoj Til Markazi</p>
          <span className="academyInfo">Bepul darsga ro'yxatdan o'tish 25.08.2023 yilgacha davom etadi.
          Manzil: Darital Savdo Majmuasi Hyundai Avto Salon yonida </span>
          <p className="phoneNumber">+998 90 077 00 67</p>
          <span className="infoData">Barcha huquqlar himoyalangan, 2023.</span>
        </div>
      </div>
    </div>
  )
}
