import styles from './Man.module.css'
function Man() {
    return (
    <div id='container'>
        <img className={styles.img_man} src='/man.svg'/>
    </div>
  )
}

export default Man