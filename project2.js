const list= document.querySelectorAll('.list');
		function activeLink(){
			list.forEach((item) =>
			item.classList.remove('active'));
			console.log(this)
			this.classList.add('active');
		}
		list.forEach((item)=>
			item.addEventListener('click',activeLink));

	



function makeDoct(name,speciality,contact,src,age,Description){
	return {
	name : name,
	speciality:speciality,
	contact:contact,
	src:src,
	age:age,
	Description:Description
      }
}
 var doct1=makeDoct("Dr Reese","Anesthesiology",50235412,"doct1.jpg",75,"Dr Reese is one of the best doctors of Psychiatry. She treats problems of depression and mind-related problems. She is considered the world’s best doctor by many. Dr Reese got her accreditation from The University of Texas Southwestern Medical School. She is also an expert on mood disorders and anxiety. Currently, she is working as a Professor of Psychiatry at Icahn School of Medicine at Mount Sinai. She is also affiliated with Mount Sinai Services Elmhurst Hospital Center and New York Medical College at present.")
var doct2=makeDoct("Dr Myles","cardiologists",50235412,"doct2.jpg",66,"Dr Myles is also one of the best-known doctors of Paediatrics in the world. He graduated from the University of Miami, Leonard M Miller School of Medicine, in 1972. He treats the problems of growth and child development and has been in practice for 20-plus years. Dr Myles currently practices at East Bay Pediatric and Medical Group and is affiliated with Alta Bates Summit Medical Center – Berkeley, Children’s Hospital and Research Center Oakland, and UCSF Medical Centre – UCSF Health.")
 var doct3=makeDoct("anderson3","psychiatry",50235412,"doct3.jpg",33,"Dr Abdu is an Associate Professor of Orthopedics and The Dartmouth Institute Medical Director at Dartmouth-Hitchcock Medical Center. Dr Abdu got his accreditation in 1985 from Tufts University. He is a pioneer in the study and treatment of spine-related conditions. Being one of the best orthopaedic surgeons, he hones surgery of the spine, including cervical, thoracic, and lumbar disorders, disk herniation, spinal stenosis, spondylolisthesis, spondylotic myelopathy, spinal cord injury, and spine trauma. Also, he discovered many new techniques for spine treatment")
var doct4=makeDoct("anderson4","paediatrics",50235412,"doct4.jpg",35,"Dr Abdu is an Associate Professor of Orthopedics and The Dartmouth Institute Medical Director at Dartmouth-Hitchcock Medical Center. Dr Abdu got his accreditation in 1985 from Tufts University. He is a pioneer in the study and treatment of spine-related conditions. Being one of the best orthopaedic surgeons, he hones surgery of the spine, including cervical, thoracic, and lumbar disorders, disk herniation, spinal stenosis, spondylolisthesis, spondylotic myelopathy, spinal cord injury, and spine trauma. Also, he discovered many new techniques for spine treatment")
 var doct5=makeDoct("anderson5","Anesthesiology",50235412,"doct5.jpg",34,"Dr Abdu is an Associate Professor of Orthopedics and The Dartmouth Institute Medical Director at Dartmouth-Hitchcock Medical Center. Dr Abdu got his accreditation in 1985 from Tufts University. He is a pioneer in the study and treatment of spine-related conditions. Being one of the best orthopaedic surgeons, he hones surgery of the spine, including cervical, thoracic, and lumbar disorders, disk herniation, spinal stenosis, spondylolisthesis, spondylotic myelopathy, spinal cord injury, and spine trauma. Also, he discovered many new techniques for spine treatment")
 var doct6=makeDoct("anderson6","psychiatry",50235412,"doct6.jpg",640,"Dr Abdu is an Associate Professor of Orthopedics and The Dartmouth Institute Medical Director at Dartmouth-Hitchcock Medical Center. Dr Abdu got his accreditation in 1985 from Tufts University. He is a pioneer in the study and treatment of spine-related conditions. Being one of the best orthopaedic surgeons, he hones surgery of the spine, including cervical, thoracic, and lumbar disorders, disk herniation, spinal stenosis, spondylolisthesis, spondylotic myelopathy, spinal cord injury, and spine trauma. Also, he discovered many new techniques for spine treatment")
 var doct7=makeDoct("anderson7","orthopedics",50235412,"doct10.jpg",44,"Dr Abdu is an Associate Professor of Orthopedics and The Dartmouth Institute Medical Director at Dartmouth-Hitchcock Medical Center. Dr Abdu got his accreditation in 1985 from Tufts University. He is a pioneer in the study and treatment of spine-related conditions. Being one of the best orthopaedic surgeons, he hones surgery of the spine, including cervical, thoracic, and lumbar disorders, disk herniation, spinal stenosis, spondylolisthesis, spondylotic myelopathy, spinal cord injury, and spine trauma. Also, he discovered many new techniques for spine treatment")
 var doct8=makeDoct("anderson8","Anesthesiology",50235412,"doct8.jpg",45,"Dr Abdu is an Associate Professor of Orthopedics and The Dartmouth Institute Medical Director at Dartmouth-Hitchcock Medical Center. Dr Abdu got his accreditation in 1985 from Tufts University. He is a pioneer in the study and treatment of spine-related conditions. Being one of the best orthopaedic surgeons, he hones surgery of the spine, including cervical, thoracic, and lumbar disorders, disk herniation, spinal stenosis, spondylolisthesis, spondylotic myelopathy, spinal cord injury, and spine trauma. Also, he discovered many new techniques for spine treatment")
 var doct9=makeDoct("anderson9","Anesthesiology",50235412,"doct6.jpg",45,"Dr Abdu is an Associate Professor of Orthopedics and The Dartmouth Institute Medical Director at Dartmouth-Hitchcock Medical Center. Dr Abdu got his accreditation in 1985 from Tufts University. He is a pioneer in the study and treatment of spine-related conditions. Being one of the best orthopaedic surgeons, he hones surgery of the spine, including cervical, thoracic, and lumbar disorders, disk herniation, spinal stenosis, spondylolisthesis, spondylotic myelopathy, spinal cord injury, and spine trauma. Also, he discovered many new techniques for spine treatment")
 var doctors=[doct1,doct2,doct3,doct4,doct5,doct6,doct7,doct8,doct9]
