import axios from "axios";

export const getData = (params) => {
  const endpoint =
    params === "a"
      ? "https://hn.algolia.com/api/v1/search_by_date?query=angular&page=0"
      : params === "r"
      ? "https://hn.algolia.com/api/v1/search_by_date?query=reactjs&page=0"
      : "https://hn.algolia.com/api/v1/search_by_date?query=vuejs&page=0";

  return axios
    .get(endpoint)
    .then((response) => {
      const newData = response.data.hits.filter(
        (hit) =>
          hit.created_at && hit.author && hit.story_url && hit.story_title
      );
      localStorage.setItem("frames", JSON.stringify(newData));
      console.log("🚀 ~ file: backend.js:14 ~ getData ~ newData:", newData);
      return newData;
    })
    .catch((error) => {
      console.error("Error al hacer la solicitud:", error);
      alert("algo salio mal intente nuevamente en un rato xD")
      throw error;
    });
};
