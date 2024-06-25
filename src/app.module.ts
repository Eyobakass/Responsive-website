import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InstructorModule } from './instructor/instructor.module';
import { StudentModule } from './student/student.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [InstructorModule, StudentModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
