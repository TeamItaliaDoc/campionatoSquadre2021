
var calcolaTeamsRun = false;
var calcolaClassificaRun = false;
var classificaTeams = [];

var teams = [];
teams['chianti-doc']={"name":"Chianti DOC","club_id":79546,"urlMembri":"https://api.chess.com/pub/club/chianti-doc/members","icon":"https://images.chesscomfiles.com/uploads/v1/group/79546.b573e269.50x50o.8ba13052ce81.png","url":"https://www.chess.com/club/chianti-doc","puntiSpareggio":0, "posizione":0, "matchConclusi":0, "puntiConclusi":0, "puntiMatchConclusi":0, "vittorieConclusi":0, "mediaConclusi":0, "finaleConclusi":"","teamVinte" : [], "teamPatte" : [], "penalità":0, "daCaricare":true};
teams['gli-abbacchi-doc']={"name":"Gli Abbacchi DOC", "club_id":79500,"urlMembri":"https://api.chess.com/pub/club/gli-abbacchi-doc/members","icon":"https://images.chesscomfiles.com/uploads/v1/group/79500.7464f9c4.50x50o.f127823db225.png","url":"https://www.chess.com/club/gli-abbacchi-doc","puntiSpareggio":0, "posizione":0, "matchConclusi":0, "puntiConclusi":0, "puntiMatchConclusi":0, "vittorieConclusi":0, "mediaConclusi":0, "finaleConclusi":"","teamVinte" : [], "teamPatte" : [], "penalità":0, "daCaricare":true};
teams['gli-scaciucchi']={"name":"Gli Scaciucchi","club_id":79502,"urlMembri":"https://api.chess.com/pub/club/gli-scaciucchi/members","icon":"https://www.chess.com/club/join/79502","icon":"https://images.chesscomfiles.com/uploads/v1/group/79502.b4925ba9.50x50o.5c6b00a69cd6.png","url":"https://www.chess.com/club/gli-scaciucchi","puntiSpareggio":0, "posizione":0, "matchConclusi":0, "puntiConclusi":0, "puntiMatchConclusi":0, "vittorieConclusi":0, "mediaConclusi":0, "finaleConclusi":"","teamVinte" : [], "teamPatte" : [], "penalità":0, "daCaricare":true};
teams['gli-ultimi-saranno-i-primi-i-secondi-o-i-contorni']={"name":"gli ultimi saranno i primi i secondi o i contorni","club_id":78984,"urlMembri":"https://api.chess.com/pub/club/gli-ultimi-saranno-i-primi-i-secondi-o-i-contorni/members","icon":"https://images.chesscomfiles.com/uploads/v1/group/78984.0fe19eef.50x50o.008a63d2fd9a.jpeg","url":"https://www.chess.com/club/gli-ultimi-saranno-i-primi-i-secondi-o-i-contorni","puntiSpareggio":0, "posizione":0, "matchConclusi":0, "puntiConclusi":0, "puntiMatchConclusi":0, "vittorieConclusi":0, "mediaConclusi":0, "finaleConclusi":"","teamVinte" : [], "teamPatte" : [], "penalità":0, "daCaricare":true};
teams['i-bagna-cauda']={"name":"I Bagna Cauda","club_id":79538,"urlMembri":"https://api.chess.com/pub/club/i-bagna-cauda/members","icon":"https://images.chesscomfiles.com/uploads/v1/group/79538.2add8a97.50x50o.ad97c61746e8.png","url":"https://www.chess.com/club/i-bagna-cauda","puntiSpareggio":0, "posizione":0, "matchConclusi":0, "puntiConclusi":0, "puntiMatchConclusi":0, "vittorieConclusi":0, "mediaConclusi":0, "finaleConclusi":"","teamVinte" : [], "teamPatte" : [], "penalità":0, "daCaricare":true};
teams['i-4-formaggi-doc']={"name":"I 4 Formaggi DOC", "club_id":79506,"urlMembri":"https://api.chess.com/pub/club/i-4-formaggi-doc/members","icon":"https://images.chesscomfiles.com/uploads/v1/group/79506.375b4d1c.50x50o.139f82627007.png","url":"https://www.chess.com/club/i-4-formaggi-doc","puntiSpareggio":0, "posizione":0, "matchConclusi":0, "puntiConclusi":0, "puntiMatchConclusi":0, "vittorieConclusi":0, "mediaConclusi":0, "finaleConclusi":"","teamVinte" : [], "teamPatte" : [], "penalità":0, "daCaricare":true};
teams['i-4-scacchi-di-lasagne']={"name":"I 4 Scacchi di Lasagne","club_id":79504,"urlMembri":"https://api.chess.com/pub/club/i-4-scacchi-di-lasagne/members","icon":"https://images.chesscomfiles.com/uploads/v1/group/79504.5a4934a4.50x50o.53f1ca78f01e.png","url":"https://www.chess.com/club/i-4-scacchi-di-lasagne","puntiSpareggio":0, "posizione":0, "matchConclusi":0, "puntiConclusi":0, "puntiMatchConclusi":0, "vittorieConclusi":0, "mediaConclusi":0, "finaleConclusi":"","teamVinte" : [], "teamPatte" : [], "penalità":0, "daCaricare":true};
teams['i-fan-dellimpepata-di-cozze']={"name":"I Fan dell'Impepata di Cozze","club_id":79540,"urlMembri":"https://api.chess.com/pub/club/i-fan-dellimpepata-di-cozze/members","icon":"https://images.chesscomfiles.com/uploads/v1/group/79540.8a2da67f.50x50o.9571bd046720.png","url":"https://www.chess.com/club/i-fan-dellimpepata-di-cozze","puntiSpareggio":0, "posizione":0, "matchConclusi":0, "puntiConclusi":0, "puntiMatchConclusi":0, "vittorieConclusi":0, "mediaConclusi":0, "finaleConclusi":"","teamVinte" : [], "teamPatte" : [], "penalità":0, "daCaricare":true};
teams['le-mozzarelle']={"name":"Le Mozzarelle", "club_id":79544,"urlMembri":"https://api.chess.com/pub/club/le-mozzarelle/members","icon":"https://images.chesscomfiles.com/uploads/v1/group/79544.a9aad2ac.50x50o.57d6d04ca1cf.png","url":"https://www.chess.com/club/le-mozzarelle","puntiSpareggio":0, "posizione":0, "matchConclusi":0, "puntiConclusi":0, "puntiMatchConclusi":0, "vittorieConclusi":0, "mediaConclusi":0, "finaleConclusi":"","teamVinte" : [], "teamPatte" : [], "penalità":0, "daCaricare":true};
teams['pan-di-via']={"name":"Pan di Via", "club_id":79508,"urlMembri":"https://api.chess.com/pub/club/pan-di-via/members","icon":"https://images.chesscomfiles.com/uploads/v1/group/79508.29404629.50x50o.d9ee86bdbcb1.png","url":"https://www.chess.com/club/pan-di-via","puntiSpareggio":0, "posizione":0, "matchConclusi":0, "puntiConclusi":0, "puntiMatchConclusi":0, "vittorieConclusi":0, "mediaConclusi":0, "finaleConclusi":"","teamVinte" : [], "teamPatte" : [], "penalità":0, "daCaricare":true};
teams['straccetti-e-broccoli-doc']={"name":"Straccetti e Broccoli DOC","club_id":79510,"urlMembri":"https://api.chess.com/pub/club/straccetti-e-broccoli-doc/members","icon":"https://images.chesscomfiles.com/uploads/v1/group/79510.42f4cbbc.50x50o.f47b01837903.png","url":"https://www.chess.com/club/straccetti-e-broccoli-doc","puntiSpareggio":0, "posizione":0, "matchConclusi":0, "puntiConclusi":0, "puntiMatchConclusi":0, "vittorieConclusi":0, "mediaConclusi":0, "finaleConclusi":"","teamVinte" : [], "teamPatte" : [], "penalità":0, "daCaricare":true};
teams['team-fastfood-doc']={"name":"Team FastFood DOC","club_id":79318,"urlMembri":"https://api.chess.com/pub/club/team-fastfood-doc/members","icon":"https://images.chesscomfiles.com/uploads/v1/group/79318.d534e8da.50x50o.927f535ba0c6.png","url":"https://www.chess.com/club/team-fastfood-doc","puntiSpareggio":0, "posizione":0, "matchConclusi":0, "puntiConclusi":0, "puntiMatchConclusi":0, "vittorieConclusi":0, "mediaConclusi":0, "finaleConclusi":"", "teamVinte" : [], "teamPatte" : [], "penalità":0, "daCaricare":true};

