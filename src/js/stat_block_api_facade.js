var url = 'https://campaign-manager-api.herokuapp.com/'

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
  console.log(process.env.NODE_ENV)

  return fetch(url + "stat_blocks/")
    .then(response => {
      return response.json()
    });
}

export function add_stat_block(params) {
  fetch(url + 'stat_blocks',
  {
    method: 'POST',
    headers:
    {
      'Content-type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify(params)})
  .then(res => res.json())
  .then(res => console.log(res));
}
