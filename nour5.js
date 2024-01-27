`);
var l_itvaiah=setInterval(function(){
    if(myid!=null){
        clearInterval(l_itvaiah);
        $("#users .uzr:contains('نـَوَر')").addClass('nour1');
        $("div#users .uzr.nour1 .My_vedio1").click(function(){
        $("#movon1").show();
        $('#movon1').addClass('nour1');
        
        $("#ifr_mov1").show(function(){
        $("#upro").modal("hide");
    } ); 
});
    }
}, 10000);

