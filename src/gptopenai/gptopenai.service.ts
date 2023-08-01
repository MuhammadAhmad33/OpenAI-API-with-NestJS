import { Injectable } from '@nestjs/common';
import { Configuration, OpenAIApi,CreateCompletionRequest} from "openai";
import {gptConstants} from '../constants'

const model_id="text-devinci-003";
const default_temp=0.9;
@Injectable()
export class GptopenaiService {
    private readonly openAiapi:OpenAIApi
    constructor(){
        const configuration = new Configuration({
            organization: gptConstants.organization_ID,
            apiKey: gptConstants.api_key,
        });
        this.openAiapi=new OpenAIApi(configuration);
    }
    async getAnswer(question:string,temperature?:number){
        try {   
            const params:CreateCompletionRequest={
                prompt:question,
                model:model_id,
                temperature:temperature!=undefined?temperature:default_temp,
            }
            const res=await this.openAiapi.createCompletion(params);
            return res.data;
                        
        } catch (error) {
            
        }
    }
}
