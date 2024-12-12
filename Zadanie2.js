const form = document.querySelector("#form");
const inputName = document.querySelector("#name");
const searchForm = document.querySelector("#searchForm");
const list = document.querySelector("ul");

// Popularne formaty danych:
// XML - format juz raczej niewykorzystywany, wyglada podobnie jak skladnia HTML
// JSON

// Dobra praktyka do trzymania struktury danych jest tablica obiektów
// const tasks = ['Damian', 'Pawel', 'Dominik']; - zamiast tego


const tasks = JSON.parse(localStorage.getItem("tasks")) ?? [];

const renderElements = (filterText = "") => {
  list.innerHTML = "";

  // Istnieje opcja na polaczenie funkcji z programowania funkcyjnego
  tasks
    .filter((task) => task.name.includes(filterText))
    .forEach((task) => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `${task.name} (id: ${task.id}) <a class='usun' id="usun${task.id}">x</a>`;
      list.appendChild(listItem);
    });
  deleteElement();
};

const generateId = () => {
  return Math.random().toString().substring(2, 12);
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  tasks.push({
    id: generateId(),
    name: event.target.name.value,
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));

  renderElements();
  inputName.value = "";
  console.log(tasks);
});

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const searchValue = event.target.search.value;

  renderElements(searchValue);
});

const deleteElement = function () {
    document.querySelectorAll(".usun").forEach((deleteLink) => {
      deleteLink.addEventListener("click", (event) => {
        event.preventDefault();
        const elementToDelete = event.target.id.replace("usun", "");
  
        for (tasktoDelete in tasks) {
          if (tasks[tasktoDelete].id == elementToDelete) {
            tasks.splice(tasktoDelete, 1);
            localStorage.setItem("tasks", JSON.stringify(tasks));
            break;
          }
        }
  
        renderElements();
      });
    });
  };


renderElements();



// W obecnym kodzie, mamy problem ze elementy listy ktore dodajemy nie maja ID. Stworz funkcje generateId(), ktora wygeneruje jakis randomowy hash zawierajacy 10 znakow
