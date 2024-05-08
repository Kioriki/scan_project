import styles from '../Advantages.module.css'
import Flickity from 'react-flickity-component'
import clock from '../../../../public/Clock.svg'
import lock from '../../../../public/Lock.svg'
import glass from '../../../../public/Glass.svg'


const flickityOptions ={
    initialIndex:2
}

const advantages ={
    id: [1 , 2, 3],
    title: ['Высокая и оперативная скорость обработки заявки', 'Огромная комплексная база данных, обеспечивающая объективный ответ на запрос','Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству'],
    image: [clock, lock, glass]
}

function Slider1(){
    return(
        <div className={styles.advantages_slider}>
            <Flickity
            className ='Slider'
            elementType='div'
            disableImagesLoaded={false}
            options={flickityOptions}
            reloadOnUpdate
            static>

            {advantages['id'].map((index) =>{
                return(
                    <div key={index} className='Plate'>
                        <div className={styles.icon}>{advantages['image'][index - 1]}</div>
                        <div className={styles.info}>{advantages['title'][index - 1]}</div>
                    </div>
                )
            })}
            </Flickity>
        </div>
    )
}

export default Slider1