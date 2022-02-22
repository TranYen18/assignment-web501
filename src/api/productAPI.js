import { axiosClient } from "./axiosClient";
export const ProductAPI = {
  list() {
    const url = `/products`;
    console.log("Lấy danh sách sản phẩm:")
    return axiosClient.get(url).then(result=>{
      console.log(1, result);
      return result
    }).catch(error=>{
      console.log(2, error);
      return error
    });
  },
  read(id) {
    const url = `/products/${id}`;
    return axiosClient.get(url);
  },
  remove(id) {
    const url = `/products/${id}`;
    return axiosClient.delete(url);
  },
  add(product){
    const url = `/products`;
    return axiosClient.post(url,product); 
  },
  update(id,data){
    const url = `/products/${id}`;
    return axiosClient.put(url,data);
  }
};
export default ProductAPI;
