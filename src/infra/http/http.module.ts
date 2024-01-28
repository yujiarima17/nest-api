import { Module } from "@nestjs/common";
import { CreateAccountController } from "./controllers/create-account.controller";
import { AuthenticateController } from "./controllers/authenticate.controller";
import { CreateQuestionController } from "./controllers/create-question.controller";
import { FetchRecentQuestionsController } from "./controllers/fetch-recent-questions.controller";
import { DatabaseModule } from "../database/database.module";
import { CreateQuestionUseCase } from "@/domain/forum/application/use-cases/create-question";
import { FetchLatestQuestionsUseCase } from "@/domain/forum/application/use-cases/fetch-latest-questions";
import { AuthenticateStudentUseCase } from "@/domain/forum/application/use-cases/authenticate-student";
import { RegisterStudentUseCase } from "@/domain/forum/application/use-cases/register.student";
import { CryptoGraphyModule } from "../cryptography/cryptography.module";

@Module({
	imports: [DatabaseModule, CryptoGraphyModule],
	controllers: [
		CreateAccountController,
		AuthenticateController,
		CreateQuestionController,
		FetchRecentQuestionsController,
	],
	providers: [
		CreateQuestionUseCase,
		FetchLatestQuestionsUseCase,
		AuthenticateStudentUseCase,
		RegisterStudentUseCase,
	],
})
export class HttpModule {}
