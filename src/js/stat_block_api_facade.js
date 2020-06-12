var url = 'http://localhost:3000/'

export function delete_stat_blocks(ids) {
  fetch(url + 'stat_blocks_destroy/',
  {
    method: 'DELETE',
    body: JSON.stringify({ids: ids}),
    headers:
    {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
  .then(res => console.log(res));
}

export function get_stat_blocks() {
  return fetch(url + "stat_blocks/")
    .then(response => {
      return response.json()
    });
}