const specialities=["Anesthesiology","cardiologists","psychiatry","paediatrics","orthopedics"]
 var profiles=['html.html','html1.html','html3.html','html4.html','html5.html','html6.html','htm7.html','html8.html']


function showDoc(arr){
	for(var i=0;i<arr.length;i++){
		
		$(".s2_cards").append(`<div id="cards"><img src=${arr[i].src}>
			<div class="container" >
			<h4 >${arr[i].name}</h4>
			<p >${arr[i].speciality}</p>
			<a href=${profiles[i]}><button>Show More</button></a>
			</div></div>`)}
	}
$(document).ready(function(){
	function showSpe(){
	for(var i=0;i<specialities.length;i++){
		// console.log(specialities[i])
		$("select").append(`<option id='${specialities[i]}' value='${specialities[i]}'>${specialities[i]}</option>`)
	}}
	



showSpe()
showDoc(doctors)
$('#speciality').on('click',function(){
  var doctors=[doct1,doct2,doct3,doct4,doct5,doct6,doct7,doct8,doct9]

	var z=$("#speciality option:selected").val()

	console.log(z)
	var newArr= filter(doctors,function(element,i){
 return element.speciality===z
	})
	console.log(newArr)
	
	doctors = newArr
	$('.s2_cards').empty()
	// console.log(doctors)
	showDoc(doctors) 

   

})




});
function each(coll, func) {
	if (Array.isArray(coll)) {
	  for (var i = 0; i < coll.length; i++) {
		func(coll[i], i);
	  }
	} else {
	  for (var key in coll) {
		func(coll[key], key);
	  }
	}
  }
  function filter(array, predicate) {
	var acc = [];
	each(array, function (element, index) {
	  // notice we added the index here
	  if (predicate(element, index)) {
		// notice we added the index here
		acc.push(element);
	  }
	});
	return acc;
  }
  $('#sub').on('click',function(){
     alert("we will contact you soon")
  })

  var width =900;
	var animationSpeed =3000;
	var pause = 3000;
	var currentSlide=1;
	
	var $slider = $('#slider');
	var $slideContainer= $slider.find('.slides');
	var $slides=$slideContainer.find('.slide');
    var interval;
     function startSlider(){
	interval = setInterval(function(){
		$slideContainer.animate({'margin-left': '-='+width},animationSpeed,function(){
			currentSlide++;
			if(currentSlide===$slides.length){
				currentSlide = 1 ;
				$slideContainer.css('margin-left',0);
			}
		});
	},pause);
}
function pauseSlider(){
	clearInterval(interval);
}
$slider.on('mouseenter',pauseSlider).on('mouseleave',startSlider);
// startSlider();

//  