var url = 'http://localhost:3000/'

export function delete(ids, object_type) {
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

function generate_search_url_params(filter, values) {
  return filter + '&search_values[]=' + values.join("&search_values[]=")
}
