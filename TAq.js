const interval = {}
const role = ("<@&785526772913537024>")
const treashold = 3;
const  pingInterval = 3600000;
const guild = (`\"The Aquarium\"`);
const subguild = (`\"The FishTank\"`);
const guildID = ("729147655875199017");
const channelID = ('729162690760671244');
const TAqMember = ['WeaponMerchant', 'ArchoKast', 'Ghost1John', 'WoodCreature', 'ecoboom101', 'talonexstar', '1Bos', 'AaDantsi', 'Alyshu', 'Aquallous', 'Deleted_User86', 'Doctorstrange77', 'Eowaryldor', 'FPipi', 'FirmaDeny', 'Funumunuh', 'LuckLord', 'PanfriedPanda', 'RougeKnight40', 'StrxberryMochi_', 'TheLythan', 'ZockerCam', 'dooperboopers', 'muce', 'ninjakengster', 'xCqramel', 'Andixs', 'Orionid', 'ProfessorEmber', 'ToiletBro2', 'Zokapoo', 'dhth', 'sweeeeeeeeeeeeem', '6GayRatsInACoat', 'An_Old_Friendo', 'BurnieSundown', 'Cledward', 'CoIorful', 'Daccky', 'Gecko808', 'Good13055', 'Happy_sniper101', 'HateDreadDespair', 'HunkoChoco', 'JQSHEY', 'Jelkqn', 'LeviLips96', 'Magic_Poi', 'MaorBA', 'Nepttuune', 'Nivla', 'NoedelStam', 'OishiSnackTomCay', 'RedChrono', 'Seluc', 'Sydla', 'TheUlfKng', 'TrekStone', 'WindFisher', 'Wrimpy', 'Zodiarceus', 'bongin', 'ezzath', 'kirby201000', 'nietmoeder', 'salvadormarqez', 'strivver', 'xSamsung', 'xXAlexiorzXx']
const terr = ['Mage Island', "Santa's Hideout", "Skiens Island", "Nodguj Nation", "Icy Island", "Dujgon Nation", "Regular Island", "Maro Peaks", "Dead Island South West", "Dead Island South East", "Dead Island North West", "Dead Island North East", "Jofash Docks", "Lexdales Prison", "Corrupted Hand", "Abandoned Tower", "Path To Prison", "Shanjugin’s River", "Lexdale", "Black Magic", "Gromblins Hideout", "Banshees Cave", "Graveyard North", "Graveyard South", "Arachnida Cave", "Corrupted Village", "Abandoned Church", "Corrupted Impact", "Dark Forest Village", "Cinfras Outskirts", "Dark Forest Cinfras Transition"]

const token = ("");              
const Discord = require('discord.js');
const { stringify } = require('querystring');
const request = require('request');
const { threadId } = require('worker_threads');
const client = new Discord.Client();
const prefix = ("!w");

const onlineCaptain = {}
const temp = {}
const pingCounter = {}
const onlineCaptain2 = {}

var lsttrp = true;

interval.value = 300000


client.on('ready', () => {
console.log('idle');
});

client.on('guildMemberAdd', member => {
	const channel = member.guild.channels.cache.find(ch => ch.name === 'general');
	if (!channel) return;
	channel.send(`Welcome to TAq and FTk guild's discord, ${member} If you'd like to apply, head to <#746021408319995965>, create the envelope and follow the format. Read up the rules in <#729162016505331765> as well and have a wonderful stay!`);
	console.log(`${member} Joined`);
  });

  //doesnt work yet
client.on('message', msg => {
	if (msg.content === '!w oc') {
	
	
				const exampleEmbed = new Discord.MessageEmbed()
				.setColor('#00ff66')
				.setTitle(`Online check`)
				.addFields(
					{ name: 'Guild', value: `${guild}` },
				)
				
			
			message.channel.send(exampleEmbed);

	}
});

client.on('message', msg => {
	if (msg.content === '!w o') {
		request(`https://api.wynncraft.com/public_api.php?action=guildStats&command=The+Aquarium`, (err, response, body) => {
			if (err) throw(err);
			var data = JSON.parse(body);
			var members = data.members;
			console.log(members)
	});
}
});

