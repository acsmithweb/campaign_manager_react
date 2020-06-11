export function delete_stat_blocks(ids) {
  fetch('http://localhost:3000/stat_blocks_destroy/',
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
