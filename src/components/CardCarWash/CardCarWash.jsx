import styles from './CardCardWash.module.css';

import ReitingStar from '../UI/icons/ReitingStar.svg';
import ColorLineSubway from '../UI/icons/ColorLineSubway.svg';
import PictureCarWash from '../UI/icons/PictureCarWash.svg';

/* eslint-disable react/prop-types */
function CardCardWash({ card }) {
    function findMinPrice(dataCard) {
        const result = dataCard.services.reduce((accumulator, item) => {
            if (accumulator.price >= item.price) {
                return item;
            };
            return accumulator;
        });
        return result.price
    };

    return (
        <div className={styles.cardWash}>
            <img className={styles.image} src={card.image[0] ? card.image : PictureCarWash} alt='Картинка автомойки' />
            <h3 className={styles.title}>{card.name ? card.name : 'Автомойка'}{card.rating ? <p className={styles.rating}>{card.rating}<img className={styles.ratingIcon} src={ReitingStar} alt='ReitingStar' /></p> : ''}</h3>
            <p className={styles.subway}><img style={{ paddingRight: 4, }} src={ColorLineSubway} alt='ColorLineSubway' />{card.metro.name}</p>
            <p className={styles.adress}>{card.contacts.address}</p>
            {card.services.length ? <p className={styles.price}>от {findMinPrice(card)} рублей</p> : ''}
            {card.open_until ? <p className={styles.open}>{card.open_until}</p> : ''}
        </div>
    );
};

export default CardCardWash;