client.on('message', msg => {
	if (msg.content === '!w csck') {
		try {
		request(`https://api.wynncraft.com/public_api.php?action=territoryList`, (err, response, body) => {
				if (err) throw(err);
				var at = JSON.parse(body);
				var t = at.territories
				if (t) {

					var TAqTerrNum = 0;

		var MI = JSON.stringify(t["Mage Island"].guild);
		var SH = JSON.stringify(t["Santa's Hideout"].guild);
		var SI = JSON.stringify(t["Skiens Island"].guild);
		var NN = JSON.stringify(t["Nodguj Nation"].guild);
		var II = JSON.stringify(t["Icy Island"].guild);
		var DN = JSON.stringify(t["Dujgon Nation"].guild);
		var RI = JSON.stringify(t["Regular Island"].guild);
		var MP = JSON.stringify(t["Maro Peaks"].guild);
		var DISW = JSON.stringify(t["Dead Island South West"].guild);
		var DISE = JSON.stringify(t["Dead Island South East"].guild);
		var DINW = JSON.stringify(t["Dead Island North West"].guild);
		var DINE = JSON.stringify(t["Dead Island North East"].guild);
		var JD = JSON.stringify(t["Jofash Docks"].guild);
		var LP = JSON.stringify(t["Lexdales Prison"].guild);
		var CH = JSON.stringify(t["Corrupted Hand"].guild);
		var AT = JSON.stringify(t["Abandoned Tower"].guild);
		var PTP = JSON.stringify(t["Path To Prison"].guild);
		var SR = JSON.stringify(t["Shanjugin’s River"].guild);
		var L = JSON.stringify(t["Lexdale"].guild);
		var BM = JSON.stringify(t["Black Magic"].guild);
		var GH = JSON.stringify(t["Gromblins Hideout"].guild);
		var BC = JSON.stringify(t["Banshees Cave"].guild);
		var GN = JSON.stringify(t["Graveyard North"].guild);
		var GS = JSON.stringify(t["Graveyard South"].guild);
		var AC = JSON.stringify(t["Arachnida Cave"].guild);
		var CV = JSON.stringify(t["Corrupted Village"].guild);
		var ACH = JSON.stringify(t["Abandoned Church"].guild);
		var CI = JSON.stringify(t["Corrupted Impact"].guild);
		var DV = JSON.stringify(t["Dark Forest Village"].guild);
		var CO = JSON.stringify(t["Cinfras Outskirts"].guild);
		var DFCT = JSON.stringify(t["Dark Forest Cinfras Transition"].guild);

		var nameMI = MI.replace('"', '');
		var nameMI = nameMI.replace('"', '');
		var nameJD = JD.replace('"', '');
		var nameJD = nameJD.replace('"', '');
		var nameSI = SI.replace('"', '');
		var nameSI = nameSI.replace('"', '');
		var nameNN = NN.replace('"', '');
		var nameNN = nameNN.replace('"', '');
		var nameII = II.replace('"', '');
		var nameII = nameII.replace('"', '');
		var nameSH = SH.replace('"', '');
		var nameSH = nameSH.replace('"', '');
		var nameDN = DN.replace('"', '');
		var nameDN = nameDN.replace('"', '');
		var nameRI = RI.replace('"', '');
		var nameRI = nameRI.replace('"', '');
		var nameMP = MP.replace('"', '');
		var nameMP = nameMP.replace('"', '');
		var nameDISW = DISW.replace('"', '');
		var nameDISW = nameDISW.replace('"', '');
		var nameDISE = DISE.replace('"', '');
		var nameDISE = nameDISE.replace('"', '');
		var nameDINW = DINW.replace('"', '');
		var nameDINW = nameDINW.replace('"', '');
		var nameDINE = DINE.replace('"', '');
		var nameDINE = nameDINE.replace('"', '');
		var nameLP = LP.replace('"', '');
		var nameLP = nameLP.replace('"', '');
		var nameCH = CH.replace('"', '');
		var nameCH = nameCH.replace('"', '');
		var nameAT = AT.replace('"', '');
		var nameAT = nameAT.replace('"', '');
		var namePTP = PTP.replace('"', '');
		var namePTP = namePTP.replace('"', '');
		var nameSR = SR.replace('"', '');
		var nameSR = nameSR.replace('"', '');
		var nameL = L.replace('"', '');
		var nameL = nameL.replace('"', '');
		var nameBM = BM.replace('"', '');
		var nameBM = nameBM.replace('"', '');
		var nameGH = GH.replace('"', '');
		var nameGH = nameGH.replace('"', '');
		var nameBC = BC.replace('"', '');
		var nameBC = nameBC.replace('"', '');
		var nameGN = GN.replace('"', '');
		var nameGN = nameGN.replace('"', '');
		var nameGS = GS.replace('"', '');
		var nameGS = nameGS.replace('"', '');
		var nameAC = AC.replace('"', '');
		var nameAC = nameAC.replace('"', '');
		var nameCV = CV.replace('"', '');
		var nameCV = nameCV.replace('"', '');
		var nameACH = ACH.replace('"', '');
		var nameACH = nameACH.replace('"', '');
		var nameCI = CI.replace('"', '');
		var nameCI = nameCI.replace('"', '');
		var nameDV = DV.replace('"', '');
		var nameDV = nameDV.replace('"', '');
		var nameCO = CO.replace('"', '');
		var nameCO = nameCO.replace('"', '');
		var nameDFCT = DFCT.replace('"', '');
		var nameDFCT = nameDFCT.replace('"', '');

if (MI == guild || MI == subguild) {var TAqTerrNum = TAqTerrNum + 1; var terrLost1 = ""}
else if (MI != guild && MI != subguild) {var terrLost1 = `\n[ T ] Mage Island\n[ G ] ${nameMI}`}
if (SH == guild || SH == subguild) {var TAqTerrNum = TAqTerrNum + 1; var terrLost2 = ""}
else if (SH != guild && SH != subguild) {var terrLost2 = `\n[ T ] Santa's Hideout\n[ G ] ${nameSH}`}
if (SI == guild || SI == subguild) {var TAqTerrNum = TAqTerrNum + 1; var terrLost3 = ""}
else if (SI != guild && SI != subguild) {var terrLost3 = `\n[ T ] Skiens Island\n[ G ] ${nameSI}`}
if (NN == guild || NN == subguild) {var TAqTerrNum = TAqTerrNum + 1; var terrLost4 = ""}
else if (NN != guild && NN != subguild) {var terrLost4 = `\n[ T ] Nodguj Nation\n[ G ] ${nameNN}`}
if (II == guild || II == subguild) {var TAqTerrNum = TAqTerrNum + 1; var terrLost5 = ""}
else if (II != guild && II != subguild) {var terrLost5 = `\n[ T ] Icy Island\n[ G ] ${nameII}`}
if (DN == guild || DN == subguild) {var TAqTerrNum = TAqTerrNum + 1; var terrLost6 = ""}
else if (DN != guild && DN != subguild) {var terrLost6 = `\n[ T ] Dujgon Nation\n[ G ] ${nameDN}`}
if (RI == guild || RI == subguild) {var TAqTerrNum = TAqTerrNum + 1; var terrLost7 = ""}
else if (RI != guild && RI != subguild) {var terrLost7 = `\n[ T ] Regular Island\n[ G ] ${nameRI}`}
if (MP == guild || MP == subguild) {var TAqTerrNum = TAqTerrNum + 1; var terrLost8 = ""}
else if (MP != guild && MP != subguild) {var terrLost8 = `\n[ T ] Maro Peaks\n[ G ] ${nameMP}`}
if (DISW == guild || DISW == subguild) {var TAqTerrNum = TAqTerrNum + 1; var terrLost9 = ""}
else if (DISW != guild && DISW != subguild) {var terrLost9 = `\n[ T ] Dead Island South West\n[ G ] ${nameDISW}`}
if (DISE == guild || DISE == subguild) {var TAqTerrNum = TAqTerrNum + 1; var terrLost10 = ""}
else if (DISE != guild && DISE != subguild) {var terrLost10 = `\n[ T ] Dead Island South East\n[ G ] ${nameDISE}`}
if (DINW == guild || DINW == subguild) {var TAqTerrNum = TAqTerrNum + 1; var terrLost11 = ""}
else if (DINE != guild && DINE != subguild) {var terrLost11 = `\n[ T ] Dead Island North West\n[ G ] ${nameDINW}`}
if (DINE == guild || DINE == subguild) {var TAqTerrNum = TAqTerrNum + 1; var terrLost12 = ""}
else if (DINE != guild && DINE != subguild) {var terrLost12 = `\n[ T ] Dead Island North East\n[ G ] ${nameDINE}`}
if (JD == guild || JD == subguild) {var TAqTerrNum = TAqTerrNum + 1; var terrLost13 = ""}
else if (JD != guild && JD != subguild) {var terrLost13 = `\n[ T ] Jofash Docks\n[ G ] ${nameJD}`}
if (LP == guild || LP == subguild) {var TAqTerrNum = TAqTerrNum + 1; var terrLost14 = ""}
else if (LP != guild && LP != subguild) {var terrLost14 = `\n[ T ] Lexdales Prison\n[ G ] ${nameLP}`}
if (CH == guild || CH == subguild) {var TAqTerrNum = TAqTerrNum + 1; var terrLost15 = ""}
else if (CH != guild && CH != subguild) {var terrLost15 = `\n[ T ] Corrupted Hand\n[ G ] ${nameCH}`}
if (AT == guild || AT == subguild) {var TAqTerrNum = TAqTerrNum + 1; var terrLost16 = ""}
else if (AT != guild && AT != subguild) {var terrLost16 = `\n[ T ] Abandoned Tower\n[ G ] ${nameAT}`}
if (PTP == guild || PTP == subguild) {var TAqTerrNum = TAqTerrNum + 1; var terrLost17 = ""}
else if (PTP != guild && PTP != subguild) {var terrLost17 = `\n[ T ] Path to Prison\n[ G ] ${namePTP}`}
if (SR == guild || SR == subguild) {var TAqTerrNum = TAqTerrNum + 1; var terrLost18 = ""}
else if (SR != guild && SR != subguild) {var terrLost18 = `\n[ T ] Shanjugin's River\n[ G ] ${nameSR}`}
if (L == guild || L == subguild) {var TAqTerrNum = TAqTerrNum + 1; var terrLost19 = ""}
else if (L != guild && L != subguild) {var terrLost19 = `\n[ T ] Lexdale\n[ G ] ${nameL}`}
if (BM == guild || BM == subguild) {var TAqTerrNum = TAqTerrNum + 1; var terrLost20 = ""}
else if (BM != guild && BM != subguild) {var terrLost20 = `\n[ T ] Black Magic\n[ G ] ${nameBM}`}
if (GH == guild || GH == subguild)  {var TAqTerrNum = TAqTerrNum + 1; var terrLost21 = ""}
else if (GH != guild && GH != subguild) {var terrLost21 = `\n[ T ] Gromblins Hideout\n[ G ] ${nameGH}`}
if (BC == guild || BC == subguild)  {var TAqTerrNum = TAqTerrNum + 1; var terrLost22 = ""}
else if (BC != guild && BC != subguild) {var terrLost22 = `\n[ T ] Banshees Cave\n[ G ] ${nameBC}`}
if (GN == guild || GN == subguild) {var TAqTerrNum = TAqTerrNum + 1; var terrLost23 = ""}
else if (GN != guild && GN != subguild) {var terrLost23 = `\n[ T ] Graveyard North\n[ G ] ${nameGN}`}
if (GS == guild || GS == subguild) {var TAqTerrNum = TAqTerrNum + 1; var terrLost24 = ""}
else if (GS != guild && GS != subguild) {var terrLost24 = `\n[ T ] Graveyard South\n[ G ] ${nameGS}`}
if (AC == guild || AC == subguild) {var TAqTerrNum = TAqTerrNum + 1; var terrLost25 = ""}
else if (AC != guild && AC != subguild) {var terrLost25 = `\n[ T ] Arachnida Cave\n[ G ] ${nameAC}`}
if (CV == guild || CV == subguild) {var TAqTerrNum = TAqTerrNum + 1; var terrLost26 = ""}
else if (CV != guild && CV != subguild) {var terrLost26 = `\n[ T ] Corrupted Village\n[ G ] ${nameCV}`}
if (ACH == guild || ACH == subguild) {var TAqTerrNum = TAqTerrNum + 1; var terrLost27 = ""}
else if (ACH != guild && ACH != subguild) {var terrLost27 = `\n[ T ] Abandoned Church\n[ G ] ${nameACH}`}
if (CI == guild || CI == subguild) {var TAqTerrNum = TAqTerrNum + 1; var terrLost28 = ""}
else if (CI != guild && CI != subguild) {var terrLost28 = `\n[ T ] Corrupted Impact\n[ G ] ${nameCI}`}
if (DV == guild || DV == subguild)  {var TAqTerrNum = TAqTerrNum + 1; var terrLost29 = ""}
else if (DV != guild && DV != subguild) {var terrLost29 = `\n[ T ] Dark Forest Village\n[ G ] ${nameDV}`}
if (CO == guild || CO == subguild) {var TAqTerrNum = TAqTerrNum + 1; var terrLost30 = ""}
else if (CO != guild && CO != subguild) {var terrLost30 = `\n[ T ] Cinfras Outskirts\n[ G ] ${nameCO}`}
if (DFCT == guild || DFCT == subguild) {var TAqTerrNum = TAqTerrNum + 1; var terrLost31 = ""}
else if (DFCT != guild && DFCT != subguild) {var terrLost31 = `[ T ] Dark Forest Cinfras Transition\n[ G ] ${nameDFCT}`}

var totalLost = terrLost1.concat(terrLost2).concat(terrLost3).concat(terrLost4).concat(terrLost5).concat(terrLost6).concat(terrLost7).concat(terrLost8).concat(terrLost9).concat(terrLost10).concat(terrLost11).concat(terrLost12).concat(terrLost13).concat(terrLost14).concat(terrLost15).concat(terrLost16).concat(terrLost17).concat(terrLost18).concat(terrLost19).concat(terrLost20).concat(terrLost21).concat(terrLost22).concat(terrLost23).concat(terrLost24).concat(terrLost25).concat(terrLost26).concat(terrLost27).concat(terrLost28).concat(terrLost29).concat(terrLost30).concat(terrLost31);

const csck = new Discord.MessageEmbed()
	.setColor('#2299ff')
	.setTitle(`TAq Territory (${TAqTerrNum} / 31)`)
	.addFields(
		{ name: 'Lost claim(s)', value: `${totalLost}` }
	)
msg.channel.send(csck);

	}
});
}
 catch (err) {
	client.guilds.cache.get('729147655875199017').channels.cache.get('748900470575071293').send(err);
}
	}}
);



