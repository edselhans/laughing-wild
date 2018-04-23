// Opera 8.0+
var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

// Firefox 1.0+
var isFirefox = typeof InstallTrigger !== 'undefined';

// Safari 3.0+ "[object HTMLElementConstructor]" 
var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification);

// Internet Explorer 6-11
var isIE = /*@cc_on!@*/false || !!document.documentMode;

// Edge 20+
var isEdge = !isIE && !!window.StyleMedia;

// Chrome 1+
var isChrome = !!window.chrome && !!window.chrome.webstore;

// Blink engine detection
var isBlink = (isChrome || isOpera) && !!window.CSS;

let artistInfo = {
  durang: {
    name: "Christopher Durang",
    role: "Playwright",
    headshot: "",
    description: "Christopher Durang is an American playwright. He received a B.A. in English from Harvard University,and his MFA in playwrighting from the prestigious Yale School of Drama. Known primarily for itsabsurdist comedy and playful cynicism, his work has been produced on Broadway, Off-Broadway, andnationwide. Some of his best known works include the Obie Award winning Sister Mary Ignatius ExplainsIt All for You and The Marriage of Bette and Boo, Beyond Therapy, Baby with the Bathwater, and the2013 Tony Award Winner for Best Play Vanya and Sonia and Masha and Spike. A prominent figure inLGBT theatrical literature, Durang often writes about issues of homosexuality, abuse, and RomanCatholic dogma and culture (having attended Catholic school himself as child in New Jersey)."
  },
  lovell: {
    name: "Lovell Holder",
    role: "Director",
    headshot: "img/headshot-lovell.jpg ",
    description: "Lovell Holder graduated summa cum laude and Phi Beta Kappa from Princeton University.  Hethen went on to receive his MFA in Acting from Brown University/Trinity Repertory Company.  Uponmoving to Los Angeles, Holder first worked as a development assistant for writer/producer StacyRukeyser (the Emmy-nominated UnREAL) and producer Clark Peterson (the Oscar-winning Monster,Rampart).  Not long after, he began writing his own work, and his first play, Juliet in Pasadena, wasshortlisted as a semi-finalist for the National Playwrights Conference at the Eugene O’Neill TheaterCenter. Holder served as the lead producer of Some Freaks, the debut feature film of Ian MacAllister-McDonald (a Sundance Lab Finalist), which stars Thomas Mann (Me and Earl and the Dying Girl), LilyMae Harrington, and Tony Award nominee Marin Ireland (Sneaky Pete).  Executive produced by NeilLaBute, the outsider romance has won over a dozen festival awards, and the Hollywood Reporter namedit “one of the strongest films of its kind in ages.” Soon after completing production on Some Freaks,Holder directed his first feature film, Loserville, which he also co-wrote and produced alongside Grey’sAnatomy star and Tony Award winner Sara Ramirez.  The ensemble comedy features Darby Stanchfield(Scandal), Matt McGorry (How to Get Away with Murder), Jamie-Lynn Sigler (The Sopranos), andJonathan Lipnicki (Jerry Maguire).  Most recently, Holder teamed up with Oscar-winning director DamienChazelle to produce the dark comedy Surrogate, a short film by Olivia Hamilton."
  },
  adam: {
    name: "Adam Ziv",
    role: "Actor & Executive Producer",
    headshot: "img/headshot-adam.jpg",
    description: "Adam Ziv is an actor, dancer and musician from New York City. Hegraduated from Princeton University, where he obtained a Certificate in Theater from the Lewis Centerfor the Arts, served as Artistic Director for diSiac dance company, and studied choreography with SusanMarshall. He has studied acting at the Royal Academy of Dramatic Art in London, the American GlobeTheater Conservatory, and the Stella Adler Studio in NYC. Favorite theater credits include The Oresteia(Orestes, Agamemnon), Antigone (Creon), Twelfth Night (Orsino), Measure for Measure (Lucio), Romeoand Juliet (Tylbalt), A Doll’s House (Helmer, Krogstad), Hedda Gabler (Lovborg), The Letter (Crosbie), TheZoo Story (Jerry) and Barefoot In the Park (Velasco) directed by Lovell Holder. He appeared in the 2013NYC Fringe Festival in Becca Foresman’s HALF: A Divorce Farce, and danced Off-Broadway in the award-winning 8 Million Protagonists. In LA, he appeared in McCoy Rigby’s production of West Side Story(Diesel) at the La Mirada Theater for the Performing Arts last season, and has also performed with NeoEnsemble Theater in Shakespeare In Hollywood (Cagney). He has danced for C.Eule Dance, RhetOracleDance Company, Epiphany Dance Company, For Dance Company, Sean Greene&#39;s Shieldwall DanceCompany and Chad Michael Hall’s Multiplex Dance. As a choreographer, he has shown work in LA at theWest Hollywood Dance Festival, El Portal Theater, Rockwell Table and Stage, and Los Globos, as well asin venues in NYC and San Diego. When he is not acting or dancing, Adam is a classical pianist and teacher."
  },
  dominique: {
    name: "Dominique Salerno",
    role: "Actor",
    headshot: "img/headshot-dominique.jpg",
    description: "Dominique Salerno (The Woman) is a New York based actor, writer, and improviser. Recently, her self-written solo show The Box Show won the Overall Excellence Award for solo performance in FringeNYCand Best Comedic Script in the United Solo Theatre Festival.  Her show was selected as one of the &#39;Top10 shows out of 200&#39; for the Fringe Encore Series, and has had two successful six week runs at thePeople&#39;s Improv Theatre. The Box Show will make its Chicago debut at The iO Theatre this spring!Dominique received her MFA in Acting from American Conservatory Theater, and her A.B. in Religionfrom Princeton University. She regularly performs with her long form improv team &quot;Bad People&quot; and hervideo sketch comedy duo &quot;Feminarchy.&quot;"
  }
};

