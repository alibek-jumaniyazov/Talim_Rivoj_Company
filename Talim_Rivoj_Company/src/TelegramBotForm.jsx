import React, { useState } from 'react';
import axios from 'axios';
import img1 from './images/Logo.png'
import { Link } from 'react-router-dom';
import YuborishTgPage from './YuborishTgPage';

const TelegramBotForm = ({  }) => {

  const [yuborishTg, setYuborishTg] = useState('none');
  const [tuman, setTuman] = useState('Urganch shahri');

  const [formData, setFormData] = useState({
    name: '',
    tel: '+998 ',
  });


 
  



  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    //  'YOUR_BOT_API_TOKEN' Bu yerga Telegram bot token API yoziladi
    const apiToken = '6579613997:AAFiPXWulKMregiwepcFp_GHS7kntZDREuQ';
    const chatId = '2060086235'; // Telegram user ni ChatId 
    
    const message = `
      Yangi foydalanuvchi:  
      Name: ${formData.name}
      Telefon Raqam: ${formData.tel}
      Yashash joyi: ${tuman}

    `;

    try {
      if (formData.name == '', formData.tel == '+998 ') {
        alert('iltimos Hamma joylarni toldiring')
      }
      else {
        await axios.post(`https://api.telegram.org/bot${apiToken}/sendMessage`, {
          chat_id: chatId,
          text: message,
        });
        setYuborishTg('LongPage');
        // Malumotlarni uzatganizdan keyin input ishidegi malumot ochib ketadi
        setFormData({ name: '', tel: '+998 ' });
      }


    } catch (error) {
      console.error('Error sending message to Telegram:', error);
    }
  };


  return (
    <div className="Modal">
      <div className="modalHeader">
        <img src={img1} alt="" />
      </div>
      <form onSubmit={handleSubmit} className='ModalBox'>
        <Link to={"/"}> <i className="fa-solid fa-xmark" onClick={() => closeModal()}></i> </Link>
        <p className="modalInfo">
          Ro'yxatdan o'tish uchun
          ma'lumotlaringizni
          kiriting!
        </p>
        <div className="modalInputs">
          <div className="inputTitle">
            <p>Ism Familiya</p>
            <input type="text" name="name" placeholder="Ism Familiya" value={formData.name} onChange={handleChange} />
            <div className="inputTitle">
              <p>Telefon raqamingiz</p>
              <input type="tel" name="tel" placeholder="Telefon raqam" value={formData.tel} onChange={handleChange} />
            </div>
            <div className="inputTitle">
              <p>Yashash joyingizni tanlang</p>
              <select className='selectViloyat' onChange={(e) => setTuman(e.target.value)}>
                <option value="Urganch shahri">Urganch Shahri</option>
                <option value="Xonqa Tumani">Xonqa</option>
                <option value="Khiva">Khiva</option>
                <option value="Qo'shko'pir Tumani">Qo'shko'pir</option>
                <option value="Xazorasp Tumani">Xazorasp</option>
                <option value="Bog'ot Tumani">Bog'ot </option>
                <option value="Gurlan Tumani">Gurlan</option>
                <option value="Yangiariq Tumani">Yangiariq</option>
                <option value="Yangibozor Tumani">Yangibozor</option>
                <option value="Tumani">Shovot</option>
              </select>
            </div>
          </div>
         
        </div>
         <button type="submit" className='modalButton'> 
            Yuborish 
         </button> 

      </form>
      <YuborishTgPage yuborishTg={yuborishTg}/>
    </div>
  );
};

export default TelegramBotForm;