client.on('message', msg => {
	if (msg.content === '!w help' || msg.content === '!w ?') {
//taq logo link : https://cdn.discordapp.com/icons/729147655875199017/24228d94d9551b4f924649dc11125ad5.png        
const help = new Discord.MessageEmbed()
.setColor('#0099ff')
.setTitle('HELP !')
.setDescription('Avalible commands (for now)')
.addFields(
	{ name: '!w l', value: 'Check TAq and FTk current level' },
)
.addFields(
	{ name: '!w ck <Username>', value: 'Basic player stats check' },
)
.addFields(
	{ name: '!w csck', value: 'Territory consistency check' },
)
msg.channel.send(help);
	}
});

client.on('message', message => {
	if (message.content === '!w lsttrpON') {
		var lsttrp = true;
	}
})

client.on('message', message => {
	if (message.content === '!w lsttrpOFF') {
		var lsttrp = false;
	}
})

client.on('message', message => {
	try {
	if (!message.content.startsWith(prefix) || message.content.startsWith('!w int') ||message.author.bot || message.content === '!w o' || message.content === '!w l' || message.content === '!w help' || message.content === '!w test' || message.content === '!w ?' || message.content === '!w csck') return;
	const args = message.content.slice(prefix.length).trim().split(' ');
	const command = args.shift().toLowerCase();
			if (command === 'ck') {
				if (!args.length) {
					const noUserEmbed = new Discord.MessageEmbed()
					.setColor('#FF2222')
					.setTitle('Error')
					.setDescription('Username unspecified.')
				message.channel.send(noUserEmbed);
				return;
				}
			}
			return request(`https://api.wynncraft.com/v2/player/${args}/stats`, (err, response, body) => {
				if (err) throw(err);
				var d = JSON.parse(body);
				if (d.data)
				{
				var user = JSON.stringify(d.data[0].username);
				var user = user.replace(`"`, " ")
				var user = user.replace(`"`, " ")
							 console.log(d.data[0].username);
				var guild = JSON.stringify(d.data[0].guild.name);
				var guild = guild.replace(`"`, " ");
				var guild = guild.replace(`"`, " ");
				var guild = guild.replace('null', 'No guild');
				var guild = guild.replace('null', 'No guild');
							 console.log(d.data[0].guild.name);
				var guildRank = JSON.stringify(d.data[0].guild.rank);
				var guildRank = guildRank.replace(`"`, " ");
				var guildRank = guildRank.replace(`"`, " ");
				var guildRank = guildRank.replace('null', 'No guild');
				var guildRank = guildRank.replace('null', 'No guild');
				var playtime = d.data[0].meta.playtime /60 * 4.7;
				var playtimeR = playtime.toFixed(2);
				var playtimeR = JSON.stringify(playtimeR);
				var playtimeR = playtimeR.replace(`"`, " ");
				var playtimeR = playtimeR.replace(`"`, " ");
				var rank = JSON.stringify(d.data[0].meta.tag.value);
				var rank = rank.replace(`"`, " ");
				var rank = rank.replace(`"`, " ");
				var rank = rank.replace('null', "No rank");
				var hclassN = JSON.stringify(d.data[0].classes[0].name)
				var hclassN = hclassN.replace(`"`, " ");
				var hclassN = hclassN.replace(`"`, " ");
				var hclassN = hclassN.toUpperCase();
				var hclassL = d.data[0].classes[0].level.toFixed(0);
				var death = d.data[0].global.deaths.toFixed(0);
				var bwalked = d.data[0].classes[0].blocksWalked.toFixed(0);
				var online = JSON.stringify(d.data[0].meta.location.online)
				var server = JSON.stringify(d.data[0].meta.location.server)
				if (online == true || server !== 'null' ) {
					var onServer = server.replace(`"`, " ");
					var onServer = onServer.replace(`"`, " ");
					var onServer = onServer.replace(`"`, " ");
				}
				else {
					var onServer = ('Offline')
				}
							 console.log(d.data[0].guild.rank);
							 console.log(d.data[0].meta.playtime);
const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle(`  ${user}`)
	.setDescription (`  ${onServer}`)
	.addFields(
		{ name: 'Guild', value: `${guild}` },
		{ name: 'Guild rank', value: `${guildRank}`},
		{ name: 'Total playtime', value: `${playtimeR} hours`},
		{ name: 'Deaths', value: `${death}`},
		{ name: 'Highest class / C+P level', value: `${hclassN} / ${hclassL}`},
		{ name: 'Blocks walked on highest class', value: `${bwalked} blocks` },

	)
	.setFooter(`${rank}`)

message.channel.send(exampleEmbed);
			}
		else if (!d.data) {
const errorEmbed = new Discord.MessageEmbed()
	.setColor('#FF2222')
	.setTitle('Error')
	.setDescription('Invalid argument.')
message.channel.send(errorEmbed);

		}
		});
			}
				catch (err) {
					client.guilds.cache.get('729147655875199017').channels.cache.get('748900470575071293').send(err);
				}
			});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	const args = message.content.slice(prefix.length).trim().split(' ');
	const command = args.shift().toLowerCase();
	if (command === `test2`) {
		message.channel.send(`${args}`);
	}
});

