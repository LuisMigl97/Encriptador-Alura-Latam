const encrypt = () => {

    let msg = document.querySelector('#mensaje').value.toLowerCase();
    if(msg == '' ) { return; }
    document.getElementById('muñeco').setAttribute('hidden', 'true');
    document.getElementById('helper-res').setAttribute('hidden','true');
    document.getElementById('btn-copy').removeAttribute('hidden');
    document.getElementById('btn-copy').removeAttribute('hidden','false');

    let secretMsg = msg.replaceAll('e','enter');
    secretMsg = secretMsg.replaceAll('i','imes');
    secretMsg = secretMsg.replaceAll('a','ai');
    secretMsg = secretMsg.replaceAll('o','ober');
    secretMsg = secretMsg.replaceAll('u','ufat');
    document.getElementById('texto').innerHTML=secretMsg;
    copytext(secretMsg);

}

const decrypt = () => {

    let msg = document.querySelector('#mensaje').value.toLowerCase();
    if(msg == '' ) { return }
    document.getElementById('muñeco').setAttribute('hidden', 'true');
    document.getElementById('helper-res').setAttribute('hidden','true');
    let secretMsg = msg.replaceAll('enter','e');
    secretMsg = secretMsg.replaceAll('imes','i');
    secretMsg = secretMsg.replaceAll('ai','a');
    secretMsg = secretMsg.replaceAll('ober','o');
    secretMsg = secretMsg.replaceAll('ufat','u');
    document.getElementById('texto').innerHTML=secretMsg;
    copytext(secretMsg);


}

const copytext = (secretMsg) => {

    navigator.clipboard.writeText(secretMsg);

}



