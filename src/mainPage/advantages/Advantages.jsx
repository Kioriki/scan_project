import Slider1 from './Slider/Slider.jsx'
import styles from './Advantages.module.css'
import Slider_menu from './Slider/Slider_menu.jsx'

function Advantages() {
    return (
      <div id='container'>
        <div className='advantages_main'>
            <h2 className={styles.advantages_tittle}>Почему<br/> именно мы</h2>
            <div className={styles.slider1}><Slider1 /></div>
            <div className={styles.slider2}><Slider_menu/></div>
        </div>
      </div>
    )
  }
  
  export default Advantages




// import styles from './Advantages.module.css'

// function Advantages() {
//     return (
//       <div id='container'>
//         <div className='advantages_main'>
//             <h2 className={styles.advantages_tittle}>Почему именно мы</h2>
//             <div className={styles.advantages_slider}>
//             <button className={styles.button_slider}><img className={styles.arrow_left} src='/icon_left.svg'/></button>
//             <div className={styles.advantages}>
//                 <div className={styles.info}><div className={styles.icon}><img  src='/Clock.svg'/></div><br/>Высокая и оперативная скорость обработки заявки</div>
//                 <div className={styles.info}><div className={styles.icon}><img  src='/Glass.svg'/></div><br/>Огромная комплексная база данных, обеспечивающая объективный ответ на запрос</div>
//                 <div className={styles.info}><div className={styles.icon}><img  src='/Lock.svg'/></div><br/>Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству</div>
//             </div>
//             <button className={styles.button_slider}><img className={styles.arrow_right} src='/icon_right.svg'/></button>
//             </div>
//           </div>
//       </div>
//     )
//   }
  
//   export default Advantages