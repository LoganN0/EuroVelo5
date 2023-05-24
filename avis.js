// Récupération des pièces depuis le fichier JSON
const r = await fetch("avis-p.json");
const avis = await r.json();

function avisShower() {

    for (let i = 1; i < avis.length; i++) {

        const date = document.getElementById("avis-block-date" + " " + i);
        const name = document.getElementById("avis-block-name" + " " + i);
        const rating = document.getElementById("avis-rating" + " " + i);
        const localisation = document.getElementById("avis-localisation" + " " + i);
        const notationJSV = document.getElementById("avis-notes" + " " + i);
        const notationLabel = document.getElementById("avis-notes-label" + " " + i);
        const avisCommentObject = document.getElementById("avis-comment-object" + " " + i);
        const avisCommentContent = document.getElementById("avis-comment-content" + " " + i);
        const avisResponses = document.getElementById("avis-responses-count" + " " + i);

        date.innerText = avis[i].date;
        name.innerText = avis[i].name;
        rating.innerText = avis[i].rating + " étoiles";
        localisation.innerText = avis[i].localisation;
        notationLabel.innerText = "Notation/5 (Sécurité/Balisage/Intérêt/Services)";
        notationJSV.innerText = avis[i].notation;
        avisCommentObject.innerText = avis[i].commentObject;
        avisCommentContent.innerText = avis[i].commentContent;
        avisResponses.innerText = avis[i].responses + " réponses";

    }
}

avisShower();