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
  },

  post(resource, newItem) {
    return fetch(`${remoteURL}/${resource}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newItem)
    }).then(data => data.json())
  },

  put(resource, editedItem) {
    return fetch(`${remoteURL}/${resource}/${editedItem.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedItem)
    }).then(data => data.json());
  }
  
}