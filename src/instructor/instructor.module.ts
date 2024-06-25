import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { InstructorController } from './instructor.controller';
import { InstructorSchema } from 'src/schema/instructor.schema';
import { DatabaseModule } from 'src/database/database.module';
import { InstructorService } from './instructor.service';
@Module({
  imports:[DatabaseModule, MongooseModule.forFeature([{name:'instructor',schema:InstructorSchema}])],
  controllers: [InstructorController],
  providers: [InstructorService],
})
export class InstructorModule {}
