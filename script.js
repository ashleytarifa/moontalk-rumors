const rumors = document.querySelectorAll('.rumor-item, .rumor-completed');
const rumorsPerPage = 4;
let currentPage = 1;

function showPage(page) {
    const start = (page - 1) * rumorsPerPage;
    const end = start + rumorsPerPage;

    rumors.forEach((rumor, index) => {
        rumor.style.display = (index >= start && index < end) ? 'block' : 'none';
    });

    document.getElementById('prevPage').disabled = page === 1;
    document.getElementById('nextPage').disabled = end >= rumors.length;
}

document.getElementById('prevPage').addEventListener('click', function() {
    if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
    }
});

document.getElementById('nextPage').addEventListener('click', function() {
    if ((currentPage * rumorsPerPage) < rumors.length) {
        currentPage++;
        showPage(currentPage);
    }
});

showPage(currentPage);

/* this code was made by chatgpt, i dont have enough neurons to code in javascript */