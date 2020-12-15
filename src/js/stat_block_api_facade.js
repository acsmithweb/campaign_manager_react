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
  });
}

export function get_stat_blocks() {
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
  .then(res => res.json());
}

export function retrieve_stat_blocks_with_filter(filter, values) {
  return fetch(url + 'stat_blocks?search_param=' + generate_search_url_params(filter, values),
  {
    method: 'GET',
    headers:
    {
      'Content-type': 'application/json; charset=UTF-8'
    }})
    .then(response => {return response.json()});
}

export function edit_stat_block(params){
  console.log(params.stat_blocks[324])
  Object.keys(params.stat_blocks).forEach(id =>
  fetch(url + 'stat_blocks/' + id,
  {
    method: 'PATCH',
    headers:
    {
      'Content-type': 'application/json; charset=UTF-8',
      'Accept': 'application/json'
    },
    body:JSON.stringify(params.stat_blocks[id])
  }).then(res => res.json())
  )
}

function generate_search_url_params(filter, values) {
  return filter + '&search_values[]=' + values.join("&search_values[]=")
}
