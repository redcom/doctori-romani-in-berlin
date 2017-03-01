// @flow
import React from 'react';
import {
  Box,
    PageHeader,
} from '../../common/components';
import { Title } from '../components';

const strongStyle = {
  color: 'blue',
  marginTop: 1,
};

const HomePage = () => (
  <Box>
    <Title message="Doctori Romani in Berlin, Brandenburg" />
    <PageHeader
      heading="Doctori romani in Berlin"
      description="Lista doctorilor din Berlin si Brandenburg"
    />
    <div>
    <h2> <span id="berlin" />Berlin</h2>

    <p> <strong>Medicină generală și de familie</strong></p>
    <p>
    <strong style={strongStyle}>Dr. Müller Milas Johann</strong><br />
    Berlin 12163, Steglitz Schloßstr. 107 108<br />
    Telefon:<a href="tel: 030 7973011"> 030 7973011</a><br />
    Medicină generală și de familie<br />

    <strong style={strongStyle}>Dr. Ureche Laurentiu</strong><br />
    Berlin 12101, Manfred-von-Richthofen-Str. 4<br />
    Telefon:<a href="tel: 030 7867734"> 030 7867734</a><br />
    Medicină generală și de familie<br />

    <strong style={strongStyle}>Dr. Schreiber Detlef</strong><br />
    Berlin Köpenick 12587, Müggelseedamm 212<br />
    Telefon:<a href="tel: 030 64094470"> 030 64094470</a><br />
    Medicină generală și de familie<br />

    <strong style={strongStyle}>Dr. Unger Frank Uwe</strong><br />
    Berlin Marzahn 12689, Havemannstr. 24<br />
    Telefon:<a href="tel: 030 93664575"> 030 93664575</a><br />
    Medicină generală și de familie<br />

    <strong style={strongStyle}>Dr. Voda Tudor Viorel</strong><br />
    Berlin Tempelhof 12099, Tempelhofer Damm 124<br />
    Telefon:<a href="tel: 030 71093917"> 030 71093917</a><br />
    Medicină generală și de familie<br />

    <strong style={strongStyle}>Dr. Gärtner Roswitha</strong><br />
    Berlin Wedding 13357, Badstr. 32<br />
    Telefon:<a href="tel: 030 81037810"> 030 81037810</a><br />
    Medicină generală și de familie</p>
    <hr />

    <p> <strong>Dermatologie și boli sexuale</strong></p>
    <p>
    <strong style={strongStyle}>Dr. Rosenberger Dana Alina</strong><br />
    Berlin Wilmersdorf 14193, Franzensbader Str. 2<br />
    Telefon:<a href="tel: 030 8251027"> 030 8251027</a><br />
    Dermatologie și boli sexuale<br />

    <strong style={strongStyle}>Dr. Kremer Gertraud</strong><br />
    Berlin Zehlendorf 14195, Breitenbachplatz 8<br />
    Telefon:<a href="tel: 030 8234024"> 030 8234024</a><br />
    Dermatologie și boli sexuale</p>

    <p> <strong>Ginecologie</strong></p>
    <p>
    <strong style={strongStyle}>Dr. Christodulu Kostas</strong><br />
    Berlin Charlottenburg 10707, Kurfürstendamm 69<br />
    Telefon:<a href="tel: 030 2176062"> 030 2176062</a><br />
    Ginecologie<br />

    <strong style={strongStyle}>Dr. Berger Aliona</strong><br />
    Berlin Marzahn 12687, Mehrower Allee 22<br />
    Telefon:<a href="tel: 030 9309324"> 030 9309324</a><br />
    Ginecologie<br />

    <strong style={strongStyle}>Dr. Kunert Sorina</strong><br />
    Berlin Spandau 13591, Haberlandweg 4<br />
    Telefon:<a href="tel: 030 3725284"> 030 3725284</a><br />
    Ginecologie</p>
    <hr />

    <p> <strong>Medicină internă</strong></p>
    <p>
    <strong style={strongStyle}>Dr. Mroß Michael</strong><br />
    Berlin Lichtenberg 10318, Ehrenfelsstr. 47<br />
    Telefon:<a href="tel: 030 5293310"> 030 5293310</a><br />
    Medicină internă<br />

    <strong style={strongStyle}>Dr. Teutsch Christian</strong><br />
    Berlin Lichtenberg 10365, Frankfurter Allee 231a<br />
    Telefon:<a href="tel: 030 55184468"> 030 55184468</a><br />
    Medicină internă<br />

    <strong style={strongStyle}>Dr. Egri Thomas</strong><br />
    Berlin Reinickendorf 13405, Scharnweberstr. 44<br />
    Telefon:<a href="tel: 030 4122433"> 030 4122433</a><br />
    Medicină internă<br />

    <strong style={strongStyle}>Dr. Robert Matthias</strong><br />
    Berlin Wilmersdorf 10711, Joachim Friedrich Str. 46<br />
    Telefon:<a href="tel: 030 89044580"> 030 89044580</a><br />
    Medicină internă<br />

    <strong style={strongStyle}>Dr. Kleiner Hans Jürgen</strong><br />
    Berlin Pankow 13125, Schwanebecker Chaussee 50<br />
    Telefon:
      <a href="tel: 030 940112995">030 940112995</a>,
      <a href="tel: 030 940152920">030 940152920</a>
    <br />
    Medicină internă, cardiologie<br />

    <strong style={strongStyle}>Dr. Schmidt Ioanas Malina</strong><br />
    Berlin Friedrichshain 10247, Proskauer Str. 12<br />
    Telefon:<a href="tel: 030 4293939"> 030 4293939</a><br />
    Medicină internă, Pneumologie<br />

    <strong style={strongStyle}>Dr. Schwartzmann Anna</strong><br />
    Berlin Lichtenberg 10369, Franz Jacob Str. 10<br />
    Telefon:<a href="tel: 030 86204680"> 030 86204680</a><br />
    Medicină internă, Pneumologie<br />

    <strong style={strongStyle}>Dr. Sebert Michaela</strong><br />
    Berlin Marzahn 12683, Elsterwerdaer Platz 1<br />
    Telefon:<a href="tel: 030 23254320"> 030 23254320</a><br />
    Medicină internă, Pneumologie<br />

    <strong style={strongStyle}>Dr. Linnhoff Anneliese</strong><br />
    Berlin Wilmersdorf 10717,&nbsp; Hohenzollerndamm 2<br />
    Telefon:<a href="tel: 030 8811955"> 030 8811955</a><br />
    Medicină internă, Pneumologie</p>
    <hr />

    <p> <strong>Oftalmologie</strong></p>
    <p>
    <strong style={strongStyle}>Dr. Draghici S.</strong> <br />
    Berlin Neukölln 12057, Sonnenallee 306c<br />
    Telefon:<a href="tel: 030 6844994"> 030 6844994</a><br />
    Oftalmologie</p>
    <p> <strong>ORL</strong></p>
    <p>
    <strong style={strongStyle}>Dr. Stankovic Milutin</strong><br />
    Berlin Wilmersdorf 10715, Berliner Str. 36<br />
    Telefon:<a href="tel: 030 8613556"> 030 8613556</a><br />
    ORL</p>
    <p> <strong>Ortopedie</strong></p>
    <p>
    <strong style={strongStyle}>Dr. Lurtz Bruno Harald</strong><br />
    Berlin Köpenick 12555, Bahnhofstr. 17<br />
    Telefon:<a href="tel: 030 6572266"> 030 6572266</a><br />
    Ortopedie<br />

    <strong style={strongStyle}>Dr. Roland Freund</strong> <br />
    Berlin Reinickendorf 13435, Eichhorster Weg 11<br />
    Telefon:<a href="tel: 030 4163069"> 030 4163069</a><br />
    Ortopedie</p>
    <hr />

    <p> <strong>Psihiatrie, Neurologie</strong></p>
    <p>
    <strong style={strongStyle}>Dr. Baumgarten Daniela</strong><br />
    Berlin Tiergarten, 10551 Bredowstr. 48<br />
    Telefon:
      <a href="tel: 030 3610068" />030 3610068,
      <a href="tel:030 39825398"> 030 39825398</a>
    <br />
    Psihiatrie pentru copii<br />

    <strong style={strongStyle}>Dr. Bach Dagmar</strong><br />
    Berlin Charlottenburg 10629, Wilmersdorfer Str. 79<br />
    Telefon:<a href="tel: 030 3814490"> 030 3814490</a><br />
    Psihiatrie, Neurologie<br />

    <strong style={strongStyle}>Dr. Horak Udo</strong><br />
    Berlin Prenzlauer Berg 10405, Prenzlauer Allee 88<br />
    Telefon:<a href="tel: 030 42027662"> 030 42027662</a><br />
    Psihiatrie, Neurologie</p>
    <p> <strong>Stomatologie</strong></p>
    <p>
    <strong style={strongStyle}>Dr. Chirilas Gheorghe</strong><br />
    Berlin 12049, Weisestr. 13<br />
    Telefon:<a href="tel: 030 6216097"> 030 6216097</a><br />
    Stomatologie<br />

    <strong style={strongStyle}>Dr. Ispas Ingrid</strong><br />
    Berlin 10965, Yorckstr. 74<br />
    Telefon:<a href="tel: 030 7858022"> 030 7858022</a><br />
    Stomatologie<br />

    <strong style={strongStyle}>Dr. Popovici Gheorghe</strong><br />
    Berlin 12055, Lahnstr. 98<br />
    Telefon:<a href="tel: 030 68597470"> 030 68597470</a><br />
    Stomatologie</p>
    <p> <strong>Urologie</strong></p>
    <p>
    <strong style={strongStyle}>Dr. Johann Karl Ulrich</strong><br />
    Berlin Mitte 10117, Friedrichstr. 94<br />
    Telefon:<a href="tel: 030 4644474"> 030 4644474</a><br />
    Urologie<br />

    <strong style={strongStyle}>Dr. Schurwanz Cristina</strong><br />
    Berlin Mitte 10117, Friedrichstr. 94<br />
    Telefon:<a href="tel: 030 4644474"> 030 4644474</a><br />
    Urologie<br />

    <strong style={strongStyle}>Dr. Sudhoff&nbsp; Frank</strong> <br />
    Berlin Schöneberg 12161, Wiesbadener Str. 89<br />
    Telefon:<a href="tel: 030 8517985"> 030 8517985</a><br />
    Urologie</p>
    <hr />

    <h2><a name="brandenburg">Brandenburg</a></h2>

    <p> <strong>Medicină generală și de familie</strong></p>
    <p>
    <strong style={strongStyle}>Dr. Unger Beate</strong><br />
    Ahrensfelde 16356, Dorfstr. 8<br />
    Telefon:<a href="tel: 03346 84227"> 03346 84227</a><br />
    Medicină generală și de familie<br />

    <strong style={strongStyle}>Dr. Heinrichs Adriana Georg</strong><br />
    Dallgow Döberitz 14624, Gartenstr. 22<br />
    Telefon:<a href="tel: 03322 201631"> 03322 201631</a><br />
    Medicină generală și de familie<br />

    <strong style={strongStyle}>Dr. Georg-Heinrichs Adriana</strong><br />
    Dallgow-Döberitz 14624, Gartenstr. 22<br />
    Telefon:<a href="tel: 03322 201631"> 03322 201631</a><br />
    Medicină generală și de familie<br />

    <strong style={strongStyle}>Dr. Didu Catalin Marian</strong><br />
    Eisenhüttenstadt 15890, Friedrich Engels Str. 39<br />
    Telefon:<a href="tel: 03364 61246"> 03364 61246</a><br />
    Medicină generală și de familie<br />

    <strong style={strongStyle}>Dr. Klein Erhard Erhard</strong><br />
    Großräschen 01983, Karl Marx Str. 1<br />
    Telefon:<a href="tel: 035753 3145"> 035753 3145</a><br />
    Medicină generală și de familie<br />

    <strong style={strongStyle}>Dr. Gorecki Blassmann Nora Anneliese</strong><br />
    Schulzendorf bei Eichwalde 15732, Rudolf Breitscheid Str. 8<br />
    Telefon:<a href="tel: 033762 48067"> 033762 48067</a><br />
    Medicină generală și de familie<br />

    <strong style={strongStyle}>Dr. Claudia Ilciuc</strong><br />
    Senftenberg 01968, Dorothea Erxleben Str. 2a<br />
    Telefon:<a href="tel: 03573 7074133"> 03573 7074133</a><br />
    Medicină generală și de familie<br />

    <strong style={strongStyle}>Dr. Großmann Michael</strong><br />
    Senftenberg 01968, Eigenheimweg 15<br />
    Telefon:<a href="tel: 03573 794606"> 03573 794606</a><br />
    Medicină generală și de familie</p>
    <hr />

    <p> <strong>Chirurgie</strong></p>
    <p>
    <strong style={strongStyle}>Dr. Rainer Koll</strong><br />
    Schwedt Oder 16303, Auguststr. 23<br />
    Telefon:<a href="tel: 03332 533167"> 03332 533167</a><br />
    Chirurgie</p>
    <p> <strong>Dermatologie și boli sexuale</strong></p>
    <p>
    <strong style={strongStyle}>Dr. Bursac Carmen</strong><br />
    Forst Lausitz 03149, Robert Koch Str. 35<br />
    Telefon:<a href="tel: 03562 985480"> 03562 985480</a><br />
    Dermatologie și boli sexuale<br />

    <strong style={strongStyle}>Dr. Barbu Georgeta Loredana</strong><br />
    Potsdam 14480, Wildeberstraße 30<br />
    Telefon:<a href="tel: 0331 6261004"> 0331 6261004</a><br />
    Dermatologie și boli sexuale</p>
    <hr />

    <p> <strong>Ginecologie</strong></p>
    <p>
    <strong style={strongStyle}>Dr. Günther Frank</strong><br />
    Brandenburg an der Havel 14776, Kurstr. 15<br />
    Telefon:<a href="tel: 03381 223685"> 03381 223685</a><br />
    Ginecologie</p>
    <p> <strong>Medicină internă</strong></p>
    <p>
    <strong style={strongStyle}>Dr. Gross Ralph</strong><br />
    Brieselang 14656, Wustermarker Allee 1<br />
    Telefon:<a href="tel: 033232 39625"> 033232 39625</a><br />
    Medicină internă<br />

    <strong style={strongStyle}>Dr. Werginz Claudia</strong><br />
    Rüdersdorf bei Berlin 15562, Otto Nuschke Str. 2<br />
    Telefon:<a href="tel: 033638 489998"> 033638 489998</a><br />
    Medicină internă<br />

    <strong style={strongStyle}>Dr. Theuer Jürgen Detlef</strong><br />
    Seelow 15306, Robert Koch Str. 6<br />
    Telefon:<a href="tel: 033394 296"> 033394 296</a><br />
    Medicină internă</p>
    <p> <strong>Oftalmologie</strong></p>
    <p>
    <strong style={strongStyle}>Dr. Heger Roswitha Lukas</strong><br />
    Brandenburg an der Havel 14776, Johann Carl Sybel Str. 1<br />
    Telefon:<a href="tel: 03381 2147200"> 03381 2147200</a><br />
    Oftalmologie<br />

    <strong style={strongStyle}>Dr. Renke Manulita Swetlana</strong><br />
    Jüterbog 14913, Frödener Siedlung 20<br />
    Telefon:<a href="tel: 03372 442433"> 03372 442433</a><br />
    Oftalmologie</p>
    <hr />
    <p> <strong>Ortopedie</strong></p>
    <p>
    <strong style={strongStyle}>Dr. Manci Ramona</strong><br />
    Senftenberg 01968, Fischreiherstr. 2<br />
    Telefon:<a href="tel: 03573 66742"> 03573 66742</a><br />
    Ortopedie</p>
    <p> <strong>Pediatrie</strong></p>
    <p>
    <strong style={strongStyle}>Dr. Kapke Cornelia</strong><br />
    Birkenwerder 16547, Bergfelder Str. 1<br />
    Telefon:<a href="tel: 03303 403465"> 03303 403465</a><br />
    Pediatrie<br />

    <strong style={strongStyle}>Dr. Buciu Lacrimioara Elena</strong><br />
    Schwarzheide&nbsp; 01987, Schipkauer Str. 10-12<br />
    Telefon:<a href="tel: 035752 86341"> 035752 86341</a><br />
    Pediatrie<br />

    <strong style={strongStyle}>Dr. Esianu Andrea Gertrud</strong><br />
    Schwarzheide 01987, Schipkauer Str. 10 12<br />
    Telefon:<a href="tel: 035752 86341"> 035752 86341</a><br />
    Pediatrie</p>
    <p> <strong>Psihiatrie, Neurologie</strong></p>
    <p>
    <strong style={strongStyle}>Dr. Hübers Simona Bianca</strong>
    <br />
    Rangsdorf 15834, Seebadallee 19
    <br />
    Telefon:<a href="tel: 033708 906634"> 033708 906634</a><br />
    Psihiatrie, Neurologie
    </p></div>
    </Box>
);

export default HomePage;
