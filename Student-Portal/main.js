let check=()=>
{
	let a=document.getElementsByTagName(`tr`);
	let i=0;
	for(let val of a)
	{
		let x=val.childNodes[1].innerHTML;
		if(x==document.getElementById(`roll`).value)
		{
			return 1;
		}
	}
	return 0;
}
$(document).on('click','#btnClose',()=> {	

	document.getElementById(`btnClose`).click();
	document.getElementById(`form1`).reset();
	document.getElementById(`roll`).disabled=false;
	document.getElementById(`editBtn`).style.display=`none`;
	document.getElementById(`submitBtn`).style.display=`inline`;
});
$(document).on('click','#editBtn',()=> {	
	let name=document.getElementById(`name`).value;
	let email=document.getElementById(`email`).value;
	let pttrn=/[a-z A-Z]+\s[a-z A-Z]+/;
	let pttrn1=/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
	let pttrn2=/^[0-9]{10}$/;
	if(name == ``)
	{
		window.alert(`Name must be filled`);
	}		
	else if(email == ``)
	{
		window.alert(`Email must be filled`);
	}
	else if(!pttrn.test(name))
	{
		window.alert(`Enter full name`);
	}
	else if(!pttrn1.test(email))
	{
		window.alert(`Enter valid email address`);
	}
	else{
		let a=document.getElementsByTagName(`tr`);
		let i=1;
		for(let val of a)
		{
			let y=val.childNodes[1].innerHTML;
			if(y==document.getElementById(`roll`).value)
			{
				val.childNodes[2].innerHTML=document.getElementById(`name`).value;
				val.childNodes[3].innerHTML=document.getElementById(`email`).value;
			}
		}
		$(`#btnClose`).trigger(`click`);
	}
	
});
let edit=(rollno)=> {
	document.getElementById(`roll`).value=parseInt(rollno);
	document.getElementById(`roll`).disabled=`true`;
	document.getElementById(`register`).click();
	document.getElementById(`editBtn`).style.display=`inline`;
	document.getElementById(`submitBtn`).style.display=`none`;
}
let del=(rollno)=>{
	let a=document.getElementsByTagName(`tr`);
	let t=document.getElementById(`tid`);
	let flag=0;
	
	for(let val of a)
	{
		let z=val.childNodes[1].innerHTML;
		if(parseInt(z)==parseInt(rollno))
		{
			t.deleteRow(flag);
		}
		flag++;
	}
}
$(document).on('click','#submitBtn',()=> {

	let name=document.getElementById(`name`).value;
	let email=document.getElementById(`email`).value;
	let rollno=document.getElementById(`roll`).value;
	let pttrn=/[a-z A-Z]+\s[a-z A-Z]+/;
	let pttrn1=/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
	let pttrn2=/^[0-9]{10}$/;
	if(name == ``)
	{
		window.alert(`Name must be filled`);
	}		
	else if(email == ``)
	{
		window.alert(`Email must be field`);
	}
	else if(rollno == ``)
	{
		window.alert(`Roll no must be field`);
	}
	else if(!pttrn.test(name))
	{
		window.alert(`Enter full name`);
	}
	else if(!pttrn1.test(email))
	{
		window.alert(`Enter valid email address`);
	}
	else if(!pttrn2.test(rollno))
	{
		window.alert(`Enter roll number in 10 digit format`);
	}
	else{
		if(check() == 1)
		{
			window.alert(`Record exists`);
		}
		else{

			let a=document.createElement(`tr`);
			let j=document.createElement(`td`);
			let k=document.createElement(`input`);
			k.type=`checkbox`;
			k.name=`Checkk`;
			k.id=rollno;
			j.appendChild(k);
			a.appendChild(j);

			let b=document.createElement(`td`);
			let c=document.createTextNode(rollno);
			b.appendChild(c);
			a.appendChild(b);
			let e=document.createElement(`td`);
			let f=document.createTextNode(name);
			e.appendChild(f);
			a.appendChild(e);
			let m=document.createElement(`td`);
			let n=document.createTextNode(email);
			m.appendChild(n);
			a.appendChild(m);


			let r=document.createElement(`td`);
			let s=document.createElement(`button`);
			s.className+=`fa fa-edit`;
			s.addEventListener(`click`, function(){
				edit(rollno);
			});
			r.appendChild(s);
			a.appendChild(r);

			let u=document.createElement(`td`);
			let deleteBtn=document.createElement(`button`);
			deleteBtn.className+=`fa fa-cut`;
			deleteBtn.addEventListener(`click`, function(){
				del(rollno);
			});
			deleteBtn.id=rollno;
			r.appendChild(deleteBtn);
			a.appendChild(u);


			let  z=document.getElementById(`tbody`);
			z.appendChild(a);
		}
	}
});

