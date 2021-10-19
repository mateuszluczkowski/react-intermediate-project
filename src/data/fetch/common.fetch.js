export const fetchAllCategories = (id) => {
   const promise = fetch(
      `${process.env.REACT_APP_URL}/categories/?_expand=parentCategory`
   );
   return promise;
};