var matchs = [];
matchs[11] = {"id":"https://api.chess.com/pub/match/1172092", "penalità1":0, "penalità2":0, "daCaricare":true, "PuntiMatch1":0, "PuntiMatch2":0, "concluso": false, "Punti1":0, "Punti2":0, "vittorie1":0, "vittorie2":0,  "nGiocatori1":0,  "nGiocatori2":0};
matchs[12] = {"id":"https://api.chess.com/pub/match/1172094", "penalità1":0, "penalità2":0, "daCaricare":true, "PuntiMatch1":0, "PuntiMatch2":0, "concluso": false, "Punti1":0, "Punti2":0, "vittorie1":0, "vittorie2":0,  "nGiocatori1":0,  "nGiocatori2":0};
matchs[13] = {"id":"https://api.chess.com/pub/match/1172096", "penalità1":0, "penalità2":0,  "daCaricare":true, "PuntiMatch1":0, "PuntiMatch2":0, "concluso": false, "Punti1":0, "Punti2":0, "vittorie1":0, "vittorie2":0,  "nGiocatori1":0,  "nGiocatori2":0};
matchs[14] = {"id":"https://api.chess.com/pub/match/1172098", "penalità1":0, "penalità2":0,  "daCaricare":true, "PuntiMatch1":0, "PuntiMatch2":0, "concluso": false, "Punti1":0, "Punti2":0, "vittorie1":0, "vittorie2":0,  "nGiocatori1":0,  "nGiocatori2":0};
matchs[15] = {"id":"https://api.chess.com/pub/match/1172104", "penalità1":0, "penalità2":0,  "daCaricare":true, "PuntiMatch1":0, "PuntiMatch2":0, "concluso": false, "Punti1":0, "Punti2":0, "vittorie1":0, "vittorie2":0,  "nGiocatori1":0,  "nGiocatori2":0};
matchs[16] = {"id":"https://api.chess.com/pub/match/1172106", "penalità1":0, "penalità2":0,  "daCaricare":true, "PuntiMatch1":0, "PuntiMatch2":0, "concluso": false, "Punti1":0, "Punti2":0, "vittorie1":0, "vittorie2":0,  "nGiocatori1":0,  "nGiocatori2":0};


matchs[21] = {"id":"https://api.chess.com/pub/match/1179502", "penalità1":0, "penalità2":0,  "daCaricare":true, "PuntiMatch1":0, "PuntiMatch2":0, "concluso": false, "Punti1":0, "Punti2":0, "vittorie1":0, "vittorie2":0,  "nGiocatori1":0,  "nGiocatori2":0};
matchs[22] = {"id":"https://api.chess.com/pub/match/1179500", "penalità1":0, "penalità2":0,  "daCaricare":true, "PuntiMatch1":0, "PuntiMatch2":0, "concluso": false, "Punti1":0, "Punti2":0, "vittorie1":0, "vittorie2":0,  "nGiocatori1":0,  "nGiocatori2":0};
matchs[23] = {"id":"https://api.chess.com/pub/match/1179498", "penalità1":0, "penalità2":0,  "daCaricare":true, "PuntiMatch1":0, "PuntiMatch2":0, "concluso": false, "Punti1":0, "Punti2":0, "vittorie1":0, "vittorie2":0,  "nGiocatori1":0,  "nGiocatori2":0};
matchs[24] = {"id":"https://api.chess.com/pub/match/1179496", "penalità1":0, "penalità2":0,  "daCaricare":true, "PuntiMatch1":0, "PuntiMatch2":0, "concluso": false, "Punti1":0, "Punti2":0, "vittorie1":0, "vittorie2":0,  "nGiocatori1":0,  "nGiocatori2":0};
matchs[25] = {"id":"https://api.chess.com/pub/match/1179494", "penalità1":0, "penalità2":0,  "daCaricare":true, "PuntiMatch1":0, "PuntiMatch2":0, "concluso": false, "Punti1":0, "Punti2":0, "vittorie1":0, "vittorie2":0,  "nGiocatori1":0,  "nGiocatori2":0};
matchs[26] = {"id":"https://api.chess.com/pub/match/1179492", "penalità1":0, "penalità2":0,  "daCaricare":true, "PuntiMatch1":0, "PuntiMatch2":0, "concluso": false, "Punti1":0, "Punti2":0, "vittorie1":0, "vittorie2":0,  "nGiocatori1":0,  "nGiocatori2":0};

