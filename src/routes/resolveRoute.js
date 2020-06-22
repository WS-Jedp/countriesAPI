const resolveRoute = (route) => {
  if(route.length <= 3){
    let validateRoute = route === '/' ? route : ':id';
    return validateRoute;
  }
  return `/${route}`
}

export default resolveRoute;
