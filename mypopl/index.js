

function onClick(a)  {
    var oneId;
    switch (a) {
    case 1: oneId = document.getElementById("click1"); break;
    case 2: oneId = document.getElementById("click2"); break;
    case 3: oneId = document.getElementById("click3"); break;
    case 4: oneId = document.getElementById("click4"); break;
    case 5: oneId = document.getElementById("click5"); break;
    case 6: oneId = document.getElementById("click6"); break;
    }

    var hoodNodes = oneId.parentNode.parentNode;
    var div1 = hoodNodes.children;
    
    if(oneId.innerHTML=="숨기기"){
        oneId.innerHTML="보이기"
        for(i = 1; i< div1.length; i++)
        div1[i].style.display = "none"
    }
    else{
        oneId.innerHTML="숨기기"
        for(i = 1; i< div1.length; i++)
        div1[i].style.display = "block"
    }
  }


  function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function(e) {
        document.getElementById('preview').src = e.target.result;
      };
      reader.readAsDataURL(input.files[0]);
    } else {
      document.getElementById('preview').src = "";
    }
  }