matchs[31] = {"id":"https://api.chess.com/pub/match/1188918", "penalità1":0, "penalità2":0,  "daCaricare":true, "PuntiMatch1":0, "PuntiMatch2":0, "concluso": false, "Punti1":0, "Punti2":0, "vittorie1":0, "vittorie2":0,  "nGiocatori1":0,  "nGiocatori2":0};
matchs[32] = {"id":"https://api.chess.com/pub/match/1188922", "penalità1":0, "penalità2":0,  "daCaricare":true, "PuntiMatch1":0, "PuntiMatch2":0, "concluso": false, "Punti1":0, "Punti2":0, "vittorie1":0, "vittorie2":0,  "nGiocatori1":0,  "nGiocatori2":0};
matchs[33] = {"id":"https://api.chess.com/pub/match/1188924", "penalità1":0, "penalità2":0,  "daCaricare":true, "PuntiMatch1":0, "PuntiMatch2":0, "concluso": false, "Punti1":0, "Punti2":0, "vittorie1":0, "vittorie2":0,  "nGiocatori1":0,  "nGiocatori2":0};
matchs[34] = {"id":"https://api.chess.com/pub/match/1188926", "penalità1":0, "penalità2":0,  "daCaricare":true, "PuntiMatch1":0, "PuntiMatch2":0, "concluso": false, "Punti1":0, "Punti2":0, "vittorie1":0, "vittorie2":0,  "nGiocatori1":0,  "nGiocatori2":0};
matchs[35] = {"id":"https://api.chess.com/pub/match/1188928", "penalità1":0, "penalità2":0,  "daCaricare":true, "PuntiMatch1":0, "PuntiMatch2":0, "concluso": false, "Punti1":0, "Punti2":0, "vittorie1":0, "vittorie2":0,  "nGiocatori1":0,  "nGiocatori2":0};
matchs[36] = {"id":"https://api.chess.com/pub/match/1188930", "penalità1":0, "penalità2":0,  "daCaricare":true, "PuntiMatch1":0, "PuntiMatch2":0, "concluso": false, "Punti1":0, "Punti2":0, "vittorie1":0, "vittorie2":0,  "nGiocatori1":0,  "nGiocatori2":0};

matchs[41] = {"id":"https://api.chess.com/pub/match/1196692", "penalità1":0, "penalità2":0,  "daCaricare":true, "PuntiMatch1":0, "PuntiMatch2":0, "concluso": false, "Punti1":0, "Punti2":0, "vittorie1":0, "vittorie2":0,  "nGiocatori1":0,  "nGiocatori2":0};
matchs[42] = {"id":"https://api.chess.com/pub/match/1196694", "penalità1":0, "penalità2":0,  "daCaricare":true, "PuntiMatch1":0, "PuntiMatch2":0, "concluso": false, "Punti1":0, "Punti2":0, "vittorie1":0, "vittorie2":0,  "nGiocatori1":0,  "nGiocatori2":0};
matchs[43] = {"id":"https://api.chess.com/pub/match/1196696", "penalità1":0, "penalità2":0, "daCaricare":true, "PuntiMatch1":0, "PuntiMatch2":0, "concluso": false, "Punti1":0, "Punti2":0, "vittorie1":0, "vittorie2":0,  "nGiocatori1":0,  "nGiocatori2":0};
matchs[44] = {"id":"https://api.chess.com/pub/match/1196698", "penalità1":0, "penalità2":0, "daCaricare":true, "PuntiMatch1":0, "PuntiMatch2":0, "concluso": false, "Punti1":0, "Punti2":0, "vittorie1":0, "vittorie2":0,  "nGiocatori1":0,  "nGiocatori2":0};
matchs[45] = {"id":"https://api.chess.com/pub/match/1196700", "penalità1":0, "penalità2":0, "daCaricare":true, "PuntiMatch1":0, "PuntiMatch2":0, "concluso": false, "Punti1":0, "Punti2":0, "vittorie1":0, "vittorie2":0,  "nGiocatori1":0,  "nGiocatori2":0};
matchs[46] = {"id":"https://api.chess.com/pub/match/1196702", "penalità1":0, "penalità2":0, "daCaricare":true, "PuntiMatch1":0, "PuntiMatch2":0, "concluso": false, "Punti1":0, "Punti2":0, "vittorie1":0, "vittorie2":0,  "nGiocatori1":0,  "nGiocatori2":0};