client.on('message', msg => {
	if (msg.content === '!w l') {
try {
	request(`https://api.wynncraft.com/public_api.php?action=guildStats&command=The+Aquarium`, (err, response, body) => {
		if (err) console.log(err);
		var taq = JSON.parse(body);
		if(taq) {
		var xp = JSON.stringify(taq.xp);
		var level = JSON.stringify(taq.level);
	
		request(`https://api.wynncraft.com/public_api.php?action=guildStats&command=The+FishTank`, (err, response, body) => {
			if (err) console.log(err);
			var ftk = JSON.parse(body);
			if (ftk) {
			var fxp = JSON.stringify(ftk.xp);
			var flevel = JSON.stringify(ftk.level)
			
	 const XP = new Discord.MessageEmbed()
			.setColor('#ff9900')
			.setTitle('Progression')
			.setThumbnail('https://cdn.discordapp.com/icons/729147655875199017/24228d94d9551b4f924649dc11125ad5.png')
			.addFields(
				{ name: 'The Aquarium [TAq]', value: `Level ${level} | ${xp} %`},
			)
			.addFields(
				{ name: 'The FishTank [FTk]', value: `Level ${flevel} | ${fxp} %`},
			)
			msg.channel.send(XP);
		}});}});
	}

catch (err) {
	client.guilds.cache.get('729147655875199017').channels.cache.get('748900470575071293').send(err);
}
}});
	


//async part of the code 

