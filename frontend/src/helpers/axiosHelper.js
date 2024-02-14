import { useToast } from "vue-toastification";
import http from "./axiosInstance";

//helper for making a get request to api
export const axiosGet = async (url) => {
  try {
    const response = await http.get(url);
    //only return data if request was successful
    if (response?.status === 200 && response.data?.data) return response.data.data;
    showErrorNotification(response.data.message)
    return null
  } catch (e) {
    logAxiosError(e)
  }
};

//helper for making a post request to api
export const axiosPost = async (url, data) => {
  try {
    const response = await http.post(url, data);
    if ((response?.status === 201 || response.status === 200) && response.data?.data) return response.data.data;
    showErrorNotification(response.data.message)
    return null
  } catch (e) {
    logAxiosError(e)
  }
};

//helper for making a put request to api
export const axiosPut = async (url, data) => {
  try {
    const response = await http.put(url, data);
    if (response?.status === 204 && response.data?.message) return response.data.message;
    showErrorNotification(response.data.message)
    return null
  } catch (e) {
    logAxiosError(e)
  }
};

//helper for making a delete request to api
export const axiosDelete = async (url) => {
  try {
    const response = await http.delete(url);
    //only return data if request was successful
    if (response?.status === 204 && response.data?.message) return response.data.message;
    showErrorNotification(response.data.message)
    return null
  } catch (e) {
    logAxiosError(e)
  }
}

function logAxiosError(e) {
  console.log(e);
  if (e?.response?.data?.message) {
    showErrorNotification(e.response.data.message)
  } else {
    throw e;
  }
}

function showErrorNotification(message) {
  console.log(message)
  const toast = useToast()
  toast.error(message)
}