const obj = {
    firstName: 'Shamim',
    lastName: 'Sarker'
};

const objStr = JSON.stringify(obj);

localStorage.setItem('obj', objStr);

let count = Number(localStorage.getItem('count'));
document.getElementById('p').innerText = count;

document.getElementById('btn-count').addEventListener('click', () => {
    let countValue = Number(document.getElementById('p').innerText);
    countValue++;
    console.log(countValue);
    document.getElementById('p').innerText = countValue;
    localStorage.setItem('count', countValue);
});
