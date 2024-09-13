import axios from "axios";

export async function getImgs(
  requestImgs: string,
  numberPage: number
): Promise<object> {
  axios.defaults.baseURL = "https://api.unsplash.com/search/photos";
  const option = {
    params: {
      client_id: "UUHBT_RyeuY_tHpqA_ixn9pxWJxePUeO_RGZ9ininoA",
      query: requestImgs,
      page: numberPage,
      per_page: 12,
      orientation: "landscape",
    },
  };
  const { data } = await axios.get("", option);

  return data;
}
