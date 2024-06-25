import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentSchema } from 'src/schema/student.schema';
import { StudentController } from './student.controller';
import { DatabaseModule } from 'src/database/database.module';
import { StudentService } from './student.service';

@Module({
  imports:[DatabaseModule, MongooseModule.forFeature([{name:'student', schema:StudentSchema}])
  ],
  controllers: [StudentController],
  providers: [StudentService]
})
export class StudentModule {}
