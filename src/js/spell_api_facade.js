var url = 'http://localhost:3000/'

export function delete_spells(ids) {
  fetch(url + 'spells_destroy/',
  {
    method: 'DELETE',
    body: JSON.stringify({ids: ids}),
    headers:
    {
      'Content-type': 'application/json; charset=UTF-8'
    }
  });
}

export function get_spells() {
  return fetch(url + "spells/")
    .then(response => {
      return response.json()
    });
}

export function add_spell(params) {
  fetch(url + 'spells',
  {
    method: 'POST',
    headers:
    {
      'Content-type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify(params)})
  .then(res => res.json());
}

export function retrieve_spells_with_filter(filter, values) {
  return fetch(url + 'spells?search_param=' + generate_search_url_params(filter, values),
  {
    method: 'GET',
    headers:
    {
      'Content-type': 'application/json; charset=UTF-8'
    }})
    .then(response => {return response.json()});
}

export function edit_spells(params){
  Object.keys(params.spells).forEach(id =>
  fetch(url + 'spells/' + id,
  {
    method: 'PATCH',
    headers:
    {
      'Content-type': 'application/json; charset=UTF-8',
      'Accept': 'application/json'
    },
    body:JSON.stringify(params.spells[id])
  }).then(res => res.json())
  )
}

function generate_search_url_params(filter, values) {
  return filter + '&search_values[]=' + values.join("&search_values[]=")
}
