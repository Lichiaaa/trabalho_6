import "reflect-metadata";
import "dotenv/config";

import { buildContainer } from "./container/container";
import { TYPES } from "./container/types";
import type { IReportService } from "./domain/interfaces/IReportService";

const container = buildContainer();
const service = container.get<IReportService>(TYPES.ReportService);

service.generateAndSend("teste@teste.com", 2);