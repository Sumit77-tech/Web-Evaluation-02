//Displaying all the files with variable name files
const files = [ 'document1.txt', 'presentation1.pdf', 'song1.mp3', 'installer1.exe', 'archive1.rar', 'report1.docx', 'image1.jpg', 'graphic1.png', 'animation1.gif', 'compressed1.zip', 'document2.txt', 'presentation2.pdf', 'song2.mp3', 'installer2.exe', 'archive2.rar', 'report2.docx', 'image2.jpg', 'graphic2.png', 'animation2.gif', 'compressed2.zip', null, 'presentation3.pdf', '', 'installer3.exe', 'archive3.rar', 'report3.docx', 'image3.jpg', 'graphic3.png', 'animation3.gif', 'compressed3.zip', 'document4.txt', 'presentation4.pdf', 'song4.mp3', 'installer4.exe', 'archive4.rar', 'report4.docx', 'image4.jpg', 'graphic4.png', 'animation4.gif', 'compressed4.zip', 'document5.txt', 'presentation5.pdf', 'song5.mp3', 'installer5.exe', 'archive5.rar', 'report5.docx', 'image5.jpg', 'graphic5.png', 'animation5.gif', 'compressed5.zip', 'document6.txt', 'presentation6.pdf', 'song6.mp3', 'installer6.exe', 'archive6.rar', 'report6.docx', 'image6.jpg', null, 'animation6.gif', 'compressed6.zip', 'document7.txt', 'presentation7.pdf', 'song7.mp3', 'installer7.exe', 'archive7.rar', 'report7.docx', 'image7.jpg', 'graphic7.png', 'animation7.gif', 'compressed7.zip', 'document8.txt', 'presentation8.pdf', 'song8.mp3', 'installer8.exe', 'archive8.rar', 'report8.docx', 'image8.jpg', '', 'animation8.gif', 'compressed8.zip', 'document9.txt', 'presentation9.pdf', 'song9.mp3', 'installer9.exe', 'archive9.rar', 'report9.docx', 'image9.jpg', '', 'animation9.gif', 'compressed9.zip', 'document10.txt', 'presentation10.pdf', 'song10.mp3', 'installer10.exe', 'archive10.rar', 'report10.docx', 'image10.jpg', 'graphic10.png', 'animation10.gif', 'compressed10.zip', ];
//Displaying fileIcons with file name below
const fileIcons = {
    '.txt': 'https://via.placeholder.com/200?text=TXT',
    '.pdf': 'https://via.placeholder.com/200?text=PDF',
    '.mp3': 'https://via.placeholder.com/200?text=MP3',
    '.exe': 'https://via.placeholder.com/200?text=EXE',
    '.rar': 'https://via.placeholder.com/200?text=RAR',
    '.docx': 'https://via.placeholder.com/200?text=DOCX',
    '.jpg': 'https://via.placeholder.com/200?text=JPG',
    '.png': 'https://via.placeholder.com/200?text=PNG',
    '.gif': 'https://via.placeholder.com/200?text=GIF',
    '.zip': 'https://via.placeholder.com/200?text=ZIP',
};

let folderData = {}; //initialize folderData with an empty object
let bin = JSON.parse(localStorage.getItem('bin')) || []; //used localStorage for bin

// Categorize Files into Folders
function categorizeFiles() { //Creates a function name categorizeFiles
    files.filter(file => file).forEach(file => { //Used filter method to access the files
        let ext = file.slice(file.lastIndexOf('.')); //Used slice method
        if (!folderData[ext]) folderData[ext] = [];
        folderData[ext].push(file); //used push method to push folderData inside a file
    });
}
// Render Folders
function renderFolders() { //creates a function name renderFolders
    let folderList = document.getElementById('folderList'); //Used DOM for rendering folders
    folderList.innerHTML = '';
    Object.keys(folderData).forEach(ext => {
        let li = document.createElement('li');
        li.textContent = ext; 
        li.onclick = () => renderFiles(ext); //used onClick to access files inside folders
        folderList.appendChild(li); 
    });
}
// Render Files in a Folder
function renderFiles(ext) { //creates a function name renderFiles in a folder
    let fileList = document.getElementById('fileList'); //Using DOM for rendering files
    fileList.innerHTML = '';
    folderData[ext].forEach(file => {
        let fileDiv = document.createElement('div');
        fileDiv.innerHTML = `<img src="${fileIcons[ext]}" width="50" /><p>${file.split('.')[0]}</p>`; //for image of fileIcons using width of 50
        fileList.appendChild(fileDiv); //adds file name fileDiv to a fileList
    });
}
// Clear Bin
function clearBin() { //creates a function name clearBin to clear Bin
    bin = []; //empty bin
    localStorage.setItem('bin', JSON.stringify(bin)); //Used JSON.stringify in localStorage with item name 'bin'
    renderBin(); //Call renderBin function
}
// Render Bin
function renderBin() { //creates a function name renderBin
    let binList = document.getElementById('binList'); //Used DOM for rendering Bin
    binList.innerHTML = '';
    bin.forEach(file => {
        let li = document.createElement('li');
        li.textContent = file;
        binList.appendChild(li); //li is added to binList
    });
}
// Initialization
function init() {
    categorizeFiles(); //calling categorizefiles() in init() function
    renderFolders(); //calling renderFolders() in init() function
    renderBin(); //calling renderBin() in init() function
    document.getElementById('clearBin').onclick = clearBin; //When clicking on button to clear bin
}
init(); //calling init() function
