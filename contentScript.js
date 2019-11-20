document.addEventListener('mouseup', event => {
    let selectText = window.getSelection().toString().trim()
    if (selectText === '') return
    console.log(selectText);
    fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=zh&dt=t&q=${selectText}`)
        .then(res => {
            return res.json()
        })
        .then(result => {
            console.log(result[0][0][1], result[0][0][0]);
        })
})