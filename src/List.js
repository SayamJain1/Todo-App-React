import React from 'react'
import './List.css';

function List({ itemList, updateList }) {

    const deleteItems = (key) => {
        const newList = itemList.filter((itemObj) => {
            return itemObj.key !== key; //falsy value will be removed true will added in newarr
        })
        updateList(newList)
    }

    // const arr = [1, 2, 3, 4, 5];
    // const newArr = arr.filter((item) => {
    //     return item > 2; //falsy value will be removed ~~ true will added newarr
    // })                 
    // console.log(newArr)

  return (
      <div>
          {itemList.map((itemObj) => {
              return (
                  <div className='item'>
                      <p>{itemObj.item}</p>
                    <button onClick={() => deleteItems(itemObj.key)}>X</button>
                  </div>
              )
          })}
    </div>
  )
}

export default List