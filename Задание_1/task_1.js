//XML
const stringContainingXMLSource = `
    <list>
    <student>
        <name lang="en">
        <first>Ivan</first>
        <second>Ivanov</second>
        </name>
        <age>35</age>
        <prof>teacher</prof>
    </student>
    <student>
        <name lang="ru">
        <first>Петр</first>
        <second>Петров</second> 
        </name>
        <age>58</age>
        <prof>driver</prof>
    </student>
    </list>`;
//Парсинг XML
const parser = new DOMParser();
const doc = parser.parseFromString(stringContainingXMLSource, "text/xml");
//Создаем массив объектов - Студент
const studentList = {};
let j = 0;
function getStudent(obj) {
  const list = obj.querySelector('list');
  for (const student of list.querySelectorAll('student')) {
    const name = student.querySelector('name');
    const firstName = name.querySelector('first');
    const secondName = name.querySelector('second');
    const age = student.querySelector('age');
    const prof = student.querySelector('prof');
    const langSpeak = name.getAttribute('lang');
    studentList[j] = [
      { name: firstName.textContent + " " + secondName.textContent, age: Number(age.textContent), prof: prof.textContent, lang: langSpeak },
    ];
    j++;
  }
  return studentList;
}
getStudent(doc);
const result = {
  list: [studentList]
}
console.log("result", result);