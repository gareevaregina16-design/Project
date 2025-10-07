/ PAGE 1: Read DOM button (uses the exact expression requested)
document.getElementById('readDomBtn').addEventListener('click', ()=>{
    try{
        // Evaluate the expression exactly as requested
        var val = document.getElementsByTagName('p')[2].childNodes[1].innerText;
        var out = '<strong>Полученное значение (document.getElementsByTagName("p")[2].childNodes[1].innerText):</strong> ' + val;
        // Also read name and yob by IDs
        var name = document.getElementById('name') ? document.getElementById('name').innerText : '';
        var yob = document.getElementById('yob') ? document.getElementById('yob').innerText : '';
        out += '<br>Имя (из #name): ' + name + '<br>Год рождения (из #yob): ' + yob;
        document.getElementById('domResult').innerHTML = out;
    }catch(e){
        document.getElementById('domResult').innerText = 'Ошибка при чтении DOM: ' + e;
    }
});

// File inputs for screenshots (page1)
function handleFileInput(inpId,imgId){
    var inp = document.getElementById(inpId);
    inp.addEventListener('change', function(){
        var f = this.files[0];
        if(!f) return;
        var reader = new FileReader();
        reader.onload = function(e){
            document.getElementById(imgId).src = e.target.result;
        }
        reader.readAsDataURL(f);
    });
}
handleFileInput('ss2','img2');
handleFileInput('ss3','img3');