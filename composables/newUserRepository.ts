export const useNewUser = () =>{
  const api = useApi();

  function dispatch(newUser:NewUser){
    return api.post<NewUser>("/user", newUser);
  }
  function fetchAll(){
    return api.get<NewUser[]>("/user");
  }
  function fetchById(idUser:string){
    return api.get<NewUser>("/user/".concat(idUser));
  }

  // return { dispatch:dispatch, fetchAll:fetchAll };
  return { dispatch, fetchAll, fetchById };
};