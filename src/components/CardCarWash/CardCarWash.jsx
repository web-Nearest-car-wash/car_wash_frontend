import styles from './CardCardWash.module.css';

import ReitingStar from '../UI/icons/ReitingStar.svg';
import ColorLineSubway from '../UI/icons/ColorLineSubway.svg';
import PictureCarWash from '../UI/icons/PictureCarWash.svg';

/* eslint-disable react/prop-types */
function CardCardWash({ card }) {
    return (
        <div className={styles.cardWash}>
            <img className={styles.image} src={card.image[0] ? card.image : PictureCarWash} alt='Картинка автомойки' />
            <h3 className={styles.title}>{card.name ? card.name : 'Автомойка'}{card.rating ? <p className={styles.rating}>{card.rating}<img className={styles.ratingIcon} src={ReitingStar} alt='ReitingStar' /></p> : ''}</h3>
            <p className={styles.subway}><img style={{ paddingRight: 4, }} src={ColorLineSubway} alt='ColorLineSubway' />{card.metro.name}</p>
            <p className={styles.adress}>{card.contacts.address}</p>
            {card.services ? <p className={styles.price}>от</p> : ''}
            {card.open_until ? <p className={styles.open}>{card.open_until}</p> : ''}
        </div>
    );
};

export default CardCardWash;