/*matchs[51] = {"id":"https://api.chess.com/pub/match/", "penalità1":0, "penalità2":0, "daCaricare":true, "PuntiMatch1":0, "PuntiMatch2":0, "concluso": false, "Punti1":0, "Punti2":0, "vittorie1":0, "vittorie2":0,  "nGiocatori1":0,  "nGiocatori2":0};
matchs[52] = {"id":"https://api.chess.com/pub/match/", "penalità1":0, "penalità2":0, "daCaricare":true, "PuntiMatch1":0, "PuntiMatch2":0, "concluso": false, "Punti1":0, "Punti2":0, "vittorie1":0, "vittorie2":0,  "nGiocatori1":0,  "nGiocatori2":0};
matchs[53] = {"id":"https://api.chess.com/pub/match/", "penalità1":0, "penalità2":0, "daCaricare":true, "PuntiMatch1":0, "PuntiMatch2":0, "concluso": false, "Punti1":0, "Punti2":0, "vittorie1":0, "vittorie2":0,  "nGiocatori1":0,  "nGiocatori2":0};
matchs[54] = {"id":"https://api.chess.com/pub/match/", "penalità1":0, "penalità2":0, "daCaricare":true, "PuntiMatch1":0, "PuntiMatch2":0, "concluso": false, "Punti1":0, "Punti2":0, "vittorie1":0, "vittorie2":0,  "nGiocatori1":0,  "nGiocatori2":0};
matchs[55] = {"id":"https://api.chess.com/pub/match/", "penalità1":0, "penalità2":0, "daCaricare":true, "PuntiMatch1":0, "PuntiMatch2":0, "concluso": false, "Punti1":0, "Punti2":0, "vittorie1":0, "vittorie2":0,  "nGiocatori1":0,  "nGiocatori2":0};
matchs[56] = {"id":"https://api.chess.com/pub/match/", "penalità1":0, "penalità2":0, "daCaricare":true, "PuntiMatch1":0, "PuntiMatch2":0, "concluso": false, "Punti1":0, "Punti2":0, "vittorie1":0, "vittorie2":0,  "nGiocatori1":0,  "nGiocatori2":0};

matchs[61] = {"id":"https://api.chess.com/pub/match/", "penalità1":0, "penalità2":0, "daCaricare":true, "PuntiMatch1":0, "PuntiMatch2":0, "concluso": false, "Punti1":0, "Punti2":0, "vittorie1":0, "vittorie2":0,  "nGiocatori1":0,  "nGiocatori2":0};
matchs[62] = {"id":"https://api.chess.com/pub/match/", "penalità1":0, "penalità2":0, "daCaricare":true, "PuntiMatch1":0, "PuntiMatch2":0, "concluso": false, "Punti1":0, "Punti2":0, "vittorie1":0, "vittorie2":0,  "nGiocatori1":0,  "nGiocatori2":0};
matchs[63] = {"id":"https://api.chess.com/pub/match/", "penalità1":0, "penalità2":0, "daCaricare":true, "PuntiMatch1":0, "PuntiMatch2":0, "concluso": false, "Punti1":0, "Punti2":0, "vittorie1":0, "vittorie2":0,  "nGiocatori1":0,  "nGiocatori2":0};
matchs[64] = {"id":"https://api.chess.com/pub/match/", "penalità1":0, "penalità2":0, "daCaricare":true, "PuntiMatch1":0, "PuntiMatch2":0, "concluso": false, "Punti1":0, "Punti2":0, "vittorie1":0, "vittorie2":0,  "nGiocatori1":0,  "nGiocatori2":0};
matchs[65] = {"id":"https://api.chess.com/pub/match/", "penalità1":0, "penalità2":0, "daCaricare":true, "PuntiMatch1":0, "PuntiMatch2":0, "concluso": false, "Punti1":0, "Punti2":0, "vittorie1":0, "vittorie2":0,  "nGiocatori1":0,  "nGiocatori2":0};
matchs[66] = {"id":"https://api.chess.com/pub/match/", "penalità1":0, "penalità2":0, "daCaricare":true, "PuntiMatch1":0, "PuntiMatch2":0, "concluso": false, "Punti1":0, "Punti2":0, "vittorie1":0, "vittorie2":0,  "nGiocatori1":0,  "nGiocatori2":0};

matchs[71] = {"id":"https://api.chess.com/pub/match/", "penalità1":0, "penalità2":0, "daCaricare":true, "PuntiMatch1":0, "PuntiMatch2":0, "concluso": false, "Punti1":0, "Punti2":0, "vittorie1":0, "vittorie2":0,  "nGiocatori1":0,  "nGiocatori2":0};
matchs[72] = {"id":"https://api.chess.com/pub/match/", "penalità1":0, "penalità2":0, "daCaricare":true, "PuntiMatch1":0, "PuntiMatch2":0, "concluso": false, "Punti1":0, "Punti2":0, "vittorie1":0, "vittorie2":0,  "nGiocatori1":0,  "nGiocatori2":0};
matchs[73] = {"id":"https://api.chess.com/pub/match/", "penalità1":0, "penalità2":0, "daCaricare":true, "PuntiMatch1":0, "PuntiMatch2":0, "concluso": false, "Punti1":0, "Punti2":0, "vittorie1":0, "vittorie2":0,  "nGiocatori1":0,  "nGiocatori2":0};
matchs[74] = {"id":"https://api.chess.com/pub/match/", "penalità1":0, "penalità2":0, "daCaricare":true, "PuntiMatch1":0, "PuntiMatch2":0, "concluso": false, "Punti1":0, "Punti2":0, "vittorie1":0, "vittorie2":0,  "nGiocatori1":0,  "nGiocatori2":0};
matchs[75] = {"id":"https://api.chess.com/pub/match/", "penalità1":0, "penalità2":0, "daCaricare":true, "PuntiMatch1":0, "PuntiMatch2":0, "concluso": false, "Punti1":0, "Punti2":0, "vittorie1":0, "vittorie2":0,  "nGiocatori1":0,  "nGiocatori2":0};
matchs[76] = {"id":"https://api.chess.com/pub/match/", "penalità1":0, "penalità2":0, "daCaricare":true, "PuntiMatch1":0, "PuntiMatch2":0, "concluso": false, "Punti1":0, "Punti2":0, "vittorie1":0, "vittorie2":0,  "nGiocatori1":0,  "nGiocatori2":0};

matchs[81] = {"id":"https://api.chess.com/pub/match/", "penalità1":0, "penalità2":0, "daCaricare":true, "PuntiMatch1":0, "PuntiMatch2":0, "concluso": false, "Punti1":0, "Punti2":0, "vittorie1":0, "vittorie2":0,  "nGiocatori1":0,  "nGiocatori2":0};
matchs[82] = {"id":"https://api.chess.com/pub/match/", "penalità1":0, "penalità2":0, "daCaricare":true, "PuntiMatch1":0, "PuntiMatch2":0, "concluso": false, "Punti1":0, "Punti2":0, "vittorie1":0, "vittorie2":0,  "nGiocatori1":0,  "nGiocatori2":0};
matchs[83] = {"id":"https://api.chess.com/pub/match/", "penalità1":0, "penalità2":0, "daCaricare":true, "PuntiMatch1":0, "PuntiMatch2":0, "concluso": false, "Punti1":0, "Punti2":0, "vittorie1":0, "vittorie2":0,  "nGiocatori1":0,  "nGiocatori2":0};
matchs[84] = {"id":"https://api.chess.com/pub/match/", "penalità1":0, "penalità2":0, "daCaricare":true, "PuntiMatch1":0, "PuntiMatch2":0, "concluso": false, "Punti1":0, "Punti2":0, "vittorie1":0, "vittorie2":0,  "nGiocatori1":0,  "nGiocatori2":0};
matchs[85] = {"id":"https://api.chess.com/pub/match/", "penalità1":0, "penalità2":0, "daCaricare":true, "PuntiMatch1":0, "PuntiMatch2":0, "concluso": false, "Punti1":0, "Punti2":0, "vittorie1":0, "vittorie2":0,  "nGiocatori1":0,  "nGiocatori2":0};
matchs[86] = {"id":"https://api.chess.com/pub/match/", "penalità1":0, "penalità2":0, "daCaricare":true, "PuntiMatch1":0, "PuntiMatch2":0, "concluso": false, "Punti1":0, "Punti2":0, "vittorie1":0, "vittorie2":0,  "nGiocatori1":0,  "nGiocatori2":0};

matchs[91] = {"id":"https://api.chess.com/pub/match/", "penalità1":0, "penalità2":0, "daCaricare":true, "PuntiMatch1":0, "PuntiMatch2":0, "concluso": false, "Punti1":0, "Punti2":0, "vittorie1":0, "vittorie2":0,  "nGiocatori1":0,  "nGiocatori2":0};
matchs[92] = {"id":"https://api.chess.com/pub/match/", "penalità1":0, "penalità2":0, "daCaricare":true, "PuntiMatch1":0, "PuntiMatch2":0, "concluso": false, "Punti1":0, "Punti2":0, "vittorie1":0, "vittorie2":0,  "nGiocatori1":0,  "nGiocatori2":0};
matchs[93] = {"id":"https://api.chess.com/pub/match/", "penalità1":0, "penalità2":0, "daCaricare":true, "PuntiMatch1":0, "PuntiMatch2":0, "concluso": false, "Punti1":0, "Punti2":0, "vittorie1":0, "vittorie2":0,  "nGiocatori1":0,  "nGiocatori2":0};
matchs[94] = {"id":"https://api.chess.com/pub/match/", "penalità1":0, "penalità2":0, "daCaricare":true, "PuntiMatch1":0, "PuntiMatch2":0, "concluso": false, "Punti1":0, "Punti2":0, "vittorie1":0, "vittorie2":0,  "nGiocatori1":0,  "nGiocatori2":0};
matchs[95] = {"id":"https://api.chess.com/pub/match/", "penalità1":0, "penalità2":0, "daCaricare":true, "PuntiMatch1":0, "PuntiMatch2":0, "concluso": false, "Punti1":0, "Punti2":0, "vittorie1":0, "vittorie2":0,  "nGiocatori1":0,  "nGiocatori2":0};
matchs[96] = {"id":"https://api.chess.com/pub/match/", "penalità1":0, "penalità2":0, "daCaricare":true, "PuntiMatch1":0, "PuntiMatch2":0, "concluso": false, "Punti1":0, "Punti2":0, "vittorie1":0, "vittorie2":0,  "nGiocatori1":0,  "nGiocatori2":0};

matchs[101] = {"id":"https://api.chess.com/pub/match/", "penalità1":0, "penalità2":0, "daCaricare":true, "PuntiMatch1":0, "PuntiMatch2":0, "concluso": false, "Punti1":0, "Punti2":0, "vittorie1":0, "vittorie2":0,  "nGiocatori1":0,  "nGiocatori2":0};
matchs[102] = {"id":"https://api.chess.com/pub/match/", "penalità1":0, "penalità2":0, "daCaricare":true, "PuntiMatch1":0, "PuntiMatch2":0, "concluso": false, "Punti1":0, "Punti2":0, "vittorie1":0, "vittorie2":0,  "nGiocatori1":0,  "nGiocatori2":0};
matchs[103] = {"id":"https://api.chess.com/pub/match/", "penalità1":0, "penalità2":0, "daCaricare":true, "PuntiMatch1":0, "PuntiMatch2":0, "concluso": false, "Punti1":0, "Punti2":0, "vittorie1":0, "vittorie2":0,  "nGiocatori1":0,  "nGiocatori2":0};
matchs[104] = {"id":"https://api.chess.com/pub/match/", "penalità1":0, "penalità2":0, "daCaricare":true, "PuntiMatch1":0, "PuntiMatch2":0, "concluso": false, "Punti1":0, "Punti2":0, "vittorie1":0, "vittorie2":0,  "nGiocatori1":0,  "nGiocatori2":0};
matchs[105] = {"id":"https://api.chess.com/pub/match/", "penalità1":0, "penalità2":0, "daCaricare":true, "PuntiMatch1":0, "PuntiMatch2":0, "concluso": false, "Punti1":0, "Punti2":0, "vittorie1":0, "vittorie2":0,  "nGiocatori1":0,  "nGiocatori2":0};
matchs[106] = {"id":"https://api.chess.com/pub/match/", "penalità1":0, "penalità2":0, "daCaricare":true, "PuntiMatch1":0, "PuntiMatch2":0, "concluso": false, "Punti1":0, "Punti2":0, "vittorie1":0, "vittorie2":0,  "nGiocatori1":0,  "nGiocatori2":0};

matchs[111] = {"id":"https://api.chess.com/pub/match/", "penalità1":0, "penalità2":0, "daCaricare":true, "PuntiMatch1":0, "PuntiMatch2":0, "concluso": false, "Punti1":0, "Punti2":0, "vittorie1":0, "vittorie2":0,  "nGiocatori1":0,  "nGiocatori2":0};
matchs[112] = {"id":"https://api.chess.com/pub/match/", "penalità1":0, "penalità2":0, "daCaricare":true, "PuntiMatch1":0, "PuntiMatch2":0, "concluso": false, "Punti1":0, "Punti2":0, "vittorie1":0, "vittorie2":0,  "nGiocatori1":0,  "nGiocatori2":0};
matchs[113] = {"id":"https://api.chess.com/pub/match/", "penalità1":0, "penalità2":0, "daCaricare":true, "PuntiMatch1":0, "PuntiMatch2":0, "concluso": false, "Punti1":0, "Punti2":0, "vittorie1":0, "vittorie2":0,  "nGiocatori1":0,  "nGiocatori2":0};
matchs[114] = {"id":"https://api.chess.com/pub/match/", "penalità1":0, "penalità2":0, "daCaricare":true, "PuntiMatch1":0, "PuntiMatch2":0, "concluso": false, "Punti1":0, "Punti2":0, "vittorie1":0, "vittorie2":0,  "nGiocatori1":0,  "nGiocatori2":0};
matchs[115] = {"id":"https://api.chess.com/pub/match/", "penalità1":0, "penalità2":0, "daCaricare":true, "PuntiMatch1":0, "PuntiMatch2":0, "concluso": false, "Punti1":0, "Punti2":0, "vittorie1":0, "vittorie2":0,  "nGiocatori1":0,  "nGiocatori2":0};
matchs[116] = {"id":"https://api.chess.com/pub/match/", "penalità1":0, "penalità2":0, "daCaricare":true, "PuntiMatch1":0, "PuntiMatch2":0, "concluso": false, "Punti1":0, "Punti2":0, "vittorie1":0, "vittorie2":0,  "nGiocatori1":0,  "nGiocatori2":0};
*/