pingCounter.AlreadyPinged = 0;
if (lsttrp = true) {
function chkTerr() {

	return request(`https://api.wynncraft.com/public_api.php?action=territoryList`, (err, response, body) => {
		if (err) console.log(err);
		var at = JSON.parse(body);
		var t = at.territories
		var lostTerr = 0;
		console.log("HTTP GET Requested");
		
		onlineCaptain.total = 0;
		
	//get the data about who own all these terr
		var MI = JSON.stringify(t["Mage Island"].guild);
		var SH = JSON.stringify(t["Santa's Hideout"].guild);
		var SI = JSON.stringify(t["Skiens Island"].guild);
		var NN = JSON.stringify(t["Nodguj Nation"].guild);
		var II = JSON.stringify(t["Icy Island"].guild);
		var DN = JSON.stringify(t["Dujgon Nation"].guild);
		var RI = JSON.stringify(t["Regular Island"].guild);
		var MP = JSON.stringify(t["Maro Peaks"].guild);
		var DISW = JSON.stringify(t["Dead Island South West"].guild);
		var DISE = JSON.stringify(t["Dead Island South East"].guild);
		var DINW = JSON.stringify(t["Dead Island North West"].guild);
		var DINE = JSON.stringify(t["Dead Island North East"].guild);
		var JD = JSON.stringify(t["Jofash Docks"].guild);
		var LP = JSON.stringify(t["Lexdales Prison"].guild);
		var CH = JSON.stringify(t["Corrupted Hand"].guild);
		var AT = JSON.stringify(t["Abandoned Tower"].guild);
		var PTP = JSON.stringify(t["Path To Prison"].guild);
		var SR = JSON.stringify(t["Shanjugin’s River"].guild);
		var L = JSON.stringify(t["Lexdale"].guild);
		var BM = JSON.stringify(t["Black Magic"].guild);
		var GH = JSON.stringify(t["Gromblins Hideout"].guild);
		var BC = JSON.stringify(t["Banshees Cave"].guild);
		var GN = JSON.stringify(t["Graveyard North"].guild);
		var GS = JSON.stringify(t["Graveyard South"].guild);
		var AC = JSON.stringify(t["Arachnida Cave"].guild);
		var CV = JSON.stringify(t["Corrupted Village"].guild);
		var ACH = JSON.stringify(t["Abandoned Church"].guild);
		var CI = JSON.stringify(t["Corrupted Impact"].guild);
		var DV = JSON.stringify(t["Dark Forest Village"].guild);
		var CO = JSON.stringify(t["Cinfras Outskirts"].guild);
		var DFCT = JSON.stringify(t["Dark Forest Cinfras Transition"].guild);

	//get all those data about how long have it been owned but wynn api is meh so its kinda inaccurate
		var dMI = t["Mage Island"].acquired;
		var dSH = t["Santa's Hideout"].acquired;
		var dSI = t["Skiens Island"].acquired;
		var dNN = t["Nodguj Nation"].acquired;
		var dII = t["Icy Island"].acquired;
		var dDN = t["Dujgon Nation"].acquired;
		var dRI = t["Regular Island"].acquired;
		var dMP = t["Maro Peaks"].acquired;
		var dDISW = t["Dead Island South West"].acquired;
		var dDISW = t["Dead Island South East"].acquired;
		var dDINW = t["Dead Island North West"].acquired;
		var dDINE = t["Dead Island North East"].acquired;
		var dJD = t["Jofash Docks"].acquired;
		var dLP = t["Lexdales Prison"].acquired;
		var dCH = t["Corrupted Hand"].acquired;
		var dAT = t["Abandoned Tower"].acquired;
		var dPTP = t["Path To Prison"].acquired;
		var dSR = t["Shanjugin’s River"].acquired;
		var dL = t["Lexdale"].acquired;
		var dBM = t["Black Magic"].acquired;
		var dGH = t["Gromblins Hideout"].acquired;
		var dBC = t["Banshees Cave"].acquired;
		var dGN = t["Graveyard North"].acquired;
		var dGS = t["Graveyard South"].acquired;
		var dAC = t["Arachnida Cave"].acquired;
		var dCV = t["Corrupted Village"].acquired;
		var dACH = t["Abandoned Church"].acquired;
		var dCI = t["Corrupted Impact"].acquired;
		var dDV = t["Dark Forest Village"].acquired;
		var dCO = t["Cinfras Outskirts"].acquired;
		var dDFCT = t["Dark Forest Cinfras Transition"].acquired;

	//delete all those quote cuz idk the better way of doing this
		var nameMI = MI.replace('"', '');
		var nameMI = nameMI.replace('"', '');
		var nameJD = JD.replace('"', '');
		var nameJD = nameJD.replace('"', '');
		var nameSI = SI.replace('"', '');
		var nameSI = nameSI.replace('"', '');
		var nameNN = NN.replace('"', '');
		var nameNN = nameNN.replace('"', '');
		var nameII = II.replace('"', '');
		var nameII = nameII.replace('"', '');
		var nameSH = SH.replace('"', '');
		var nameSH = nameSH.replace('"', '');
		var nameDN = DN.replace('"', '');
		var nameDN = nameDN.replace('"', '');
		var nameRI = RI.replace('"', '');
		var nameRI = nameRI.replace('"', '');
		var nameMP = MP.replace('"', '');
		var nameMP = nameMP.replace('"', '');
		var nameDISW = DISW.replace('"', '');
		var nameDISW = nameDISW.replace('"', '');
		var nameDISE = DISE.replace('"', '');
		var nameDISE = nameDISE.replace('"', '');
		var nameDINW = DINW.replace('"', '');
		var nameDINW = nameDINW.replace('"', '');
		var nameDINE = DINE.replace('"', '');
		var nameDINE = nameDINE.replace('"', '');
		var nameLP = LP.replace('"', '');
		var nameLP = nameLP.replace('"', '');
		var nameCH = CH.replace('"', '');
		var nameCH = nameCH.replace('"', '');
		var nameAT = AT.replace('"', '');
		var nameAT = nameAT.replace('"', '');
		var namePTP = PTP.replace('"', '');
		var namePTP = namePTP.replace('"', '');
		var nameSR = SR.replace('"', '');
		var nameSR = nameSR.replace('"', '');
		var nameL = L.replace('"', '');
		var nameL = nameL.replace('"', '');
		var nameBM = BM.replace('"', '');
		var nameBM = nameBM.replace('"', '');
		var nameGH = GH.replace('"', '');
		var nameGH = nameGH.replace('"', '');
		var nameBC = BC.replace('"', '');
		var nameBC = nameBC.replace('"', '');
		var nameGN = GN.replace('"', '');
		var nameGN = nameGN.replace('"', '');
		var nameGS = GS.replace('"', '');
		var nameGS = nameGS.replace('"', '');
		var nameAC = AC.replace('"', '');
		var nameAC = nameAC.replace('"', '');
		var nameCV = CV.replace('"', '');
		var nameCV = nameCV.replace('"', '');
		var nameACH = ACH.replace('"', '');
		var nameACH = nameACH.replace('"', '');
		var nameCI = CI.replace('"', '');
		var nameCI = nameCI.replace('"', '');
		var nameDV = DV.replace('"', '');
		var nameDV = nameDV.replace('"', '');
		var nameCO = CO.replace('"', '');
		var nameCO = nameCO.replace('"', '');
		var nameDFCT = DFCT.replace('"', '');
		var nameDFCT = nameDFCT.replace('"', '');

		var TotalLostTerr = ("");

//idfk what im doing here
	var terr1 = ("");
	var terr2 = ("");
	var terr3 = ("");
	var terr4 = ("");
	var terr5 = ("");
	var terr6 = ("");
	var terr7 = ("");
	var terr8 = ("");
	var terr9 = ("");
	var terr10 = ("");
	var terr11 = ("");
	var terr12 = ("");
	var terr13 = ("");
	var terr14 = ("");
	var terr15 = ("");
	var terr16 = ("");
	var terr17 = ("");
	var terr18 = ("");
	var terr19 = ("");
	var terr10 = ("");
	var terr21 = ("");
	var terr22 = ("");
	var terr23 = ("");
	var terr24 = ("");
	var terr25 = ("");
	var terr26 = ("");
	var terr27 = ("");
	var terr28 = ("");
	var terr29 = ("");
	var terr30 = ("");
	var terr30 = ("");
	var terr31 = ("");

	//check if all those terr is own by taq or sub guild or not
		if (SI == guild || SI == subguild) {
			var terr1 = ("");
		}
		else if (SI != guild && SI != subguild) {
			var lostTerr = lostTerr + 1;
			console.log(SI);
			var terr1 = (`\n\n[ T ] Skiens Island\n[ G ] ${nameSI}\n[ A ] ${dSI}`); 
		}

		if (NN == guild || NN == subguild) {
			var terr2 = ("");
		}
		else if (NN != guild && NN != subguild) {
			var lostTerr = lostTerr + 1;
			console.log(NN);
			var terr2 = (`\n\n[ T ] Nodguj Nation\n[ G ] ${nameOR}\n[ A ] ${dNN}`);
		}

		 if (II == guild || II == subguild) {
			var terr3 = ("");
		}
		else if (II != guild && II != subguild) {
			var lostTerr = lostTerr + 1;
			console.log(II);
			var terr3 = (`\n\n[ T ] Icy Island\n[ G ] : ${nameII}\n[ A ] ${dII}`);
		}

		if (SH == guild || SH == subguild) {
			var terr4 = ("");
		}
		else if (SH != guild && SH != subguild) {
			var lostTerr = lostTerr + 1;
			console.log(SH);
			var terr4 = (`\n\n[ T ] Santa's Hideout\n[ G ] ${nameSH}\n[ A ] ${dSH}`);
		}

		if (DN == guild || DN == subguild) {
			var terr5 = ("");
		}
		else if (DN != guild && DN != subguild) {
			var lostTerr = lostTerr + 1;
			console.log(DN);
			var terr5 = (`\n\n[ T ] Dujgon Nation\n[ G ] ${nameDN}\n[ A ] ${dDN}`);
		}

		if (RI == guild || RI == subguild) {
			var terr6 = (" ");
		}
		else if (RI != guild && RI != subguild) {
			var lostTerr = lostTerr + 1;
			console.log(RI);
			var terr6 = (`\n\n[ T ] Regular Island\n[ G ] ${nameRI}\n[ A ] ${dRI}`);
		}

		if (MP == guild || MP == subguild) {
			var terr7 = ("");
		}
		else if (MP != guild && MP != subguild) {
			var lostTerr = lostTerr + 1;
			console.log(MP);
			var terr7 = (`\n\n[ T ] Maro Peaks\n[ G ] ${nameMP}\n[ A ] ${dMP}`);
		}

		if (DISW == guild || DISW == subguild) {
			var terr8 = ("");
		}
		else if (DISW != guild && DISW != subguild) {
			var lostTerr = lostTerr + 1;
			console.log(DISW);
			var terr8 = (`\n\n[ T ] Dead Island South West\n[ G ] ${nameDISW}\n[ A ] ${dDISW}`);
		}

		if (DISE == guild || DISE == subguild) {
			var terr9 = ("");
		}
		else if (DISE != guild && DISE != subguild) {
			var lostTerr = lostTerr + 1;
			var terr9 = (`\n\n[ T ] Dead Island South East\n[ G ] ${nameDISE}\n[ A ] ${dDISE}`);
		}

		if (DINW == guild || DINW == subguild) {
			var terr10 = (" ");
		}
		else if (DINW != guild && DINW != subguild) {
			var lostTerr = lostTerr + 1;
			var terr10 = (`\n\n[ T ] Dead Island North West\n[ G ] ${nameDINW}\n[ A ] ${dDINW}`);
		}

		if (DINE == guild || DINE == subguild) {
			var terr11 = ("");
		}
		else if (DINE != guild && DINE != subguild) {
			var lostTerr = lostTerr + 1;
			var terr11 = (`\n\n[ T ] Dead Island North East\n[ G ] ${nameDINE}\n[ A ] ${dDINE}`);
		}

		if (MI == guild || MI == subguild) {
		   var terr12 = ("")
		}
		else if (MI != guild && MI != subguild) {
			var lostTerr = lostTerr + 1;
			var terr12 = (`\n\n[ T ] Mage Island\n[ G ] ${nameMI}\n[ A ] ${dMI}`)
		}

		if (JD == guild || JD == subguild) {
			var terr13 = ("");
		}
		else if (JD != guild && JD != subguild) {
			var lostTerr = lostTerr + 1;
			var terr13 = (`\n\n[ T ] Jofash Docks\n[ G ] ${nameJD}\n[ A ] ${dJD}`)
		}

		if (LP == guild || LP == subguild) {
			var terr14 = ("");
		}
		else if (LP != guild && LP != subguild) {
			var lostTerr = lostTerr + 1;
			var terr14 = (`\n\n[ T ] Lexdales Prison\n[ G ] ${nameLP}\n[ A ] ${dLP}`)
		}

		if (CH == guild || CH == subguild) {
			var terr15 = ("");
		}
		else if (CH != guild && CH != subguild) {
			var lostTerr = lostTerr + 1;
			var terr15 = (`\n\n[ T ] Corrupted Hand\n[ G ] ${nameCH}\n[ A ] ${dCH}`)
		}

		if (AT == guild || AT == subguild) {
			var terr16 = ("");
		}
		else if(AT != guild && AT != subguild) {
			var lostTerr = lostTerr + 1;
			var terr16 = (`\n\n[ T ] Abandoned Tower\n[ G ] ${nameAT}\n[ A ] ${dAT}`)
		}

		if (PTP == guild || PTP == subguild) {
			var terr17 = ("");
		}
		else if (PTP != guild && PTP != subguild) {
			var lostTerr = lostTerr + 1;
			var terr17 = (`\n\n[ T ] Path To Prison\n[ G ] ${namePTP}\n[ A ] ${dPTP}`)
		}

		if (SR == guild || SR == subguild) {
			var terr18 = ("");
		}
		else if (SR != guild && SR != subguild) {
			var lostTerr = lostTerr + 1;
			var terr18 = (`\n\n[ T ] Shanjugin's River\n[ G ] ${nameSR}\n[ A ] ${dSR}`)
		}
		
		if (L == guild || L == subguild) {
			var terr19 = ("");
		}
		else if (L != guild && L != subguild) {
			var lostTerr = lostTerr + 1;
			var terr19 = (`\n\n[ T ] Lexdale\n[ G ] ${nameL}\n[ A ] ${dL}`)
		}

		if (BM == guild || BM == subguild) {
			var terr20 = ("");
		}
		else if (BM != gulid && BM != subgulid) {
			var lostTerr = lostTerr + 1;
			var terr20 = (`\n\n[ T ] Black Magic\n[ G ] ${nameBM}\n[ A ] ${dBM}`)
		}

		if (GH == guild || GH == subguild) {
			var terr21 = ("");
		}
		else if (GH != guild && GH != subguild) {
			var lostTerr = lostTerr + 1;
			var terr21 = (`\n\n[ T ] Gromblins Hideout\n[ G ] ${nameGH}\n[ A ] ${dGH}`)
		}

		if (BC == guild || BC == subguild) {
			var terr22 = ("");
		}
		else if (BC != guild && BC != subguild) {
			var lostTerr = lostTerr + 1;
			var terr22 = (`\n\n[ T ] Banshees Cave\n[ G ] ${nameBC}\n[ A ] ${dBC}`)
		}

		if (GN == guild || GN == subguild) {
			var terr23 = ("")
		}
		else if (GN != guild && GN != subguild) {
			var lostTerr = lostTerr + 1;
			var terr23 = (`\n\n[ T ] Graveyard North\n[ G ] ${nameGN}\n[ A ] ${dGN}`)
		}

		if (GS == guild || GS == subguild) {
			var terr24 = ("");
		}
		else if (GS != guild && GD != subguild) {
			var lostTerr = lostTerr + 1;
			var terr24 = (`\n\n[ T ] Graveyard South\n[ G ] ${nameGS}\n[ A ] ${dGS}`)
		}

		if (AC == guild || AC == subguild) {
			var terr25 = ("");
		}
		else if (AC != guild && AC != subguild) {
		var lostTerr = lostTerr + 1;
		var terr25 = (`\n\n[ T ] Arachina Cave\n[ G ] ${nameAC}\n[ A ] ${dAC}`)
		}

		if (CV == guild || CV == subguild) {
			var terr26 = ("");
		}
		else if (CV != guild && CV != subguild) {
			var lostTerr = lostTerr + 1;
			var terr26 = (`\n\n[ T ] Corrupted Village\n[ G ] ${nameCV}\n[ A ] ${dCV}`)
		}

		if (ACH == guild || ACH == subguild) {
			var terr27 = ("");
		}
		else if (ACH != guild && ACH != subguild) {
			var lostTerr = lostTerr + 1;
			var terr27 = (`\n\n[ T ] Abandoned Church\n[ G ] ${nameACH}\n[ A ] ${dACH}`)
		}

		if (CI == guild || CI == subguild) {
			var terr28 = ("");
		}
		else if (CI != guild && CI != subguild) {
			var lostTerr = lostTerr + 1;
			var terr28 = (`\n\n[ T ] Corrupted Impact\n[ G ] ${nameCI}\n[ A ] ${dCI}`)
		}

		if (DV == guild || DV == subguild) {
			var terr29 = ("")
		}
		else if (DV != guild && DV != subguild) {
			var lostTerr = lostTerr + 1;
			var terr29 = (`\n\n[ T ] Dark Forest Village\n[ G ] ${nameDV}\n[ A ] ${dDV}`)
		}

		if (CO == guild || CO == subguild) {
			var terr30 = ("");
		}
		else if (CO != guild && CO != subguild) {
			var lostTerr = lostTerr + 1;
			var terr30 = (`\n\n[ T ] Cinfras Outskirts\n[ G ] ${nameCO}\n[ A ] ${dCO}`)
		}

		if (DFCT == guild || DFCT == subguild) {
			var terr31 = ("")
		}
		else if (DFCT != guild && DFCT != subguild) {
			var lostTerr = lostTerr + 1;
			var terr31 = (`\n\n[ T ] Dark Forest Cinfras Transition\n[ G ] ${nameDFCT}\n[ A ] ${dDFCT}`)
		}

		var TotalLostTerr = terr1.concat(terr2).concat(terr3).concat(terr4).concat(terr5).concat(terr6).concat(terr7).concat(terr8).concat(terr9).concat(terr10).concat(terr11).concat(terr12).concat(terr13).concat(terr14).concat(terr15).concat(terr16).concat(terr17).concat(terr18).concat(terr19).concat(terr20).concat(terr21).concat(terr22).concat(terr23).concat(terr24).concat(terr25).concat(terr26).concat(terr27).concat(terr28).concat(terr29).concat(terr30).concat(terr31);

var terrLostnum = lostTerr.toFixed(0)

temp.lostTerr = lostTerr;
temp.terrLostnum = terrLostnum;
temp.TotalLostTerr = TotalLostTerr;
	});
}
}
else if (lsttrp = false) {
	return console.log('Territories check is disabled')
}



