function blur()
{
    var arr = document.getElementById('rinu');
    var brr = document.getElementById('jisna')
    if(arr.value.length>5)
    {
        brr.textContent = 'onne podoooooo......';
    }
    else
    {
        brr.textContent='';
    }
}
var arr = document.getElementById('rinu');
arr.addEventListener('blur',blur);