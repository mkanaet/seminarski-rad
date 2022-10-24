Webchat app

Funkcionalnost:

- prilikom otvaranja generira random ime i boju polja u kojoj se ispisuje poruka.
- ime se sastoji od naziva neke životinje i naziva stvari.
- ostaruje se povezivanje sa Scaledrone i spaja se sa sobom "observable-room" gdje se objavljuju poruke.
- Unosom teksta i pritiskom enter ili "send" šaljese poruka koja se prikazuje u središnjem polju s desne strane.
- poruke drugih korisnika se pojavljuju s lijeve strane.

Tijek izrade aplikacije:
Aplikacija je strukturirana je tri komponente. Prva verzija je naprevljena s funkcijskim komponentama uključujući i
App.js. U Apps.js prvo korištena kombinacija useEffecta i useStatea gdje se generira random ime i boja (randomlist.com) koja se šalje komponenti Messages. Također je sadržavala komponentu Input kojoj je slan props funkcija koja dohvaća uneseni tekst. Iz Messages primljeni tekst, ime i boja koji se primaju u obliku arreya šalju se komponenti OneMessage kao pojedini elementi korištenjem metode map. OneMessage stvara li koji se ubacuje u ul što je Messages komponenta. Takav oblik aplikacije bez nekog posebnog css-a je i dalje na mester grani na GitHubu. Trebalo je još samo spojiti Scaledrone.
Dugotrajnim pregledom dokumentacije našao sam upute za mnoge tehnologije ali ne i za React. Odnosno našao sam jedan tutorial koji ima class komponente. Nakon mnogih pokušaja da nađem rješenje koje bi omogučilo zadržavanje svega što sam napravio to na kraju nisam našao rješenje. Najveći problem je bio kako i čime nadomjestiti funkcionalnost constructora koji nudi class komponenta. Gotovo da nema ničega na webu koji se bavi tim pitanjem.
Odlučio sam prijeći na class komponentu App.js te je tada sve funkcioniralo.
S obzirom na veličinu aplikacije odlučio sam sav css zadržati u jednom fileu.
