const Discord = require('discord.js');
const client = new Discord.Client();
const request = require('request');
const os = require('os');
var prefix = "/";

client.on('guildMemberAdd', member => {
	const channel = member.guild.channels.cache.find(ch => ch.name === 'general');
	if (!channel) return;
	channel.send(`Welcome to TAq and FTk guild's discord, ${member} If you'd like to apply, head to <#746021408319995965>, create the envelope and follow the format. Read up the rules in <#729162016505331765> as well and have a wonderful stay!`);
	console.log(`${member} Joined`);
  });

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    var args = message.content.slice(prefix.length).trim().split(" ");
    var command = args.shift().toLowerCase();
    
    if (command == 'ck') {
        // stats check
        if (args) {
        request(`https://api.wynncraft.com/v2/player/${args}/stats`, (err, response, body) => {
				if (err) {
				    client.guilds.cache.get('729147655875199017').channels.cache.get('748900470575071293').send(err);
				}
				var d = JSON.parse(body);
				if (d.data)
				{
                    if (d.data[0].username) {
				var user = JSON.stringify(d.data[0].username).replace(`"`, " ").replace(`"`, " ");
				var guild = JSON.stringify(d.data[0].guild.name).replace(`"`, " ").replace(`"`, " ").replace('null', 'No guild').replace('null', 'No guild');
				var guildRank = JSON.stringify(d.data[0].guild.rank).replace(`"`, " ").replace(`"`, " ").replace('null', 'No guild').replace('null', 'No guild');
				var playtimeR = (d.data[0].meta.playtime / 60 * 4.7).toFixed(2);
				var rank = JSON.stringify(d.data[0].meta.tag.value).replace(`"`, " ").replace(`"`, " ").replace('null', "No rank");
				var hclassN = JSON.stringify(d.data[0].classes[0].name).replace(`"`, " ").replace(`"`, " ").toUpperCase();
				var hclassL = d.data[0].classes[0].professions.combat.level.toFixed(0);
				var death = d.data[0].global.deaths.toFixed(0);
				var online = JSON.stringify(d.data[0].meta.location.online)
				var server = JSON.stringify(d.data[0].meta.location.server)
				if (online == true || server !== 'null' ) {
					var onServer = server.replace(`"`, " ").replace(`"`, " ");
				}
				else {
					var onServer = ('Offline')
				}
const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle(`${user} [ ${rank} ]`)
	.setDescription (`  ${onServer}`)
	.addFields(
		{ name: 'Guild', value: `${guild}` },
		{ name: 'Guild rank', value: `${guildRank}`},
		{ name: 'Total playtime', value: `${playtimeR} hours`},
		{ name: 'Deaths', value: `${death}`},
		{ name: 'Highest class / combat level', value: `${hclassN} / ${hclassL}`},
	)
	.setFooter(`${rank}`)

message.channel.send(exampleEmbed);
    }
    else if (!d.data[0].username) {
        const errorEmbed = new Discord.MessageEmbed()
            .setColor('#FF2222')
            .setTitle('Error')
            .setDescription('User not found !')
        message.channel.send(errorEmbed);
        
                }
	}
        });
    }
    else if (!args) {
        const noUserEmbed = new Discord.MessageEmbed()
        .setColor('#FF2222')
        .setTitle('Error')
        .setDescription('Username unspecified\nUsage : `/ck < username >`')
    message.channel.send(noUserEmbed);
    }
    }
	else if (command == 'find') {
        // wynncraft find
		request(`https://api.wynncraft.com/v2/player/${args}/stats`, (err, response, body) => {
			if (err) throw(err)
			if (body) {
				var d = JSON.parse(body);
				var online = JSON.stringify(d.data[0].meta.location.online)
				var server = JSON.stringify(d.data[0].meta.location.server)
				if (online == true || server !== 'null' ) {
					var onServer = server.replace(`"`, " ").replace(`"`, " ").replace(`"`, " ");
					var onServer = (`${args} is currently on server`).concat(onServer);
				}
				else {
					var onServer = (`${args} is not currently online any Wynncraft servers....`)
				}
				message.channel.send(onServer);
			}
		});
	}
    else if (command == 'gck') {
        // gu stat check
		args = args.replace(" ",'+').replace(" ",'+').replace(" ",'+').replace(" ",'+').replace(" ",'+').replace(" ",'+').replace(" ",'+').replace(" ",'+').replace(" ",'+').replace(" ",'+');
		request(`https://api.wynncraft.com/public_api.php?action=guildStats&command=${args}`, (err, response, body) => {
			if (err) throw (err);
            var gu = JSON.parse(body);
            if (gu) {
                //work in progress
            }
    });
}
    else if (command == 'i') {
        // inactivity checker
        args = args.replace(" ",'+').replace(" ",'+').replace(" ",'+').replace(" ",'+').replace(" ",'+').replace(" ",'+').replace(" ",'+').replace(" ",'+').replace(" ",'+').replace(" ",'+');
        request(`https://api.wynncraft.com/public_api.php?action=guildStats&command=${args}`, (err, response, body) => {
			if (err) console.log(err);
            var data = JSON.parse(body);
    });
    }
    else if (command == 'eval' && (message.author.id == 246865469963763713 || message.author.id == 282964164358438922 || message.author.is == 579826104194433024)) {
		// eval
        var cmd = "";
        for (var i = 0; i < args.length; i++) {
            var cmd = cmd.concat(` ${args[i]}`);
        }
        try {
        eval(cmd);
	message.react('✅');
        }
        catch(e) {
	    message.react('❎');
            e = ("```").concat('\n[ ! ]\n\n').concat(e).concat('```');
            message.channel.send(e);
        }
    }
    else if (command == 'xp') {
        // xp leaderboard
        // work in progress
        request(`https://api.wynncraft.com/public_api.php?action=guildStats&command=The+Aquarium`, (err, resp, body) => {
    if (err) throw(err);
    var gu = JSON.parse(body); 
    var blank = ' ';
    if (gu) {
        var output = "";
        for (var i = 0; i < gu.members.length; i++) {
            if (!gu.members[i].contributed == 0) {
		var user = JSON.stringify(gu.members[i].name);
        for (var i2 = user.length; i2 < 18; i2++ ) {
        var user = user.concat(" ");
        }
        var forxp = gu.members[i].contributed;
        var forxp = forxp.toLocaleString('en-US');
        for (var i3 = forxp.length; i3 < 15; i3++) {
            var forxp = blank.concat(forxp);
        }
        var user = user.replace('"', '').replace('"', '');
        var output = output.concat(user).concat(' :').concat(`${forxp}\n`);
            }
    }
        console.log(`\`\`\`\nUnsorted XP\n\n${output}\`\`\``);
    }
});
    }
	else if (command == 'l') {
        // guild level
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
				message.channel.send(XP);
			}});}});
	}
	else if (command == '?' || command == 'help') {
        // help
		const help = new Discord.MessageEmbed()
.setColor('#0099ff')
.setTitle('HELP !')
.setDescription('Avalible commands (for now)')
.addFields(
	{ name: '/l', value: 'Check TAq and FTk current level' },
)
.addFields(
	{ name: '/ck <Username>', value: 'Basic player stats check' },
)
.addFields(
	{ name: '/xp', value: 'Unfinished unsorted XP leaderboard' },
)
.addFields(
	{ name: '/ls', value: 'Unfinished online guild member (might hit rate limit)' },
)
.setFooter('Running on Amazon AWS ECC')
message.channel.send(help);
    }
});

client.on('message', message => {
    // message logging
    if (message.author.bot) return;
    else {
        console.log(`[ ${message.author.username} ]  >>  ${message.content}`)
       
        client.guilds.cache.get().channels.cache.get().send(`[ <#${message.channel.id}> ] [ **${message.author.username}** ] \n>> ${message.content.replace('<@', '<mention.').replace('@everyone', 'mention.everyone')}\n\n`);
    }
    });
