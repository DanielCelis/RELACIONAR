//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=6; attempts=0; attemptsMax=0;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=2;
var tiButtonTime=false;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=2; messageOk="Gano"; messageTime="Tiempo"; messageError="Un error"; messageErrorG="Un error"; messageAttempts="Cant. Itentos"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="TUVMSVM"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var joinPar=[["Y3JvbmljYQ", "aGlzdG9yaWE"],["Y3JvbmlzdGE", "aW5mb3JtYW50ZQ"],["Y2llbnRpZmljb3M", "aW52ZXN0aWdhY2lvbg"],["Y29ucXVpc3RhZG9yZXM", "ZXNwYfFvbGVz"],["Y29sb25pYQ", "Z3J1cG8gY3VsdHVyYWw"],["Y29sb25pemFkb3M", "YW1lcmljYW5vcw"]];
var c=[[7,8],[8,10],[11,13],[14,9],[7,14],[11,10]];
var con1=["cronica","colonizados","colonia","conquistadores","cientificos","cronista"];
var con2=["historia","americanos","grupo cultural","españoles","investigacion","informante"];
var sel1=""; join1=[]; join2=[];
