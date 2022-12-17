function active(evt, tabName) {
	var i, getHdr,getjdl;
	var getHdr = document.getElementsByClassName("in-hdr");
	var getjdl = document.getElementsByClassName("in-jdl");

	for (var i = 0; i < getHdr.length ;i++) {
		getHdr[i].style.display = "none";
	}
	for (var i = 0; i < getjdl.length; i++) {
		getjdl[i].className = getjdl[i].className.replace(" active","");
	}
	document.getElementById(tabName).style.display = "flex";
	evt.currentTarget.className += " active";
}