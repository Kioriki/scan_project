import styles from './Result.module.css'
// import ResultForm from './ResultForm.jsx'


function ResultField() {
    return (

      <div id='container'>
        <div className={styles.result}>
            <div className={styles.result_header}>
                <div className={styles.result_h1}>
                  <div className={styles.result_h1}>Ищем. Скоро<br /> будут результаты</div>
                  <div className={styles.search_p}>Поиск может занять некоторое время, <br/>просим сохранять терпение.</div>
                </div>
                <div className={styles.result_img}><img src='/woman.svg' alt ='woman'></img></div>
            </div>
            <div className={styles.result_block}>
              <div className={styles.subtitle}>Общая сводка</div>

            </div>
        </div>
      </div>
    )
}
  
  export default ResultField
