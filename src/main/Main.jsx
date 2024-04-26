import styles from './Main.module.css'


function Main() {
  return (
   <>
       <div className={styles.main}>
            <div className={styles.main_h1}>
                <h1 className={styles.main_tittle}>Сервис по поиску публикаций о компании по его инн</h1>
                <p className={styles.info}>Комплексный анализ публикаций, получение данных в формате PDF на электронную почту.</p>
                <button className={styles.button}>Запросить данные</button>
            </div>
          <img className={styles.img_main}src='/main_img.svg'/>
        </div>
    </>
  )
}

export default Main
