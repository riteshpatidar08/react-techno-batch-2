import React from 'react';

function List() {
  const userData = [
    { id: 1, name: 'john', age: 23 },
    { id: 2, name: 'alex', age: 24 },
  ];
  const arr = ['🍿', '🚀', '❌', '🌏'];
  return (
    <div>
      <ul>
        {arr.map((el) => (
          <li key={el}>{el}</li>
        ))}
      </ul>
      {
        userData.map((el)=>(
            <div key={el.id}>
                <p>{el.name}</p>
                <p>{el.age}</p>
            </div>

        ))
      }
    </div>
  );
}

export default List;

//Key => you have to always use key when you are rendering a list because when you use key and update and particular item in a list it is easy to react to figure out which item in the list have been updated .. rather then updating whole list react only update the tag in which we have updated the content
