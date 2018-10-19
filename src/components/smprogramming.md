import React, { Component } from 'react';
import './Styles/App.css';

var solved = false;
setTimeout(() => {
        solved = true;
        console.log(solved);
}, 1000);


class App extends Component {

  replaceAt(string, index, replace) {
    let returnValue = string.substring(0, index) + replace + string.substring(index + 1);
    if(returnValue.length !== string.length) console.log("problem");
    return returnValue
  }

  async load(text, texts, index){
    for (var i = 0; i < text.length; i++) {
            let current = texts[index].innerHTML;
            let newString = this.replaceAt(current, i, text.charAt(i));
            if(newString.length !== current.length) console.log("problem");
            texts[index].innerHTML = newString;
            await this.timer(125);
    }
  }

  getRandomString(number){
    var possible = "*^%)$(!@#ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let randomText = "";
    for(let r = 0; r < number; r++){
            randomText += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return randomText;
  }

  timer(ms) {
    return new Promise(res => setTimeout(res, ms));
  }

  loadCrypticText(){
    var texts = document.getElementsByClassName("decryptText");
    for (let i = 0; i < texts.length; i++) {
            let endText = texts[i].innerHTML;
            var randomString = this.getRandomString(endText.length);
            texts[i].innerHTML = randomString;
            let id = setInterval(() => {
                    randomString = this.getRandomString(endText.length);
                    texts[i].innerHTML = randomString;
            }, 150);

            setTimeout(() => 
            { 
                    clearInterval(id);
                    this.load(endText, texts, i);                                       
            }, 2000);

            setTimeout(() => 
            { 
                    let decryptStatus = document.getElementById("decryptStatus");
                    decryptStatus.innerHTML = "Decryption Complete - Unlocking All Systems";
                    setTimeout(() => 
                    { 
                            let decryptStatus = document.getElementById("decryptStatus");
                            decryptStatus.innerHTML = "";
                    }, 5000);  
            }, 2000);                
    }
  }

  componentDidMount(){
    this.loadCrypticText();
  }

  render() {
    return (
      <div className="App">
          <header className="header">
                  <h1 id="decryptStatus">Initializing AES 256 Bit Decryption</h1>  
          </header>
          <div className="container">
                  <div id="Title" className="main">                  
                                  <h1 className="decryptText">Sean</h1>
                                  <h1 className="decryptText">McCarthy</h1>
                                  <hr className = "titleLine"/>
                                  <h1 className="decryptText">Software Engineer</h1>
                  </div>
                  <div className="bio">
                          <h3 className="decryptText">Who Am I? 1337 H4x0r, Programming Aficionado</h3>
                          <h3 className="decryptText">Contact at seany467@gmail.com</h3>
                  </div>
          </div>
      </div>
    );
  }
}

export default App;


CSS

.App {
  background:black;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

h1 {
  margin: 0 0 0 20px;
  font-size: 4vw;
}

img{
  max-width: 100%;
}

.header{
  flex: 0.1;
  display: flex;
}

.container{
  display: flex;
  flex-direction: column;
}

.main{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.footer{
  display: flex;
  min-height: 100px;
  position: fixed;
  bottom: 0;
  left: 0;
  width:100%;
}

.max-width{
  width: 100%;
}

.yellow{
  color: yellow;
}

.red{
  color:red;
}

#Title{
  /*font-family: 'Bungee Shade';*/
  font-family: 'Orbitron';
  margin-top: 75px;
}

#decryptStatus{
  color:green;position: absolute;top:0;
}

#Nav{
  background-color: #000000;
  opacity: 0.8;
}

ul.nav{
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.nav li{
  display: inline;
}

.nav li a{
  display: inline-block;
  padding: 14px 16px;
  text-decoration: none;
  text-align: center;
  font-size: 22px;
  color:white;
}

li a:hover{
  background-color: #5555;
}

.decryptText{
  color: rgb(6, 173, 0);
}

.bio{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.bio > h3{
  font-size:3vw;
}

.titleLine{
  width:35%;border-color: rgb(6, 173, 0, 0.23);border-width: 0.1vw;
}

CSS

body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}
