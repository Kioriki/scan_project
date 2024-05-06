import styles from './Main.module.css'


function Main() {
  return (
   <div id='container'>
       <div className={styles.main}>
            <div className={styles.main_h1}>
                <h1 className={styles.main_tittle}>Сервис по поиску публикаций о компании по его инн</h1>
                <p className={styles.info}>Комплексный анализ публикаций, получение данных в формате PDF на электронную почту.</p>
                <button><div className={styles.btn}>Запросить данные</div></button>
            </div>
          <img className={styles.img_main}src='/main_img.svg'/>
        </div>
    </div>
  )
}

export default Main
