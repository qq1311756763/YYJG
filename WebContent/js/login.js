function change_text(e)
{
	var tmp = e.toString();
	var tmp_list= tmp.split("|");
	if(document.getElementById(tmp_list[2]).value.length==0)
	{
		
		document.getElementById(tmp_list[2]).style.borderBottomColor="#4285F4";
		var text_div = document.getElementById(tmp_list[0]);
	    text_div.className = tmp_list[1]+"_1";//变成用户输入的状态
    }
}

function back_text(e)
{
	var tmp = e.toString();
	var tmp_list= tmp.split("|");
	if(document.getElementById(tmp_list[2]).value.length==0)
	{
		document.getElementById(tmp_list[2]).style.borderBottomColor="#E0E0E0";
		var text_div = document.getElementById(tmp_list[0]);
	    text_div.className = tmp_list[1]+"_0";//变回用户没有数据的样子
    }
}
