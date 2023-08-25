let btn = document.getElementById("loaddata");
btn.addEventListener("click", () => {
  let xmlh = new XMLHttpRequest();
  xmlh.onload = () => {
    let todos = JSON.parse(xmlh.responseText);
    let rows = "";
    todos.forEach((todo) => {
      rows += `<tr class="todoRow">
                <td>${todo.id}</td>
                <td>${todo.title}</td>
                <td>${todo.completed}</td>
                </tr>`;
    });
    document.getElementById("data").innerHTML = rows;
  };
  xmlh.open("GET", "https://jsonplaceholder.typicode.com/todos");
  xmlh.send();
});
