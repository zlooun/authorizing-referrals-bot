"use strict";





const path = process.env.TYPE_ENV === "docker" ? "./logs/" : "../logs/";
const logsPath = `${path}bot/info/log_`;
const errorsPath = `${path}bot/errors/log_`;
const warnsPath = `${path}bot/warns/log_`;

const handler = () => {

	const date = getDate();

	return {

		transports: [
			new (global.winston.transports.File)({ 
				filename: logsPath + date + ".txt",
				"format": winston.format.combine( 
					winston.format.timestamp(),
					winston.format.printf((log) => {

						if (log.level === "info"){
							return `${log.message.slice(0, log.message.indexOf("- -") - 1)}[INFO] - - [${log.timestamp}] ${log.message.slice(log.message.indexOf("- -") + 4)}`;
						}

						if (log.level === "error") {

							const notification = {
								"type": "error",
								"header": log.message.slice(log.message.indexOf("- -") + 4).match(/\[([^\[\]]*)\]/)[0],
								"description": log.message.slice(log.message.lastIndexOf("- -") + 4),
								"data": `time: ${log.timestamp}`,
							}

							global.handler.notificationErrors(notification);
							return `${log.message.slice(0, log.message.indexOf("- -") - 1)}[ERROR] - - [${log.timestamp}] ${log.message.slice(log.message.indexOf("- -") + 4)}`;
						}

						if (log.level === "warn") {

							const notification = {
								"type": "warn",
								"header": log.message.slice(log.message.indexOf("- -") + 4).match(/\[([^\[\]]*)\]/)[0],
								"description": log.message.slice(log.message.lastIndexOf("- -") + 4),
								"data": `time: ${log.timestamp}`,
							}

							global.handler.notifiсationErrors(notification);
							return `${log.message.slice(0, log.message.indexOf("- -") - 1)}[WARN] - - [${log.timestamp}] ${log.message.slice(log.message.indexOf("- -") + 4)}`;
						}

					})
				)
			}),
			new (global.winston.transports.File)({
				filename: errorsPath + date + ".txt",
				level: "error",
				"format": winston.format.combine( 
					winston.format.timestamp(),
					winston.format.printf((log) => 
					`${log.message.slice(0, log.message.indexOf("- -") - 1)}[ERROR] - - [${log.timestamp}] ${log.message.slice(log.message.indexOf("- -") + 4)}`
					)
				) 
			}),
			new (global.winston.transports.File)({
				filename: warnsPath + date + ".txt",
				level: "warn",
				"format": winston.format.combine( 
					winston.format.timestamp(),
					winston.format((info) => {

						if (info.level === "warn"){
							return info;
						}

						return false;

					})(),
					winston.format.printf((log) => 
					`${log.message.slice(0, log.message.indexOf("- -") - 1)}[WARN] - - [${log.timestamp}] ${log.message.slice(log.message.indexOf("- -") + 4)}`
					)
				) 
			}),
			new (global.winston.transports.Console)({ "format": winston.format.printf((log) => log.message) }),
		]

	};

};




module.exports = handler;




function getDate() {

  const date = new Date();

	let dd = date.getDate();
	if (dd < 10) dd = '0' + dd;

	let mm = date.getMonth() + 1;
	if (mm < 10) mm = '0' + mm;

	let yy = date.getFullYear() % 100;
	if (yy < 10) yy = '0' + yy;

	return dd + '.' + mm + '.' + yy;
}