const cardList = [
    {
        title: "Burmese Cat Breed",
        image: "images/kitten-2.jpg",
        link: "About Kitten 2. Read me please.",
        description: "Hello There! I just wanted to say HI to you guys. See ya!"
  
    },
    {
        title: "Chartreux Cat Breed",
        image: "images/kitten-3.jpg",
        link: "About Kitten 3. Read me please.",
        description: "Demo desciption about kitten 3"
    }
  ]

const clickMe = () => {
    alert("Thanks for clicking me. Hope you have a nice day!")
}
const addCards = (items) => {
    items.forEach(item => {
        let itemToAppend = '<div class="col s4 center-align">' +
            '<div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="' + item.image + '">' +
            '</div><div class="card-content">' +
            '<span class="card-title activator grey-text text-darken-4">' + item.title + '<i class="material-icons right">more_vert</i></span><p><a href="#">' + item.link + '</a></p></div>' +
            '<div class="card-reveal">' +
            '<span class="card-title grey-text text-darken-4">' + item.title + '<i class="material-icons right">close</i></span>' +
            '<p class="card-text">' + item.description + '</p>' +
            '</div></div></div>';
        $("#card-section").append(itemToAppend)
    });
}


const submitForm = () => {
    let formData = {};
    formData.title = $('#title').val();
    formData.subtitle = $('#subtitle').val();
    formData.path = $('#path').val();
    formData.description = $('#description').val();

    console.log("Form Data Submitted: ",formData);
    postCat(formData);
}

function postCat(cat){
    $.ajax({
        url:'/api/cat',
        type:'POST',
        data:cat,
        success: (result)=>{
            if (result.statusCode === 201) {
                alert('cat post successful');
            }
        }
    });
}

function getAllCats(){
    $.get('/api/cats', (response)=>{
        // response's data is in array format, so we can use it
        if (response.statusCode === 200) {
            addCards(response.data);
        }
    });
}

$(document).ready(function(){
    $('.materialboxed').materialbox();
    $('#formSubmit').click(()=>{
        submitForm();
    });
    addCards(cardList);
    $('.modal').modal();
    getAllCats();
});