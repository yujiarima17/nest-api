import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { envSchema } from "./env/env";
import { AuthModule } from "./auth/auth.module";
import { HttpModule } from "./http/http.module";
import { EnvService } from "./env/env.service";
import { EnvModule } from "./env/env.module";

@Module({
	imports: [
		ConfigModule.forRoot({
			validate: (env) => envSchema.parse(env),
			isGlobal: true,
		}),
		EnvModule,
		AuthModule,
		HttpModule, 
	],
	providers: [EnvService],
})
export class AppModule {}
