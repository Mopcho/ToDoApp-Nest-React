import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    Query,
} from '@nestjs/common';
import { TodosService } from './todos.service';

// TODO : ValidationPipeLine to filter query
// TODO : Look into CRUD generation https://docs.nestjs.com/recipes/crud-generator
// TODO : Look at https://en.wikipedia.org/wiki/Inversion_of_control
// TODO : https://angular.io/guide/dependency-injection
// TODO : Reread https://docs.nestjs.com/modules

@Controller('todos')
export class TodosController {
    constructor(private todosService: TodosService) {}

    @Get(':id')
    async get(@Param('id') id: string) {
        return await this.todosService.get({ id });
    }

    // TODO : Implement Create, Question : What should my dto be : Custom or it should inherit Prisma.Todos or perhaps something else
}
