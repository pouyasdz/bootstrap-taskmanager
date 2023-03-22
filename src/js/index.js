const list = [];
const searchResult = []

let taskBox = document.querySelector(".tasks-box");
const elementMaker = (title, caption, index) => {
  return `
  <li>
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">${caption}</p>
            <a href="#" class="btn btn-danger" onclick="removeTask(${index})">حذف</a>
        </div>
    </div>
  </li>
    `;
};

async function onClickHandler() {
  taskBox.innerHTML = "";
  const ID = Math.floor(Math.random() * 1000);
  const data = document.querySelector("#label").value;
  if(!data) return
  const injector = {
    id: ID,
    title: data,
    caption: "NoneCaption",
  };
  await list.push(injector);
  displayList();
}

async function onSearchClickHandler(){
  searchResult.splice(0,searchResult.length);
  const keyWord = document.querySelector("#label").value;
  await list.map((item) =>{
    if(!item.title.includes(keyWord)) return;
    searchResult.push(item);
  })
  displaySearch()
}

function displayList() {
  list.map((item, index) => {
    const { caption, title } = item;
    taskBox.innerHTML += elementMaker(title, caption, index);
  });
}

function clearList() {
  list.splice(0, list.length);
  taskBox.innerHTML = "";
}

async function removeTask(index) {
  taskBox.innerHTML = "";
  await list.splice(index, 1);
  displayList();
}

function displaySearch(){
  taskBox.innerHTML = "";
  searchResult.map((item, index) => {
    const {caption, title} = item;
    taskBox.innerHTML += elementMaker(title, caption, index);
  })
}