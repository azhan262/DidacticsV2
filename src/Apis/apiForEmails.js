//getting API for showing all the data
export const getEmails = () => fetch("https://didactics.one/emails").then(res => res.json())

//getting API for inserting the data
export const createEmails = (todo) => fetch("https://didactics.one/contacts/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for updating specific data
export const updateTodoForTeacher = (todo, id) => fetch(`https://didactics.one/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for getting specific data
export const getEmail = (id) => fetch(`https://didactics.one/${id}`).then(res => res.json())