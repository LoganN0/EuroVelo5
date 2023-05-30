// Récupération des pièces depuis le fichier JSON
const r = await fetch('http://85.169.220.243:5006/api/visiteurs');
const d = await r.json();

// console.log(d.data[0].attributes.date);

for (let i = 0; i < d.data.length; i++) {
    
    const date = document.getElementById("avis-block-date" + " " + (i + 1));
    const name = document.getElementById("avis-block-name" + " " + (i + 1));
    const rating = document.getElementById("avis-rating" + " " + (i + 1));
    const localisation = document.getElementById("avis-localisation" + " " + (i + 1));
    const avisCommentObject = document.getElementById("avis-comment-object" + " " + (i + 1));
    const avisCommentContent = document.getElementById("avis-comment-content" + " " + (i + 1));

    console.log(d.data[i].attributes.name);

    date.innerText = d.data[i].attributes.date;
    name.innerText = d.data[i].attributes.name;
    rating.innerText = d.data[i].attributes.rating + " étoiles";
    localisation.innerText = d.data[i].attributes.localisation;
    avisCommentObject.innerText = d.data[i].attributes.commentObject;
    avisCommentContent.innerText = d.data[i].attributes.commentContent;

}