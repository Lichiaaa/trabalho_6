import { IMailer } from "../interfaces/IMailer";
import { ILogger } from "../interfaces/ILogger";
import { IReportService } from "../interfaces/IReportService";

class ReportService implements IReportService{
    private logger: ILogger;
    private mailer: IMailer;
    
    constructor(logger: ILogger, mailer: IMailer){
        this.logger = logger;
        this.mailer = mailer;
    }

    generateAndSend(email: string, n: number): void {
        this.logger.info("Iniciando geração do relatório");
        const subject: string;
        const body: string;

        this.mailer.send(email, subject, body);
        this.logger.info("Relatório enviado com sucesso");
    }
}