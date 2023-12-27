import styles from './CardCardWash.module.css';
import img from './Rectangle 1180.svg';

import ReitingStar from '../UI/icons/ReitingStar.svg';
import ColorLineSubway from '../UI/icons/ColorLineSubway.svg';


function CardCardWash() {
    return (
        <div className={styles.card}>
            <img className={styles.image} src={img} alt='Основная картинка' />
            <h3 className={styles.title}>ABCautо Professional на Дубнинской<p className={styles.rating}>4.6</p><img src={ReitingStar} alt='ReitingStar' /></h3>
            <p className={styles.subway}><img style={{paddingRight: 4,}} src={ColorLineSubway} alt='ColorLineSubway' />Новослободская</p>
            <p className={styles.adress}>ул. Двадцати Шести Бакинских Комиссаров, 24к2</p>
            <p className={styles.price}>от 250р</p>
            <p className={styles.open}>Открыто до 18:00</p>
        </div>
    );
}

export default CardCardWash;