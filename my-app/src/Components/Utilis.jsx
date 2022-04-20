import {useDispatch,useSelector } from 'react-redux'


export const Search_Users = (search, users) => {
    const productdata = useSelector((state)=> state.data)
    let tempsearch =  search.toLowerCase();
    return productdata.map((user) => {
      if (
        user.title.toLowerCase().includes(tempsearch)
        
      ) {
         user.show = true;
         return user;
      }
      user.show = false;
      return user;
    });
  };