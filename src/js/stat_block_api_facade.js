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

export function add_stat_block(params) {
  fetch('http://localhost:3000/stat_blocks',
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
