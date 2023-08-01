import { Body, Controller, Post } from '@nestjs/common';
import { GptopenaiService } from './gptopenai.service';
import { question } from 'src/dtos/ques.dto';

@Controller('gptopenai')
export class GptopenaiController {
    private gptservice:GptopenaiService

    @Post('/message')
    async getques(@Body()ques:question){
        return this.gptservice.getAnswer(ques.question)
    }
}
