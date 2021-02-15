var url = 'http://localhost:3000/'

export function delete_objects(ids, object_type) {
  fetch(url + object_type.toString() + '_destroy/',
  {
    method: 'DELETE',
    body: JSON.stringify({ids: ids}),
    headers:
    {
      'Content-type': 'application/json; charset=UTF-8'
    }
  });
}

export function add_object(params, object_type) {
  fetch(url + object_type.toString() + '/',
  {
    method: 'POST',
    headers:
    {
      'Content-type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify(params)})
  .then(res => res.json());
}

export function get(object_type) {
  return fetch(url + object_type.toString() + '/')
    .then(response => {
      return response.json();
    });
}

export function get_with_filter(object_type, filter, values) {
  return fetch(url + object_type.toString() + '?search_param=' + generate_search_url_params(filter, values),
  {
    method: 'GET',
    headers:
    {
      'Content-type': 'application/json; charset=UTF-8'
    }})
    .then(response => {return response.json()});
}

export function edit_objects(object_type, params) {
  Object.keys(params[object_type]).forEach(id =>
  fetch(url + object_type.toString() +'/' + id,
  {
    method: 'PATCH',
    headers:
    {
      'Content-type': 'application/json; charset=UTF-8',
      'Accept': 'application/json'
    },
    body:JSON.stringify(params[object_type][id])
  }).then(res => res.json())
  )
}

function generate_search_url_params(filter, values) {
  return filter + '&search_values[]=' + values.join("&search_values[]=")
}
