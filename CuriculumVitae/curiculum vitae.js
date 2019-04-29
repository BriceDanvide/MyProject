
const myDate= document.querySelector('#myDate');
console.log(myDate);
myDate.innerText = new Date().toLocaleDateString();



//declaration des objets

const coordonnee={

    firstName:'Brice',
    lastName :'Danvidé',
    gender: 'M',
    adresse:'Paris',
    email: 'brice_danvide@hotmail.fr',
    tel :'0641664106',


};

const experience = {

    EntrepriseName1:'Microsoft France Mars 2009 /2018',
    EntrepriseName2:'Sun Microsystems Juin 2007 /2009',
    JobTitle1:'Business Development Manager Surface',
    JobTitle2:'Responsable Sponsoring TECHDAYS 2015',
    JobTitle3:'Channel Development Manager SMS&P/SMB',
    JobTitle4:'Technical Sales Specialiste SMS&P /CTM CAM',
    JobTitle5:'Inside Territory Manager SMS&P / CTM Sud-Ouest',
    JobTitle6:'Commercial Sédentaire Secteur Bancaire',

    };

const competence=[
    'Html', 'Css3','Javascript','React Js', 'Angular 6', 'Nodes Js','GitHub', 'Adobe Creative Suite', 'Anglais Professionnel'


];

const formation ={

    formationTitle1:'',
    formationTitle2:'',
    formationTitle3:'',
    formationDescription1:'',
    formationDescription2:'',
    formationDescription3:'',



}

//creation des fonctions







function sayGender(personParameter){


    if (personParameter.gender==='F'){
        return 'DEVELOPPEUSE WEB FRONT END';


    }else if (personParameter.gender==='M'){

        return 'DEVELOPPEUR WEB FRONT END';
    }

    else {
        return 'DEVELOPPEUR/EUSE WEB FRONT END';
    }
};




const titre = document.querySelector('#titree');
console.log(titre);
titre.innerText = sayGender(brice);



const nom=document.querySelector('#nomComplet');
console.log (nom);

nom.textContent = brice.lastName+' '+brice.firstName;


const adresse=document.querySelector('#adresse');
console.log (adresse);

adresse.textContent = brice.adresse;


const email=document.querySelector('#email');
console.log (email);

email.textContent = brice.email;


const telephone =document.querySelector('#tel');
console.log (telephone);

telephone.textContent = brice.tel;