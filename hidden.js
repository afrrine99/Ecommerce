function togglePara(index) {
    var para = document.getElementById('para-' + index);
    if (para.classList.contains('hidden')) {
        para.classList.remove('hidden');
    } else {
        para.classList.add('hidden');
    }
}