function chkCapt() {
onlineCaptain.total = 0;

//muce
			request(`https://api.wynncraft.com/v2/player/muce/stats`, (err, response, body) => {
				if (err) throw(err);
				var d = JSON.parse(body);
				if (d.data.length != 0) {
					var online = JSON.stringify(d.data[0].meta.location.online);
					var server = JSON.stringify(d.data[0].meta.location.server);
					

					if (online = true || server != null && server != "lobby1" && server != "lobby2" && server != "lobby3") {
						onlineCaptain.total = onlineCaptain.total + 1;
					}
				}
			}
	   );
	   
//FPipi
			request(`https://api.wynncraft.com/v2/player/FPipi/stats`, (err, response, body) => {
				if (err) throw(err);
				var d = JSON.parse(body);
				if (d.data.length != 0) {
					var online = JSON.stringify(d.data[0].meta.location.online);
					var server = JSON.stringify(d.data[0].meta.location.server);
					
					if (online = true && server != null && server != "lobby1" && server != "lobby2" && server != "lobby3") {
						onlineCaptain.total = onlineCaptain.total + 1;
					}
				}
			}
	   );

///RougeKnight40
			request(`https://api.wynncraft.com/v2/player/RougeKnight40/stats`, (err, response, body) => {

				if (err) throw(err);

				var d = JSON.parse(body);
				if (d.data.length != 0) {
					var online = JSON.stringify(d.data[0].meta.location.online);
					var server = JSON.stringify(d.data[0].meta.location.server);
					

					if (online = true || server != null && server != "lobby1" && server != "lobby2" && server != "lobby3") {

						onlineCaptain.total = onlineCaptain.total + 1;
					}
				}
			}
	   );

//Eowaryldor
			request(`https://api.wynncraft.com/v2/player/Eowaryldor/stats`, (err, response, body) => {

				if (err) throw(err);

				var d = JSON.parse(body);
				if (d.data.length != 0) {
					var online = JSON.stringify(d.data[0].meta.location.online);
					var server = JSON.stringify(d.data[0].meta.location.server);
					

					if (online = true || server != null && server != "lobby1" && server != "lobby2" && server != "lobby3") {

						onlineCaptain.total = onlineCaptain.total + 1;
					}
				}
			}
	   );

//ninjakengster
			request(`https://api.wynncraft.com/v2/player/ninjakengster/stats`, (err, response, body) => {

				if (err) throw(err);

				var d = JSON.parse(body);
				if (d.data.length != 0) {
					var online = JSON.stringify(d.data[0].meta.location.online);
					var server = JSON.stringify(d.data[0].meta.location.server);
					

					if (online = true || server != null && server != "lobby1" && server != "lobby2" && server != "lobby3") {

						onlineCaptain.total = onlineCaptain.total + 1;
					}
				}
			}
	   );

//ArmourMerchant e1b7adea-a073-4d51-906d-4a4a3f5950ce
			request(`https://api.wynncraft.com/v2/player/e1b7adea-a073-4d51-906d-4a4a3f5950ce/stats`, (err, response, body) => {

				if (err) throw(err);

				var d = JSON.parse(body);
				if (d.data.length != 0) {
					var online = JSON.stringify(d.data[0].meta.location.online);
					var server = JSON.stringify(d.data[0].meta.location.server);
					

					if (online = true || server != null && server != "lobby1" && server != "lobby2" && server != "lobby3") {

						onlineCaptain.total = onlineCaptain.total + 1;
					}
				}
			}
	   );

//StrxberryMochi_
			request(`https://api.wynncraft.com/v2/player/StrxberryMochi_/stats`, (err, response, body) => {

				if (err) throw(err);

				var d = JSON.parse(body);
				if (d.data.length != 0) {
					var online = JSON.stringify(d.data[0].meta.location.online);
					var server = JSON.stringify(d.data[0].meta.location.server);
					

					if (online = true || server != null && server != "lobby1" && server != "lobby2" && server != "lobby3") {

						onlineCaptain.total = onlineCaptain.total + 1;
					}
				}
			}
	   );

//Deleted_User86
			request(`https://api.wynncraft.com/v2/player/Deleted_User86/stats`, (err, response, body) => {

				if (err) throw(err);

				var d = JSON.parse(body);
				if (d.data.length != 0) {
					var online = JSON.stringify(d.data[0].meta.location.online);
					var server = JSON.stringify(d.data[0].meta.location.server);
					

					if (online = true || server != null && server != "lobby1" && server != "lobby2" && server != "lobby3") {

						onlineCaptain.total = onlineCaptain.total + 1;
					}
				}
			}
	   );

//Alyshu
			request(`https://api.wynncraft.com/v2/player/Alyshu/stats`, (err, response, body) => {

				if (err) throw(err);

				var d = JSON.parse(body);
				if (d.data.length != 0) {
					var online = JSON.stringify(d.data[0].meta.location.online);
					var server = JSON.stringify(d.data[0].meta.location.server);
					

					if (online = true || server != null && server != "lobby1" && server != "lobby2" && server != "lobby3") {

						onlineCaptain.total = onlineCaptain.total + 1;
					}
				}
			}
	   );

//FrimaDeny
			request(`https://api.wynncraft.com/v2/player/FrimaDeny/stats`, (err, response, body) => {

				if (err) throw(err);

				var d = JSON.parse(body);
				if (d.data.length != 0) {
					var online = JSON.stringify(d.data[0].meta.location.online);
					var server = JSON.stringify(d.data[0].meta.location.server);
					if (online = true || server != null && server != "lobby1" && server != "lobby2" && server != "lobby3") {

						onlineCaptain.total = onlineCaptain.total + 1;
					}
				}
			}
	   );

//Funumunuh
			request(`https://api.wynncraft.com/v2/player/Funumunuh/stats`, (err, response, body) => {

				if (err) throw(err);

				var d = JSON.parse(body);
				if (d.data.length != 0) {
					var online = JSON.stringify(d.data[0].meta.location.online);
					var server = JSON.stringify(d.data[0].meta.location.server);
					if (online = true || server != null && server != "lobby1" && server != "lobby2" && server != "lobby3") {

						onlineCaptain.total = onlineCaptain.total + 1;
					}
				}
			}
	   );

//ZockerCam
			request(`https://api.wynncraft.com/v2/player/ZockerCam/stats`, (err, response, body) => {

				if (err) throw(err);

				var d = JSON.parse(body);
				if (d.data.length != 0) {
					var online = JSON.stringify(d.data[0].meta.location.online);
					var server = JSON.stringify(d.data[0].meta.location.server);                    
					if (online = true || server != null && server != "lobby1" && server != "lobby2" && server != "lobby3") {

						onlineCaptain.total = onlineCaptain.total + 1;
					}
				}
			}
	   );

//AaDantsi
			request(`https://api.wynncraft.com/v2/player/AaDantsi/stats`, (err, response, body) => {

				if (err) throw(err);

				var d = JSON.parse(body);
				if (d.data.length != 0) {
					var online = JSON.stringify(d.data[0].meta.location.online);
					var server = JSON.stringify(d.data[0].meta.location.server);                    
					if (online = true || server != null && server != "lobby1" && server != "lobby2" && server != "lobby3") {

						onlineCaptain.total = onlineCaptain.total + 1;
					}
				}
			}
	   );

//Aquallous
			request(`https://api.wynncraft.com/v2/player/Aquallous/stats`, (err, response, body) => {

				if (err) throw(err);

				var d = JSON.parse(body);
				if (d.data.length != 0) {
					var online = JSON.stringify(d.data[0].meta.location.online);
					var server = JSON.stringify(d.data[0].meta.location.server);
					if (online = true || server != null && server != "lobby1" && server != "lobby2" && server != "lobby3") {

						onlineCaptain.total = onlineCaptain.total + 1;
					}
				}
			}
	   );

//PanfriedPanda
			request(`https://api.wynncraft.com/v2/player/PanfriedPanda/stats`, (err, response, body) => {

				if (err) throw(err);

				var d = JSON.parse(body);
				if (d.data.length != 0) {
					var online = JSON.stringify(d.data[0].meta.location.online);
					var server = JSON.stringify(d.data[0].meta.location.server);
					if (online = true || server != null && server != "lobby1" && server != "lobby2" && server != "lobby3") {

						onlineCaptain.total = onlineCaptain.total + 1;
					}
				}
			}
	   );

//xCqramel
			request(`https://api.wynncraft.com/v2/player/xCqramel/stats`, (err, response, body) => {

				if (err) throw(err);

				var d = JSON.parse(body);
				if (d.data.length != 0) {
					var online = JSON.stringify(d.data[0].meta.location.online);
					var server = JSON.stringify(d.data[0].meta.location.server);
					if (online = true || server != null && server != "lobby1" && server != "lobby2" && server != "lobby3") {

						onlineCaptain.total = onlineCaptain.total + 1;
					}
				}
			}
	   );

//dooperboopers
			request(`https://api.wynncraft.com/v2/player/dooperboopers/stats`, (err, response, body) => {

				if (err) throw(err);

				var d = JSON.parse(body);
				if (d.data.length != 0) {
					var online = JSON.stringify(d.data[0].meta.location.online);
					var server = JSON.stringify(d.data[0].meta.location.server);
					if (online = true || server != null && server != "lobby1" && server != "lobby2" && server != "lobby3") {

						onlineCaptain.total = onlineCaptain.total + 1;
					}
				}
			}
	   );

//Nitrogen7
			request(`https://api.wynncraft.com/v2/player/Nitrogen7/stats`, (err, response, body) => {

				if (err) throw(err);

				var d = JSON.parse(body);
				if (d.data.length != 0) {
					var online = JSON.stringify(d.data[0].meta.location.online);
					var server = JSON.stringify(d.data[0].meta.location.server);
					if (online = true || server != null && server != "lobby1" && server != "lobby2" && server != "lobby3") {

						onlineCaptain.total = onlineCaptain.total + 1;
					}
				}
			}
	   );

//TheLythan
			request(`https://api.wynncraft.com/v2/player/TheLythan/stats`, (err, response, body) => {

				if (err) throw(err);

				var d = JSON.parse(body);
				if (d.data.length != 0) {
					var online = JSON.stringify(d.data[0].meta.location.online);
					var server = JSON.stringify(d.data[0].meta.location.server);
					if (online = true || server != null && server != "lobby1" && server != "lobby2" && server != "lobby3") {

						onlineCaptain.total = onlineCaptain.total + 1;
					}
				}
			}
	   );

//Doctorstrange77
			request(`https://api.wynncraft.com/v2/player/Doctorstrange77/stats`, (err, response, body) => {

				if (err) throw(err);

				var d = JSON.parse(body);
				if (d.data.length != 0) {
					var online = JSON.stringify(d.data[0].meta.location.online);
					var server = JSON.stringify(d.data[0].meta.location.server);
					if (online = true || server != null && server != "lobby1" && server != "lobby2" && server != "lobby3") {

						onlineCaptain.total = onlineCaptain.total + 1;
					}
				}
			}
	   );

//WoodCreature
			request(`https://api.wynncraft.com/v2/player/WoodCreature/stats`, (err, response, body) => {

				if (err) throw(err);

				var d = JSON.parse(body);
				if (d.data.length != 0) {
					var online = JSON.stringify(d.data[0].meta.location.online);
					var server = JSON.stringify(d.data[0].meta.location.server);
					if (online = true || server != null && server != "lobby1" && server != "lobby2" && server != "lobby3") {

						onlineCaptain.total = onlineCaptain.total + 1;
					}
				}
			}
	   );

//ecoboom101
			request(`https://api.wynncraft.com/v2/player/ecoboom101/stats`, (err, response, body) => {

				if (err) throw(err);

				var d = JSON.parse(body);
				if (d.data.length != 0) {
					var online = JSON.stringify(d.data[0].meta.location.online);
					var server = JSON.stringify(d.data[0].meta.location.server);
					if (online = true || server != null && server != "lobby1" && server != "lobby2" && server != "lobby3") {

						onlineCaptain.total = onlineCaptain.total + 1;
					}
				}
			}
	   );

//ArchoKast
			request(`https://api.wynncraft.com/v2/player/ArchoKast/stats`, (err, response, body) => {

				if (err) throw(err);

				var d = JSON.parse(body);
				if (d.data.length != 0) {
					var online = JSON.stringify(d.data[0].meta.location.online);
					var server = JSON.stringify(d.data[0].meta.location.server);
					if (online = true || server != null && server != "lobby1" && server != "lobby2" && server != "lobby3") {

						onlineCaptain.total = onlineCaptain.total + 1;
					}
				}
			}
	   );

//talonexstar
			request(`https://api.wynncraft.com/v2/player/talonexstar/stats`, (err, response, body) => {

				if (err) throw(err);

				var d = JSON.parse(body);
				if (d.data.length != 0) {
					var online = JSON.stringify(d.data[0].meta.location.online);
					var server = JSON.stringify(d.data[0].meta.location.server);
					if (online = true || server != null && server != "lobby1" && server != "lobby2" && server != "lobby3") {

						onlineCaptain.total = onlineCaptain.total + 1;
					}
				}
			}
	   );

//Ghost1John
			request(`https://api.wynncraft.com/v2/player/Ghost1John/stats`, (err, response, body) => {

				if (err) throw(err);

				var d = JSON.parse(body);
				if (d.data.length != 0) {
					var online = JSON.stringify(d.data[0].meta.location.online);
					var server = JSON.stringify(d.data[0].meta.location.server);
					if (online = true || server != null && server != "lobby1" && server != "lobby2" && server != "lobby3") {

						onlineCaptain.total = onlineCaptain.total + 1;
					}
				}
			}
	   );

///PoisonlessYT
			request(`https://api.wynncraft.com/v2/player/PoisonlessYT/stats`, (err, response, body) => {

				if (err) throw(err);

				var d = JSON.parse(body);
				if (d.data.length != 0) {
					var online = JSON.stringify(d.data[0].meta.location.online);
					var server = JSON.stringify(d.data[0].meta.location.server);
					if (online = true || server != null && server != "lobby1" && server != "lobby2" && server != "lobby3") {

						onlineCaptain.total = onlineCaptain.total + 1;
					}
				}
			}
	   );

//WeaponMerchant
			request(`https://api.wynncraft.com/v2/player/WeaponMerchant/stats`, (err, response, body) => {

				if (err) throw(err);

				var d = JSON.parse(body);
				if (d.data.length != 0) {
					var online = JSON.stringify(d.data[0].meta.location.online);
					var server = JSON.stringify(d.data[0].meta.location.server);
					if (online = true || server != null && server != "lobby1" && server != "lobby2" && server != "lobby3") {

						onlineCaptain.total = onlineCaptain.total + 1;
					}
				}
			}
	   );

//niha0 40c82f80-9122-4199-bb92-b9bdc25d6435
			request(`https://api.wynncraft.com/v2/player/40c82f80-9122-4199-bb92-b9bdc25d6435/stats`, (err, response, body) => {

				if (err) throw(err);

				var d = JSON.parse(body);
				if (d.data.length != 0) {
					var online = JSON.stringify(d.data[0].meta.location.online);
					var server = JSON.stringify(d.data[0].meta.location.server);
					if (online = true || server != null && server != "lobby1" && server != "lobby2" && server != "lobby3") {

						onlineCaptain.total = onlineCaptain.total + 1;
					}
				}
			}
	   );

//rod 4843c26f-8e9f-45f4-b17e-6d98e66450fe
			request(`https://api.wynncraft.com/v2/player/4843c26f-8e9f-45f4-b17e-6d98e66450fe/stats`, (err, response, body) => {

				if (err) throw(err);

				var d = JSON.parse(body);
				if (d.data.length != 0) {
					var online = JSON.stringify(d.data[0].meta.location.online);
					var server = JSON.stringify(d.data[0].meta.location.server);
					if (online = true || server != null && server != "lobby1" && server != "lobby2" && server != "lobby3") {

						onlineCaptain.total = onlineCaptain.total + 1;
					}
				}
			}
	   );

//ZenoX_Super_M
			request(`https://api.wynncraft.com/v2/player/ZenoX_Super_M/stats`, (err, response, body) => {

				if (err) throw(err);

				var d = JSON.parse(body);
				if (d.data.length != 0) {
					var online = JSON.stringify(d.data[0].meta.location.online);
					var server = JSON.stringify(d.data[0].meta.location.server);
					if (online = true || server != null && server != "lobby1" && server != "lobby2" && server != "lobby3") {

						onlineCaptain.total = onlineCaptain.total + 1;
					}
				}
			}
	   );

//Quagz
			request(`https://api.wynncraft.com/v2/player/Quagz/stats`, (err, response, body) => {

				if (err) throw(err);

				var d = JSON.parse(body);
				if (d.data.length != 0) {
					var online = JSON.stringify(d.data[0].meta.location.online);
					var server = JSON.stringify(d.data[0].meta.location.server);
					if (online = true || server != null && server != "lobby1" && server != "lobby2" && server != "lobby3") {

						onlineCaptain.total = onlineCaptain.total + 1;
					}
				}
			}
	   );

//Arcanekid
			request(`https://api.wynncraft.com/v2/player/Arcanekid/stats`, (err, response, body) => {

				if (err) throw(err);

				var d = JSON.parse(body);
				if (d.data.length != 0) {
					var online = JSON.stringify(d.data[0].meta.location.online);
					var server = JSON.stringify(d.data[0].meta.location.server)
					if (online = true || server != null && server != "lobby1" && server != "lobby2" && server != "lobby3") {

						onlineCaptain.total = onlineCaptain.total + 1;
					}
				}
			}
	   );

//Mega_____
			request(`https://api.wynncraft.com/v2/player/Mega_____/stats`, (err, response, body) => {

				if (err) throw(err);

				var d = JSON.parse(body);
				if (d.data.length != 0) {
					var online = JSON.stringify(d.data[0].meta.location.online);
					var server = JSON.stringify(d.data[0].meta.location.server);
					if (online = true || server != null && server != "lobby1" && server != "lobby2" && server != "lobby3") {

						onlineCaptain.total = onlineCaptain.total + 1;
					}
				}
			}
	   );

//MerryTim 2abbcdc2-c10e-471a-bc91-d74e549aa9af
			request(`https://api.wynncraft.com/v2/player/2abbcdc2-c10e-471a-bc91-d74e549aa9af/stats`, (err, response, body) => {

				if (err) throw(err);

				var d = JSON.parse(body);
				if (d.data.length != 0) {
					var online = JSON.stringify(d.data[0].meta.location.online);
					var server = JSON.stringify(d.data[0].meta.location.server);
					if (online = true || server != null && server != "lobby1" && server != "lobby2" && server != "lobby3") {

						onlineCaptain.total = onlineCaptain.total + 1;
					}
				}
			}
	   );
}


