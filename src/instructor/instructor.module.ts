import { Module } from '@nestjs/common';
import { InstructorController } from './instructor.controller';
import { InstructorService } from './instructor.service';
import { MongooseModule } from '@nestjs/mongoose';
import { InstructorSchema } from './instructor.schema';
import { InstructorDTO } from './instructor.dto';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Instructor', schema: InstructorSchema }]),
  ],
  controllers: [InstructorController],
  providers: [InstructorService],
  exports: [InstructorService],
})
export class InstructorModule {}
