const challenge = {"numero_casas":1,"token":"MEU_TOKEN","cifrado":"xifo efcvhhjoh, opwjdft jotfsu dpssfdujwf dpef; fyqfsut sfnpwf efgfdujwf dpef. sjdibse qbuujt","decifrado":"","resumo_criptografico":""}

const msgToBeDecrypted = challenge.cifrado.toLowerCase();
const displacement = challenge.numero_casas;

const decrypt = (disp) => {
    const getCryptMsg = msgToBeDecrypted;
    const reverseDisp = disp - (disp *2)
    const deCryptMsg = [];
    
    for(let i = 0; i < getCryptMsg.length; i++) {
        
        if(getCryptMsg[i].charCodeAt() < 97 || getCryptMsg[i].charCodeAt() > 122) {
            deCryptMsg.push(getCryptMsg[i]);
        } else {
            deCryptMsg.push(String.fromCharCode(((getCryptMsg[i].charCodeAt() - 122 + reverseDisp) % 26) + 122));
        }
    };
    
    
    const joinDecryptMsg = deCryptMsg.join('');
   
    return joinDecryptMsg;
    
};

const getDecryptedMsg = decrypt(displacement);
console.log(msgToBeDecrypted);
console.log(getDecryptedMsg);

