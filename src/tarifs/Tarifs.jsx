import styles from './Tarifs.module.css'

function Tarifs() {
    return (
        <div id='container'>
        <div>
            <h2>наши тарифы</h2>
                <div className={styles.tarifs}>
                    <div className={styles.beginner}>
                        <div className={styles.begginer_header}>
                            <div className={styles.tarifs_title}>
                                <h3>Beginner</h3>
                                <p>Для небольшого исследования</p>
                            </div>
                            <img className={styles.icon} src='/light.svg'/>
                        </div>
                        <div className={styles.tarifs_info}>
                            <div className={styles.tarifs_price}>
                                <div className={styles.price}>
                                    <div className={styles.price_actually}>799</div>
                                    <div className={styles.price_prev}>1 200</div>
                                </div>
                                <p>или 150 ₽/мес. при рассрочке на 24 мес.</p>
                            </div>
                            <div className={styles.tarif_info}>
                                <h4>В тариф входит:</h4>
                                <ul className={styles.tarif_lists}>
                                    <li className={styles.tarif_list}><img className={styles.img_check} src='/check.svg'/>Безлимитная история запросов</li>
                                    <li className={styles.tarif_list}><img className={styles.img_check} src='/check.svg'/>Безопасная сделка</li>
                                    <li className={styles.tarif_list}><img className={styles.img_check} src='/check.svg'/>Поддержка 24/7</li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.btn_info}><button ><div className={styles.btn}>Перейти в личный кабинет</div></button></div>
                    </div>
                    <div className={styles.pro}>
                        <div className={styles.pro_header}>
                            <div className={styles.tarifs_title}>
                                <h3>Pro</h3>
                                <p>Для HR и фрилансеров</p>
                            </div>
                            <img className={styles.icon} src='/target.svg'/>
                        </div>
                        <div className={styles.tarifs_info}>
                            <div className={styles.tarifs_price}>
                                <div className={styles.price}>
                                    <div className={styles.price_actually}>1 299</div>
                                    <div className={styles.price_prev}>2 600</div>
                                </div>
                                <p>или 279 ₽/мес. при рассрочке на 24 мес.</p>
                            </div>
                            <div className={styles.tarif_info}>
                                <h4>В тариф входит:</h4>
                                <ul className={styles.tarif_lists}>
                                    <li className={styles.tarif_list}><img className={styles.img_check} src='/check.svg'/>Все пункты тарифа Beginner</li>
                                    <li className={styles.tarif_list}><img className={styles.img_check} src='/check.svg'/>Экспорт истории</li>
                                    <li className={styles.tarif_list}><img className={styles.img_check} src='/check.svg'/>Рекомендации по приоритетам</li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.btn_info}><button ><div className={styles.btn}>Подробнее</div></button></div>
                    </div>
                    <div className={styles.business}>
                        <div className={styles.business_header}>
                            <div className={styles.tarifs_title}>
                                <h3>Business</h3>
                                <p>Для корпоративных клиентов</p>
                            </div>
                            <img className={styles.icon} src='/notepad.svg'/>
                        </div>
                        <div className={styles.tarifs_info}>
                            <div className={styles.tarifs_price}>
                                <div className={styles.price}>
                                    <div className={styles.price_actually}>2 379</div>
                                    <div className={styles.price_prev}>3 700</div>
                                </div>
                            </div>
                            <div className={styles.tarif_info}>
                                <h4>В тариф входит:</h4>
                                <ul className={styles.tarif_lists}>
                                    <li className={styles.tarif_list}><img className={styles.img_check}src='/check.svg'/>Все пункты тарифа Pro</li>
                                    <li className={styles.tarif_list}><img className={styles.img_check} src='/check.svg'/>Безлимитное количество запросов</li>
                                    <li className={styles.tarif_list}><img className={styles.img_check} src='/check.svg'/>Приоритетная поддержка</li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.btn_info}><button ><div className={styles.btn}>Подробнее</div></button></div>
                    </div>
                </div>
            
        </div>
    </div>
  )
}

export default Tarifs