let isMobile = false,
    durangOn = false;

if (screen.width < 720) {
  isMobile = true;
}

if (isMobile) {
  let fixedHeight = window.innerHeight;
  document.getElementById('header').style.height = (fixedHeight - 30) + 'px';
}

document.getElementById('artists').addEventListener('click', openPopup, false);

function openPopup(e) {
  if (e.target.tagName === 'H2') {
    document.getElementById('artist-name').textContent = artistInfo[e.target.parentElement.id]['name'];
    document.getElementById('artist-role').textContent = artistInfo[e.target.parentElement.id]['role'];
    document.getElementById('artist-img').setAttribute('src', artistInfo[e.target.parentElement.id]['headshot']);
    document.getElementById('artist-description').innerHTML = artistInfo[e.target.parentElement.id]['description'];
    let popupElem = document.getElementById('popup'),
        xButtonElem = document.getElementById('x-button');
    if (isMobile) {
      document.body.classList.add('fixed');
    }
    if (e.target.parentElement.id === 'durang') {
      durangOn = true;
      document.getElementById('headshot-container').classList.add('removed');
    }
    popupElem.classList.remove('hidden');
    popupElem.classList.remove('invisible');
    xButtonElem.addEventListener('click', closePopup, {once: true});
  }
}

function closePopup(e) {
  let popupElem = document.getElementById('popup'),
      xButtonElem = document.getElementById('x-button');
  xButtonElem.removeEventListener('click', closePopup);
  let hidePopup = function() {
    popupElem.classList.add('hidden');
    if (isMobile) {
      document.body.classList.remove('fixed');
      popupElem.scrollTop = 0;
    }
    if (durangOn) {
      durangOn = false;
      document.getElementById('headshot-container').classList.remove('removed');
    }
  };
  popupElem.addEventListener('transitionend', hidePopup, {once: true});
  popupElem.classList.add('invisible');
  document.getElementById('artists').addEventListener('click', openPopup, {once: true});
}
