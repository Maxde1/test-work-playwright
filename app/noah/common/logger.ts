import { createLogger, format, transports } from 'winston';
const { combine, timestamp, printf } = format;

const logFormat = printf(({ level, message, timestamp, stack, ...meta }) => {
    return meta && meta.file && meta.title
        ? `${timestamp} [${meta.file.replace(/^.*[\\\/]/, '')} ~ ${meta.title}] ${level}: ${stack || message} `
        : `${timestamp} ${level}: ${stack || message}`;
});

export const logger = createLogger({
    format: combine(format.colorize(), timestamp({ format: 'YYYY-DD-MM HH-mm' }), format.errors({ stack: true }), logFormat),
    transports: [new transports.Console()],
    silent: process.env.E2E_DISABLE_LOGGING ? JSON.parse(process.env.E2E_DISABLE_LOGGING) : false
});
