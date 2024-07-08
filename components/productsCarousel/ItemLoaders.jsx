// mockApi.js
export const fetchData = () => {
  return fetch("mockDBs/pageData.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("loading all of this", data);
      return data;
    })
    .catch((error) => {
      console.error("Error loading data:", error);
      return { categories: [], fav_products: [], blog_posts: [] };
    });
};