function elabora() {
    //Carico i dati di tutti i teams
    for (var i in teams) {
        caricaTeams(i, teams[i].urlMembri);
    };
}

function caricaTeams(iTeam, urlMembri) {
    //Leggo i dati 
    $.getJSON(urlMembri,function(data){

        //Creao lista giocatori tema
        teams[iTeam].giocatori = [];

        //Carico tutti i giocatori
        for (var i in data.weekly) {
            if (data.weekly[i].username != 'themoonlightknight') {
                teams[iTeam].giocatori.push(data.weekly[i].username);
                //Creo giocatore nella lista principale
                creaGiocatore(data.weekly[i].username);
            }
        }
        for (var i in data.monthly) {
            if (data.monthly[i].username != 'themoonlightknight') {
                teams[iTeam].giocatori.push(data.monthly[i].username);
                //Creo giocatore nella lista principale
                creaGiocatore(data.monthly[i].username);
            }
        }
        for (var i in data.all_time) {
            if (data.all_time[i].username != 'themoonlightknight') {
                teams[iTeam].giocatori.push(data.all_time[i].username);
                //Creo giocatore nella lista principale
                creaGiocatore(data.all_time[i].username);
            }
        }
        //Se ho caricato tutti i dati carico le partite
        teams[iTeam].daCaricare = false;
        for (var i in teams) {
            if (teams[i].daCaricare) {
                return;
            }
        }
        
        //controllo di non aver già lanciato fase sucessiva
        if (calcolaTeamsRun)
            return;  
        calcolaTeamsRun = true;

        //Carico i dati di tutti i match
        for (var i in matchs) {
            caricaMatch(i, matchs[i].id);
        };

    }).error(function(jqXhr, textStatus, error) {
        //è andato in errore ricarico i dati
        //Se responseJSON non è valorizzato solo se il record esiste    
        if (! jqXhr.responseJSON)
        {
            console.log('ERRORE ricarico dati: ' + this.url);
            var index = 0;
                for (var i in teams) {
                    if (teams[i].urlMembri = this.url)
                        index = i;
                };
                caricaTeams(index, this.url);    
            } else {
                console.log('ERRORE Teams non valida. ' + this.url);
                console.log('ERRORE Teams non valida. ' + this.url);
                console.log('ERRORE Teams non valida. ' + this.url);
                console.log('ERRORE Teams non valida. ' + this.url);
            }
              
        });
}

