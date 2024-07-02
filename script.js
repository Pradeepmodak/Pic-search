const inputbox=document.getElementById("input-box");
const showmore=document.getElementById("show-more");
const searchspace=document.getElementById("search-space");
const searchbtn=document.getElementById("search-btn");
const searchform=document.getElementById("search-form");
const alertdiv=document.getElementById("alert-div");
let keyword="";
const key="cNZCbk7hAqcOrkZSVYFZtCvavWJ8fdcAX1yol_Mbzqc";
let page=1;
let prevpage=1;

searchbtn.addEventListener("click",()=>{
  alertdiv.style.display="block";
  alertdiv.innerHTML='';
  console.log(alertdiv);
  let alttext=document.createElement('span');
  alttext.textContent=`You searched for "${inputbox.value}"`;
  console.log(alertdiv);
  alertdiv.appendChild(alttext);
})
async function searchImages(){
keyword=inputbox.value;
// searchform.appendChild(<p>`You searched for "${keyword}"`</p>);
const urlk=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${key}&per_page=12`;
const response=await fetch(urlk);
const outputvalue=await response.json();
// console.log(page);
if(page===prevpage){
  searchspace.innerHTML="";
 
}
// if(page===1){
//   alertdiv.innerHTML="";
// }
const results=outputvalue.results;
// console.log(outputvalue);
// const urlsss="https://images.unsplash.com/photo-1444464666168-49d633b86797?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjgwMTF8MHwxfHNlYXJjaHwxfHxiaXJkfGVufDB8fHx8MTcxOTY3MDIwM3ww&ixlib=rb-4.0.3&q=80&w=400";

results.map((e)=>{
  const image=document.createElement("img");
 
  
  image.src=e.urls.small;
  const linktounsplash=document.createElement("a");
  linktounsplash.href=e.links.html;
  linktounsplash.target="_blank";
  linktounsplash.appendChild(image);
  searchspace.appendChild(linktounsplash);
})
showmore.style.display="block";
searchspace.style.overflowY="scroll";
prevpage=page;
// console.log(prevpage);
}
searchform.addEventListener("submit",(e)=>{
  e.preventDefault();
  searchImages();  
})
showmore.addEventListener("click",()=>{
  page++;
  searchImages();
})