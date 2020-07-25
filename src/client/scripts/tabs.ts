let tabitems: any = document.querySelectorAll(".groups-icons_item");
let currentGroup:HTMLHeadElement = document.querySelector('.current-group');
let groupName = currentGroup.children[0];
console.log(groupName);

tabitems.forEach((it, ind) => it.addEventListener('click', function (e) {
  // Data from server here
  if (ind === 0) groupName.innerHTML = 'Work group';
  if (ind === 1) groupName.innerHTML = 'Family group';
  if (ind === 2) groupName.innerHTML = 'Home group';
  let bgc:string = getComputedStyle(e.target).backgroundColor;
  currentGroup.style.backgroundColor = `${bgc.slice(0,16)}, .5${bgc.slice(16)}`
}))