function caricaMatch(index, url)
{
    //Leggo i dati 
    $.getJSON(url,function(data){

        if (data.status != 'registration') 
        {
            //leggo team
            var team1 = data.teams.team1.url.substr(27, data.teams.team1.url.length-27);
            var team2 = data.teams.team2.url.substr(27, data.teams.team2.url.length-27);
            //salvo bannati della partita
            var bannatiBoard = [];
            for (var i in data.teams.team1.players) {
                if (data.teams.team1.players[i].status == 'closed:fair_play_violations' ) {
                    bannatiBoard.push(data.teams.team1.players[i].board);
                    bannati.push(data.teams.team1.players[i].username);
                }
                if (data.teams.team2.players[i].status == 'closed:fair_play_violations' ) {
                    bannatiBoard.push(data.teams.team2.players[i].board);
                    bannati.push(data.teams.team2.players[i].username);
                }
            }
            //Calcolo punti
            for (var i in data.teams.team1.players) {
                //Punti Team 1
                if (data.teams.team1.players[i].status != 'closed:fair_play_violations') { //Se non è stato bannato
                    if ( bannatiBoard.indexOf(data.teams.team1.players[i].board) > -1) {  //Se è stato bannato avversario
                        matchs[index].Punti1 += 2;  //Vale per entrambe le partite
                        matchs[index].vittorie1 += 2;
                    } else {
                        if (data.teams.team1.players[i].played_as_black == 'win') {
                            matchs[index].Punti1 ++;
                            matchs[index].vittorie1 ++; 
                        } else {
                            if ((data.teams.team1.players[i].played_as_black == 'agreed') || (data.teams.team1.players[i].played_as_black == 'repetition')  || (data.teams.team1.players[i].played_as_black == 'timevsinsufficient') || 
                                 (data.teams.team1.players[i].played_as_black == '50move') || (data.teams.team1.players[i].played_as_black == 'insufficient') || (data.teams.team1.players[i].played_as_black == 'stalemate')  ) {
                                    matchs[index].Punti1 += 0.5;
                            }
                        }
                        if (data.teams.team1.players[i].played_as_white ) { //Se la partita non è ancora conclusa non è definito
                            if (data.teams.team1.players[i].played_as_white == 'win') {
                                matchs[index].Punti1 ++;
                                matchs[index].vittorie1 ++;
                            } else {
                                if ((data.teams.team1.players[i].played_as_white == 'agreed') || (data.teams.team1.players[i].played_as_white == 'repetition')  || (data.teams.team1.players[i].played_as_white == 'timevsinsufficient') || 
                                     (data.teams.team1.players[i].played_as_white == '50move') || (data.teams.team1.players[i].played_as_white == 'insufficient') || (data.teams.team1.players[i].played_as_white == 'stalemate')  ) {
                                        matchs[index].Punti1 += 0.5;
                                }
                            }
                        }
                    }
                }
                //Punti Team 2
                if (data.teams.team2.players[i].status != 'closed:fair_play_violations') { //Se non è stato bannato
                    if ( bannatiBoard.indexOf(data.teams.team2.players[i].board) > -1) {  //Se è stato bannato avversario
                        matchs[index].Punti2 += 2;  //Vale per entrambe le partite
                        matchs[index].vittorie2 += 2;
                    } else {
                        if (data.teams.team2.players[i].played_as_black == 'win') {
                            matchs[index].Punti2 ++;
                            matchs[index].vittorie2 ++;
                        } else {
                            if ((data.teams.team2.players[i].played_as_black == 'agreed') || (data.teams.team2.players[i].played_as_black == 'repetition')  || (data.teams.team2.players[i].played_as_black == 'timevsinsufficient') || 
                                (data.teams.team2.players[i].played_as_black == '50move') || (data.teams.team2.players[i].played_as_black == 'insufficient') || (data.teams.team2.players[i].played_as_black == 'stalemate')  ) {
                                    matchs[index].Punti2 += 0.5;
                            }
                        }
                        if (data.teams.team2.players[i].played_as_white ) { //Se la partita non è ancora conclusa non è definito
                            if (data.teams.team2.players[i].played_as_white == 'win') {
                                matchs[index].vittorie2 ++;
                                matchs[index].Punti2 ++;
                            } else {
                                if ((data.teams.team2.players[i].played_as_white == 'agreed') || (data.teams.team2.players[i].played_as_white == 'repetition')  || (data.teams.team2.players[i].played_as_white == 'timevsinsufficient') || 
                                    (data.teams.team2.players[i].played_as_white == '50move') || (data.teams.team2.players[i].played_as_white == 'insufficient') || (data.teams.team2.players[i].played_as_white == 'stalemate')  ) {
                                        matchs[index].Punti2 += 0.5;
                                    
                                }
                            }
                        }
                    }
                }
            }

            //Aggiorno partite
            matchs[index].url = data.url;
            matchs[index].boards = data.boards;
            matchs[index].team1 = team1;
            matchs[index].team2 = team2;
            if (data.teams.team1.score > data.teams.team2.score) 
            {
                matchs[index].PuntiMatch1 ++;
                teams[team1].teamVinte.push(team2);
            }    
            if (data.teams.team1.score < data.teams.team2.score) 
            {
                matchs[index].PuntiMatch2 ++;
                teams[team2].teamVinte.push(team1);
            }    
            if (data.teams.team1.score == data.teams.team2.score) {
                matchs[index].PuntiMatch1 += 0.5;
                matchs[index].PuntiMatch2 += 0.5;
                teams[team1].teamPatte.push(team2);
                teams[team2].teamPatte.push(team1);
            } 
            //Penalità
            teams[team1].penalità += matchs[index].penalità1;
            teams[team2].penalità += matchs[index].penalità2;
            teams[team1].puntiMatchConclusi -= matchs[index].penalità1;;
            teams[team2].puntiMatchConclusi -= matchs[index].penalità2;;
            //Se terminata
            if (matchs[index].boards * 2 == matchs[index].Punti1 + matchs[index].Punti2)
            {
                matchs[index].concluso = true;
                teams[team1].matchConclusi ++;
                teams[team2].matchConclusi ++;
                teams[team1].puntiConclusi += matchs[index].Punti1;
                teams[team2].puntiConclusi += matchs[index].Punti2;
                teams[team1].vittorieConclusi += matchs[index].vittorie1;
                teams[team2].vittorieConclusi += matchs[index].vittorie2;
                if (matchs[index].Punti1 > matchs[index].Punti2)
                    teams[team1].puntiMatchConclusi ++;
                if (matchs[index].Punti1 < matchs[index].Punti2)
                    teams[team2].puntiMatchConclusi ++;
                if (matchs[index].Punti1 == matchs[index].Punti2)
                {
                    teams[team1].puntiMatchConclusi += 0.5;
                    teams[team2].puntiMatchConclusi += 0.5;
                }
            }
            //Controllo giocatori
            var username1 = '';
            var username2 = '';
            var risultato = '';
            for (var i in data.teams.team1.players) {
                username1 = data.teams.team1.players[i].username;
                username2 = data.teams.team2.players[i].username;
                risultato = data.teams.team1.players[i].played_as_white;
                if ( bannatiBoard.indexOf(data.teams.team1.players[i].board) > -1)   //Se è stato bannato avversario
                    risultato = 'win';
                setPunti(username1, risultato);
                risultato = data.teams.team1.players[i].played_as_black;
                if ( bannatiBoard.indexOf(data.teams.team1.players[i].board) > -1)   //Se è stato bannato avversario
                    risultato = 'win';
                setPunti(username1, risultato);
                risultato = data.teams.team2.players[i].played_as_white;
                if ( bannatiBoard.indexOf(data.teams.team2.players[i].board) > -1)  //Se è stato bannato avversario
                    risultato = 'win';
                setPunti(username2, risultato);
                if ( bannatiBoard.indexOf(data.teams.team2.players[i].board) > -1)  //Se è stato bannato avversario
                    risultato = 'win';
                risultato = data.teams.team2.players[i].played_as_black;
                setPunti(username2, risultato);
                //Confera per aver giocato in questo campionato
                giocatori[username1].giocatoCampionato = true;
                giocatori[username2].giocatoCampionato = true;

            }
        }

        //Se ho caricato tutti i dati calcolo la classifica
        matchs[index].daCaricare = false;
        for (var i in matchs) {
            if (matchs[i].daCaricare) {
                return;
            }
        }
        
        //controllo di non aver già lanciato fase sucessiva
        if (calcolaClassificaRun)
            return;  
            calcolaClassificaRun = true;

        //Ricerco elo e stampo classifica giocatori
        getAvatar();
    
    }).error(function(jqXhr, textStatus, error) {
        //è andato in errore ricarico i dati
        //Se responseJSON non è valorizzato solo se il record esiste    
        if (! jqXhr.responseJSON)
        {
            console.log('ERRORE ricarico dati: ' + this.url);
            var index = 0;
                for (var i in matchs) {
                    if (matchs[i].url = this.url)
                        index = i;
                };
                caricaMatch(index, this.url);    
            } else {
                console.log('ERRORE Match non valida. ' + this.url);
                console.log('ERRORE Match non valida. ' + this.url);
                console.log('ERRORE Match non valida. ' + this.url);
                console.log('ERRORE Match non valida. ' + this.url);
            }
              
        });
};

