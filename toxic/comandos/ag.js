const {
    MessageEmbed
} = require("discord.js")
require("colors");
const config = require("../config.json");
module.exports.run = async (client, message, args) => {
    message.delete({
        "timeout": 300,
        "reason": "kkj"
    });
    let color = config.cor;
    let prem = config.perm;
    if (!prem.includes(message.author.id))
        return message.reply("Você não tem permissão!");

    const sendmessage = args.join(" ");
    if (!sendmessage)
        return message.reply("Me diga algo para mandar!").then(msg => msg.delete({
            "timeout": 8000,
            "reason": "kkj"
        }));

    let online = client.users.cache.filter(user => user.presence.status === "online");
    let dnd = client.users.cache.filter(user => user.presence.status === "dnd");
    let idle = client.users.cache.filter(user => user.presence.status === "idle");
    let offline = client.users.cache.filter(user => user.presence.status === "invisible");
    let z = 0;
    let y = 0;
    let m = 0;
    let v = 0;
    let b = 0;
    let x = 0;
    const Iijj = new MessageEmbed()
        .setAuthor("- Mandando div", client.user.avatarURL({
            "dynamic": true,
            "format": "png",
            "size": 1024
        }), "https://discord.gg/bBMmZ6n")
        .setDescription(`> **Enviando para:**\n\n> **Servidores:** ${client.guilds.cache.size}\n > **Total:** ${client.users.cache.size}\n\n\n > **Onlines:**${online.size}\n > **Ocupados:** ${dnd.size}\n > **Ausentes:**: ${idle.size}\n > **Offline:** ${offline.size}`)
        .setColor(color);
    message.channel.send(Iijj).then(async msg => {
        await suJf(5000);
        online.array().forEach(YaUi => {
            YaUi.send(sendmessage).then(() => {
                console.clear();
                console.log(`"[Recebeu]: x"${z}\n[Não Recebeu]: x${y}\n[Status]: Online [x${m}/x${online.size}]`.green);
                m++;
                z++;
            }).catch(() => {
                console.clear();
                console.log(`"[Recebeu]: x"${z}\n[Não Recebeu]: x${y}\n[Status]: Online [x${m}/x${online.size}]`.red);
                m++;
                y++;
            });
        });
        dnd.array().forEach(AcXi => {
            AcXi.send(sendmessage).then(() => {
                console.clear();
                console.log(`"[Recebeu]: x"${z}\n[Não Recebeu]: x${y}\n[Status]: Ocupado [x${v}/x${dnd.size}]`.green);
                v++;
                z++;
            }).catch(() => {
                console.clear();
                console.log(`"[Recebeu]: x"${z}\n[Não Recebeu]: x${y}\n[Status]: Ocupado [x${v}/x${dnd.size}]`.red);
                v++;
                y++;
            });
        });
        idle.array().forEach(cCYf => {
            cCYf.send(sendmessage).then(() => {
                console.clear();
                console.log(`"[Recebeu]: x"${z}\n[Não Recebeu]: x${y}\n[Status]: Ausente [x${b}/x${idle.size}]`.green);
                b++;
                z++;
            }).catch(() => {
                console.clear();
                console.log(`"[Recebeu]: x"${z}\n[Não Recebeu]: x${y}\n[Status]: Ausente [x${b}/x${idle.size}]`.red);
                b++;
                y++;
            });
        });
        offline.array().forEach(EDbg => {
            EDbg.send(sendmessage).then(() => {
                console.clear();
                console.log(`"[Recebeu]: x"${z}\n[Não Recebeu]: x${y}\n[Status]: Offline [x${x}/x${offline.size}]`.green);
                x++;
                z++;
            }).catch(() => {
                console.clear();
                console.log(`"[Recebeu]: x"${z}\n[Não Recebeu]: x${y}\n[Status]: Offline [x${x}/x${offline.size}]`.red);
                x++;
                y++;
            });
        });

        function YySf() {
            const AAVf = new MessageEmbed()
                .setAuthor("- Mandando div", client.user.avatarURL({
                    "dynamic": true,
                    "format": "png",
                    "size": 1024
                }), "https://discord.gg/bBMmZ6n")
                .setDescription(`> **Mandando div**\n> **Enviou para:**\n\n > **[Recebeu]:** x${z}\n> **[Não Recebeu]:** x${y}\n\n > **Onlines:**${m}/${online.size}\n > **Ocupados:**${v}/${dnd.size}\n > **Ausentes:**: ${b}/${idle.size}\n > **Offline:**${x}/${offline.size}`)
                .setColor(color);
            msg.edit(AAVf);
            const UvMf = new MessageEmbed()
                .setAuthor("- Terminei a div", client.user.avatarURL({
                    "dynamic": true,
                    "format": "png",
                    "size": 1024
                }), "https://discord.gg/bBMmZ6n")
                .setDescription(`> **Terminei de passar**\n> **Enviou para:**\n\n > **[Recebeu]:** x${z}\n> **[Não Recebeu]:** x${y}\n\n > **Onlines:**${m}\n > **Ocupados:**${v}\n > **Ausentes:**: ${b}\n > **Offline:**${x}`)
                .setColor(color);
            var wxPf = 0;
            while (wxPf < 65535) switch (wxPf) {
                case 0:
                    wxPf = x >= offline.size - (1) ? (1) : 65535;
                    break;
                case (1):
                    wxPf = 65535; {
                        clearInterval(timer);
                        msg.edit(UvMf).then(b => b.delete({
                            "timeout": 120000,
                            "reason": "kkj"
                        }));
                        console.clear();
                        console.log(`${"[Recebeu]: x"}${z}\n[Não Recebeu]: x${y}\n\n[Online]:${m}\n[Ocupado]:${v}\n[Ausente]:${b}\n[Offline]:${x}`.yellow)
                    }
                    break;
            }
        }
        YySf();
        timer = setInterval(() => YySf(), 3000);
    });
};

function suJf(a) {
    const date = Date.now();
    let nuL = null;
    var i = 0;
    while (i < 65535) switch (i) {
        case (1):
            i = nuL - date < a ? 0 : 65535;
            break;
        case 0:
            i = 1; {
                nuL = Date.now();
            }
            break;
    }
}