// fetch(`https://www.omdbapi.com/?apikey=433d823&t=$Clueless`)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));
//     pic= document.querySelector(".pic")
//     let image = document.createElement("img")
//         image.src = object.Poster
//         pic.append(image)
let dropdown = document.querySelector("#dropdown")
dropdown.addEventListener("submit", (event) => {
    event.preventDefault()
        fetch(`https://www.omdbapi.com/?apikey=433d823&t=$Clueless`)
        .then(response => response.json())
        .then(response => { 
            console.log(response.Actors)
            console.log(event.target)
            console.log(event.target.Actors)
            console.log(event.target.Actors.value)
            if(event.target.Actors.value === "Cher"){
                console.log(response.Actors)
            }
            

       
// let url = 'http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcS_nflb-FX5OOSObB9_wPfSQsqT4LlaiahJXmVnJn48OHTyCLyQO21q72c8VPU5uhWhMbmf95PMMlS7WME';
 
// let img = new Image();
// image.innerHTML = url;
// document.getElementById('container').appendChild(image);
          
//             response.Actors(response => {
//                 // console.log(character)
//                 let Actors = document.createElement("option")
//                 Actors.innerText = respond.Actors
//                 dropdown.append(tag)
//             });
   

       let pic= document.querySelector(".pic")

        let image = document.createElement("img")
            image.src = response.Poster
            pic.append(image) 
    })
   
    })
//m.media-amazon.com/images/M/MV5BMzBmOGQ0NWItOTZjZC00ZDAxLTgyOTEtODJiYWQ2YWNiYWVjXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"6.9/10"}
     
// let dropdown = document.querySelector(".dropdown")

// fetch(`https://www.omdbapi.com/?apikey=433d823&t=$Clueless`).then(response => response.json()).then(data => {
//     console.log(data);
//     data.forEach(response.Actors => {
//         // console.log(character)
//         let Actors = document.createElement("option")
//         Actors.innerText = character.name
//         tag.value = character.id
//         dropdown.append(tag)
//     });
// })