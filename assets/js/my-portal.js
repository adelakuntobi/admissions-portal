var courses = [
  {
    name:"Introduction To Biology",
    code:"FSC 111",
    unit:3
  },
  {
    name:"Introduction To Chemistry",
    code:"FSC 112",
    unit:3
  },
  {
  name:"Introduction To Computer Science",
  code:"FSC 113",
  unit:3
  },
  {
  name:"Introduction To Mathematics",
  code:"FSC 114",
  unit:3
  },
  {
  name:"Introduction To Physics",
  code:"FSC 115",
  unit:3
  },
  {
  name:"Introduction to Philosophy And Logic",
  code:"GST 102",
  unit:2
  },
  {
  name:"Use Of English",
  code:"GST 105",
  unit:2
  },
  {
  name:"Introduction To ECX",
  code:"ECX 202",
  unit:2
  }
]
window.addEventListener('load', ()=>{listCourses(courses)}, false);

function listCourses(courses) {
  let markup = ''
  for (var i of courses) {
    markup += `<div class='course'>` +
      `<h5>${i.name}</h5>`+
      `<p>${i.code}<span class='ml-3'>${i.unit} units</span></p>`+
    `</div>`
  }
  document.querySelector('.courses').innerHTML = markup;
}
function search(input) {
  var value = input.value.toLowerCase();
  filteredCourses = courses.filter(course => course.name.toLowerCase().includes(value));
  listCourses(filteredCourses);
}