//calcolo classifica team
function calcolaClassifica()
{
    //calcolo punti totali
    //  Punti match + Punti partite + Punti vittorie + media giocatori
    //  N. giocatori
    for (var i in teams) {
        var puntiMachIntero = 0
        puntiMachIntero = teams[i].puntiMatchConclusi * 10;
        var puntiIntero = 0
        puntiIntero = teams[i].puntiConclusi * 10;
        if (teams[i].puntiMatchConclusi < 0)
        {
           puntiMachIntero = puntiMachIntero * -1;
           teams[i].finaleConclusi = '0' + puntiMachIntero.toString().padStart(3, "0") + puntiIntero.toString().padStart(4, "0") + teams[i].vittorieConclusi.toString().padStart(3, "0")  + teams[i].mediaConclusi.toString().padStart(3, "0");
        } else {
            teams[i].finaleConclusi = '1' + puntiMachIntero.toString().padStart(3, "0") + puntiIntero.toString().padStart(4, "0") + teams[i].vittorieConclusi.toString().padStart(3, "0")  + teams[i].mediaConclusi.toString().padStart(3, "0")
        }
    }

    //Imposto posizione e salvo posizione in classificaTeams
    var gruppo = '';
    var max = -1;
    var posizione = 0;
    var finaleClassifica = 0;
    while (max > -100000000000000)
    {
        max = -200000000000000;
        for (var i in teams)
        {
            //Scelgo i punti (da conclusi oi in corso)
            // Se il primo carattere è 0, il punteggio è inveriore a 0
            if (teams[i].finaleConclusi.substr(0,1) == '1')
               finaleClassifica = teams[i].finaleConclusi
            else
               finaleClassifica = teams[i].finaleConclusi * -1;

            if ((teams[i].posizione == 0) && (finaleClassifica) > max) {
                gruppo = i;
                max = finaleClassifica;
            }
        }
        if (max > -100000000000000) 
        {
            posizione++;
            teams[gruppo].posizione = posizione;
            //Aggiungo il team nella posizione corretta
            classificaTeams.push(gruppo);
        }
    }

    //Stampo la classifica
    var url  = '';
    var stile = '';
    var stileTD = '';
    var gruppoAvversario = '';
    var risultato = '';
    var boards = '';
    var Punti1 = 0;
    var Punti2 = 0;
    var partitaConclusa = false;
    //Riga con nomi teams    
    var stRiga = '<tr class="classifica-nameTeam">' +
            '<td style="background-color:gray;"></td><td style="background-color:gray;"></td><td style="background-color:gray;">' + 
            //'</td><td style="background-color:gray;">'+
            '</td><td style="background-color:gray;"></td></td><td style="background-color:gray;"></td></td><td style="background-color:gray;"></td><td style="background-color:gray;"></td>' +
            '<td class="classifica-col1SEP"></td>'; 
    for (var i in classificaTeams)         
        stRiga += '<td class="classifica-nameTeam"> <a style="color:black;text-decoration: none;font-weight: normal;" href="' + teams[classificaTeams[i]].url + '" target=”_blank”> ' + teams[classificaTeams[i]].name + '</a></td>';
    stRiga += '</tr>'
    $("#classifica").append(stRiga);
    //Riga con Icone    
    stRiga = '<tr class="classifica-icon">' +
            '<td class="classifica-icon" style="background-color:#E2E2FF;">Pos.</td> <td style="background-color:#E2E2FF;">Team</td><td style="background-color:#E2E2FF;"></td>'+
            '<td class="classifica-icon">Punti</td>' +
            '<td class="classifica-icon">Punti partita</td><td class="classifica-icon" >Vittorie</td>' +
            '<td class="classifica-icon">Penalità</td>' +
            '<td class="classifica-col1SEP"></td>'; 
    for (var i in classificaTeams)         
        stRiga += '<td  class="classifica-icon">  <img class="classifica-avatar" src="' + teams[classificaTeams[i]].icon + '">';
    stRiga += '</tr>'
    $("#classifica").append(stRiga);
    //Riga team
    for (var i in classificaTeams)         
    {
        gruppo = classificaTeams[i];
        stRiga = '<tr class="classifica-risultati">' +
            '<td class="classifica-risultati">' + teams[gruppo].posizione + '</td>' +
            '<td class="classifica-risultati" style="border: 0px;"> <a style="color:black;text-decoration: none;font-weight: normal;" href="' + teams[classificaTeams[i]].url + '" target=”_blank”> ' + teams[classificaTeams[i]].name + '</a></td>' +
            '<td class="classifica-risultati" style="border: 0px;"> <img class="classifica-avatar" src="' + teams[classificaTeams[i]].icon + '"></td>' +
            '<td class="classifica-risultati">' + teams[gruppo].puntiMatchConclusi + '</td>' + 
            '<td class="classifica-risultati">' + teams[gruppo].puntiConclusi + '</td>' +
            '<td class="classifica-risultati">' + teams[gruppo].vittorieConclusi+ '</td>' +
            '<td class="classifica-risultati">' + teams[gruppo].penalità+ '</td>' +
            '<td class="classifica-col1SEP" style="border: 0px;"></td>'; 
        for (var ii in classificaTeams)         
        {
            gruppoAvversario  = classificaTeams[ii];
            stile = '';
            stileTD = '';
            risultato = '';
            partitaConclusa = false;
            if  (gruppo == gruppoAvversario)
            {
                url = '';
                stile = 'background-color:#b3b3b3;';
            } else {
                //Ricerco partita
                boards = 0;
                url = '';
                for (var partita in matchs)         
                {
                    //team da stampare sulla riga è team1
                    if (matchs[partita].team1 == gruppo && matchs[partita].team2 == gruppoAvversario)
                    {
                        url = matchs[partita].url;
                        boards = matchs[partita].boards;
                        Punti1 = matchs[partita].Punti1;
                        Punti2 = matchs[partita].Punti2;
                        partitaConclusa = matchs[partita].concluso;
                    } 
                    //team da stampare sulla riga è team2
                    if (matchs[partita].team2 == gruppo && matchs[partita].team1 == gruppoAvversario)
                    {
                        url = matchs[partita].url;
                        boards = matchs[partita].boards;
                        Punti1 = matchs[partita].Punti2;
                        Punti2 = matchs[partita].Punti1;
                        partitaConclusa = matchs[partita].concluso;
                    }
                }

                //Se la partita esiste
                if (boards > 0)
                {
                    //Se terminata
                    if (partitaConclusa)
                    {
                        //Pareggio
                        if (Punti1 == Punti2)
                        {
                            risultato = '0.5 - 0.5 <BR> (' + Punti1 + ' - ' + Punti2 + ')';
                            stileTD = 'style="background-color:#84b2ed;border: 1px solid black;"';   //PAREGGIO
                            stile = 'color:black;font-weight: bold;';
                        } 
                        //Vinto team 1
                        if (Punti1 > Punti2)
                        {
                            risultato = '1 - 0 <BR> (' + Punti1 + ' - ' + Punti2 + ')';
                            stileTD = 'style="background-color:#4bc74b;border: 1px solid black;"'; //VINTO
                            stile = 'color:black;font-weight: bold;';
                        } 
                        //Vinto team 2
                        if (Punti1 < Punti2)
                        {
                            risultato = '0 - 1 <BR> (' + Punti1 + ' - ' + Punti2 + ')';
                            stileTD = 'style="background-color:#f75959;border: 1px solid black;"';  //PERSO
                            stile = 'color:black;font-weight: bold;';
                        } 
                    } else {
                        //Match da terminare
                        risultato = Punti1 + ' - ' + Punti2 + '<BR> ('+ (Punti1+Punti2) + '/' + (boards*2) + ')';
                        //Pareggio
                        if (Punti1 == Punti2)
                            stile = 'color:blue;';
                        //Vinto team 1
                        if (Punti1 > Punti2)
                            stile = 'color:green;';
                        //Vinto team 2
                        if (Punti1 < Punti2)
                            stile = 'color:red;';
                        stileTD = 'style="border: 1px solid black;"';  //PERSO
                    }
                }
            }
                    

            //Scrivo valori calcolati nella cella
            if (url == '')   //stessa squadra
                stRiga += '<td class="classifica-risultati" style="' + stile + '"> </td>'
            else
               stRiga += '<td ' + stileTD + '> <a style="text-decoration: none;font-weight: normal;' + stile + ' " href="' + url +'" target=”_blank”>' + risultato + '</a></td>';
        }
        stRiga += '</tr>'
        $("#classifica").append(stRiga);

        //Stampo i dettagli della squadra
        stampaSquadre(classificaTeams[i]);
    }

        //Calcolo clasifica dei giocatori
        calcolaClassificaGiocatori();
}

    
function stampaSquadre(index)
{
    //statistiche team
    var elencoGiocatori = "";
    var giocatoriTot = teams[index].giocatori.length;
    var giocatoriAttivi = 0;
    var eloTot = 0;
    for (i in teams[index].giocatori) {
        elencoGiocatori += giocatori[teams[index].giocatori[i]].displayName + '<br>';
        if (giocatori[teams[index].giocatori[i]].giocatoCampionato)
            giocatoriAttivi ++;
        eloTot += giocatori[teams[index].giocatori[i]].elo;
    }
    var eloMedio = eloTot / giocatoriTot;

    //stampo riga    
    $("#squadre").append('<tr class="classifica-giocatori">' +
    '<td class="squadre-colPos">' +  teams[index].posizione + '</td>' +
    '<td class="squadre-col1SEP"></td>' +
    '<td class="squadre-colICO" style="border: 0px;"> <img class="classifica-avatar" src="' + teams[index].icon + '"></td>' +
        '<td class="squadre-col2" style="border: 0px;"> <a style="color:black;text-decoration: none;font-weight: bold;color: #005e94;;" href="' + teams[index].url + '" target=”_blank”> ' + teams[index].name + '</a></td>' +
        '<td class="squadre-col1SEP"></td>' +
        '<td class="squadre-col2">' + elencoGiocatori.substring(0, elencoGiocatori.length-4) + '</td>' +
        '<td class="squadre-col3">' + giocatoriTot + '/' + giocatoriAttivi + '</td>' +
        '<td class="squadre-col3">' + eloTot.toLocaleString() + '</td>' +
        '<td class="squadre-col3">' + parseInt(eloMedio).toLocaleString() + '</td>' +
    '</tr>');
    
}