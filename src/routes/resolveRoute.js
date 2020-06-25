const resolveRoute = (route) => {
  let currentRoute = location.hash.slice(1).toLocaleLowerCase().split('/')
  
  if(currentRoute.includes('country')) return '/:id'
  else  return `/`;

  
}

export default resolveRoute;
