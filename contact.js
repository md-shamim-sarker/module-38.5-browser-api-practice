const dataRetrive = (inputId, localKey) => {
    const input = document.getElementById(inputId).value;
    localStorage.setItem(localKey, input);
    document.getElementById(inputId).value = '';
};

document.getElementById('name-send').addEventListener('click', () => {
    dataRetrive('name-input', 'name');
});

document.getElementById('email-send').addEventListener('click', () => {
    dataRetrive('email-input', 'email');
});

document.getElementById('msg-send').addEventListener('click', () => {
    dataRetrive('msg-input', 'msg');
});

document.getElementById('name-delete').addEventListener('click', () => {
    localStorage.removeItem('name');
});

document.getElementById('email-delete').addEventListener('click', () => {
    localStorage.removeItem('email');
});

document.getElementById('msg-delete').addEventListener('click', () => {
    localStorage.removeItem('msg');
});

document.getElementById('reset-btn').addEventListener('click', () => {
    localStorage.clear();
});