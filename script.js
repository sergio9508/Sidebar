let btn = document.getElementById('btn');
let sidebar = document.querySelector('.sidebar');
let search = document.querySelector('.bx-search');

btn.onclick = () => {
    sidebar.classList.toggle("active");

}
search.onclick = () => {
    sidebar.classList.toggle("active");
    
}