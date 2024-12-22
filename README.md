# Organizarea-de-conferinte
Aplicatie pentru organizarea si managerierea conferintelor stiintifice


~Introducere
~Obiectivele proiectului
~Functionalitati cheie
~Tehnologii utilizate 
~Exemple


~ Introducere
Organizarea conferințelor științifice este o activitate complexă care implică numeroase procese: de la coordonarea organizatorilor, alocarea reviewerilor și gestionarea articolelor trimise de autori, până la monitorizarea progresului fiecărui articol. În contextul digital actual, o aplicație web dedicată acestui scop poate eficientiza întregul proces, oferind o soluție modernă, accesibilă și bine organizată.
Aplicația „Organizarea Conferințelor” este gândită pentru a simplifica aceste procese și pentru a reduce erorile cauzate de metodele tradiționale (e-mailuri, foi de calcul, procese manuale). Aceasta oferă o platformă centralizată unde toți utilizatorii – organizatori, revieweri și autori – pot colabora eficient.



~ Obiectivele proiectului
Aplicația urmărește să rezolve problemele tipice întâlnite în organizarea de conferințe științifice și să îmbunătățească experiența tuturor utilizatorilor implicați. Printre obiectivele principale se numără:
1.Automatizarea proceselor:
 Crearea unei platforme care să gestioneze în mod automatizat atribuirea reviewerilor, aprobările și feedback-ul pentru articole.
2.Accesibilitate ridicată: 
Dezvoltarea unei aplicații web care să poată fi utilizată atât pe desktop, cât și pe dispozitive mobile.
3.Monitorizare eficientă:
 Oferirea unor instrumente avansate pentru organizatori, astfel încât aceștia să poată urmări progresul fiecărui articol.
4.Simplificarea colaborării:
 Facilitarea comunicării între organizatori, revieweri și autori prin intermediul unei interfețe intuitive.



~ Funcționalități cheie
1.	Tipuri de utilizatori:
Organizatori: Creează conferințe, alocă revieweri și monitorizează progresul articolelor.
Revieweri: Revizuiesc articolele, oferă feedback și decid acceptarea sau respingerea articolelor.
Autori: Înregistrează conferințe, încarcă articole și trimit versiuni revizuite pe baza feedback-ului primit.
2.	Crearea și gestionarea conferințelor: 
Organizatorii pot configura detaliile conferinței, cum ar fi:
Numele conferinței, data și locația (pentru conferințe hibride sau fizice).
Lista reviewerilor asociați conferinței.
Limita de timp pentru trimiterea articolelor.
3.	Încărcarea și revizuirea articolelor:
Autorii pot încărca articole științifice direct pe platformă.
După încărcare, articolele sunt atribuite automat câtor doi revieweri pentru evaluare.
4.	Feedback și actualizări:
Reviewerii pot respinge articolele, solicita modificări sau le pot aproba.
Autorii primesc notificări despre feedback și pot încărca o versiune actualizată.
5.	Monitorizarea stării articolelor:
Organizatorii pot vedea rapid progresul fiecărui articol, inclusiv stadiile de evaluare și aprobare.



~ Tehnologii utilizate
Frontend: React.js 
Backend: Node.js cu Express.js
Baza de date: SQLite
Alte tehnologii: JSON Web Tokens



~ Exemple de fluxuri și scenarii de utilizare

  Exemplul 1: Organizatorul creează o conferință
Un organizator se loghează în aplicație.
Accesează secțiunea "Conferințe" și selectează opțiunea "Creează conferință".
Completează detalii precum:titlu, descriere,data
Organizatorul adaugă revieweri, selectând dintr-o listă predefinită de utilizatori cu rol de reviewer.
Conferința este creată și apare în lista de evenimente active.

Exemplul 2: Autorul trimite un articol
Un autor se înregistrează în aplicație și accesează secțiunea "Conferințe".
Selectează conferința Conferința Internațională de Inteligență Artificială 2024.
Completează un formular pentru trimiterea articolului: titslu si fisier
După trimitere, aplicația alocă automat doi revieweri, care primesc notificări.


Exemplul 3: Reviewer-ul evaluează un articol
Un reviewer se conectează în aplicație și accesează secțiunea "Articole atribuite".
Selectează articolul Utilizarea algoritmilor generativi pentru optimizarea energiei.
Citește articolul și completează următoarele câmpuri:
Evaluare: Aprobat, Necesită modificări, Respins.
Comentarii: Abstractul este bine structurat, însă concluziile trebuie dezvoltate mai mult pentru a susține afirmațiile din text.
Trimite feedback-ul către autor prin aplicație

Exemplul 4: Autorul încarcă o versiune revizuită
Autorul primește notificare că feedback-ul pentru articolul său este disponibil.
Accesează secțiunea "Articole trimise", selectează articolul respectiv și citește comentariile reviewer-ilor.
Realizează modificările necesare în documentul său și încarcă o nouă versiune prin intermediul aplicației.
Statusul articolului se schimbă în "În curs de evaluare".

Exemplul 5: Organizatorul monitorizează progresul
Organizatorul accesează secțiunea "Dashboard conferință".
Vizualizează o listă cu articolele trimise și stările lor:
Utilizarea algoritmilor generativi pentru optimizarea energiei - În curs de evaluare.
Aplicații ale rețelelor neuronale în procesarea limbajului natural - Aprobat.
Tehnologii emergente pentru robotică autonomă - Respins.
Organizatorul exportă un raport detaliat al articolelor și evaluărilor.
