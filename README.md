# CodeNation_Challenge
This is my solution for CodeNation challenge.

Directory created with a solution to Julio César's Cryptography challenge, available from Code Nation.
This challenge is part of the AceleraDev NODE.JS Edition, in Valinhos / SP, supported by the company KROTON.

Explaining steps:

Description of the Function: caesarCipher.js

Despite the challenge just ask a decryption of a text, I have to create a function that also makes a
encryption. Because of that allows me to reproduce the initial step of an encryption and also understand exactly how the second step work, the decrytion.
So I created a function for encryption (given the rules required by the challenge) and for decryption.
However, I did not provide the encryption function because in this challenge it was not required. If anyone wants access
to this function can contact me by email: detonihenrique@gmail.com. I will be happy to be able to help.

Request for a CodeNation API: api.js

First I used a "request" library to do all the necessary requisitions. This gave me access to JSON
returned by the request.
However, I couldn't create a POST method that sent my archive answer.json correctly.
To do this, I used the POSTMAN program, where I could send the solution successfully.

Generating a key hash (cryptographic summary): crypto.js

I have used a library called "crypto", passing the secret message sent by the challenge, having made updated with a message
already decrypted (by my decrypt function). For this process, I used the SHA1 algorithm, provided by the library itself.

This challenge was extremely interesting and challenging for me, because I am studying programming for short time and never had contact with these technologies, as well I have never created a program for Julio Caesar's Encryption. I worked hard to succeed and be able to reach a score of 100%. I'm very pround of this.

Thank you the CodeNation team for the opportunity to participate of this process and test my internal skills and 
on this path to success in computer programming.

Best regards,

Henrique.