function ping() {
	var TotalLostTerr = temp.TotalLostTerr;
	var terrLostnum = temp.terrLostnum;
	var onlineCapt = onlineCaptain.total;

			if (terrLostnum > treashold && onlineCapt == 0 && pingCounter.AlreadyPinged == 0) {
				client.guilds.cache.get('729147655875199017').channels.cache.get('729162690760671244').send(`\`\`\`\nMissing territory detected :\n${TotalLostTerr}\n\n\nTotal territory lost : ${terrLostnum}\`\`\``);
				client.guilds.cache.get('729147655875199017').channels.cache.get('729162690760671244').send(`<@&785526772913537024> Please reclaim our missing territory.`)
				pingCounter.AlreadyPinged = 1;
			}
			else if (terrLostnum = 0) {
				pingCounter.AlreadyPinged = 0;
			}
			
}

function pingOnlineCaptain () {

	var TotalLostTerr = temp.TotalLostTerr;
	var terrLostnum = temp.terrLostnum;
	var onlineCapt = onlineCaptain.total;

			if (terrLostnum > treashold && pingCounter.AlreadyPinged == 0) {
				client.guilds.cache.get('729147655875199017').channels.cache.get('729162690760671244').send(`\`\`\`\nMissing territory detected :\n${TotalLostTerr}\n\n\nTotal territory lost : ${terrLostnum}\`\`\``);
				client.guilds.cache.get('729147655875199017').channels.cache.get('729162690760671244').send(`Please reclaim our missing territory.\nOnline captain : ${onlineCapt}`)
				pingCounter.AlreadyPinged = 1;
			}
			else if (terrLostnum = 0) {
				pingCounter.AlreadyPinged = 0;
			}

}

function resetCounter() {
	pingCounter.AlreadyPinged = 0;
}

setInterval(chkTerr, interval);
setInterval(chkCapt, interval);

setInterval(ping, interval);

setInterval(resetCounter, pingInterval);
client.login(token)
