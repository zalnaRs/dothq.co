import { Controller, Get } from '@nestjs/common';
import { SController } from 'controller';

@Controller()
export class AppController extends SController {
    @Get()
    get() {
    	return this.services.app.getInfo();
    }
}