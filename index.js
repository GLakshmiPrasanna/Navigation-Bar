var curStatus=0;
function nav()
{
    if(!curStatus)
    {
        $('.maindiv').css('width','100%');
        $('li').css('display','block');
        curStatus=1;
    }
    else{
        $('.maindiv').css('width','0');
        $('li').css('display','none');
        curStatus=0;  
    }
}