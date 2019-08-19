export const getFollowersInfo = (apiKey, user) => {
  const response = fetch(`https://api.github.com/users/${user}/followers?pages=1&per_page=100?access_token=${apiKey}`)

  return response
    .then(response => {
      if (response.status === 401 || response.status === 404 || response.status === 403) {
        throw new Error("Нет доступа или страница не найдена")
      }

      return response.json();
    })
    .catch(error => Promise.reject(error))
}
  
