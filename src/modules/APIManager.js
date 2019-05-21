const remoteURL = "http://localhost:5002"

export default {

  get(resource, id) {
    return fetch(`${remoteURL}/${resource}/${id}`).then(e => e.json())
  },

  getAll(resource) {
    return fetch(`${remoteURL}/${resource}`).then(e => e.json())
  },
  
  delete(resource, id) {
    return fetch(`${remoteURL}/${resource}/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
          },
    }).then(e => e.json())
  }
  
}