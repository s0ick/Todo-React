import React from 'react';
import style from './ActiveList.module.css';

const ActiveList = React.memo(({props}) => {
  return (
    <div className={style.container}>
      <div className={style.list}>

        <div className={style.item}>
          <p className={style.message}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, dolore.
          </p>
          <div className={style.panel}>
            <button className={style.remove}></button>
            <button className={style.complete}></button>
          </div>
        </div>

        <div className={style.item}>
          <p className={style.message}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, dolore.
          </p>
          <div className={style.panel}>
            <button className={style.remove}></button>
            <button className={style.complete}></button>
          </div>
        </div>

      </div>
    </div>
  )
});

export default ActiveList;